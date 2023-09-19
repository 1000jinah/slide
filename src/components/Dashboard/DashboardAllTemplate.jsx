import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import DashboardTitleBox from "./DashboardTitleBox";
import LabelIcon from "@mui/icons-material/Label";
import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
const DashboardAllTemplate = ({titleBoxText, titleBoxButton, titleBoxSub}) => {
  const templates = [
    {
      title: "Uber Pitch Deck",
      new: "NEW",
      tag: "Pitch Deck",
      likeCount: "4K likes",
    },
    {
      title: "Uber Pitch Deck",
      new: "NEW",
      tag: "Pitch Deck",
      likeCount: "4K likes",
    },
    {
      title: "Uber Pitch Deck",
      new: "NEW",
      tag: "Pitch Deck",
      likeCount: "4K likes",
    },
    {
      title: "Uber Pitch Deck",
      new: "NEW",
      tag: "Pitch Deck",
      likeCount: "4K likes",
    },
    {
      title: "Uber Pitch Deck",
      new: "NEW",
      tag: "Pitch Deck",
      likeCount: "4K likes",
    },
    {
      title: "Uber Pitch Deck",
      new: "NEW",
      tag: "Pitch Deck",
      likeCount: "4K likes",
    },
    {
        title: "Uber Pitch Deck",
        new: "NEW",
        tag: "Pitch Deck",
        likeCount: "4K likes",
      },
      {
        title: "Uber Pitch Deck",
        new: "NEW",
        tag: "Pitch Deck",
        likeCount: "4K likes",
      },
      {
        title: "Uber Pitch Deck",
        new: "NEW",
        tag: "Pitch Deck",
        likeCount: "4K likes",
      },
  ];
  return (
    <Box>
      <DashboardTitleBox
          titleBoxPaddingX={8}
        titleBoxText={titleBoxText}
        titleBoxButton={titleBoxButton}
        titleBoxSub={titleBoxSub}
      />
      <Box sx={{ px: 8 }}>
        <Grid container spacing={3}>
          {templates.map((template, index) => (
            <Grid item key={index} xs={12} sm={12} md={6} lg={4}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Box sx={{ backgroundColor: "#eef0f2", p: 2, pb: 0 }}>
                  <Box sx={{ backgroundColor: "#dcdee0", height: 250 }}></Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      py: 1.5,
                    }}
                  >
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={{ color: "#636973", fontSize: 14 }}>
                          {template.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#f3f5f7",
                            lineHeight: 1.78,
                            ml: 1,
                            px: 1,
                            backgroundColor: "#c8cacc",
                            fontSize: 12,
                          }}
                        >
                          {template.new}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <LabelIcon
                          sx={{
                            color: "#c8cacc",
                            fontSize: 14,
                            transform: "rotate(-45deg)",
                            mr: 0.25,
                          }}
                        />
                        <Typography sx={{ color: "#c8cacc", fontSize: 14 }}>
                          {template.tag}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                      <LikeIcon
                        sx={{ color: "#969899", fontSize: 12, mr: 0.25 }}
                      />
                      <Typography
                        sx={{
                          color: "#969899",
                          fontSize: 12,
                          lineHeight: 0.95,
                        }}
                      >
                        {template.likeCount}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardAllTemplate;
