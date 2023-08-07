import { Typography, Chip, Box } from "@mui/material";
import React from "react";

const Industries = () => {
  return (
    <div style={{ backgroundColor: "#e2e4e6", marginBottom: 30 }}>
      <Box sx={{ p: 2.5 }}>
        <Typography sx={{ fontWeight: "bold", color: "#636973", mb: 2 }}>
          Recommended Industries
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Chip
            label="Finance"
            component="a"
            href="#basic-chip"
            variant="filled"
            sx={{ mr: 2, mb: 2, color: "#636973" }}
            clickable
          />
          <Chip
            label="Roboadvisor"
            component="a"
            href="#basic-chip"
            variant="filled"
            sx={{ mr: 2, mb: 2, color: "#636973" }}
            clickable
          />
          <Chip
            label="Chemical"
            component="a"
            href="#basic-chip"
            variant="filled"
            sx={{ mr: 2, mb: 2, color: "#636973" }}
            clickable
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Chip
            label="Ecommerce"
            component="a"
            href="#basic-chip"
            variant="filled"
            sx={{ mr: 2, mb: 2, color: "#636973" }}
            clickable
          />
          <Chip
            label="Energy"
            component="a"
            href="#basic-chip"
            variant="filled"
            sx={{ mr: 2, mb: 2, color: "#636973" }}
            clickable
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Chip
            label="Manufacturing"
            component="a"
            href="#basic-chip"
            variant="filled"
            sx={{ mr: 2, mb: 2, color: "#636973" }}
            clickable
          />
          <Chip
            label="Robotics"
            component="a"
            href="#basic-chip"
            variant="filled"
            sx={{ mr: 2, mb: 2, color: "#636973" }}
            clickable
          />
          <Chip
            label="Art"
            component="a"
            href="#basic-chip"
            variant="filled"
            sx={{ mr: 2, mb: 2, color: "#636973" }}
            clickable
          />
        </Box>
      </Box>
    </div>
  );
};

export default Industries;
