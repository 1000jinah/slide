import React, { useState, useRef } from "react";
import { Box, IconButton, Button, Typography } from "@mui/material";
import { ZoomIn as ZoomInIcon } from "@mui/icons-material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DashboardTitleBox from "components/Dashboard/DashboardTitleBox";
const PresentationSlide = () => {
  const presentations = [
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

  const slideRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  const handleMouseDown = (e) => {
    if (slideRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - slideRef.current.offsetLeft - currentTranslate);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - slideRef.current.offsetLeft;
    const translate = x - startX;

    // Calculate the maximum translate based on the width of presentations
    const maxTranslate = (presentations.length - 1) * 270 * -1;

    // Ensure translate remains within bounds
    setCurrentTranslate(Math.max(maxTranslate, Math.min(0, translate)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleFirstItemMoveClick = () => {
    // Calculate the maximum translate based on the width of presentations
    const maxTranslate = (presentations.length - presentations.length) * 270;

    // Set the current translate to the maximum value to move to the first presentation
    setCurrentTranslate(maxTranslate);
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
        <Box
          ref={slideRef}
          sx={{
            display: "flex",

            overflowX: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {presentations.map((presentation, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 270px", // Fixed width
                border: "0.5px solid #e2e4e6",
                mr: 4.5,
                p: 1,
                position: "relative",
                transform: `translateX(${currentTranslate}px)`,
                transition: isDragging ? "none" : "transform 0.3s ease-in-out",
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
                    // onClick={handlePrev}
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
                    // onClick={handleNext}
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
              {index === presentations.length - 1 && (
                <Box
                  sx={{
                    display: "block",
                    position: "absolute",
                    top: "50%",
                    marginTop: -3,
                    right: -100,
                  }}
                >
                  <IconButton
                    sx={{ backgroundColor: "#f3f5f7" }}
                    onClick={handleFirstItemMoveClick}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PresentationSlide;
