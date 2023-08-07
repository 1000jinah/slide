import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(type, date1, date2, date3, date4, date5, date6) {
  return { type, date1, date2, date3, date4, date5, date6 };
}

const rows = [
  createData("Traffic", "68.7M", "83.4M", "80.3M", "75M", "60.9M", "64.3M"),
  createData("MOM", "-27.5%", "21.4%", "-3.6%", "-6.6%", "-18.8%", "5.6%"),
];

export default function TrafficTable() {
  return (
    <Table
      sx={{
        minWidth: 650,
        backgroundColor: "#e2e4e6",
        border: "1px solid #969899",
        color: "#000000",
        fontSize:"14px",
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
            Component
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            2022-12
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            2023-01
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            2023-02
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            2023-03
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            2023-04
          </TableCell>
          <TableCell
            sx={{
              borderBottom: "1px solid #969899",
              borderRight: "1px solid #969899",
            }}
          >
            2023-05
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
              align="right"
            >
              {row.date1}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderBottom: "1px solid #969899",
              }}
              align="right"
            >
              {row.date2}
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "1px solid #969899",
              }}
              align="right"
            >
              {" "}
              {row.date3}
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "1px solid #969899",
              }}
              align="right"
            >
              {" "}
              {row.date4}
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "1px solid #969899",
              }}
              align="right"
            >
              {" "}
              {row.date5}
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "1px solid #969899",
              }}
              align="right"
            >
              {" "}
              {row.date6}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
