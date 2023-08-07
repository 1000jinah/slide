import * as React from "react";
import {
  // Table,
  // TableBody,
  // TableCell,
  // TableRow,
  // TableHead,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import JobsTable from "components/Table/JobsTable";

// Profile Table Props
function createData(location, foundDate, status, round, employees) {
  return { location, foundDate, status, round, employees };
}

// Profile Table Data
// const rows = [
//   createData(
//     "Unite State of America",
//     "Apr 1, 1976",
//     "An unlisted company",
//     "Series B",
//     "12"
//   ),
// ];

export default function ProfileTable() {
  return (
    <Box>
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
          <Typography sx={{ color: "#636973", fontWeight: "bold", mb: 3 }}>
            Location
          </Typography>
          <Typography sx={{ color: "#636973", fontSize: "14px" }}>
            San Francisco, California, United States
          </Typography>
        </Box>
        {/* Regions */}
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ color: "#636973", fontWeight: "bold", mb: 3 }}>
            Regions
          </Typography>
          <Typography sx={{ color: "#636973", fontSize: "14px" }}>
            San Francisco Bay Area, West Coast, Western US
          </Typography>
        </Box>
      </Box>
      {/* Gender */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ color: "#636973", fontWeight: "bold", mb: 3 }}>
          Gender
        </Typography>
        <Typography sx={{ color: "#636973", fontSize: "14px" }}>
          Male
        </Typography>
      </Box>
      <Box sx={{ mb: 6 }}>
        <Typography sx={{ color: "#636973", fontSize: "14px" }}>
          Eddy oversees Apple's industry-leading content stores including the
          iTunes Store, the revolutionary App Store and the iBookstore, as well
          as Siri, Maps, iAd and Apple's innovative iCloud services. Eddy's team
          has an...
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
        {/* Jobss */}
        <Typography sx={{ color: "#636973", fontWeight: "bold", mb: 1 }}>
          Jobs
        </Typography>
        <JobsTable />
      </Box>
    </Box>
  );
}
