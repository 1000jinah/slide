import Header from "components/Head/Header";
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Stack,
  Chip,
  IconButton,
  FormControl,
  Select,
  MenuItem,

  // List,
  // ListItem,
  // ListItemIcon,
  // ListItemButton,
  // ListItemText,
  Divider,
  // Divider,
} from "@mui/material";
import { PropTypes } from "prop-types";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import InvestPie from "components/Chart/InvestPie";
import VerticalBarChart from "components/Chart/CompareBar";
import TrafficLineChart from "components/Chart/TrafficLIne";
import TradingBarChart from "components/Chart/TradingBar";
import AboutTable from "components/Table/AboutTable";
import TrafficTable from "components/Table/TrafficTable";
import InvestorTable from "components/Table/InvestorTable";
import FinanicalBox from "components/FinanicalBox";
import ProfileBox from "components/ProfileBox";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import NewsBox from "components/NewsBox";
import { Link } from "react-router-dom";
const chartData = [
  {
    date: "2023.04",
    unit: "",
    labels: ["Employee"],
    data: [[26], [52]],
    backgroundColors: ["#c8cacc", "#e2e4e6"],
  },
  {
    date: "2022",
    unit: "($)",
    labels: ["Annual Sales"],
    data: [[], [73.5]],
    backgroundColors: ["#c8cacc", "#e2e4e6"],
  },
  {
    date: "2019.04",
    unit: "($ million)",
    labels: ["Attract Investment (Recent)"],
    data: [[1000], []],
    backgroundColors: ["#c8cacc", "#e2e4e6"],
  },
  {
    date: "2019.04",
    unit: "($ million)",
    labels: ["Attract Investment (accumulate)"],
    data: [[1000], []],
    backgroundColors: ["#c8cacc", "#e2e4e6"],
  },
  {
    date: "2019.04",
    unit: "($)",
    labels: ["Visit Duration"],
    data: [[2286], [398]],
    backgroundColors: ["#c8cacc", "#e2e4e6"],
  },
  {
    date: "",
    unit: "($)",
    labels: ["Visit Duration Growth"],
    data: [[50.39], [-5.91]],
    backgroundColors: ["#c8cacc", "#e2e4e6"],
  },
  {
    date: "2019.04",
    unit: "($)",
    labels: ["Traffic"],
    data: [[26], [52]],
    backgroundColors: ["#c8cacc", "#e2e4e6"],
  },

  {
    date: "2022",
    unit: "($)",
    labels: ["Transaction Index"],
    data: [[], [73.5]],
    backgroundColors: ["#c8cacc", "#e2e4e6"],
  },
  // Add more chart data objects as needed
];

// Industries Chips
const chips = [
  "Consumer Electronics",
  "Hardware",
  "Mobile Devices",
  "Operating Systems",
  "Wearables",
];
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
        <Box>
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

