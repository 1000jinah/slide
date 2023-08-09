import {
  Box,
  Typography,
  Tab,
  Tabs,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { PropTypes } from "prop-types";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import React from "react";
import PitchBox from "components/PitchBox";
import EnhancedTable from "components/PitchTable";
import HeaderSearch from "components/Head/HeaderSearch";
import SideFilter from "components/SideFilter";

// Top Tabs
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
// Top Tabs Proptypes
CustomTabPanel.propTypes = {
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

const Related = () => {
  const [tabValue, setTabValue] = React.useState(0); // Tab

  const [view, setView] = React.useState("square"); // Toggle

  const handleToggleChange = (event, nextView) => {
    setView(nextView);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <HeaderSearch />
      <Box
        sx={{
          width: "100%",
          px: 5,
          py: 7,
          // height: "100vh",
          backgroundColor: "#f3f5f7",
          display: "flex",
          justifyContent: "center",
          "& .MuiAccordion-root:last-of-type": {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
          "& .MuiAccordion-root:first-of-type": {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
          "& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "transparent",
          },
          "& .MuiInput-root:before": {
            borderBottom: "none",
            borderBottomColor: "transparent",
          },
          "& .MuiInput-root:after": {
            borderBottom: "none",
            borderBottomColor: "transparent",
          },
          "& .MuiToggleButton-root": {
            border: "none",
            color: "#c8cacc",
          },
          "& .MuiToggleButton-root.Mui-selected": {
            backgroundColor: "transparent",
            color: "#636973",
          },
        }}
      >
        <Box sx={{ width: "100%" }}>
          {/* tab */}
          <Box
            sx={{
              width: "100%",
              mb: 6,
            }}
          >
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  label="Company"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  label="Investors"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  label="Funding Rounds"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  label="People"
                  {...a11yProps(3)}
                />
                <Tab
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  label="Saved"
                  {...a11yProps(4)}
                />
              </Tabs>
              <Box>
                <ToggleButtonGroup
                  value={view}
                  exclusive
                  onChange={handleToggleChange}
                >
                  <ToggleButton value="square" aria-label="square">
                    <ViewQuiltIcon />
                  </ToggleButton>
                  <ToggleButton value="list" aria-label="list">
                    <ViewListIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            {/* sidebar */}
            <Box>
              <SideFilter />
            </Box>
            {/* content */}
            <Box
              sx={{
                width: "100%",
              }}
            >
              <CustomTabPanel value={tabValue} index={0}>
                {/* 바둑판형 */}
                {view === "square" && (
                  <Box>
                    {/* Related to Industries */}
                    <Box
                      sx={{
                        mb: 7,
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex", mb: 4 }}>
                          <Typography
                            sx={{ color: "#636973", fontWeight: "bold", mr: 1 }}
                          >
                            Related to Industries
                          </Typography>
                          <Typography sx={{ color: "#636973" }}>
                            (253 Results)
                          </Typography>
                        </Box>
                        <Button
                          sx={{ textTransform: "capitalize", color: "#636973" }}
                          endIcon={
                            <ArrowForwardIosIcon
                              sx={{ color: "#969899", height: "10px" }}
                            />
                          }
                        >
                          Show all
                        </Button>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 3,
                          }}
                        >
                          <PitchBox />
                          <PitchBox />
                          <PitchBox />
                          <PitchBox />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <PitchBox />
                          <PitchBox />
                          <PitchBox />
                          <PitchBox />
                        </Box>
                      </Box>
                    </Box>
                    {/* Related to Funding Round */}
                    <Box
                      sx={{
                        mb: 7,
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex", mb: 4 }}>
                          <Typography
                            sx={{ color: "#636973", fontWeight: "bold", mr: 1 }}
                          >
                            Related to Funding Round
                          </Typography>
                          <Typography sx={{ color: "#636973" }}>
                            (311 Results)
                          </Typography>
                        </Box>
                        <Button
                          sx={{ textTransform: "capitalize", color: "#636973" }}
                          endIcon={
                            <ArrowForwardIosIcon
                              sx={{ color: "#969899", height: "10px" }}
                            />
                          }
                        >
                          Show all
                        </Button>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 3,
                          }}
                        >
                          <PitchBox />
                          <PitchBox />
                          <PitchBox />
                          <PitchBox />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <PitchBox />
                          <PitchBox />
                          <PitchBox />
                          <PitchBox />
                        </Box>
                      </Box>
                    </Box>
                    {/* Related to Financials */}
                    <Box>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex", mb: 4 }}>
                          <Typography
                            sx={{ color: "#636973", fontWeight: "bold", mr: 1 }}
                          >
                            Related to Financials
                          </Typography>
                          <Typography sx={{ color: "#636973" }}>
                            (157 Results)
                          </Typography>
                        </Box>
                        <Button
                          sx={{ textTransform: "capitalize", color: "#636973" }}
                          endIcon={
                            <ArrowForwardIosIcon
                              sx={{ color: "#969899", height: "10px" }}
                            />
                          }
                        >
                          Show all
                        </Button>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 3,
                          }}
                        >
                          <PitchBox />
                          <PitchBox />
                          <PitchBox />
                          <PitchBox />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <PitchBox />
                          <PitchBox />
                          <PitchBox />
                          <PitchBox />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
                {/* 리스트형 */}
                {view === "list" && (
                  <Box>
                    {/* Related to Industries */}
                    <Box
                      sx={{
                        mb: 7,
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex", mb: 4 }}>
                          <Typography
                            sx={{ color: "#636973", fontWeight: "bold", mr: 1 }}
                          >
                            Related to Industries
                          </Typography>
                          <Typography sx={{ color: "#636973" }}>
                            (253 Results)
                          </Typography>
                        </Box>
                        <Button
                          sx={{ textTransform: "capitalize", color: "#636973" }}
                          endIcon={
                            <ArrowForwardIosIcon
                              sx={{ color: "#969899", height: "10px" }}
                            />
                          }
                        >
                          Show all
                        </Button>
                      </Box>
                      <Box>
                        <EnhancedTable />
                      </Box>
                    </Box>
                    {/* Related to Funding Round */}
                    <Box
                      sx={{
                        mb: 7,
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex", mb: 4 }}>
                          <Typography
                            sx={{ color: "#636973", fontWeight: "bold", mr: 1 }}
                          >
                            Related to Funding Round
                          </Typography>
                          <Typography sx={{ color: "#636973" }}>
                            (311 Results)
                          </Typography>
                        </Box>
                        <Button
                          sx={{ textTransform: "capitalize", color: "#636973" }}
                          endIcon={
                            <ArrowForwardIosIcon
                              sx={{ color: "#969899", height: "10px" }}
                            />
                          }
                        >
                          Show all
                        </Button>
                      </Box>
                      <Box>
                        <EnhancedTable />
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 3,
                          }}
                        ></Box>
                      </Box>
                    </Box>
                    {/* Related to Financials */}
                    <Box>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex", mb: 4 }}>
                          <Typography
                            sx={{ color: "#636973", fontWeight: "bold", mr: 1 }}
                          >
                            Related to Financials
                          </Typography>
                          <Typography sx={{ color: "#636973" }}>
                            (157 Results)
                          </Typography>
                        </Box>
                        <Button
                          sx={{ textTransform: "capitalize", color: "#636973" }}
                          endIcon={
                            <ArrowForwardIosIcon
                              sx={{ color: "#969899", height: "10px" }}
                            />
                          }
                        >
                          Show all
                        </Button>
                      </Box>
                      <Box>
                        <EnhancedTable />
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 3,
                          }}
                        ></Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={2}>
                Item Three
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={3}>
                Item Four
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={4}>
                Item Five
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Related;
