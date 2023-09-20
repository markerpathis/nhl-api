import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import TeamMap from "../utils/TeamMap";

var moment = require("moment-timezone");

const ScheduleTable = ({ schedule }) => {
  const momentFormat = (time) => {
    const gameTime = moment(time).local().format("h:mm A");

    const zoneName = moment.tz.guess();
    const timeZone = moment.tz(zoneName).zoneAbbr();

    const formattedTime = gameTime + " " + timeZone;

    return formattedTime;
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ display: "table-header-group" }}>
          <TableRow>
            <TableCell align="center">Matchup</TableCell>

            <TableCell align="center">Time</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {schedule.length > 0 &&
            schedule.map((game) => (
              <TableRow key={game.gamePk}>
                <TableCell sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Box align="right" sx={{ width: 75, px: 1 }}>
                    {TeamMap[game.teams.away.team.id]?.location}
                  </Box>

                  <Box align="center" sx={{ width: 40, px: 1 }}>
                    <img src={TeamMap[game.teams.away.team.id]?.logo} alt="" width={40} />
                  </Box>

                  <Box align="center" sx={{ width: 10, px: 1 }}>
                    @
                  </Box>

                  <Box align="center" sx={{ width: 40, px: 1 }}>
                    <img src={TeamMap[game.teams.home.team.id]?.logo} alt="" width={40} />
                  </Box>

                  <Box align="left" sx={{ width: 75, px: 1 }}>
                    {TeamMap[game.teams.home.team.id]?.location}
                  </Box>
                </TableCell>

                <TableCell align="center">{momentFormat(game.gameDate)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;
