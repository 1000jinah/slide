// AddSlideButton.js
import React from "react";
import { Typography } from "@mui/material";

const AddSlideButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        background: "#fff",
        padding: "15px",
        boxSizing: "border-box",
        border: "none",
        cursor: "pointer",
        borderBottom: "1px solid #e2e4e6",
      }}
    >
      <Typography sx={{ color: "#202225", fontSize: "0.785rem" }}>
        Add Slide
      </Typography>
    </div>
  );
};

export default AddSlideButton;
