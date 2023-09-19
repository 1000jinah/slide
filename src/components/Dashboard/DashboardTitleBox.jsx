import { Box, Typography, Button } from "@mui/material";
import React from "react";

const DashboardTitleBox = ({ titleBoxText, titleBoxButton, titleBoxSub,titleBoxPaddingX,titleBoxButtonVisible}) => {
  return (
    <Box
      sx={{
        px: titleBoxPaddingX,
        display: "flex",
        justifyContent: "space-between",
        mb:2
      }}
    >
      <Box>
        <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
          {titleBoxText}
        </Typography>
        <Typography sx={{ color: "#969899", fontSize: 12 }}>
          {titleBoxSub}
        </Typography>
      </Box>
      <Button
        sx={{
          textTransform: "capitalize",
          color: "#969899",
          textDecoration: "underline",
          visibility:titleBoxButtonVisible}}
      >
        {titleBoxButton}
      </Button>
    </Box>
  );
};

export default DashboardTitleBox;
