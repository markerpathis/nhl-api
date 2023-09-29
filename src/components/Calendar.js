import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const Calendar = ({ defaultDate, onDateSelect }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker name="datePicker" label="Select Date" defaultValue={dayjs(defaultDate)} onChange={(newValue) => onDateSelect(newValue)} />
    </LocalizationProvider>
  );
};

export default Calendar;
