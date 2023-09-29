import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import TeamMap from "../utils/TeamMap";

const TeamSelect = ({}) => {
  const [team, setTeam] = useState("");

  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Team</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={team} label="Teams" onChange={handleChange}></Select>
      </FormControl>
    </Box>
  );
};

export default TeamSelect;
