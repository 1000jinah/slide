import React from "react";
import { Box, IconButton, FormControl, Select, MenuItem } from "@mui/material";
import Notifications from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoIcon from "assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#e2e4e6",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 20px",
        }}
      >
        <Link to="/">
          <img src={LogoIcon} alt="Logo" />
        </Link>

        <Box
          sx={{
            ".MuiOutlinedInput-notchedOutline": {
              border: "transparent",
            },
            ".MuiOutlinedInput-input": {
              p: 0,
            },
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              sx={{ color: "#636973" }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={10}>Investor</MenuItem>
              <MenuItem value={20}>Company</MenuItem>
            </Select>
            {/* <FormHelperText>Without label</FormHelperText> */}
          </FormControl>
          <IconButton aria-label="notification">
            <Notifications />
          </IconButton>
          <IconButton aria-label="settings">
            <SettingsIcon />
          </IconButton>
          <IconButton aria-label="profile">
            <PersonIcon />
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default Header;
