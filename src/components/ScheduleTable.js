import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import teamDataImport from "../utils/TeamData";

console.log(teamDataImport);

export default function BasicTable() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    setTeamData(teamDataImport);
  }, []);

  console.log("TEAMDATA:", teamData);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ display: "table-header-group" }}>
          <TableRow sx={{}}>
            <TableCell align="center">Matchup</TableCell>
            <TableCell align="left">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teamData.map((team) => (
            <TableRow key={team.name}>
              <TableCell align="" scope="team" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {team.location}
                <Box>
                  <img src={team.logo} width={40} />{" "}
                </Box>
                <div>@</div>
                <Box>
                  <img src={team.logo} width={40} />{" "}
                </Box>
                {team.location}
              </TableCell>
              <TableCell align="left">TEST</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
