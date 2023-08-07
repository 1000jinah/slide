import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(date, round, investors, country, investAmount) {
  return { date, round, investors, country, investAmount };
}

const rows = [
  createData("2023.06", "Series B", "Y Combinator", "U.S.", "10M"),
  createData("2023.06", "Series B", "Techstars", "U.S.", "5M"),
  createData(
    "2023.06",
    "Series B",
    "National Science Foundation",
    "U.S.",
    "15M"
  ),
  createData(
    "2023.03",
    "Series A",
    "EASME-EU Excutive Agency for SMEs",
    "Belgium",
    "180M"
  ),
  createData("2023.03", "Series A", "500 Global", "U.S.", "50M"),
  createData("2023.03", "Series A", "Mass Challenge", "U.S.", "240M"),
  createData("2021.11", "Series A", "SOSV", "U.S.", "100M"),
  createData("2019.04", "Pre-A", "New Enterprise Associates", "U.S.", "120M"),
  createData("2019.04", "Pre-A", "Accel", "U.S.", "180M"),
];

export default function InvestorTable() {
  return (
    <Table
      sx={{
        minWidth: 650,
        backgroundColor: "#e2e4e6",
        border: "1px solid #969899",
        color: "#000000",
        my: 3,
        fontSize: "14px",
        "& .MuiTableCell-root": {
          p: 1.2,
        },
      }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            Date
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            Round
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            Investor
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            Country
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            Invest Amount
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.date}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderBottom: "1px solid #969899",
              }}
            >
              {row.date}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderBottom: "1px solid #969899",
              }}
            >
              {row.round}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderBottom: "1px solid #969899",
              }}
            >
              {row.investors}
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "1px solid #969899",
              }}
            >
              {row.country}
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "1px solid #969899",
              }}
            >
              {row.investAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
