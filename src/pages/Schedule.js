import React, { useState, useEffect } from "react";
import axios from "axios";
import ScheduleTable from "../components/ScheduleTable";
import Calendar from "../components/Calendar";
import TeamSelect from "../components/TeamSelect";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";

var moment = require("moment-timezone");

const Schedule = () => {
  const [schedule, setSchedule] = useState({});

  const defaultDate = moment().format("MM/DD/YYYY");

  const dateChangeHandler = (value) => {
    const newApiStartDate = moment(value.$d).format("YYYY-MM-DD");
    const newApiEndDate = moment(value.$d).add(6, "d").format("YYYY-MM-DD");
    getSchedule("https://statsapi.web.nhl.com/api/v1/schedule?startDate=" + newApiStartDate + "&endDate=" + newApiEndDate);
  };

  const getSchedule = (apiUrl) => {
    axios
      .get(apiUrl)
      .then((data) => {
        setSchedule(data.data.dates);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const dateApiStartDefault = moment().format("YYYY-MM-DD");
    const dateApiEndDefault = moment().add(6, "d").format("YYYY-MM-DD");
    getSchedule("https://statsapi.web.nhl.com/api/v1/schedule?startDate=" + dateApiStartDefault + "&endDate=" + dateApiEndDefault);
  }, []);

  return (
    <Container sx={{ bgcolor: "background.paper", margin: "auto", width: "80%", my: "24px", px: "16px", pb: "16px", borderRadius: "10px" }}>
      <Typography sx={{ fontWeight: 900, fontSize: 33, pt: 2 }}>NHL Schedule</Typography>
      <FormControl sx={{ mt: 2, pr: 1 }}>
        <Calendar defaultDate={defaultDate} onDateSelect={dateChangeHandler} />
      </FormControl>
      <FormControl sx={{ mt: 2, pr: 1 }}>
        <TeamSelect />
      </FormControl>
      <Typography sx={{ fontStyle: "italic", pt: 1, fontSize: 14 }}>Games will be shown for the next 7 days from your selected date.</Typography>

      {schedule.length > 0 && schedule.map((gameDate) => <ScheduleTable key={gameDate.date} schedule={gameDate} />)}
    </Container>
  );
};

export default Schedule;
