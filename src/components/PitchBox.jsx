import { Box, Typography, IconButton, Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { Link } from "react-router-dom";
import ViewButton from "components/ViewButton";
import { ReactComponent as ArrowLeft } from "assets/img/btn_arrow_left_gray_small.svg";

import { ReactComponent as ArrowRight } from "assets/img/btn_arrow_right_gray_small.svg";
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
        <IconButton
          aria-label="add"
          sx={{
            padding: "5px",
            backgroundColor: "#e2e4e6",
            ":hover": {
              backgroundColor: "#e2e4e6",
            },
          }}
        >
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
          position: "relative",
          background: "#e2e4e6",
          width: "100%",
          height: "150px",
          // position: "relative",

          mb: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            top: "50%",
            mt:"-14px",
            width: "100%",
            px: 2,
          }}
        >
          <IconButton sx={{ backgroundColor: "#c8cacc" }}>
            <ArrowLeft width={12} height={12} />
          </IconButton>
          <ViewButton />
          <IconButton sx={{ backgroundColor: "#c8cacc" }}>
            <ArrowRight width={12} height={12} />
          </IconButton>
        </Box>
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
