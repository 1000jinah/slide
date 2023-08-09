import { Box, Typography, IconButton, Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { Link } from "react-router-dom";
import ViewButton from "components/ViewButton";

const PitchBox = () => {
  return (
    <Box
      sx={{
        width: "23.5%",
        backgroundColor: "#eef0f2",
        p: 1.5,

        ".MuiChip-label": { p: 1 },
      }}
    >
      {/* Title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/detail" style={{ textDecoration: "none", color: "inherit" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                p: 1.5,
                backgroundColor: "#e2e4e6",
                border: "1px solid #c8cacc",
                mr: 1,
              }}
            ></Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
              Builder.ai
            </Typography>
          </Box>
        </Link>
        <IconButton aria-label="add">
          <AddIcon />
        </IconButton>
      </Box>

      {/* Tag */}
      <Box sx={{ mt: 0.5, mb: 3 }}>
        <Chip label="58.7% Match" sx={{ fontSize: "11px" }} />
      </Box>
      {/* Pitch Slider */}
      <Box
        sx={{
          background: "#e2e4e6",
          width: "100%",
          height: "150px",
          // position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
        }}
      >
        <ViewButton />
      </Box>
      {/* Pitch Slider */}
      <Box>
        <Typography sx={{ color: "#636973", fontSize: "11px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore...
        </Typography>
      </Box>
    </Box>
  );
};

export default PitchBox;
