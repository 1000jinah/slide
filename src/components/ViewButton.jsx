import * as React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Box,
  Dialog,
  Typography,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AboutTable from "components/Table/AboutTable";
import { Link } from "react-router-dom";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [selectedBox, setSelectedBox] = React.useState(null);
  const handleBoxClick = (index) => {
    if (selectedBox === index) {
      setSelectedBox(null); // 이미 클릭된 Box라면 border 해제
    } else {
      setSelectedBox(index); // 새로 클릭된 Box에 border 설정
    }
  };

  const boxes = new Array(4).fill(null); // 4개의 Box 생성
  const handleClose = () => {
    onClose(selectedValue);
  };
  // Industries Chips
  const chips = [
    "Consumer Electronics",
    "Hardware",
    "Mobile Devices",
    "Operating Systems",
    "Wearables",
  ];
  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="lg">
      {/* About & PitchBook Slide (5:5) */}
      <Box sx={{ display: "flex", borderBottom: "1px solid #e2e4e6" }}>
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
            <IconButton aria-label="before" sx={{ backgroundColor: "#c8cacc" }}>
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton aria-label="delete" sx={{ backgroundColor: "#c8cacc" }}>
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
            ></Box>
          </Box>
        </Box>
        {/* About */}
        <Box
          sx={{
            backgroundColor: "#eef0f2",
            p: 3,

            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            {/* Title */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ p: 3, backgroundColor: "#c8cacc" }}></Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",

                    color: "#636973",
                    ml: 2,
                  }}
                >
                  Apple Inc.
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,

                    color: "#636973",
                    ml: 2,
                  }}
                >
                  AAPL
                </Typography>
              </Box>
            </Box>
            {/* Company Details */}
            <Link to="/detail">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#969899",
                  width: "160px",
                  textTransform: "capitalize",
                  ":hover": {
                    backgroundColor: "#969899",
                  },
                }}
              >
                Company Details
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "#636973", fontWeight: "bold" }}>
              About
            </Typography>

            {/* Edit Button */}
          </Box>
          <Typography sx={{ color: "#636973", fontSize: "14px", mr: 1 }}>
            Apple is a corporation that designs, manufactures, and markets
            <br /> consumer electronics, personal computers, and software.
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
              <Typography
                sx={{ fontSize: "0.875rem", mb: 1.5, fontWeight: "bold" }}
              >
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
      </Box>
      <Box
        sx={{
          display: "flex",
          p: 3,
          backgroundColor: "#eef0f2",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {boxes.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 260,
              height: 140,
              backgroundColor: "#e2e4e6",

              border: index === selectedBox ? "5px solid #fff" : "none", // 선택된 Box에 border 추가
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={() => handleBoxClick(index)} // 클릭 시 handleBoxClick 함수 호출
          ></Box>
        ))}
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ViewButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{
          backgroundColor: "#c8cacc",
          color: "#636973",
          textTransform: "capitalize",
          p: 0,

          ":hover": {
            backgroundColor: "#c8cacc",
          },
        }}
      >
        View
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
