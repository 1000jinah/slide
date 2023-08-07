import React, { useState } from "react";
import { Box, Typography, Button, Divider, IconButton } from "@mui/material";
import CopyEmailButton from "components/CopyEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PeopleInput from "components/PeopleInput";
import JobsTable from "components/Table/JobsTable";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const dataPeopleArr = [
  {
    name: "Tim Cook",
    part: "CEO",
    email: "timcook@apple.com",
    location: "San Francisco, California, United States",
    regions: "San Francisco Bay Area, West Coast, Western US",
    gender: "Male",
    education:
      "Eddy oversees Apple's industry-leading content stores including the iTunes Store, the revolutionary App Store and the iBookstore, as well as Siri, Maps, iAd and Apple's innovative iCloud services. Eddy's team has an...",
    jobs: {
      orgName: ["Compaq", "Intelligent Electronics", "IBM"],
      titleCompany: [
        "VP, Corporate Maaterials",
        "Senior Vice President Fulfilment & Chief Operating Officer of the Reseller Division",
        "Director, North American Fulfillment",
      ],
      startDate: ["1997", "1994", "1983"],
      endDate: ["1998", "1997", "1994"],
    },
  },
  {
    name: "Eddy Cue",
    part: "VP iTunes",
    email: "eddycue@apple.com",
    location: "San Francisco, California, United States",
    regions: "San Francisco Bay Area, West Coast, Western US",
    gender: "Male",
    education:
      "Eddy oversees Apple's industry-leading content stores including the iTunes Store, the revolutionary App Store and the iBookstore, as well as Siri, Maps, iAd and Apple's innovative iCloud services. Eddy's team has an...",
    jobs: {
      orgName: ["Compaq", "Intelligent Electronics", "IBM"],
      titleCompany: [
        "VP, Corporate Maaterials",
        "Senior Vice President Fulfilment & Chief Operating Officer of the Reseller Division",
        "Director, North American Fulfillment",
      ],
      startDate: ["1997", "1994", "1983"],
      endDate: ["1998", "1997", "1994"],
    },
  },
  {
    name: "Dan Riccio",
    part: "SVP, Hardware Engineering",
    email: "dan@apple.com",
    location: "San Francisco, California, United States",
    regions: "San Francisco Bay Area, West Coast, Western US",
    gender: "Male",
    education:
      "Eddy oversees Apple's industry-leading content stores including the iTunes Store, the revolutionary App Store and the iBookstore, as well as Siri, Maps, iAd and Apple's innovative iCloud services. Eddy's team has an...",
    jobs: {
      orgName: ["Compaq", "Intelligent Electronics", "IBM"],
      titleCompany: [
        "VP, Corporate Maaterials",
        "Senior Vice President Fulfilment & Chief Operating Officer of the Reseller Division",
        "Director, North American Fulfillment",
      ],
      startDate: ["1997", "1994", "1983"],
      endDate: ["1998", "1997", "1994"],
    },
  },
  {
    name: "Fei Dong",
    part: "Sr Engineer in Machine Learning",
    email: "feidong@apple.com",
    location: "San Francisco, California, United States",
    regions: "San Francisco Bay Area, West Coast, Western US",
    gender: "Male",
    education:
      "Eddy oversees Apple's industry-leading content stores including the iTunes Store, the revolutionary App Store and the iBookstore, as well as Siri, Maps, iAd and Apple's innovative iCloud services. Eddy's team has an...",
    jobs: {
      orgName: ["Compaq", "Intelligent Electronics", "IBM"],
      titleCompany: [
        "VP, Corporate Maaterials",
        "Senior Vice President Fulfilment & Chief Operating Officer of the Reseller Division",
        "Director, North American Fulfillment",
      ],
      startDate: ["1997", "1994", "1983"],
      endDate: ["1998", "1997", "1994"],
    },
  },
  {
    name: "Jeffery Wear",
    part: "Watch Frameworks Engineer",
    email: "jeffery12@apple.com",
    location: "San Francisco, California, United States",
    regions: "San Francisco Bay Area, West Coast, Western US",
    gender: "Male",
    education:
      "Eddy oversees Apple's industry-leading content stores including the iTunes Store, the revolutionary App Store and the iBookstore, as well as Siri, Maps, iAd and Apple's innovative iCloud services. Eddy's team has an...",
    jobs: {
      orgName: ["Compaq", "Intelligent Electronics", "IBM"],
      titleCompany: [
        "VP, Corporate Maaterials",
        "Senior Vice President Fulfilment & Chief Operating Officer of the Reseller Division",
        "Director, North American Fulfillment",
      ],
      startDate: ["1997", "1994", "1983"],
      endDate: ["1998", "1997", "1994"],
    },
  },

  {
    name: "Bruce Sewell",
    part: "Senior Vice President & General Counsel",
    email: "brucesewell@apple.com",
    location: "San Francisco, California, United States",
    regions: "San Francisco Bay Area, West Coast, Western US",
    gender: "Male",
    education:
      "Eddy oversees Apple's industry-leading content stores including the iTunes Store, the revolutionary App Store and the iBookstore, as well as Siri, Maps, iAd and Apple's innovative iCloud services. Eddy's team has an...",
    jobs: {
      orgName: ["Compaq", "Intelligent Electronics", "IBM"],
      titleCompany: [
        "VP, Corporate Maaterials",
        "Senior Vice President Fulfilment & Chief Operating Officer of the Reseller Division",
        "Director, North American Fulfillment",
      ],
      startDate: ["1997", "1994", "1983"],
      endDate: ["1998", "1997", "1994"],
    },
  },
  {
    name: "Max Awad",
    part: "Sr. Software Engineer",
    email: "maxawad@apple.com",
    location: "San Francisco, California, United States",
    regions: "San Francisco Bay Area, West Coast, Western US",
    gender: "Male",
    education:
      "Eddy oversees Apple's industry-leading content stores including the iTunes Store, the revolutionary App Store and the iBookstore, as well as Siri, Maps, iAd and Apple's innovative iCloud services. Eddy's team has an...",
    jobs: {
      orgName: ["Compaq", "Intelligent Electronics", "IBM"],
      titleCompany: [
        "VP, Corporate Maaterials",
        "Senior Vice President Fulfilment & Chief Operating Officer of the Reseller Division",
        "Director, North American Fulfillment",
      ],
      startDate: ["1997", "1994", "1983"],
      endDate: ["1998", "1997", "1994"],
    },
  },
];
// Profile Table Props
function createData(location, foundDate, status, round, employees) {
  return { location, foundDate, status, round, employees };
}
const ProfileBox = () => {
  const [selectedPerson, setSelectedPerson] = useState(dataPeopleArr[0]);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#f3f5f7",
      }}
    >
      {/* Profile List */}
      <Box
        sx={{ width: "50%", p: 3, mb: 3, mr: 3, backgroundColor: "#eef0f2" }}
      >
        {/* People Title */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
            People
          </Typography>
          <Typography sx={{ color: "#636973", fontSize: "14px" }}>
            Employee Profiles: {dataPeopleArr.length}
          </Typography>
        </Box>
        {/* People Searchbar */}
        <Box sx={{ mb: 3 }}>
          <PeopleInput />
        </Box>
        {/* People List */}
        {dataPeopleArr.map((person, index) => (
          <Box
            key={index}
            sx={{ cursor: "pointer" }}
            onClick={() => handlePersonClick(person)}
          >
            <Box sx={{ display: "flex", mb: 3 }}>
              <Box sx={{ p: 3, backgroundColor: "#c8cacc" }} />
              {/* Profile */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {/* Title */}
                <Box sx={{ display: "flex" }}>
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
                      {person.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#636973",
                        ml: 2,
                      }}
                    >
                      {person.part}
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 1 }}>
                    <LinkedInIcon sx={{ width: 14, color: "#c8cacc" }} />
                    <TwitterIcon
                      sx={{
                        width: 14,
                        ml: 1,
                        color: "#c8cacc",
                      }}
                    />
                  </Box>
                </Box>
                {/* Email */}
                <Box>
                  <CopyEmailButton copyEmailLink={person.email} />
                </Box>
                {/* Download Button */}
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "#636973",
                      backgroundColor: "#c8cacc",
                      py: 0.3,
                      textTransform: "none",
                    }}
                  >
                    Add
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      {/* Profile Table */}
      <Box sx={{ width: "50%", p: 3, mb: 3, backgroundColor: "#eef0f2" }}>
        {selectedPerson && (
          <>
            <Box sx={{ display: "flex", mb: 3 }}>
              <Box sx={{ p: 5, backgroundColor: "#c8cacc" }} />
              {/* Profile */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {/* Title */}
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "stretch",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Box
                        sx={{
                          justifyContent: "space-around",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              color: "#636973",
                              ml: 2,
                            }}
                          >
                            {selectedPerson.name}
                          </Typography>
                          <Box
                            sx={{
                              ml: 1,
                              display: "flex",
                            }}
                          >
                            <LinkedInIcon
                              sx={{ width: 24, color: "#c8cacc" }}
                            />
                            <TwitterIcon
                              sx={{
                                width: 24,
                                ml: 1,
                                color: "#c8cacc",
                              }}
                            />
                          </Box>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#636973",
                            ml: 2,
                          }}
                        >
                          {selectedPerson.part}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

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
            </Box>
            {/* Location & Regions & Gender  */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {/* Location */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{ color: "#636973", fontWeight: "bold", mb: 3 }}
                >
                  Location
                </Typography>
                <Typography sx={{ color: "#636973", fontSize: "14px" }}>
                  {selectedPerson.location}
                </Typography>
              </Box>
              {/* Regions */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{ color: "#636973", fontWeight: "bold", mb: 3 }}
                >
                  Regions
                </Typography>
                <Typography sx={{ color: "#636973", fontSize: "14px" }}>
                  {selectedPerson.regions}
                </Typography>
              </Box>
            </Box>
            {/* Gender */}
            <Box sx={{ mb: 4 }}>
              <Typography sx={{ color: "#636973", fontWeight: "bold", mb: 3 }}>
                Gender
              </Typography>
              <Typography sx={{ color: "#636973", fontSize: "14px" }}>
                {selectedPerson.gender}
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
              <Typography sx={{ color: "#636973", fontSize: "14px" }}>
                {selectedPerson.education}
              </Typography>
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
            </Box>
            <Divider />
            {/* Education */}
            <Box sx={{ mt: 6, mb: 4 }}>
              <Typography sx={{ color: "#636973", fontWeight: "bold", mb: 1 }}>
                Education
              </Typography>
              <Typography sx={{ color: "#636973", fontSize: "14px" }}>
                Eddy Cue studied at New Jersey Institute of Technology
              </Typography>
              <Typography sx={{ color: "#636973", fontSize: "14px" }}>
                Sep 9, 2015 ~ May 15, 2018
              </Typography>
            </Box>

            <Box sx={{ display: "flex", mb: 4 }}>
              <Box sx={{ p: 3.5, backgroundColor: "#c8cacc" }} />
              {/* Profile */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {/* Title */}
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      justifyContent: "space-around",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#636973",
                        ml: 2,
                      }}
                    >
                      New Jersey Institute of Technology
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#636973",
                        ml: 2,
                      }}
                    >
                      Computer Science
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              {/* Jobs */}
              <Typography sx={{ color: "#636973", fontWeight: "bold", mb: 1 }}>
                Jobs
              </Typography>
              <JobsTable />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ProfileBox;
