import React from "react";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Button,
  Input,
  Slider,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function valuetext(value) {
  const scaledValue = Math.round((value - 1) * 100) + 1;
  return `${scaledValue}`;
}

const sideFilter = [
  {
    name: "Overview",
    clear: "Clear",
    description: "Description Keywords",
    keyInputPlaceholder: "E.g. 'RegTech', 'Account-based'",
    employees: "Number of Employees",
    founded: "Founded",
    past: [
      "Past 30 Days",
      "Past 60 Days",
      "Past 90 Days",
      "Past Year",
      "Custom Date Range",
    ],
  },
  {
    name: "People",
    clear: "Clear",
    description: "Description Keywords",
    keyInputPlaceholder: "E.g. 'RegTech', 'Account-based'",
    employees: "Number of Employees",
    founded: "Founded",
    past: [
      "Past 30 Days",
      "Past 60 Days",
      "Past 90 Days",
      "Past Year",
      "Custom Date Range",
    ],
  },
  {
    name: "Financials",
    clear: "Clear",
    description: "Description Keywords",
    keyInputPlaceholder: "E.g. 'RegTech', 'Account-based'",
    employees: "Number of Employees",
    founded: "Founded",
    past: [
      "Past 30 Days",
      "Past 60 Days",
      "Past 90 Days",
      "Past Year",
      "Custom Date Range",
    ],
  },
  {
    name: "Company Status",
    clear: "Clear",
    description: "Description Keywords",
    keyInputPlaceholder: "E.g. 'RegTech', 'Account-based'",
    employees: "Number of Employees",
    founded: "Founded",
    past: [
      "Past 30 Days",
      "Past 60 Days",
      "Past 90 Days",
      "Past Year",
      "Custom Date Range",
    ],
  },
];

const marks = [
  {
    value: 1,
    // label: "1",
  },
  {
    value: 100,
    // label: "10001+",
  },
];

const ariaLabel = { "aria-label": "description" };
const SideFilter = () => {
  const [expanded, setExpanded] = React.useState(false); // Accordion
  const [slideValue, setSlideValue] = React.useState([1, 10001]); // Slider
  const [radioValue, setRadioValue] = React.useState(""); // Radio
  function valuetext(value) {
    const scaledValue = Math.round((value - 1) * 100) + 1;
    return `${scaledValue}`;
  }
  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };
  //   const handleTabChange = (event, newValue) => {
  //     setTabValue(newValue);
  //   };

  const handleAccordChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSlideChange = (event, newValue) => {
    setSlideValue(newValue);
  };
  return (
    <div>
      {sideFilter.map((filter, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Accordion
            sx={{
              boxShadow: "none",
              width: "250px",

              borderRadius: 0,
              backgroundColor: "#f3f5f7",
              border: "1px solid #c8cacc",
            }}
            expanded={expanded === `panel${index}`}
            onChange={handleAccordChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ fontWeight: "bold", color: "#636973" }}>
                {filter.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Description Keywords */}
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ color: "#636973" }}>
                    {filter.description}
                  </Typography>
                  <Button
                    sx={{ textTransform: "capitalize", color: "#636973" }}
                  >
                    {filter.clear}
                  </Button>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Input
                    placeholder="E.g. 'RegTech', 'Account-based'"
                    inputProps={ariaLabel}
                    sx={{ border: "1px solid #c8cacc", width: "100%" }}
                  />
                </Box>
              </Box>
              {/* Number of Employees */}
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ color: "#636973" }}>
                    {filter.employees}
                  </Typography>
                  <Button
                    sx={{ textTransform: "capitalize", color: "#636973" }}
                  >
                    {filter.clear}
                  </Button>
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ color: "#636973" }}>1</Typography>
                    <Typography sx={{ color: "#636973" }}>10001+</Typography>
                  </Box>
                  <Slider
                    aria-label="employees"
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    value={slideValue}
                    onChange={handleSlideChange}
                    min={1}
                    max={10001}
                    marks={marks}
                  />
                  {/* <Slider
            aria-label="Temperature"
            defaultValue={30}
            valueLabelDisplay="auto"
            disabled
            marks={marks}
          /> */}
                </Box>
              </Box>
              <Box sx={{ width: "100%" }}></Box>
              {/* Founded */}
              <Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ color: "#636973" }}>
                      {filter.founded}
                    </Typography>
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        color: "#636973",
                      }}
                    >
                      {filter.clear}
                    </Button>
                  </Box>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={radioValue}
                      onChange={handleRadioChange}
                    >
                      <FormControlLabel
                        value={filter.past[0]}
                        control={<Radio />}
                        label={filter.past[0]}
                      />
                      <FormControlLabel
                        value={filter.past[1]}
                        control={<Radio />}
                        label={filter.past[1]}
                      />
                      <FormControlLabel
                        value={filter.past[2]}
                        control={<Radio />}
                        label={filter.past[2]}
                      />
                      <FormControlLabel
                        value={filter.past[3]}
                        control={<Radio />}
                        label={filter.past[3]}
                      />
                      <FormControlLabel
                        value={filter.past[4]}
                        control={<Radio />}
                        label={filter.past[4]}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </div>
  );
};

export default SideFilter;
