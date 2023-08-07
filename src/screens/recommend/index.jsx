import { Box, Typography } from "@mui/material";
import Header from "components/Head/Header";
import Industries from "components/Industries";
import InvestNews from "components/InvestNews";
import MultiSelectInput from "components/MultiSelectInput";
import RecommendationBox from "components/RecommendationBox";
import TopStartUps from "components/TopStartUps";
import ViewForm from "components/ViewForm";
import React from "react";

const Recommend = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          width: "100%",
          px: 12,
          py: 7,
          // height: "100vh",
          backgroundColor: "#f3f5f7",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* main */}
        <Box sx={{ mr: 3 }}>
          {/* multi select input */}
          <MultiSelectInput />
          {/* AI Recommendations */}
          <Box>
            <Typography
              sx={{ fontWeight: "bold", color: "#636973", mt: 7, mb: 3 }}
            >
              AI Recommendations
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <RecommendationBox />
              <RecommendationBox />
              <RecommendationBox />
            </Box>
          </Box>
          {/* Viewing Activity Form */}
          <Box>
            <Typography
              sx={{ fontWeight: "bold", color: "#636973", mt: 7, mb: 3 }}
            >
              Viewing Activity Form
            </Typography>
            <Box>
              <ViewForm />
              <ViewForm />
              <ViewForm />
              <ViewForm />
            </Box>
          </Box>
        </Box>
        {/* right side bar */}
        <Box>
          <Industries />
          <TopStartUps />
          <InvestNews />
        </Box>
      </Box>
    </div>
  );
};

export default Recommend;
