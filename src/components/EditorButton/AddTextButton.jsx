// AddTextButton.js
import React from "react";
import { Button } from "@mui/material";

const AddTextButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="primary"
      sx={{ textTransform: "capitalize", mr: 2 }}
    >
      Add Text
    </Button>
  );
};

export default AddTextButton;
