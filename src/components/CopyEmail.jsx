import React from "react";
import { Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import CopyAllIcon from "@mui/icons-material/CopyAll";

const CopyEmailButton = ({ copyEmailLink }) => {
  // Function to copy the email to the clipboard
  const copyEmail = () => {
    const email = copyEmailLink;
    navigator.clipboard.writeText(email);
  };

  return (
    <Button
      sx={{ textTransform: "none", color: "#636973" }}
      onClick={copyEmail}
      startIcon={<MailIcon sx={{ width:"16px",color: "#c8cacc" }} />}
      endIcon={<CopyAllIcon sx={{ width:"16px",color: "#c8cacc" }} />}
    >
      {copyEmailLink}
    </Button>
  );
};

export default CopyEmailButton;
