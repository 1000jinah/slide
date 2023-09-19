import { Box, Typography, Button, Divider, IconButton } from "@mui/material";
import React from "react";
import { ReactComponent as Exit } from "assets/img/btn_exit.svg";
const RecommendationBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e2e4e6",
        mr: 3,
        "&:last-child": { mr: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 3,
          py: 2,
          pb: 0,
          position: "relative",
        }}
      >
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
        <IconButton sx={{ position: "absolute", right: 12, top: 8 }}>
          <Exit width={15} height={15} />
        </IconButton>
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
            ":hover": {
              backgroundColor: "#c8cacc",
              color: "#636973",
            },
          }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default RecommendationBox;
