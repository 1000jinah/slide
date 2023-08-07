import { Box, Typography, Button, Divider } from "@mui/material";
import React from "react";
const RecommendationBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e2e4e6",
        mr: 3,
        "&:last-child": { mr: 0 },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", px: 3, py: 2, pb: 0 }}>
        <Box sx={{ p: 3, backgroundColor: "#c8cacc" }}></Box>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "14px",
            color: "#636973",
            ml: 2,
          }}
        >
          Kelly Wearstler
        </Typography>
      </Box>
      <Box sx={{ px: 3, py: 2 }}>
        <Typography sx={{ fontSize: "12px", color: "#636973" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#c8cacc",
            color: "#636973",
            fontWeight: "bold",
            textTransform: "capitalize",
            p: 0,
          }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default RecommendationBox;
