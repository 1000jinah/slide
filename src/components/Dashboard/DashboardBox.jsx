import React from "react";
import { Box, Typography, Button } from "@mui/material";
const DashboardBox = ({
  dashboardTitle,
  dashboardDescript,
  dashboardButton,
  dashboardBoxWidth,
  dashboardDescriptMarginBottom,
  dashboardButtonDisplayType,
}) => {
  return (
    <Box sx={{ px: 8 }}>
      <Box
        sx={{
          backgroundColor: "#e2e4e6",
          p: 2,
          my: 6,
          width: dashboardBoxWidth,
        }}
      >
        <Typography
          sx={{
            color: "#636973",
            fontSize: "18px",
            fontWeight: "bold",
            mb: 1.75,
          }}
        >
          {dashboardTitle}
        </Typography>
        <Typography
          sx={{
            color: "#969899",
            fontSize: "12px",
            mb: dashboardDescriptMarginBottom,
          }}
        >
          {dashboardDescript}
        </Typography>
        <Button
          sx={{
            color: "#f3f5f7",
            backgroundColor: "#969899",
            textTransform: "capitalize",
            fontSize: 14,
            px: dashboardButtonDisplayType === "none" ? 0 : 3,
            py: dashboardButtonDisplayType === "none" ? 0 : 1,
            display: dashboardButtonDisplayType === "none" ? "none" : "block",
          }}
        >
          {dashboardButton}
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardBox;
