import React, { useState, useEffect } from "react";
import axios from "axios";
import ScheduleTable from "../components/ScheduleTable";
import Calendar from "../components/Calendar";
import TeamSelect from "../components/TeamSelect";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import SkeletonTable from "../components/SkeletonTable";

var moment = require("moment-timezone");

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [apiTeamId, setApiTeamId] = useState();
  const defaultDate = moment().format("MM/DD/YYYY");
  const [isLoading, setLoading] = useState(false);

  const dateChangeHandler = (value) => {
    const newApiStartDate = moment(value.$d).format("YYYY-MM-DD");

    let teamString = "";
    if (apiTeamId) {
      teamString = `&teamId=${apiTeamId}`;
    }

    getSchedule(`api/schedule/${newApiStartDate}`);
  };

  const teamChangeHandler = (value) => {
    let teamString = ``;

    if (value > 0) {
      teamString = `&teamId=${value}`;
    }

    setApiTeamId(value);
  };

  const getSchedule = (apiUrl) => {
    // console.log(apiUrl);
    setLoading(true);

    axios
      .get(apiUrl)
      .then((data) => {
        setSchedule(data.data.gameWeek);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    // const dateApiStartDefault = moment().format("YYYY-MM-DD");
    // const dateApiEndDefault = moment().add(6, "d").format("YYYY-MM-DD");
    getSchedule("/api/schedule");
  }, []);

  return (
    <Container
      sx={{
        bgcolor: "background.paper",
        margin: "auto",
        width: "90%",
        my: "24px",
        px: "16px",
        pb: "16px",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ fontWeight: 900, fontSize: 33, pt: 2 }}>
        NHL Schedule
      </Typography>

      <FormControl sx={{ mt: 2, pr: 1 }}>
        <Calendar defaultDate={defaultDate} onDateSelect={dateChangeHandler} />
      </FormControl>

      <FormControl sx={{ mt: 2, pr: 1 }}>
        <TeamSelect onTeamSelect={teamChangeHandler} />
      </FormControl>

      <Typography sx={{ fontStyle: "italic", pt: 1, fontSize: 14 }}>
        Games will be shown for the next 7 days from your selected date.
      </Typography>
      {isLoading === true && <SkeletonTable isLoading={isLoading} />}
      {schedule.length > 0 &&
        isLoading === false &&
        schedule.map((gameDate) => (
          <ScheduleTable
            key={gameDate.date}
            schedule={gameDate}
            apiTeamId={apiTeamId}
            isLoading={isLoading}
          />
        ))}
      {schedule.length === 0 && isLoading === false && (
        <Typography sx={{ fontStyle: "italic", pt: 1, fontSize: 14 }}>
          No games are scheduled on your selected date.
        </Typography>
      )}
    </Container>
  );
};

export default Schedule;
