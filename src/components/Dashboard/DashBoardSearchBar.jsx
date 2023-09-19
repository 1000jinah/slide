import { Box, FormControl, Input, InputAdornment } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const DashBoardSearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        mx: 8,
        mt: 2,
        mb: 3,
        p: 2,

        backgroundColor: "#f3f5f7",

        ".MuiInput-root:before": {
          borderBottom: "none",
        },
        ".MuiInput-root:after": {
          borderBottom: "none",
        },
        ".MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
          borderBottom: "none",
        },
      }}
    >
      <FormControl variant="standard" sx={{ width: "100%" }}>
        <Input
          placeholder="Search..."
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default DashBoardSearchBar;
