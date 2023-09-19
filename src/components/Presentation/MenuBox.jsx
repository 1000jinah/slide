import * as React from "react";
import { Box, MenuItem, Menu, Button } from "@mui/material";

export default function MenuBox({
  pptMenuBoxTitle,
  pptMenuBoxOptions,
  pptMenuBoxStartIcon,
  pptMenuBoxEndClose,
  pptMenuBoxEndOpen,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        sx={{
          textTransform: "capitalize",
          color: "#636973",
          fontSize: "0.78rem",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={pptMenuBoxStartIcon}
        endIcon={open ? pptMenuBoxEndOpen : pptMenuBoxEndClose}
      >
        {pptMenuBoxTitle}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {pptMenuBoxOptions.map((option, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
