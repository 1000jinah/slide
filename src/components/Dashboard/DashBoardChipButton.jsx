import { Box, Chip } from "@mui/material";
import React, { useState } from "react";

const DashBoardChipButton = ({dashboardChipBoxMarginTop}) => {
  const [selectedChipIndex, setSelectedChipIndex] = useState(0); // 선택된 Chip의 인덱스

  const chipLabels = [
    "All",
    "Recommendation",
    "Pitch Deck",
    "Startups",
    "Marketing",
    "Business",
    "Academic",
    "Creative",
    "Report",
    "Simple",
    "Modern",
    "Proposal",
  ];

  const handleClick = (index) => {
    setSelectedChipIndex(index);
  };
  //
  return (
    <Box
      sx={{
        display: "flex",
        mx: 8,
        mt: dashboardChipBoxMarginTop,
        mb: 3,
        p: 2,
        widht: "100%",
        overflowX: "auto",
        backgroundColor: "#f3f5f7",
        ".MuiChip-filled": {
          backgroundColor: "#afb1b3",
          color: "#eef0f2",
        },
      }}
    >
      {chipLabels.map((label, index) => (
        <Chip
          sx={{ mr: 1, px: 1.5 }}
          key={index}
          label={label}
          variant={selectedChipIndex === index ? "filled" : "outlined"}
          onClick={() => handleClick(index)}
        />
      ))}
    </Box>
  );
};

export default DashBoardChipButton;
