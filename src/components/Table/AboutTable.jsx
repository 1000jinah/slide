import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";

// About Table Props
function createData(location, foundDate, status, round, employees) {
  return { location, foundDate, status, round, employees };
}

// About Table Data
const rows = [
  createData(
    "Unite State of America",
    "Apr 1, 1976",
    "An unlisted company",
    "Series B",
    "12"
  ),
];

export default function AboutTable() {
  return (
    <Table
      sx={{
        display: "flex",
        "& .MuiTableCell-root": {
          lineHeight: 0.875,
          px: 0,

          pr: 1.8,
        },
      }}
    >
      <TableHead>
        <TableRow sx={{ display: "flex", flexDirection: "column" }}>
          <TableCell sx={{ borderBottom: "none" }}>Location :</TableCell>
          <TableCell sx={{ borderBottom: "none" }}>Founded date :</TableCell>
          <TableCell sx={{ borderBottom: "none" }}>Status :</TableCell>
          <TableCell sx={{ borderBottom: "none" }}>Round :</TableCell>
          <TableCell sx={{ borderBottom: "none" }}>Employees :</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TableCell sx={{ borderBottom: "none" }}>{row.location}</TableCell>
            <TableCell sx={{ borderBottom: "none" }}>{row.foundDate}</TableCell>
            <TableCell sx={{ borderBottom: "none" }}>{row.status}</TableCell>
            <TableCell sx={{ borderBottom: "none" }}>{row.round}</TableCell>
            <TableCell sx={{ borderBottom: "none" }}>{row.employees}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
