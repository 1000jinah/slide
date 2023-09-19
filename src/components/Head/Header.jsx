import React from "react";
import { Box, IconButton, FormControl, Select, MenuItem } from "@mui/material";
import { ReactComponent as Notifications} from "assets/img/icon_notification_fill.svg";
import { ReactComponent as SettingsIcon} from "assets/img/icon_setiing.svg";
import { ReactComponent as PersonIcon} from "assets/img/icon_person.svg";
import LogoIcon from "assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = ({ initialValue }) => {
  const [age, setAge] = React.useState(initialValue);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setAge(selectedValue);
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
              <MenuItem value={10}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Investor
                </Link>
              </MenuItem>

              <MenuItem value={20}>
                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Company
                </Link>
              </MenuItem>
            </Select>
          </FormControl>
          <IconButton sx={{mx:1.2}} aria-label="notification">
            <Notifications />
          </IconButton>
          <IconButton sx={{mx:1.2}} aria-label="settings">
            <SettingsIcon />
          </IconButton>
          <IconButton sx={{mx:1.2}} aria-label="profile">
            <PersonIcon />
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default Header;
