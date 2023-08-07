import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import { Chip } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories: Array.isArray(calories) ? calories : [calories],
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData(
    "European Bank for Reconstruct",
    ["Banking", "Finance", "Financial Services", "Venture Capital"],
    "Dec 2, 2020",
    8,
    "European Bank for Reconstruction and Development is an investing firm."
  ),
  createData(
    "Builder.ai",
    [
      "Artificial Intelligence",
      "Developer Tools",
      "Machine Learning",
      "Software",
      "Software Engineering",
    ],
    "Jun 18, 2021",
    13,
    "European Bank for Reconstruction and Development is an investing firm."
  ),
  createData(
    "Paypal",
    [
      "E-Commerce Platforms",
      "FinTech",
      "Mobile Payments",
      "Transaction Processing",
    ],
    "May 26, 2021",
    5,
    "European Bank for Reconstruction and Development is an investing firm."
  ),
  createData(
    "Naver",
    ["Internet of Things", "Online Portals", "Search Engine"],
    "Nov 1, 2018",
    24,
    "European Bank for Reconstruction and Development is an investing firm."
  ),
  createData(
    "Walmart",
    ["E-Commerce", "Grocery", "Retail", "Retail Technology", "Shopping"],
    "Feb 23, 2020",
    16,
    "European Bank for Reconstruction and Development is an investing firm."
  ),
  createData(
    "Apple",
    [
      "Consumer Electronics",
      "Hardware",
      "Mobile Devices",
      "Operating Systems",
      "  Wearables",
    ],
    "Apr 1, 1976",
    801,
    "European Bank for Reconstruction and Development is an investing firm."
  ),
  createData(
    "OpenAI",
    [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Software",
    ],
    "Dec 11, 2015",
    32,
    "European Bank for Reconstruction and Development is an investing firm."
  ),
  createData(
    "Samsung Electronics",
    [
      "Consumer Electronics",
      "Electronics",
      "Manufacturing",
      "Mobile",
      "Mobile Devices",
    ],
    "Feb 12, 1969",
    3,
    "European Bank for Reconstruction and Development is an investing firm."
  ),
  createData(
    "Uber",
    [
      "Logistics",
      "Mobile Apps",
      "Public Transportation",
      "Ride Sharing",
      "Software",
    ],
    "Mar 2009",
    3,
    "European Bank for Reconstruction and Development is an investing firm."
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Ormanization Name",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Industries",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Founded Date",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Number of Employees",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Description",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
      sx={{
        "& .MuiTableSortLabel-root": {
          borderRight: "none",
        },
      }}
    >
      <TableRow
        sx={{ backgroundColor: "#e2e4e6", borderBottom: `1px solid #969899` }}
      >
        <TableCell
          padding="checkbox"
          sx={{ borderRight: `1px solid #969899`, p: 0 }}
        >
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            sx={{ borderRight: `1px solid #969899`, padding: "0 0 0 15px" }}
            key={headCell.id}
            align={"left"}
            padding={"normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              sx={{
                fontWeight: "bold",
                borderRight: `1px solid #969899`,
                width: "19.5%",
              }}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {/* {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null} */}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const borderColor = "#969899";

  const tableCellStyles = {
    borderRight: `1px solid ${borderColor}`,
    width: "19.5%",
    maxWidth: "200px",
    fontSize: "13px",
    overflowX: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box
      sx={{
        width: "100%",
        "& .MuiPaper-root": {
          borderRadius: 0,
          boxShadow: 0,
        },
        "& .MuiTableCell-root": {
          borderBottom: `1px solid ${borderColor}`,
          // p: 0,
        },
        "& .MuiTableSortLabel-root": {
          whiteSpace: "nowrap",
        },
      }}
    >
      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750, border: `1px solid ${borderColor}` }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                    sx={{
                      cursor: "pointer",
                      borderBottom: `1px solid ${borderColor}`,
                      backgroundColor: index % 2 === 1 ? "#e2e4e6" : "#f3f5f7", // Apply background color to even rows
                    }}
                  >
                    <TableCell
                      padding="checkbox"
                      sx={{
                        borderRight: `1px solid ${borderColor}`,
                        p: 0,
                        textAlign: "centerF",
                      }}
                    >
                      <Checkbox
                        color="primary"
                        sx={{
                          opacity: 1,
                        }}
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        padding: "0 0 0 15px",
                        borderRight: `1px solid ${borderColor}`,
                        width: "19.5%",
                        fontSize: "13px",
                      }}
                      component="th"
                      id={labelId}
                      scope="row"
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{ p: 1.2, border: "1px solid #c8cacc", mr: 1 }}
                        ></Box>
                        <Box>{row.name}</Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        ...tableCellStyles,
                        padding: "0 0 0 15px",
                        width: "19.5%",

                        fontSize: "13px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                      align="left"
                    >
                      <Box
                        className={"industires"}
                        sx={{
                          display: "flex",
                          maxWidth: "100%",
                          overflowX: "auto",
                          overflowY: "clip",
                          paddingRight: "4px",
                        }}
                      >
                        {row.calories.map((industry, index) => (
                          <Chip
                            key={index}
                            label={industry}
                            sx={{
                              marginRight: "4px",
                              marginBottom: "4px",
                              fontSize: "11px",
                              lineHeight: "1",
                            }}
                            size="small"
                          />
                        ))}
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: `1px solid ${borderColor}`,
                        padding: "0 15px 0 0",
                        width: "19.5%",
                        fontSize: "13px",
                      }}
                      align="right"
                    >
                      {row.fat}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: `1px solid ${borderColor}`,
                        padding: "0 15px 0 0",
                        width: "19.5%",
                        fontSize: "13px",
                      }}
                      align="right"
                    >
                      {row.carbs}
                    </TableCell>
                    <TableCell
                      sx={{
                        width: "19.5%",
                        fontSize: "11px",
                        padding: "0 0 0 15px",
                      }}
                      align="left"
                    >
                      {row.protein}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
