import React, { useState, useEffect } from "react";
import axios from "axios";
import ScheduleTable from "../components/ScheduleTable";
import Calendar from "../components/Calendar";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

const Schedule = () => {
  const [schedule, setSchedule] = useState({});

  const getSchedule = () => {
    // starting just with the Kraken (teamId=55)
    // const schduleApiUrl = "https://statsapi.web.nhl.com/api/v1/schedule?teamId=55&startDate=2023-09-01&endDate=2025-01-01";
    const schduleApiUrl = "https://statsapi.web.nhl.com/api/v1/schedule?startDate=2023-09-25&endDate=2023-09-26";
    axios
      .get(schduleApiUrl)
      .then((data) => {
        setSchedule(data.data.dates);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <Container sx={{ margin: "auto", width: "80%", mt: 4 }}>
      <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>Schedule</Typography>
      <Calendar />
      {schedule.length > 0 && schedule.map((gameDate) => <ScheduleTable key={gameDate.date} schedule={gameDate} />)}
    </Container>
  );
};

export default Schedule;
