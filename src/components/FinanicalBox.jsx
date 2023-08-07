import React from "react";
import { Box, Typography } from "@mui/material";
import FinancialBar from "components/Chart/FinancialBar";

const barDataArr = [
  { title: "Revenue", data: [4, 4.5, 5, 6, 14, 15] },
  { title: "Operating Income", data: [8, 9, 10, 11, 12, 13] },
  { title: "Net Income", data: [8, 9, 10, 11, 12, 13] },
  { title: "Asset", data: [4, 4.5, 5, 6, 14, 15] },
  { title: "Liability", data: [8, 9, 10, 11, 12, 13] },
  { title: "Equity", data: [4, 4.5, 5, 6, 14, 15] },
];

const FinanicalBox = () => {
  return (
    <div>
      <Box width={"100%"} sx={{}}>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {barDataArr.map((data, index) => (
              <Box sx={{ backgroundColor: "#eef0f2", p: 3, mb: 3 }}>
                <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
                  {data.title}
                </Typography>

                <Box>
                  <div
                    key={index}
                    style={{ width: "430px", height:"300px", marginBottom: "20px" }}
                  >
                    <FinancialBar data={data} />
                  </div>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default FinanicalBox;
