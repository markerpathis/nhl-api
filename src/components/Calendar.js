import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

const Calendar = ({ defaultDate, onDateSelect }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="Select Date" sx={{ mt: 1 }} defaultValue={dayjs(defaultDate)} onChange={(newValue) => onDateSelect(newValue)} />
      <Typography sx={{ fontStyle: "italic", pt: 1, fontSize: 14 }}>Games will be shown for the next 7 days from your selected date.</Typography>
    </LocalizationProvider>
  );
};

export default Calendar;
