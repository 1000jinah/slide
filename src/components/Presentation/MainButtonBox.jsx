import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const MainButtonBox = ({ MainIconButton, MainIconButtonLabel }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 1,
      }}
    >
      <IconButton>{MainIconButton}</IconButton>
      <Typography sx={{ fontSize: 12, color: "#636973" }}>
        {MainIconButtonLabel}
      </Typography>
    </Box>
  );
};

export default MainButtonBox;
