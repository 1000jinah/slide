import React, { useState } from "react";
import { Box, IconButton, Button, Typography } from "@mui/material";
import { ZoomIn as ZoomInIcon } from "@mui/icons-material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddIcon from "@mui/icons-material/Add";
import DashboardTitleBox from "components/Dashboard/DashboardTitleBox";
const PresentationSlide = () => {
  const presentations = [
    // Each presentation object with its properties

    {
      name: "Apple Inc. Pitch Deck",
      views: "104 Views",
      progress: "100% complete",
      imageUrl: "URL_OF_IMAGE",
    },
    {
      name: "Apple Inc. Pitch Deck",
      views: "104 Views",
      progress: "100% complete",
      imageUrl: "URL_OF_IMAGE",
    },
    {
      name: "Apple Inc. Pitch Deck",
      views: "104 Views",
      progress: "100% complete",
      imageUrl: "URL_OF_IMAGE",
    },

    {
      name: "Apple Inc. Pitch Deck",
      views: "104 Views",
      progress: "100% complete",
      imageUrl: "URL_OF_IMAGE",
    },
    {
      name: "Apple Inc. Pitch Deck",
      views: "104 Views",
      progress: "100% complete",
      imageUrl: "URL_OF_IMAGE",
    },
    {
      name: "Apple Inc. Pitch Deck",
      views: "104 Views",
      progress: "100% complete",
      imageUrl: "URL_OF_IMAGE",
    },
    {
      name: "Apple Inc. Pitch Deck",
      views: "104 Views",
      progress: "100% complete",
      imageUrl: "URL_OF_IMAGE",
    },
    {
      name: "Apple Inc. Pitch Deck",
      views: "104 Views",
      progress: "100% complete",
      imageUrl: "URL_OF_IMAGE",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? presentations.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === presentations.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box>
      <DashboardTitleBox
        titleBoxPaddingX={8}
        titleBoxText="My Presentation"
        titleBoxButton="Show All"
      />
      <Box sx={{ display: "flex", alignItems: "flex-end", pl: 8, pt: 3 }}>
        {/* Create New */}
        <Box sx={{ py: 1, mr: 3 }}>
          <Box
            sx={{
              width: 270,
              p: 7,

              border: "2px dashed #c8cacc",
              boxSizing: "border-box",
              backgroundColor: "#f3f5f7",
              borderRadius: 1,
              textAlign: "center",
            }}
          >
            <AddIcon sx={{ color: "#c8cacc", fontSize: 35 }} />
            <Typography sx={{ color: "#969899", fontSize: 14 }}>
              Create New
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", overflowX: "hidden" }}>
          {presentations.map((presentation, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 270px", // Fixed width
                border: "0.5px solid #e2e4e6",
                mr: 3,
                p: 1,
                position: "relative",
                transition: "transform 0.3s ease-in-out",
                transform: `translateX(-${currentIndex * 270}px)`, // Slide transition
              }}
            >
              <Typography
                sx={{
                  color: "#636973",
                  fontSize: 14,
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                {presentation.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "#f3f5f7",
                      fontSize: 12,
                      backgroundColor: "#d5d7d9",
                      mr: 1,
                    }}
                  >
                    {presentation.views}
                  </Typography>
                  <Typography sx={{ color: "#c8cacc", fontSize: 12 }}>
                    {presentation.progress}
                  </Typography>
                </Box>
                <IconButton>
                  <ZoomInIcon sx={{ color: "#c8cacc" }} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  width: 270,
                  padding: "88px",
                  position: "relative",
                  border: "2px solid #e1e1e133",
                  borderRadius: 1,
                  backgroundColor: "#63697333",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    position: "absolute",
                    top: "40%",
                    left: "0",
                    width: "100%",
                  }}
                >
                  <NavigateBeforeIcon
                    onClick={handlePrev}
                    sx={{
                      color: "#c8cacc",
                      fontSize: 25,
                      backgroundColor: "#fff",
                      borderRadius: "17px",
                      cursor: "pointer",
                    }}
                  />
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      color: "#969899",
                      fontSize: 12,
                      width: 80,
                      backgroundColor: "#fff",
                    }}
                    startIcon={<EditOutlinedIcon sx={{ fontSize: 12 }} />}
                  >
                    Edit
                  </Button>
                  <NavigateNextIcon
                    onClick={handleNext}
                    sx={{
                      color: "#c8cacc",
                      fontSize: 25,
                      backgroundColor: "#fff",
                      borderRadius: "17px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PresentationSlide;