const Detail = () => {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [tabValue, setTabValue] = React.useState(0); // Tab
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleTrafficDetailCLick = () => {
    setTabValue(1); // Tab 2로 이동
  };
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
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#e2e4e6",
              p: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  backgroundColor: "#c8cacc",
                  width: 40,
                  height: 40,
                  mr: 1,
                }}
              ></Box>
              <Box>
                <Typography sx={{ fontWeight: "bold", color: "#636973" }}>
                  Apple.lnc
                </Typography>
                <Typography sx={{ fontSize: "11px", color: "#636973" }}>
                  AAPL
                </Typography>
              </Box>
            </Box>
            <Box>
              <Link to="https://www.apple.com/"  target="_blank">
                <Button
                  variant="contained"
                  sx={{ textTransform: "capitalize", mr: 2 }}
                  startIcon={<MeetingRoomIcon />}
                >
                  Visit Apple
                </Button>
              </Link>
              <Button
                variant="contained"
                sx={{ textTransform: "capitalize" }}
                startIcon={<AddIcon />}
              >
                Add to Watchlist
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              my: 3,
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
                  label="Summary"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  label="Use Analysis"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  label="Financials"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  label="People"
                  {...a11yProps(3)}
                />
                <Tab
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  label="Signals & News"
                  {...a11yProps(4)}
                />
                <Tab
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  label="Similar Companies"
                  {...a11yProps(5)}
                />
              </Tabs>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <CustomTabPanel value={tabValue} index={0}>
              {/* About & PitchBook Slide (5:5) */}
              <Box sx={{ display: "flex", mb: 3 }}>
                {/* About */}
                <Box
                  sx={{
                    backgroundColor: "#eef0f2",
                    p: 3,
                    mr: 3,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                      About
                    </Typography>

                    {/* Edit Button */}
                    <Box>
                      <IconButton>
                        <EditOutlinedIcon
                          sx={{
                            fontSize: "22px",
                            color: "#636973",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                  <Typography
                    sx={{ color: "#636973", fontSize: "14px", mr: 1 }}
                  >
                    Apple is a corporation that designs, manufactures, and
                    markets
                    <br /> consumer electronics, personal computers, and
                    software.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      mt: 1,
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                    }}
                  >
                    <Box width={"50%"}>
                      <AboutTable />
                    </Box>
                    <Box width={"50%"}>
                      <Typography sx={{ fontSize: "0.875rem", mb: 1.5 }}>
                        Industries
                      </Typography>
                      <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                        {chips.map((label, index) => (
                          <Chip
                            key={label}
                            label={label}
                            sx={{
                              mr: index % 2 === 0 ? 1.5 : 0,
                              mb: 1.5,
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                </Box>
                {/* PitchBook Slide */}
                <Box
                  sx={{
                    position: "relative",
                    backgroundColor: "#e2e4e6",
                    width: "100%",
                  }}
                >
                  {/* Slide Show View (기능) */}
                  <Box></Box>
                  {/* Slide Button  */}

                  <Box
                    sx={{
                      width: "100%",
                      px: 3,
                      position: "absolute",
                      top: "50%",
                      mt: -2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <IconButton
                      aria-label="before"
                      sx={{ backgroundColor: "#c8cacc" }}
                    >
                      <NavigateBeforeIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      sx={{ backgroundColor: "#c8cacc" }}
                    >
                      <NavigateNextIcon />
                    </IconButton>
                  </Box>

                  {/* View & Download */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: "50%",
                      marginLeft: "-308px",
                      bottom: 20,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        height: "auto",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          py: 1.2,
                          fontSize: 16,
                          fontWeight: "bold",
                          width: 300,
                          mr: 3,
                        }}
                      >
                        View
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          py: 1.2,
                          fontSize: 16,
                          fontWeight: "bold",
                          width: 300,
                        }}
                      >
                        Download
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* Invesetment & Investors (7:3) */}
              <Box sx={{ display: "flex", mb: 3, height: "400px" }}>
                {/* Invesetment */}
                <Box
                  width={"70%"}
                  sx={{
                    backgroundColor: "#eef0f2",
                    p: 3,
                    mr: 3,
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                      Investment
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ display: "flex", mr: 2 }}>
                        <Typography
                          sx={{ color: "#636973", mr: 1, fontSize: "14px" }}
                        >
                          Total Investment Cost :
                        </Typography>
                        <Typography
                          sx={{
                            color: "#636973",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          900M
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          sx={{ color: "#636973", mr: 1, fontSize: "14px" }}
                        >
                          Round :
                        </Typography>
                        <Typography
                          sx={{
                            color: "#636973",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          Series B
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <InvestPie />
                  </Box>
                </Box>
                {/* Investors */}
                <Box
                  width={"30%"}
                  sx={{
                    backgroundColor: "#eef0f2",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Investors List */}
                  <Box>
                    <Box>
                      <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                        Investors
                      </Typography>
                      {/* Y Combinator */}
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",

                          py: 2,
                          pb: 0,
                        }}
                      >
                        <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Box>
                            <Box
                              sx={{
                                justifyContent: "space-between",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "15px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                Y Combinator
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                Accelerator
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#636973",
                                ml: 2,
                              }}
                            >
                              Series A
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      {/* MassChallenge */}
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",

                          py: 2,
                          pb: 0,
                        }}
                      >
                        <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Box>
                            <Box
                              sx={{
                                justifyContent: "space-between",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "15px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                MassChallenge
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                Accelerator
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#636973",
                                ml: 2,
                              }}
                            >
                              Series A
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      {/* National Science Foundation */}
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",

                          py: 2,
                          pb: 0,
                        }}
                      >
                        <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Box>
                            <Box
                              sx={{
                                justifyContent: "space-between",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "15px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                National Science Foundation
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                Accelerator
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#636973",
                                ml: 2,
                              }}
                            >
                              Pre-A
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Button */}
                  <Box>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        py: 1.2,
                        fontSize: 16,
                        fontWeight: "bold",
                        width: "100%",
                        mr: 3,
                      }}
                    >
                      Show all investors
                    </Button>
                  </Box>
                </Box>
              </Box>
              {/* Compare (1) */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ backgroundColor: "#eef0f2", p: 3 }}>
                  {/* Title */}
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                      Compare
                    </Typography>
                    <Button
                      endIcon={<AddIcon />}
                      sx={{ textTransform: "capitalize", color: "#636973" }}
                    >
                      Compare Details
                    </Button>
                  </Box>
                  {/* Tag */}
                  <Box sx={{ display: "flex", ml: -1, mb: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <HorizontalRuleIcon
                        sx={{ color: "#707070", transform: "rotate(90deg)" }}
                      />
                      <Typography sx={{ color: "#636973", fontSize: 14 }}>
                        Apple lnc. AAPL
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <HorizontalRuleIcon
                        sx={{ color: "#c8cacc", transform: "rotate(90deg)" }}
                      />
                      <Typography sx={{ color: "#636973", fontSize: 14 }}>
                        Twitter Inc. TWTR
                      </Typography>
                    </Box>
                    <IconButton>
                      <ClearIcon
                        sx={{
                          width: 14,
                        }}
                      />
                    </IconButton>

                    <Button
                      variant="outlined"
                      endIcon={
                        <AddIcon
                          sx={{
                            width: 14,
                          }}
                        />
                      }
                      sx={{
                        ml: 2,
                        textTransform: "none",
                        border: "1px solid #c8cacc",
                        p: 0,
                        color: "#636973",
                      }}
                    >
                      Add
                    </Button>
                  </Box>
                  {/* Chart Lists */}
                  <Box
                    sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}
                  >
                    {chartData.map((chart, index) => (
                      <div
                        key={index}
                        style={{
                          width: "210px",
                          height: "210px",
                          marginRight: "30px",
                          marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span style={{ color: "#969899", fontSize: 12 }}>
                            {chart.date}
                          </span>
                          <span style={{ color: "#c8cacc", fontSize: 12 }}>
                            {chart.unit}
                          </span>
                        </div>
                        <VerticalBarChart
                          labels={chart.labels}
                          data={chart.data}
                          backgroundColors={chart.backgroundColors}
                        />
                      </div>
                    ))}
                  </Box>
                </Box>
              </Box>
              {/* Traffic & Service (7:3) */}
              <Box sx={{ display: "flex", mb: 3, height: "400px" }}>
                {/* Traffic */}
                <Box
                  width={"70%"}
                  sx={{
                    backgroundColor: "#eef0f2",
                    p: 3,
                    mr: 3,
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                      Traffic
                    </Typography>
                    <Box
                      sx={{
                        ".MuiOutlinedInput-input": {
                          py: 0,
                          textAlign: "left",
                        },
                      }}
                    >
                      <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <Select
                          value={age}
                          onChange={handleChange}
                          displayEmpty
                          sx={{ color: "#636973" }}
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value={10}>Apple Music</MenuItem>
                          <MenuItem value={20}>Melon Music</MenuItem>
                        </Select>
                        {/* <FormHelperText>Without label</FormHelperText> */}
                      </FormControl>
                      <Button
                        onClick={handleTrafficDetailCLick}
                        endIcon={<AddIcon />}
                        sx={{ textTransform: "capitalize", color: "#636973" }}
                      >
                        Traffic Details
                      </Button>
                    </Box>
                  </Box>
                  <Box sx={{ width: "100%", height: "330px" }}>
                    <TrafficLineChart />
                  </Box>
                </Box>
                {/* Service */}
                <Box
                  width={"30%"}
                  sx={{
                    backgroundColor: "#eef0f2",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Investors List */}
                  <Box>
                    <Box>
                      <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                        Service
                      </Typography>
                      {/* Apple TV */}
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          py: 2,
                          pb: 0,
                        }}
                      >
                        <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Box>
                            <Box
                              sx={{
                                justifyContent: "space-between",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "15px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                Apple TV
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color: "#636973",
                                  ml: 2,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Nov 4, 2020
                              </Typography>
                            </Box>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            sx={{
                              borderBottom: "1px solid #969899",
                              borderRadius: 0,
                              fontSize: "10px",
                              color: "#636973",
                              px: 0,
                              ml: 2,
                            }}
                            startIcon={<AddIcon />}
                          >
                            Download
                          </Button>
                          <Button
                            sx={{
                              borderBottom: "1px solid #969899",
                              borderRadius: 0,
                              fontSize: "10px",
                              color: "#636973",
                              px: 0,
                              ml: 2,
                            }}
                            startIcon={<AddIcon />}
                          >
                            Download
                          </Button>
                        </Box>
                      </Box>
                      {/* Apple Music */}
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          py: 2,
                          pb: 0,
                        }}
                      >
                        <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Box>
                            <Box
                              sx={{
                                justifyContent: "space-between",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "15px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                Apple Music
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                Nov 10, 2015
                              </Typography>
                            </Box>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            sx={{
                              borderBottom: "1px solid #969899",
                              borderRadius: 0,
                              fontSize: "10px",
                              color: "#636973",
                              px: 0,
                              ml: 2,
                            }}
                            startIcon={<AddIcon />}
                          >
                            Download
                          </Button>
                          <Button
                            sx={{
                              borderBottom: "1px solid #969899",
                              borderRadius: 0,
                              fontSize: "10px",
                              color: "#636973",
                              px: 0,
                              ml: 2,
                            }}
                            startIcon={<AddIcon />}
                          >
                            Download
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* Trading Volume (1) */}
              <Box sx={{ mb: 3 }}>
                <Box
                  width={"100%"}
                  sx={{
                    backgroundColor: "#eef0f2",
                    p: 3,
                    mr: 3,
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                      Trading Volume
                    </Typography>
                    <Box
                      sx={{
                        ".MuiOutlinedInput-input": {
                          py: 0,
                          textAlign: "left",
                        },
                      }}
                    >
                      <Button
                        onClick={handleTrafficDetailCLick}
                        endIcon={<AddIcon />}
                        sx={{ textTransform: "capitalize", color: "#636973" }}
                      >
                        Transaction Details
                      </Button>
                    </Box>
                  </Box>
                  <Box sx={{ width: "100%", height: "330px" }}>
                    <TradingBarChart />
                  </Box>
                </Box>
              </Box>
              {/* Similar Companies & Recommendations (7:3) */}
              <Box sx={{ display: "flex", mb: 3 }}>
                {/* Similar Companies */}
                <Box
                  width={"70%"}
                  sx={{
                    backgroundColor: "#eef0f2",
                    p: 3,
                    mr: 3,
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                      Similar Companies
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    {/* Alibaba Group */}
                    <Box sx={{ my: 3 }}>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          mb: 2,
                          py: 2,
                          pb: 0,
                        }}
                      >
                        <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              justifyContent: "space-between",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "15px",
                                color: "#636973",
                                ml: 2,
                              }}
                            >
                              Alibaba Group
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#636973",
                                ml: 2,
                              }}
                            >
                              BABA
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Button
                            variant="contained"
                            sx={{
                              fontSize: "14px",
                              backgroundColor: "#969899",
                              color: "#fff",
                              fontWeight: "bold",
                              whiteSpace: "nowrap",
                              textTransform: "none",
                            }}
                            startIcon={<AddIcon />}
                          >
                            Add to Watchlist
                          </Button>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          <Chip label="Association" />
                          <Chip label="B2B" />
                          <Chip label="Information Technology" />
                          <Chip label="Shopping" />
                        </Stack>

                        <Box>
                          <Button
                            variant="contained"
                            sx={{
                              fontSize: "12px",
                              backgroundColor: "#e2e4e6",
                              color: "#636973",
                              textTransform: "none",
                            }}
                          >
                            Amazon and Alibaba Group share similar
                            characteristics
                          </Button>
                        </Box>
                      </Box>
                      <Typography sx={{ color: "#636973", fontSize: "12px" }}>
                        Alibaba Group enables businesses to transform the way
                        they market, sell, operate, and improve their
                        efficiencies.
                      </Typography>
                    </Box>
                    <Divider />
                    {/* Alibaba Group */}
                    <Box sx={{ my: 3 }}>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          mb: 2,
                          py: 2,
                          pb: 0,
                        }}
                      >
                        <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              justifyContent: "space-between",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "15px",
                                color: "#636973",
                                ml: 2,
                              }}
                            >
                              Alibaba Group
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#636973",
                                ml: 2,
                              }}
                            >
                              BABA
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Button
                            variant="contained"
                            sx={{
                              fontSize: "14px",
                              backgroundColor: "#969899",
                              color: "#fff",
                              fontWeight: "bold",
                              whiteSpace: "nowrap",
                              textTransform: "none",
                            }}
                            startIcon={<AddIcon />}
                          >
                            Add to Watchlist
                          </Button>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          <Chip label="Association" />
                          <Chip label="B2B" />
                          <Chip label="Information Technology" />
                          <Chip label="Shopping" />
                        </Stack>

                        <Box>
                          <Button
                            variant="contained"
                            sx={{
                              fontSize: "12px",
                              backgroundColor: "#e2e4e6",
                              color: "#636973",
                              textTransform: "none",
                            }}
                          >
                            Amazon and Alibaba Group share similar
                            characteristics
                          </Button>
                        </Box>
                      </Box>
                      <Typography sx={{ color: "#636973", fontSize: "12px" }}>
                        Alibaba Group enables businesses to transform the way
                        they market, sell, operate, and improve their
                        efficiencies.
                      </Typography>
                    </Box>
                    <Divider />
                    {/* Alibaba Group */}
                    <Box sx={{ my: 3 }}>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          mb: 2,
                          py: 2,
                          pb: 0,
                        }}
                      >
                        <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              justifyContent: "space-between",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "15px",
                                color: "#636973",
                                ml: 2,
                              }}
                            >
                              Alibaba Group
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#636973",
                                ml: 2,
                              }}
                            >
                              BABA
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Button
                            variant="contained"
                            sx={{
                              fontSize: "14px",
                              backgroundColor: "#969899",
                              color: "#fff",
                              fontWeight: "bold",
                              whiteSpace: "nowrap",
                              textTransform: "none",
                            }}
                            startIcon={<AddIcon />}
                          >
                            Add to Watchlist
                          </Button>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          <Chip label="Association" />
                          <Chip label="B2B" />
                          <Chip label="Information Technology" />
                          <Chip label="Shopping" />
                        </Stack>

                        <Box>
                          <Button
                            variant="contained"
                            sx={{
                              fontSize: "12px",
                              backgroundColor: "#e2e4e6",
                              color: "#636973",
                              textTransform: "none",
                            }}
                          >
                            Amazon and Alibaba Group share similar
                            characteristics
                          </Button>
                        </Box>
                      </Box>
                      <Typography sx={{ color: "#636973", fontSize: "12px" }}>
                        Alibaba Group enables businesses to transform the way
                        they market, sell, operate, and improve their
                        efficiencies.
                      </Typography>
                    </Box>
                    <Divider />
                    {/* Alibaba Group */}
                    <Box sx={{ my: 3 }}>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          mb: 2,
                          py: 2,
                          pb: 0,
                        }}
                      >
                        <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              justifyContent: "space-between",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "15px",
                                color: "#636973",
                                ml: 2,
                              }}
                            >
                              Alibaba Group
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#636973",
                                ml: 2,
                              }}
                            >
                              BABA
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Button
                            variant="contained"
                            sx={{
                              fontSize: "14px",
                              backgroundColor: "#969899",
                              color: "#fff",
                              fontWeight: "bold",
                              whiteSpace: "nowrap",
                              textTransform: "none",
                            }}
                            startIcon={<AddIcon />}
                          >
                            Add to Watchlist
                          </Button>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          <Chip label="Association" />
                          <Chip label="B2B" />
                          <Chip label="Information Technology" />
                          <Chip label="Shopping" />
                        </Stack>

                        <Box>
                          <Button
                            variant="contained"
                            sx={{
                              fontSize: "12px",
                              backgroundColor: "#e2e4e6",
                              color: "#636973",
                              textTransform: "none",
                            }}
                          >
                            Amazon and Alibaba Group share similar
                            characteristics
                          </Button>
                        </Box>
                      </Box>
                      <Typography sx={{ color: "#636973", fontSize: "12px" }}>
                        Alibaba Group enables businesses to transform the way
                        they market, sell, operate, and improve their
                        efficiencies.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/* Recommendations */}
                <Box
                  width={"30%"}
                  sx={{
                    backgroundColor: "#eef0f2",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Investors List */}
                  <Box>
                    <Box>
                      <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                        Recommendations
                      </Typography>
                      {/* Alibaba Group */}
                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            alignItems: "center",
                            display: "flex",
                            mb: 2,
                            py: 2,
                            pb: 0,
                          }}
                        >
                          <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Box
                              sx={{
                                justifyContent: "space-between",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "15px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                Alibaba Group
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                BABA
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Button
                              variant="contained"
                              sx={{
                                fontSize: "14px",
                                backgroundColor: "#969899",
                                color: "#fff",
                                fontWeight: "bold",
                                px: 0,
                                ml: 2,
                                textTransform: "none",
                              }}
                            >
                              Add
                            </Button>
                          </Box>
                        </Box>

                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          <Chip label="Association" />
                          <Chip label="B2B" />
                          <Chip label="Information Technology" />
                          <Chip label="Shopping" />
                        </Stack>
                        <Typography sx={{ color: "#636973", fontSize: "12px" }}>
                          Alibaba Group enables businesses to transform the way
                          they market, sell, operate, and improve their
                          efficiencies.
                        </Typography>
                      </Box>
                      {/* Alibaba Group */}
                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            alignItems: "center",
                            display: "flex",
                            mb: 2,
                            py: 2,
                            pb: 0,
                          }}
                        >
                          <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Box
                              sx={{
                                justifyContent: "space-between",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "15px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                Alibaba Group
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                BABA
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Button
                              variant="contained"
                              sx={{
                                fontSize: "14px",
                                backgroundColor: "#969899",
                                color: "#fff",
                                fontWeight: "bold",
                                px: 0,
                                ml: 2,
                                textTransform: "none",
                              }}
                            >
                              Add
                            </Button>
                          </Box>
                        </Box>

                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          <Chip label="Association" />
                          <Chip label="B2B" />
                          <Chip label="Information Technology" />
                          <Chip label="Shopping" />
                        </Stack>
                        <Typography sx={{ color: "#636973", fontSize: "12px" }}>
                          Alibaba Group enables businesses to transform the way
                          they market, sell, operate, and improve their
                          efficiencies.
                        </Typography>
                      </Box>
                      {/* Alibaba Group */}
                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            alignItems: "center",
                            display: "flex",
                            mb: 2,
                            py: 2,
                            pb: 0,
                          }}
                        >
                          <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Box
                              sx={{
                                justifyContent: "space-between",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "15px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                Alibaba Group
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                BABA
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Button
                              variant="contained"
                              sx={{
                                fontSize: "14px",
                                backgroundColor: "#969899",
                                color: "#fff",
                                fontWeight: "bold",
                                px: 0,
                                ml: 2,
                                textTransform: "none",
                              }}
                            >
                              Add
                            </Button>
                          </Box>
                        </Box>

                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          <Chip label="Association" />
                          <Chip label="B2B" />
                          <Chip label="Information Technology" />
                          <Chip label="Shopping" />
                        </Stack>
                        <Typography sx={{ color: "#636973", fontSize: "12px" }}>
                          Alibaba Group enables businesses to transform the way
                          they market, sell, operate, and improve their
                          efficiencies.
                        </Typography>
                      </Box>
                      {/* Alibaba Group */}
                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            alignItems: "center",
                            display: "flex",
                            mb: 2,
                            py: 2,
                            pb: 0,
                          }}
                        >
                          <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Box
                              sx={{
                                justifyContent: "space-between",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "15px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                Alibaba Group
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color: "#636973",
                                  ml: 2,
                                }}
                              >
                                BABA
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Button
                              variant="contained"
                              sx={{
                                fontSize: "14px",
                                backgroundColor: "#969899",
                                color: "#fff",
                                fontWeight: "bold",
                                px: 0,
                                ml: 2,
                                textTransform: "none",
                              }}
                            >
                              Add
                            </Button>
                          </Box>
                        </Box>

                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          <Chip label="Association" />
                          <Chip label="B2B" />
                          <Chip label="Information Technology" />
                          <Chip label="Shopping" />
                        </Stack>
                        <Typography sx={{ color: "#636973", fontSize: "12px" }}>
                          Alibaba Group enables businesses to transform the way
                          they market, sell, operate, and improve their
                          efficiencies.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={tabValue} index={1}>
              {/* Traffic &  Table (1) */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ backgroundColor: "#eef0f2", p: 3 }}>
                  {/* Title */}
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                      Traffic
                    </Typography>
                    <Box
                      sx={{
                        ".MuiOutlinedInput-input": {
                          py: 0,
                          textAlign: "left",
                        },
                      }}
                    >
                      <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <Select
                          value={age}
                          onChange={handleChange}
                          displayEmpty
                          sx={{ color: "#636973" }}
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value={10}>Apple Music</MenuItem>
                          <MenuItem value={20}>Melon Music</MenuItem>
                        </Select>
                        {/* <FormHelperText>Without label</FormHelperText> */}
                      </FormControl>
                    </Box>
                  </Box>

                  {/* Line Chart */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "300px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    <TrafficLineChart />
                  </Box>
                  <Box>
                    <TrafficTable />
                  </Box>
                </Box>
              </Box>
              {/* Apple TV */}
              <Box sx={{ my: 3 }}>
                <Box sx={{ backgroundColor: "#eef0f2", p: 3 }}>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      mb: 2,
                      py: 2,
                      pb: 0,
                    }}
                  >
                    <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />
                    {/* Apple TV Title */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      {/* Title */}
                      <Box
                        sx={{
                          justifyContent: "space-between",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "15px",
                            color: "#636973",
                            ml: 2,
                          }}
                        >
                          Apple TV
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#636973",
                            ml: 2,
                          }}
                        >
                          Feb 16, 2021
                        </Typography>
                      </Box>
                      {/* Download Button */}
                      <Box>
                        <Button
                          sx={{
                            borderBottom: "1px solid #969899",
                            borderRadius: 0,
                            fontSize: "12px",
                            color: "#636973",
                            px: 0,
                            ml: 2,
                          }}
                          startIcon={<AddIcon />}
                        >
                          Download
                        </Button>
                        <Button
                          sx={{
                            borderBottom: "1px solid #969899",
                            borderRadius: 0,
                            fontSize: "12px",
                            color: "#636973",
                            px: 0,
                            ml: 2,
                          }}
                          startIcon={<AddIcon />}
                        >
                          Download
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  {/* Apple TV Description */}
                  <Box>
                    <Typography sx={{ color: "#636973", fontSize: "14px" }}>
                      Watch Apple TV+, movies, and more.Get all your favorite
                      TV, all in one app. Watch exclusive Apple Originals from
                      Apple TV+. Watch new and popular movies and premium
                      channels. All curated and personalized to you.Features •
                      The Apple TV app is the home of Apple TV+, the first
                      all-original video subscriptionservice that offers an
                      award-winning and inspiring lineup of original series,
                      films, and now, sports, beginning with “Friday Night
                      Baseball”. Subscribers can enjoy Apple Originals,
                      including series like “Ted Lasso”, ...
                    </Typography>
                  </Box>
                  {/* Read more */}

                  <Button
                    sx={{
                      color: "#636973",
                      fontWeight: "bold",
                      textTransform: "none",
                      borderBottom: "2px solid #636973",
                      px: 0,
                      pb: 0,
                      borderRadius: 0,
                    }}
                  >
                    Read more
                  </Button>
                  {/* Google Play & App Store */}
                  <Box sx={{ mt: 4, mb: 3 }}>
                    <Button
                      variant="contained"
                      sx={{
                        borderBottom: "1px solid #969899",
                        fontSize: "12px",
                        color: "#fff",
                        textTransform: "none",
                      }}
                      startIcon={<AddIcon />}
                    >
                      Google Play
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderBottom: "1px solid #969899",
                        fontSize: "12px",
                        textTransform: "none",
                        ml: 2,
                      }}
                      startIcon={<AddIcon />}
                    >
                      App Store
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      height: "300px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: "70%", mr: 3 }}>
                      <Box sx={{ backgroundColor: "#e2e4e6", p: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              color: "#636973",
                              fontSize: "18px",
                            }}
                          >
                            10,929
                          </Typography>
                          <Typography
                            sx={{ fontSize: 14, ml: 1, color: "#636973" }}
                          >
                            Monthly Downloads
                          </Typography>
                        </Box>
                        <Box sx={{ height: "249px" }}>
                          <TrafficLineChart />
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ width: "30%", height: "auto" }}>
                      <Box sx={{ backgroundColor: "#e2e4e6", p: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                color: "#636973",
                                fontSize: "18px",
                              }}
                            >
                              4.8
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14, ml: 1, color: "#636973" }}
                            >
                              Rating (Max 5)
                            </Typography>
                          </Box>
                          <Typography sx={{ fontSize: 12, color: "#636973" }}>
                            Total 54,460
                          </Typography>
                        </Box>
                        {/* ***** 70% */}
                        <Box
                          sx={{
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography sx={{ mr: 1, fontWeight: "bold" }}>
                              *****
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#d5d7d9",
                              width: "100%",
                              color: "#f3f5f7",
                              borderRadius: "5px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "#c8cacc",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                width: "70%",
                              }}
                            ></Box>
                            <Typography
                              sx={{ p: 0.4, boxSizing: "border-box" }}
                            >
                              70%
                            </Typography>
                          </Box>
                        </Box>
                        {/* ***** 15% */}
                        <Box
                          sx={{
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography sx={{ mr: 1, fontWeight: "bold" }}>
                              *****
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#d5d7d9",
                              width: "100%",
                              color: "#f3f5f7",
                              borderRadius: "5px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "#c8cacc",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                width: "15%",
                              }}
                            ></Box>
                            <Typography
                              sx={{ p: 0.4, boxSizing: "border-box" }}
                            >
                              15%
                            </Typography>
                          </Box>
                        </Box>
                        {/* ***** 8% */}
                        <Box
                          sx={{
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography sx={{ mr: 1, fontWeight: "bold" }}>
                              *****
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#d5d7d9",
                              width: "100%",
                              color: "#f3f5f7",
                              borderRadius: "5px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "#c8cacc",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                width: "8%",
                              }}
                            ></Box>
                            <Typography
                              sx={{ p: 0.4, boxSizing: "border-box" }}
                            >
                              8%
                            </Typography>
                          </Box>
                        </Box>
                        {/* ***** 2% */}
                        <Box
                          sx={{
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography sx={{ mr: 1, fontWeight: "bold" }}>
                              *****
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#d5d7d9",
                              width: "100%",
                              color: "#f3f5f7",
                              borderRadius: "5px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "#c8cacc",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                width: "2%",
                              }}
                            ></Box>
                            <Typography
                              sx={{ p: 0.4, boxSizing: "border-box" }}
                            >
                              2%
                            </Typography>
                          </Box>
                        </Box>
                        {/* ***** 5% */}
                        <Box
                          sx={{
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography sx={{ mr: 1, fontWeight: "bold" }}>
                              *****
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#d5d7d9",
                              width: "100%",
                              color: "#f3f5f7",
                              borderRadius: "5px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "#c8cacc",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                width: "5%",
                              }}
                            ></Box>
                            <Typography
                              sx={{ p: 0.4, boxSizing: "border-box" }}
                            >
                              5%
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* Apple Music */}
              <Box sx={{ my: 3 }}>
                <Box sx={{ backgroundColor: "#eef0f2", p: 3 }}>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      mb: 2,
                      py: 2,
                      pb: 0,
                    }}
                  >
                    <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />
                    {/* Apple TV Title */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      {/* Title */}
                      <Box
                        sx={{
                          justifyContent: "space-between",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "15px",
                            color: "#636973",
                            ml: 2,
                          }}
                        >
                          Apple Music
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#636973",
                            ml: 2,
                          }}
                        >
                          Nov 10, 2015
                        </Typography>
                      </Box>
                      {/* Download Button */}
                      <Box>
                        <Button
                          sx={{
                            borderBottom: "1px solid #969899",
                            borderRadius: 0,
                            fontSize: "12px",
                            color: "#636973",
                            px: 0,
                            ml: 2,
                          }}
                          startIcon={<AddIcon />}
                        >
                          Download
                        </Button>
                        <Button
                          sx={{
                            borderBottom: "1px solid #969899",
                            borderRadius: 0,
                            fontSize: "12px",
                            color: "#636973",
                            px: 0,
                            ml: 2,
                          }}
                          startIcon={<AddIcon />}
                        >
                          Download
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  {/* Apple TV Description */}
                  <Box>
                    <Typography sx={{ color: "#636973", fontSize: "14px" }}>
                      Watch Apple TV+, movies, and more.Get all your favorite
                      TV, all in one app. Watch exclusive Apple Originals from
                      Apple TV+. Watch new and popular movies and premium
                      channels. All curated and personalized to you.Features •
                      The Apple TV app is the home of Apple TV+, the first
                      all-original video subscriptionservice that offers an
                      award-winning and inspiring lineup of original series,
                      films, and now, sports, beginning with “Friday Night
                      Baseball”. Subscribers can enjoy Apple Originals,
                      including series like “Ted Lasso”, ...
                    </Typography>
                  </Box>
                  {/*  */}

                  <Button
                    sx={{
                      color: "#636973",
                      fontWeight: "bold",
                      textTransform: "none",
                      borderBottom: "2px solid #636973",
                      px: 0,
                      pb: 0,
                      borderRadius: 0,
                    }}
                  >
                    Read more
                  </Button>
                  {/* Google Play & App Store */}
                  <Box sx={{ mt: 4, mb: 3 }}>
                    <Button
                      variant="contained"
                      sx={{
                        borderBottom: "1px solid #969899",
                        fontSize: "12px",
                        color: "#fff",
                        textTransform: "none",
                      }}
                      startIcon={<AddIcon />}
                    >
                      Google Play
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderBottom: "1px solid #969899",
                        fontSize: "12px",
                        textTransform: "none",
                        ml: 2,
                      }}
                      startIcon={<AddIcon />}
                    >
                      App Store
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      height: "300px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: "70%", mr: 3 }}>
                      <Box sx={{ backgroundColor: "#e2e4e6", p: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              color: "#636973",
                              fontSize: "18px",
                            }}
                          >
                            10,929
                          </Typography>
                          <Typography
                            sx={{ fontSize: 14, ml: 1, color: "#636973" }}
                          >
                            Monthly Downloads
                          </Typography>
                        </Box>
                        <Box sx={{ height: "249px" }}>
                          <TrafficLineChart />
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ width: "30%", height: "auto" }}>
                      <Box sx={{ backgroundColor: "#e2e4e6", p: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                color: "#636973",
                                fontSize: "18px",
                              }}
                            >
                              4.8
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14, ml: 1, color: "#636973" }}
                            >
                              Rating (Max 5)
                            </Typography>
                          </Box>
                          <Typography sx={{ fontSize: 12, color: "#636973" }}>
                            Total 54,460
                          </Typography>
                        </Box>
                        {/* ***** 70% */}
                        <Box
                          sx={{
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography sx={{ mr: 1, fontWeight: "bold" }}>
                              *****
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#d5d7d9",
                              width: "100%",
                              color: "#f3f5f7",
                              borderRadius: "5px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "#c8cacc",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                width: "70%",
                              }}
                            ></Box>
                            <Typography
                              sx={{ p: 0.4, boxSizing: "border-box" }}
                            >
                              70%
                            </Typography>
                          </Box>
                        </Box>
                        {/* ***** 15% */}
                        <Box
                          sx={{
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography sx={{ mr: 1, fontWeight: "bold" }}>
                              *****
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#d5d7d9",
                              width: "100%",
                              color: "#f3f5f7",
                              borderRadius: "5px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "#c8cacc",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                width: "15%",
                              }}
                            ></Box>
                            <Typography
                              sx={{ p: 0.4, boxSizing: "border-box" }}
                            >
                              15%
                            </Typography>
                          </Box>
                        </Box>
                        {/* ***** 8% */}
                        <Box
                          sx={{
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography sx={{ mr: 1, fontWeight: "bold" }}>
                              *****
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#d5d7d9",
                              width: "100%",
                              color: "#f3f5f7",
                              borderRadius: "5px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "#c8cacc",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                width: "8%",
                              }}
                            ></Box>
                            <Typography
                              sx={{ p: 0.4, boxSizing: "border-box" }}
                            >
                              8%
                            </Typography>
                          </Box>
                        </Box>
                        {/* ***** 2% */}
                        <Box
                          sx={{
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography sx={{ mr: 1, fontWeight: "bold" }}>
                              *****
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#d5d7d9",
                              width: "100%",
                              color: "#f3f5f7",
                              borderRadius: "5px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "#c8cacc",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                width: "2%",
                              }}
                            ></Box>
                            <Typography
                              sx={{ p: 0.4, boxSizing: "border-box" }}
                            >
                              2%
                            </Typography>
                          </Box>
                        </Box>
                        {/* ***** 5% */}
                        <Box
                          sx={{
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography sx={{ mr: 1, fontWeight: "bold" }}>
                              *****
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#d5d7d9",
                              width: "100%",
                              color: "#f3f5f7",
                              borderRadius: "5px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "#c8cacc",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                width: "5%",
                              }}
                            ></Box>
                            <Typography
                              sx={{ p: 0.4, boxSizing: "border-box" }}
                            >
                              5%
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Traffic &  Table (1) */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ backgroundColor: "#eef0f2", p: 3 }}>
                  {/* Title */}
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                      Trading Volume
                    </Typography>
                  </Box>

                  {/* Bar Chart */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "300px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    <TradingBarChart />
                  </Box>
                  <Box>
                    <TrafficTable />
                  </Box>
                </Box>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={tabValue} index={2}>
              {/* Invesetment */}
              <Box
                width={"100%"}
                sx={{
                  backgroundColor: "#eef0f2",
                  p: 3,
                  mb: 3,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                    Investment
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ display: "flex", mr: 2 }}>
                      <Typography
                        sx={{ color: "#636973", mr: 1, fontSize: "14px" }}
                      >
                        Total Investment Cost :
                      </Typography>
                      <Typography
                        sx={{
                          color: "#636973",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        900M
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        sx={{ color: "#636973", mr: 1, fontSize: "14px" }}
                      >
                        Round :
                      </Typography>
                      <Typography
                        sx={{
                          color: "#636973",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        Series B
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <InvestPie />
                </Box>
              </Box>
              {/* Investors */}
              <Box
                width={"100%"}
                sx={{
                  backgroundColor: "#eef0f2",
                  p: 3,
                  mb: 3,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                    Investors
                  </Typography>
                </Box>
                <Box>
                  <InvestorTable />
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
                </Box>
              </Box>
              <FinanicalBox />
            </CustomTabPanel>
            <CustomTabPanel value={tabValue} index={3}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* People */}
                <ProfileBox />
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={tabValue} index={4}>
              {/* Recent News & Activity */}
              <Box
                sx={{
                  backgroundColor: "#eef0f2",
                  p: 3,
                  mb: 3,
                  mr: 3,
                }}
              >
                <NewsBox />
              </Box>
            </CustomTabPanel>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Detail;
