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

const ScheduleTable = ({ schedule, error }) => {
  const momentFormat = (time) => {
    const gameTime = moment(time).local().format("h:mm A");

    const zoneName = moment.tz.guess();
    const timeZone = moment.tz(zoneName).zoneAbbr();

    const formattedTime = gameTime + " " + timeZone;

    return formattedTime;
  };

  // console.log(schedule);

  return (
    <>
      <TableContainer component={Paper} sx={{ display: "flex", mt: 3 }}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead sx={{ display: "table-header-group" }}>
            <TableRow>
              <TableCell align="left" colSpan={3} sx={{ fontWeight: "bold", fontSize: 22 }}>
                {moment(schedule.date).format("dddd, MMMM Do")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>
                Matchup
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>
                Time
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>
                Result
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {schedule.games.length > 0 &&
              schedule.games.map((game) => (
                <TableRow key={game.gamePk}>
                  <TableCell sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box align="right" sx={{ width: "25%", px: 1, fontWeight: "bold" }}>
                      {TeamMap.find((team) => team.id === game.teams.away.team.id)?.location}
                    </Box>

                    <Box align="center" sx={{ px: 1 }}>
                      <img src={TeamMap.find((team) => team.id === game.teams.away.team.id)?.logo} alt="" width={40} />
                    </Box>

                    <Box align="center" sx={{ width: "5%", px: 0 }}>
                      @
                    </Box>

                    <Box align="center" sx={{ px: 1 }}>
                      <img src={TeamMap.find((team) => team.id === game.teams.home.team.id)?.logo} alt="" width={40} />
                    </Box>

                    <Box align="left" sx={{ width: "25%", px: 1, fontWeight: "bold" }}>
                      {TeamMap.find((team) => team.id === game.teams.home.team.id)?.location}
                    </Box>
                  </TableCell>

                  <TableCell align="center" sx={{ width: "25%" }}>
                    {momentFormat(game.gameDate)}
                  </TableCell>
                  {game.status.abstractGameState === "Live" && (
                    <TableCell align="center" sx={{ width: "25%" }}>
                      Live: {TeamMap.find((team) => team.id === game.teams.away.team.id)?.abbreviation} {game.teams.away.score},{" "}
                      {TeamMap.find((team) => team.id === game.teams.home.team.id)?.abbreviation} {game.teams.home.score}
                    </TableCell>
                  )}
                  {game.status.abstractGameState === "Final" && (
                    <TableCell align="center" sx={{ width: "25%" }}>
                      Final: {TeamMap.find((team) => team.id === game.teams.away.team.id)?.abbreviation} {game.teams.away.score},{" "}
                      {TeamMap.find((team) => team.id === game.teams.home.team.id)?.abbreviation} {game.teams.home.score}
                    </TableCell>
                  )}
                  {game.status.abstractGameState === "Preview" && (
                    <TableCell align="center" sx={{ width: "25%" }}>
                      -
                    </TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ScheduleTable;
