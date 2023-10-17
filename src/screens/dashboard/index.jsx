import {
  Box,
  Divider,
  IconButton,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";

import Header from "components/Head/Header";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import VideoStableOutlinedIcon from "@mui/icons-material/VideoStableOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PropTypes from "prop-types";
import React from "react";
import PresentationSlide from "components/Dashboard/DashboardSlide";
import DashboardTemplate from "components/Dashboard/DashboardTemplate";
import DashboardBox from "components/Dashboard/DashboardBox";
import DashboardView from "components/Dashboard/DashborardView";
import DashBoardChipButton from "components/Dashboard/DashBoardChipButton";
import DashboardAllTemplate from "components/Dashboard/DashboardAllTemplate";
import DashBoardSearchBar from "components/Dashboard/DashBoardSearchBar";
import { Link } from "react-router-dom";
function DashboardTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
      }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

DashboardTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {/* Header */}
      <Header initialValue={20} />
      <div style={{ display: "flex" }}>
        {/* Side Bar */}
        <div
          style={{
            width: "270px",
            padding: 20,
            backgroundColor: "#e2e4e6",
            // height: "calc(100vh - 70px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Circle */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #333",
                  borderRadius: 20,
                }}
              ></div>
              {/* Name, Ticker,  */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 10,
                }}
              >
                <span style={{ fontSize: 12 }}>Series A</span>
                <span style={{ fontSize: 12 }}>Apple lnc.</span>
              </div>
            </div>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <Divider sx={{ py: 2 }} />
          {/* List  */}
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              ".MuiTabs-indicator": {
                width: 0,
                color: "#636973",
              },
              ".Mui-selected": {
                color: "#636973",
                backgroundColor: "#d5d7d9",
                borderBottom: "none",
              },
            }}
          >
            <Tab
              sx={{
                width: "100%",
                textTransform: "capitalize",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                backgroundColor: "transparent",
                color: "#969899",
                justifyContent: "start",
                minHeight: "auto",
                borderRadius: 3,
                p: 2,
                my: 1,
              }}
              icon={<ViewQuiltOutlinedIcon />}
              iconPosition="start"
              label="Dashboard"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                width: "100%",
                textTransform: "capitalize",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                backgroundColor: "transparent",
                color: "#969899",
                justifyContent: "start",
                minHeight: "auto",
                borderRadius: 3,
                p: 2,
                my: 1,
              }}
              icon={<TextSnippetOutlinedIcon />}
              iconPosition="start"
              label="Presentation Templates"
              {...a11yProps(1)}
            />
            <Link
         
              style={{
                color: "#969899",
                textDecoration: "none",
              }}
              to="/presentation"
            >
              <Tab
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  opacity:1,
                  justifyContent: "start",
                  minHeight: "auto",
                  borderRadius: 3,
                  p: 2,
                  my: 1,
                }}
                icon={<VideoStableOutlinedIcon />}
                iconPosition="start"
                label="My Presentation"
                // {...a11yProps(2)}
              />
            </Link>
            <Tab
              sx={{
                width: "100%",
                textTransform: "capitalize",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                backgroundColor: "transparent",
                color: "#969899",
                justifyContent: "start",
                minHeight: "auto",
                borderRadius: 3,
                p: 2,
                my: 1,
              }}
              icon={<LockPersonOutlinedIcon />}
              iconPosition="start"
              label="Investor Tracker"
              {...a11yProps(3)}
            />
            <Tab
              sx={{
                width: "100%",
                textTransform: "capitalize",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                backgroundColor: "transparent",
                color: "#969899",
                justifyContent: "start",
                minHeight: "auto",
                borderRadius: 3,
                p: 2,
                my: 1,
              }}
              icon={<ExploreOutlinedIcon />}
              iconPosition="start"
              label="Explore"
              {...a11yProps(4)}
            />
            <Tab
              sx={{
                width: "100%",
                textTransform: "capitalize",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                backgroundColor: "transparent",
                color: "#969899",
                justifyContent: "start",
                minHeight: "auto",
                borderRadius: 3,
                p: 2,
                my: 1,
              }}
              icon={<PersonOutlineOutlinedIcon />}
              iconPosition="start"
              label="Book an Expert"
              {...a11yProps(5)}
            />
          </Tabs>
        </div>
        {/* Main */}
        <div style={{ width: "calc(100vw - 270px)" }}>
          <DashboardTabPanel value={value} index={0}>
            <DashboardBox
              dashboardBoxWidth="100%"
              dashboardTitle="Calculate a fair valuation for your startup"
              dashboardDescript="Industry leading methodology for startup valuation. An automated and impartial result, informed by market data."
              dashboardButton="Calculate Now"
              dashboardDescriptMarginBottom={3}
            />
            <PresentationSlide />

            <DashboardBox
              dashboardBoxWidth="65%"
              dashboardTitle="Investor Tracker"
              dashboardDescript="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam."
              dashboardButton="Add Investors"
              dashboardDescriptMarginBottom={3}
            />

            <DashboardTemplate
              templateTitle="Uber Pitch Deck"
              templateNew="New"
              templateTag="Pitch Deck"
              templateLikeCount="4K likes"
              titleBoxText="Recommendations Templates"
              titleBoxButton="Show All"
            />
            <DashboardView />
          </DashboardTabPanel>
          <DashboardTabPanel value={value} index={1}>
            <DashBoardChipButton dashboardChipBoxMarginTop={6} />
            <DashboardAllTemplate
              templateTitle="Uber Pitch Deck"
              templateNew="New"
              templateTag="Pitch Deck"
              templateLikeCount="4K likes"
              titleBoxText="All Templates"
              titleBoxSub="Presentation templates for every use case"
            />
          </DashboardTabPanel>
          <DashboardTabPanel value={value} index={2}>
            3
          </DashboardTabPanel>
          <DashboardTabPanel value={value} index={3}>
            4
          </DashboardTabPanel>
          <DashboardTabPanel value={value} index={4}>
            <DashboardBox
              dashboardBoxWidth="100%"
              dashboardTitle="Presentation Gallery"
              dashboardDescript="Get inspired by curated collections of outstanding presentations from companies, teams, 
              and professionals from around the world."
              dashboardButtonDisplayType="none"
            />
            <DashBoardSearchBar />
            <DashBoardChipButton dashboardChipBoxMarginTop={6} />
            <DashboardAllTemplate
              templateTitle="Uber Pitch Deck"
              templateNew="New"
              templateTag="Pitch Deck"
              templateLikeCount="4K likes"
              titleBoxText="All Templates"
              titleBoxSub="Presentation templates for every use case"
            />
          </DashboardTabPanel>
          <DashboardTabPanel value={value} index={5}>
            6
          </DashboardTabPanel>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
