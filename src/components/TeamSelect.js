import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TeamMap from "../utils/TeamMap";

const TeamSelect = ({ onTeamSelect }) => {
  const [team, setTeam] = useState("");

  const handleChange = (event) => {
    onTeamSelect(event.target.value);
    setTeam(event.target.value);
  };

  const sortedTeams = TeamMap.sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0));

  return (
    <Box sx={{ minWidth: 230 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Team</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={team} label="Select Team" onChange={handleChange}>
          {sortedTeams.length > 0 &&
            sortedTeams.map((team) => (
              <MenuItem key={team.id} value={team.id}>
                {team.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TeamSelect;
