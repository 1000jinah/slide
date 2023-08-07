import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(type, date1, date2, date3) {
  return { type, date1, date2, date3 };
}

const rows = [
  createData("Compaq", "VP, Corporate Maaterials", "1997", "1998"),
  createData(
    "Intelligent Electronics",
    "Senior Vice President Fulfilment & Chief Operating Officer of the Reseller Division",
    "1994 ",
    "1997"
  ),
  createData("IBM", "Director, North American Fulfillment", "1983 ", "1994"),
];

export default function JobsTable() {
  return (
    <Table
      sx={{
        minWidth: 650,
        backgroundColor: "#e2e4e6",
        border: "1px solid #969899",
        color: "#000000",
        fontSize: "14px",
        "& .MuiTableCell-root": {
          p: 1.2,
          width: "100px",
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
            Organization Name
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            Title at Company
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            Start Date
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            End Date
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.type}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderBottom: "1px solid #969899",
              }}
            >
              {row.type}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderBottom: "1px solid #969899",
              }}
            >
              {row.date1}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderBottom: "1px solid #969899",
              }}
            >
              {row.date2}
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "1px solid #969899",
              }}
            >
              {" "}
              {row.date3}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
