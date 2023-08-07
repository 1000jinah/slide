import {
  Table,
  Typography,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@mui/material";
import React from "react";
function createData(index, name) {
  return { index, name };
}

const rows = [
  createData("1.", "OpenAI"),
  createData("2.", "EBY"),
  createData("3.", "Yumble"),
  createData("4.", "JD Logistics"),
  createData("5.", "instacar"),
  createData("6.", "Shein"),
  createData("7.", "5min Media"),
  createData("8.", "Cohere"),
  createData("9.", "Equivia Partners"),
  createData("10.", "Hwabao WP Fund Man..."),
];
const TopStartUps = () => {
  return (
    <div style={{ backgroundColor: "#e2e4e6", marginBottom: 20, padding: 20 }}>
      <Typography sx={{ fontWeight: "bold", color: "#636973" }}>
        Top Start Ups
      </Typography>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ p: 0 }}>
                {row.index}
              </TableCell>
              <TableCell
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "11px",
                  color: "#636973",
                }}
              >
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    mr: 1,
                    backgroundColor: "#c8cacc",
                  }}
                ></Box>
                {row.name}
              </TableCell>
              <TableCell sx={{ p: 0 }}>Add</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TopStartUps;
