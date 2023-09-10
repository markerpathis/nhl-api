import React, { useState, useEffect } from "react";
import axios from "axios";


const Schedule = () => {
  const [schedule, setSchedule] = useState({});

  const getSchedule = () => {
    // starting just with the Kraken (teamId=55)
    const schduleApiUrl = "https://statsapi.web.nhl.com/api/v1/schedule?teamId=55&startDate=2023-09-01&endDate=2025-01-01";
    axios
      .get(schduleApiUrl)
      .then((data) => {
        setSchedule(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSchedule();
  }, []);

  console.log(schedule);

  return <div>Schedule</div>;
};

export default Schedule;
