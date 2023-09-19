import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

const theme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 8,
        },
        thumb: {
          boxShadow: "none",
          color: "#fff",
        },
        track: {
          borderRadius: 10,
          opacity: "1 !important",
          backgroundColor: `${orange[500]} !important`,
        },
        switchBase: {
          "&$checked": {
            transform: "translateX(14px)",
            color: "#fff",
            "& + $track": {
              opacity: "1 !important",
            },
          },
        },
      },
    },
  },
});

const PresentationSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ color: "#636973", fontSize: "0.78rem" }}>
          Slide Number
        </Typography>
        <Switch checked={checked} onChange={handleChange} />
      </Box>
    </ThemeProvider>
  );
};

export default PresentationSwitch;
