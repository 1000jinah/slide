import { Box, Typography } from "@mui/material";
import React from "react";
const ViewForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e2e4e6",
        py: 3,
        mb: 3,
        "&:last-child": { mr: 0 },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Box sx={{ p: 3, backgroundColor: "#c8cacc" }}></Box>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "#636973",
              ml: 2,
            }}
          >
            Apple Inc
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "auto",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "12px",
                color: "#636973",
                mb: 1,
              }}
            >
              'Already explored' - Apple Vision Pro fails to impress Mark
              Zuckerberg
            </Typography>
            <Typography sx={{ fontSize: "11px", color: "#636973", mb: 2 }}>
              By Cointelegraph Jun 10, 2023
            </Typography>
            <Typography
              sx={{ color: "#636973", fontSize: "12px", lineHeight: 1.8 }}
            >
              As Meta struggles to lead the way in virtual and augmented
              reality, Apple’s recent entry into the market has generated
              curiosity
              <br /> and apprehension. With the official announcement of its
              Vision...
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
            }}
          >
            <Box
              sx={{
                width: "180px",
                height: "100px",
                backgroundColor: "#c8cacc",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ViewForm;
