import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import TableDateHeader from "./TableDateHeader";
import GameMatchupCell from "./GameMatchupCell";
import GameTimeCell from "./GameTimeCell";
import GameResultCell from "./GameResultCell";

const ScheduleTable = ({ schedule, apiTeamId }) => {
  // Table row backgrounds will alternate grey and white
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [scheduleList, setScheduleList] = useState(schedule.games);

  let newFilteredList = scheduleList.filter((game) => {
    return apiTeamId === undefined || apiTeamId === "0" ? game : game.awayTeam.id === apiTeamId || game.homeTeam.id === apiTeamId;
  });

  return (
    <>
      <TableContainer component={Paper} sx={{ display: "flex", mt: 3 }}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          {newFilteredList.length > 0 && (
            <TableHead sx={{ display: "table-header-group" }}>
              <TableRow>
                <TableCell align="left" colSpan={3} sx={{ fontWeight: "bold", fontSize: 22 }}>
                  {/* TABLE DATE HEADER */}
                  <TableDateHeader schedule={schedule} />
                </TableCell>
              </TableRow>
              <TableRow>
                {/* ONLY MATCHUP COLUMN HEADER WILL BE SHOWN UNTIL 710PX WIDE */}
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>
                  Matchup
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18, "@media screen and (max-width: 710px)": { display: "none" } }}>
                  Time
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18, "@media screen and (max-width: 710px)": { display: "none" } }}>
                  Result
                </TableCell>
              </TableRow>
            </TableHead>
          )}

          <TableBody>
            {newFilteredList.length > 0 &&
              schedule.games
                .filter((game) => {
                  return apiTeamId === undefined || apiTeamId === "0" ? game : game.awayTeam.id === apiTeamId || game.homeTeam.id === apiTeamId;
                })
                .map((game) => (
                  <StyledTableRow key={game.id}>
                    {/* MATCHUP */}
                    <TableCell sx={{ display: "flex", alignItems: "center", justifyContent: "center", "@media screen and (max-width: 710px)": { display: "none" } }}>
                      <GameMatchupCell game={game} />
                    </TableCell>

                    {/* GAME TIME */}
                    <TableCell align="center" sx={{ width: "25%", "@media screen and (max-width: 710px)": { display: "none" } }}>
                      <GameTimeCell game={game} />
                    </TableCell>

                    {/* GAME RESULT */}
                    <TableCell align="center" sx={{ width: "25%", "@media screen and (max-width: 710px)": { display: "none" } }}>
                      <GameResultCell game={game} />
                    </TableCell>

                    {/* FOR MOBILE ONLY - TO SHOW ALL CONENTS IN SINGLE COLUMN / CELL */}
                    <TableCell align="center" sx={{ alignItems: "center", justifyContent: "center", "@media screen and (min-width: 710px)": { display: "none" } }}>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <GameMatchupCell game={game} />
                      </Box>

                      <GameTimeCell game={game} />
                      <GameResultCell game={game} />
                    </TableCell>
                  </StyledTableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ScheduleTable;
