import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { NewspaperOutlined } from "@mui/icons-material";

const dataNewsArr = [
  {
    title: "News",
    subTitle:
      "Apple seeks to fend off EU antitrust charge triggered by Spotify at hearing",
    date: "Thu, June 29, 2023 at 7:33 PM",
    description:
      "BRUSSELS (Reuters) -Apple will on Friday seek to fend off a revised EU antitrust charge and possible hefty fine linked to claims it prevents music streaming companies such as Spotify from informing users of other buying options outside its App Store. The iPhone maker will set out its arguments to senior European Commission officials and their peers at national competition...",
  },
  {
    title: "News",
    subTitle:
      "Apple seeks to fend off EU antitrust charge triggered by Spotify at hearing",
    date: "Thu, June 29, 2023 at 7:33 PM",
    description:
      "BRUSSELS (Reuters) -Apple will on Friday seek to fend off a revised EU antitrust charge and possible hefty fine linked to claims it prevents music streaming companies such as Spotify from informing users of other buying options outside its App Store. The iPhone maker will set out its arguments to senior European Commission officials and their peers at national competition...",
  },
  {
    title: "News",
    subTitle:
      "Apple seeks to fend off EU antitrust charge triggered by Spotify at hearing",
    date: "Thu, June 29, 2023 at 7:33 PM",
    description:
      "BRUSSELS (Reuters) -Apple will on Friday seek to fend off a revised EU antitrust charge and possible hefty fine linked to claims it prevents music streaming companies such as Spotify from informing users of other buying options outside its App Store. The iPhone maker will set out its arguments to senior European Commission officials and their peers at national competition...",
  },
  {
    title: "News",
    subTitle:
      "Apple seeks to fend off EU antitrust charge triggered by Spotify at hearing",
    date: "Thu, June 29, 2023 at 7:33 PM",
    description:
      "BRUSSELS (Reuters) -Apple will on Friday seek to fend off a revised EU antitrust charge and possible hefty fine linked to claims it prevents music streaming companies such as Spotify from informing users of other buying options outside its App Store. The iPhone maker will set out its arguments to senior European Commission officials and their peers at national competition...",
  },
  {
    title: "News",
    subTitle:
      "Apple seeks to fend off EU antitrust charge triggered by Spotify at hearing",
    date: "Thu, June 29, 2023 at 7:33 PM",
    description:
      "BRUSSELS (Reuters) -Apple will on Friday seek to fend off a revised EU antitrust charge and possible hefty fine linked to claims it prevents music streaming companies such as Spotify from informing users of other buying options outside its App Store. The iPhone maker will set out its arguments to senior European Commission officials and their peers at national competition...",
  },
];

const NewsBox = () => {
  const handleNewsClick = (event, link) => {
    event.stopPropagation();
    window.open(
      "https://money.usnews.com/investing/news/articles/2023-06-29/apple-seeks-to-fend-off-eu-antitrust-charge-triggered-by-spotify-at-hearing",
      "_blank"
    );
  };

  return (
    <div>
      {/* Recent News & Activity Title */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
          Recent News & Activity
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: "#636973", fontSize: "14px", mr: 1 }}>
            Number of Articles :
          </Typography>
          <Typography
            sx={{
              color: "#636973",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            70,693
          </Typography>
        </Box>
      </Box>
      {/* Recent News & Activity Contents */}
      {dataNewsArr.map((news, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          {/* News Title */}
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={(event) => handleNewsClick(event, news.link)}
          >
            <NewspaperOutlined sx={{ width: "16px", color: "#969899" }} />
            <Typography
              sx={{
                color: "#636973",
                fontSize: "14px",
                fontWeight: "bold",
                ml: 1,
              }}
            >
              {news.title}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* News Text Box */}
            <Box
              sx={{ width: "70%", cursor: "pointer" }}
              onClick={(event) => handleNewsClick(event, news.link)}
            >
              <Typography sx={{ color: "#636973", mb: 1 }}>
                {news.subTitle}
              </Typography>
              <Typography
                sx={{ color: "#636973", fontSize: "12px", mb: 1 }}
                onClick={(event) => handleNewsClick(event, news.link)}
              >
                {news.date}
              </Typography>
              <Typography
                sx={{
                  color: "#636973",
                  fontSize: "14px",
                  mb: 1,
                }}
              >
                {news.description}
              </Typography>
            </Box>
            {/* News Image Box */}
            <Box
              sx={{
                backgroundColor: "#969899",
                width: 200,
                height: 110,
              }}
            ></Box>
          </Box>
        </Box>
      ))}

      <Button
        sx={{
          width: "100%",
          textTransform: "none",
          borderRadius: 0,
        }}
        variant="outlined"
      >
        View All
      </Button>
    </div>
  );
};

export default NewsBox;
