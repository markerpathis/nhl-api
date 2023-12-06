import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SkeletonComp from "./SkeletonComp";

const SkeletonTable = ({ isLoading }) => {
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

  const skeletons = [1, 2, 3, 4];

  return (
    <>
      <TableContainer component={Paper} sx={{ display: "flex", mt: 3 }}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          {isLoading && (
            <TableHead sx={{ display: "table-header-group" }}>
              <TableRow>
                <TableCell align="left" colSpan={3} sx={{ fontWeight: "bold", fontSize: 22 }}>
                  {/* TABLE DATE HEADER */}
                  <SkeletonComp />
                </TableCell>
              </TableRow>
              <TableRow>
                {/* ONLY MATCHUP COLUMN HEADER WILL BE SHOWN UNTIL 710PX WIDE */}
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>
                  <SkeletonComp />
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18, "@media screen and (max-width: 710px)": { display: "none" } }}>
                  <SkeletonComp />
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18, "@media screen and (max-width: 710px)": { display: "none" } }}>
                  <SkeletonComp />
                </TableCell>
              </TableRow>
            </TableHead>
          )}

          <TableBody>
            {isLoading === true &&
              skeletons.map((skeleton) => (
                <StyledTableRow key={skeleton}>
                  {/* MATCHUP */}
                  <TableCell sx={{ "@media screen and (max-width: 710px)": { display: "none" } }}>
                    <SkeletonComp />
                  </TableCell>

                  {/* GAME TIME */}
                  <TableCell align="center" sx={{ width: "25%", "@media screen and (max-width: 710px)": { display: "none" } }}>
                    <SkeletonComp />
                  </TableCell>

                  {/* GAME RESULT */}
                  <TableCell sx={{ width: "25%", "@media screen and (max-width: 710px)": { display: "none" } }}>
                    <SkeletonComp />
                  </TableCell>

                  {/* FOR MOBILE ONLY - TO SHOW ALL CONENTS IN SINGLE COLUMN / CELL */}
                  <TableCell align="center" sx={{ "@media screen and (min-width: 710px)": { display: "none" } }}>
                    <SkeletonComp />
                  </TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SkeletonTable;
