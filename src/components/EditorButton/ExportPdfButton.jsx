import React from "react";
import { Button } from "@mui/material";

const ExportPdfButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="error"
      sx={{ textTransform: "capitalize", mr: 2 }}
    >
      Export As PDF
    </Button>
  );
};

export default ExportPdfButton;
