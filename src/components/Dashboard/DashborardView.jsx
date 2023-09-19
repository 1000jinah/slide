import { Box, Typography, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DashboardTitleBox from "./DashboardTitleBox";
// import Slider from "react-slick";
const DashboardView = () => {
  const views = [
    // Each presentation object with its properties

    {
      name: "Caya",
      job: "Co-Founder & CEO at Slidebean",
      descript:
        "Happy to review your pitch deck, hare my thoughts on your fundraising plans, or give you insights on your go-to-market strategy.",
      price: "$399",
      minute: "Per 30 minutes",
      bookCall: "Book A Call",
    },
    {
      name: "Caya",
      job: "Co-Founder & CEO at Slidebean",
      descript:
        "Happy to review your pitch deck, hare my thoughts on your fundraising plans, or give you insights on your go-to-market strategy.",
      price: "$399",
      minute: "Per 30 minutes",
      bookCall: "Book A Call",
    },
    {
      name: "Caya",
      job: "Co-Founder & CEO at Slidebean",
      descript:
        "Happy to review your pitch deck, hare my thoughts on your fundraising plans, or give you insights on your go-to-market strategy.",
      price: "$399",
      minute: "Per 30 minutes",
      bookCall: "Book A Call",
    },

    {
      name: "Caya",
      job: "Co-Founder & CEO at Slidebean",
      descript:
        "Happy to review your pitch deck, hare my thoughts on your fundraising plans, or give you insights on your go-to-market strategy.",
      price: "$399",
      minute: "Per 30 minutes",
      bookCall: "Book A Call",
    },
    {
      name: "Caya",
      job: "Co-Founder & CEO at Slidebean",
      descript:
        "Happy to review your pitch deck, hare my thoughts on your fundraising plans, or give you insights on your go-to-market strategy.",
      price: "$399",
      minute: "Per 30 minutes",
      bookCall: "Book A Call",
    },

    {
      name: "Caya",
      job: "Co-Founder & CEO at Slidebean",
      descript:
        "Happy to review your pitch deck, hare my thoughts on your fundraising plans, or give you insights on your go-to-market strategy.",
      price: "$399",
      minute: "Per 30 minutes",
      bookCall: "Book A Call",
    },
  ];
  const exploreList = [
    // Each presentation object with its properties

    {
      name: "Wallmart Pitch Deck",
      likeCount: 156,
      viewCount: "1.4k",
    },
    {
      name: "Deutsche Bank",
      likeCount: 241,
      viewCount: "2.3k",
    },
    {
      name: "MosaicML",
      likeCount: 470,
      viewCount: "5.6k",
    },
    {
      name: "Coinbase",
      likeCount: 114,
      viewCount: "1.3k",
    },
  ];
  const [isDragging, setIsDragging] = useState(false); // Variable to track dragging state
  const [dragStartX, setDragStartX] = useState(0); // Initial X position of drag
  const [dragPosition, setDragPosition] = useState(0); // Current drag position

  const handleDragStart = (e) => {
    setIsDragging(true); // Set dragging state to true
    setDragStartX(e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return; // Only move if dragging state is true
    const distanceDragged = e.clientX - dragStartX; // Calculate the distance dragged
    setDragPosition(
      Math.min(
        0,
        Math.max(dragPosition + distanceDragged, -275 * (views.length - 2))
      )
    );
    setDragStartX(e.clientX); // Update the drag start position
  };

  const handleDragEnd = () => {
    setIsDragging(false); // Reset dragging state to false
    setDragStartX(0); // Reset the drag start position
  };
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ px: 8 }}>
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <DashboardTitleBox
              titleBoxPaddingX=""
              titleBoxText="Book an Expert"
              titleBoxButton="Show All"
            />
            <Box
              sx={{
                px: 2,
                py: 3,
                border: "1px solid #e2e4e6",
                overflowX: "clip",
              }}
            >
              <Box sx={{ position: "relative", height: 396 }}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    position: "absolute",
                    transform: `translateX(${dragPosition}px)`, // Apply the drag position as a transform
                  }}
                  onMouseDown={handleDragStart}
                  onMouseMove={handleDragMove}
                  onMouseUp={handleDragEnd}
                  onMouseLeave={handleDragEnd}
                >
                  {views.map((view) => (
                    <Box
                      sx={{
                        width: 280,
                        backgroundColor: "#dcdee0",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        borderRadius: 2,
                        p: 2,
                        mr: 3,
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box
                          sx={{
                            backgroundColor: "#f3f5f7",
                            p: 5,
                            borderRadius: 15,
                          }}
                        ></Box>
                      </Box>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography
                          sx={{
                            color: "#636973",
                            fontSize: 18,
                            fontWeight: "bold",
                          }}
                        >
                          {view.name}
                        </Typography>
                        <Typography
                          sx={{ color: "#636973", fontSize: 16, mb: 1 }}
                        >
                          {view.job}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#969899",
                            fontSize: 14,
                            lineHeight: 1.7,
                          }}
                        >
                          {view.descript}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography
                          sx={{
                            color: "#636973",
                            fontSize: 18,
                            fontWeight: "bold",
                            mb: 0.5
                          }}
                        >
                          {view.price}
                        </Typography>
                        <Typography
                          sx={{ color: "#969899", fontSize: 14, mb: 1}}
                        >
                          {view.minute}
                        </Typography>
                        <Button
                          sx={{
                            backgroundColor: "#969899",
                            fontSize: 16,
                            color: "#f3f5f7",
                            textTransform: "capitalize",
                            py: 1,
                            px: 6,
                          }}
                        >
                          {view.bookCall}
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <DashboardTitleBox
              titleBoxPaddingX=""
              titleBoxText="Explore Recently Viewed"
              titleBoxButton="null"
              titleBoxButtonVisible="hidden"
            />
            <Box sx={{ px: 2, py: 1, border: "1px solid #e2e4e6" }}>
              {exploreList.map((view) => (
                <Box sx={{ display: "flex", py: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                      sx={{
                        backgroundColor: "#dcdee0",
                        width: 140,
                        height: 75,
                        borderRadius: 1.8,
                      }}
                    ></Box>
                  </Box>
                  <Box
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      px: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          backgroundColor: "#e2e4e6",
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          mr: 1,
                        }}
                      ></Box>
                      <Typography
                        sx={{
                          color: "#636973",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        {view.name}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mr: 1 }}
                      >
                        <ThumbUpOutlinedIcon
                          sx={{
                            color: "#969899",
                            fontSize: 16,
                            mr: 0.25,
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#969899",
                            fontSize: 14,
                          }}
                        >
                          {view.likeCount}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <VisibilityOutlinedIcon
                          sx={{
                            color: "#969899",
                            fontSize: 16,
                            mr: 0.25,
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#969899",
                            fontSize: 14,
                          }}
                        >
                          {view.viewCount}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardView;
