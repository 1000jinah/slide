import React, { useState } from "react";
import {
  Button,
  Typography,
  Divider,
  Box,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Alert,
  TextField,
} from "@mui/material";
import { grey } from "@mui/material/colors";
const HeaderSearchBar = () => {
  const [companyName, setCompanyName] = useState("");
  const [industries, setIndustries] = useState("");
  const [fundingRound, setFundingRound] = useState("All");
  const [financials, setFinancials] = useState("All");
  const [selectedInput, setSelectedInput] = useState(null);
  const [showList, setShowList] = useState(false);
  const [selectedNames, setSelectedNames] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [compareValue, setCompareValue] = useState("");
  const [financialsData, setFinancialsData] = useState([]);
  const [minValues, setMinValues] = useState([]);
  const [maxValues, setMaxValues] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(10);

  function createCompanyData(
    name,
    country,
    type,
    revenue,
    employees,
    viewProfile,
    addToSearch
  ) {
    return {
      name,
      country,
      type,
      revenue,
      employees,
      viewProfile,
      addToSearch,
    };
  }

  const inputData = [
    {
      label: "Revenue",
      minPlaceholder: "Min",
      maxPlaceholder: "Max",
      type: "Million ($)",
    },
    {
      label: "EBITDA",
      minPlaceholder: "Min",
      maxPlaceholder: "Max",
      type: "Million ($)",
    },
    {
      label: "EBIT",
      minPlaceholder: "Min",
      maxPlaceholder: "Max",
      type: "Million ($)",
    },
    {
      label: "Market Cap",
      minPlaceholder: "Min",
      maxPlaceholder: "Max",
      type: "Million ($)",
    },
    // Add more objects as needed
  ];

  const rows = [
    createCompanyData(
      "Apple Flavor & Fragrance Group Co Ltd",
      "CHN",
      "Public",
      "$ 464.14m",
      "1,230",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Apple Hospitality REIT Inc",
      "USA",
      "Public",
      "$ 1,238.42m",
      "63",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Apple Inc",
      "USA",
      "Public",
      "$ 394.328m",
      "164,000",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Apple International Co Ltd",
      "JPN",
      "Public",
      "$ 222.87m",
      "87",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Apple Rush Co Inc",
      "USA",
      "Public",
      "n.a",
      "n.a",
      "View Profile",
      "Add to Search"
    ),

    createCompanyData(
      "Meta Biomed Co Ltd",
      "KOR",
      "Public",
      "$ 14.59m",
      "252",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Meta Bright Group Bhd",
      "MYS",
      "Public",
      "$ 5.84m",
      "430",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Meta Corp PCL",
      "THA",
      "Public",
      "$ 0.63m",
      "346",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Meta Data Ltd",
      "CHN",
      "Public",
      "$ 2.11m",
      "13,497",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Meta Health Ltd",
      "SGP",
      "Public",
      "$ 25.20m",
      "n.a",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Meta Materials lnc",
      "CAN",
      "Public",
      "$ 10.20m",
      "130",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Meta Media Holdings Ltd",
      "HKG",
      "Public",
      "$ 53.76m",
      "448",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Meta Platforms lnc",
      "USA",
      "Public",
      "$ 116,609m",
      "87,314",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Meta Power International lnc",
      "USA",
      "Public",
      "n.a",
      "n.a",
      "View Profile",
      "Add to Search"
    ),
    createCompanyData(
      "Meta Wolf AG",
      "DEU",
      "Public",
      "$ 23.60m",
      "75",
      "View Profile",
      "Add to Search"
    ),
  ];

  const handleInputClick = (inputName) => {
    if (selectedInput === inputName) {
      // If the clicked input is already selected, apply the Name
      if (inputName === "company") {
        const inputValue = getInputValue("company");
        const clickedValue = rows.find((row) => row.name === inputValue)?.name;
        if (companyName !== clickedValue) {
          setCompanyName(clickedValue);
        }
      }
      setSelectedInput(null);
    } else {
      setSelectedInput(inputName);
    }
    setShowList(true);
  };

  const handleSearch = () => {
    console.log("Search clicked!");
    console.log("Company Name:", companyName);
    console.log("Industries:", industries);
    console.log("Funding Round:", fundingRound);
    console.log("Financials:", financials);
  };

  const handleInputChange = (e, inputName) => {
    const { value } = e.target;
    switch (inputName) {
      case "company":
        setCompanyName(value);
        break;
      case "industries":
        setIndustries(value);
        break;
      case "fundingRound":
        setFundingRound(value);
        break;
      case "financials":
        setFinancials(value);
        break;
      default:
        break;
    }
  };

  const getInputValue = (inputName) => {
    switch (inputName) {
      case "company":
        return companyName;
      case "industries":
        return industries;
      case "fundingRound":
        return fundingRound;
      case "financials":
        return financials;
      default:
        return "";
    }
  };

  const handleAllCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsAllSelected(isChecked);

    if (isChecked) {
      // 전체 선택 시, 모든 아이템을 선택 상태로 설정
      setSelectedItems(investType);
    } else {
      // 전체 해제 시, 선택된 아이템 모두 해제
      setSelectedItems([]);
    }
  };

  const handleCheckboxChange = (item) => (event) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      // Item is a region name
      if (investType[item]) {
        // Find the countries within the region
        const countries = investType[item];

        // Add the region name and countries to selectedItems
        setSelectedItems((prevSelectedItems) => [
          ...prevSelectedItems,
          item,
          ...countries,
        ]);
      } else {
        // Item is a country
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
      }
    } else {
      // Item is a region name
      if (investType[item]) {
        // Find the countries within the region
        const countries = investType[item];

        // Remove the region name and countries from selectedItems
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter(
            (selectedItem) =>
              selectedItem !== item && !countries.includes(selectedItem)
          )
        );
      } else {
        // Item is a country
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter((selectedItem) => selectedItem !== item)
        );
      }
    }
  };

  // Sample items array for 2nd level Accordion
  const investType = [
    "Pre-Seed",
    "Seed",
    "Series A",
    "Series B",
    "Series C",
    "Series D",
    "Series E",
    "Series F",
    "Series G",
    "Series H",
    "Series I",
    "Series J",
    "Venture - Series Unknown",
    "Angel",
    "Private Equity",
    "Debt Financing",
    "Convertible Note",
    "Grant",
    "Corporate Round",
    "Equity Crowdfunding",
    "Product Crowdfunding",
    "Secondary Market",
    "Post-IPO Equity",
    "Post-IPO Debt",
    "Post-IPO Secondary",
    "Non-equity Assistance",
    "Initial Coin Offering",
    "Funding Round",
  ];

  const handleListItemClick = (item, inputName) => {
    setShowList(false);

    // Check if the selected name already exists in selectedNames
    const isDuplicate = selectedNames.some(
      (name) => name.toLowerCase() === item.toLowerCase()
    );

    if (!isDuplicate) {
      setSelectedNames([...selectedNames, item]);

      // Set the selected name as the value of the corresponding input
      switch (inputName) {
        case "company":
          setCompanyName(item);
          break;
        case "industries":
          setIndustries(item);
          break;
        case "fundingRound":
          setFundingRound(item);
          break;
        case "financials":
          setFinancials(item);
          break;
        default:
          break;
      }
    }
  };
  const handleApplyFundingRound = () => {
    if (selectedInput === "fundingRound") {
      const fundingRoundValue = selectedItems.join(", ");
      setFundingRound(fundingRoundValue);
      setShowList(false);
    }

    // Add other functionalities for different inputs if needed

    // Clear selected input
    setSelectedInput(null);
  };

  const handleApplyFinancials = () => {
    const updatedFinancialsData = inputData.map((item, index) => ({
      label: item.label,
      minValue: minValues[index] || null,
      maxValue: maxValues[index] || null,
    }));

    setFinancialsData(updatedFinancialsData);
    console.log(updatedFinancialsData);

    if (selectedInput === "financials") {
      setFinancials("Custom");
      console.log("Selected Financials:", updatedFinancialsData);
      setShowList(false);
    }
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleMinValueChange = (index, value) => {
    const updatedMinValues = [...minValues];
    updatedMinValues[index] = Number(value);
    setMinValues(updatedMinValues);
  };

  const handleMaxValueChange = (index, value) => {
    const updatedMaxValues = [...maxValues];
    updatedMaxValues[index] = Number(value);
    setMaxValues(updatedMaxValues);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        backgroundColor: "#f3f5f7",
        // padding: "0 20px",
        borderRadius: "2.5px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        className={`multiInput ${
          selectedInput === "company" ? "selected" : ""
        }`}
        onClick={() => handleInputClick("company")}
        sx={{ width: 200, py: 0.4, pl: 0.8 }}
      >
        <Typography
          sx={{ fontSize: "13px", color: "#636973", fontWeight: "bold" }}
        >
          Company Name
        </Typography>
        <input
          placeholder={
            selectedInput === "company" ? "" : "Which company do you want?"
          }
          style={{
            width: "100%",
            fontSize: "11px",
            color: "#969899",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
          }}
          type="text"
          value={getInputValue("company")}
          onChange={(e) => handleInputChange(e, "company")}
        />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ my: 1 }} />
      <Box
        className={`multiInput ${
          selectedInput === "industries" ? "selected" : ""
        }`}
        onClick={() => handleInputClick("industries")}
        sx={{ width: 200, py: 0.4, pl: 2.5 }}
      >
        <Typography
          sx={{ fontSize: "13px", color: "#636973", fontWeight: "bold" }}
        >
          Industries
        </Typography>
        <input
          placeholder={selectedInput === "industries" ? "" : "Add industries"}
          style={{
            width: "100%",
            fontSize: "11px",
            color: "#969899",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
          }}
          type="text"
          value={getInputValue("industries")}
          onChange={(e) => handleInputChange(e, "industries")}
        />{" "}
      </Box>
      <Divider orientation="vertical" flexItem sx={{ my: 1 }} />
      <Box
        className={`multiInput ${
          selectedInput === "fundingRound" ? "selected" : ""
        }`}
        onClick={() => handleInputClick("fundingRound")}
        sx={{ width: 200, py: 0.4, pl: 2.5 }}
      >
        <Typography
          sx={{ fontSize: "13px", color: "#636973", fontWeight: "bold" }}
        >
          Funding Round
        </Typography>
        <input
          placeholder={selectedInput === "fundingRound" ? "" : "All"}
          style={{
            width: "100%",
            fontSize: "11px",
            color: "#969899",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
          }}
          type="text"
          value={
            getInputValue("fundingRound") !== "All" &&
            getInputValue("fundingRound") !== ""
              ? "Custom"
              : getInputValue("fundingRound")
          }
          onChange={(e) => handleInputChange(e, "fundingRound")}
        />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ my: 1 }} />
      <Box
        className={`multiInput ${
          selectedInput === "financials" ? "selected" : ""
        }`}
        onClick={() => handleInputClick("financials")}
        sx={{ width: 200, py: 0.4, pl: 2.5 }}
      >
        <Typography
          sx={{ fontSize: "13px", color: "#636973", fontWeight: "bold" }}
        >
          Financials ($)
        </Typography>
        <input
          placeholder={selectedInput === "financials" ? "" : "All"}
          style={{
            width: "100%",
            fontSize: "11px",
            color: "#969899",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
          }}
          type="text"
          value={getInputValue("financials")}
          onChange={(e) => handleInputChange(e, "financials")}
        />{" "}
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#969899",
            px: 0.6,
            py: 0.4,
            mr: 1,
            textTransform: "capitalize",
            ":hover": {
              backgroundColor: "#969899",
            },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "absolute", zIndex: 2000, top: 60, width: "100%" }}>
        {selectedInput === "company" && showList && (
          <Box
            sx={{
              p: 2,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              marginTop: "4px",
            }}
          >
            <Typography sx={{ color: "#6369730", fontSize: "14px", ml: 1.5 }}>
              Top suggested companies for keyword "
              {getInputValue("company") === ""
                ? "No term searched"
                : getInputValue("company")}
              ". Update your keyword to improve suggestions.
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "40% 11% 10% 7% 6% 17% 10%",
                alignItems: "center",
                padding: "10px 10px 10px 15px",
              }}
            >
              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#636973",
                }}
              >
                Name
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#636973",
                }}
              >
                Country
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#636973",
                }}
              >
                Type
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#636973",
                }}
              >
                Revenue
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#636973",
                }}
              >
                Employees
              </Box>
              <Box sx={{ fontSize: "12px", color: "#636973" }}></Box>
              <Box sx={{ fontSize: "12px", color: "#636973" }}></Box>
            </Box>

            {getInputValue("company") === "" ? (
              <Box colSpan={7} sx={{ borderBottom: "none", px: 0, py: 1 }}>
                <Alert
                  variant="outlined"
                  severity="error"
                  sx={{ border: "none" }}
                >
                  No suggested companies found. Only write one company at a time
                  and check for typos.
                </Alert>
              </Box>
            ) : (
              <Box
                sx={{
                  height: "220px",
                  overflowY: "auto",
                  "& .MuiTableCell-root": {
                    borderBottom: "none",
                  },
                }}
              >
                {rows
                  .filter(
                    (row) =>
                      row.name
                        .toLowerCase()
                        .includes(companyName.toLowerCase()) ||
                      row.country
                        .toLowerCase()
                        .includes(companyName.toLowerCase()) ||
                      row.type
                        .toLowerCase()
                        .includes(companyName.toLowerCase()) ||
                      row.revenue
                        .toLowerCase()
                        .includes(companyName.toLowerCase()) ||
                      row.employees
                        .toLowerCase()
                        .includes(companyName.toLowerCase())
                  )
                  .sort((a, b) => {
                    if (compareValue === "name") {
                      return a.name.localeCompare(b.name);
                    } else if (compareValue === "country") {
                      return a.country.localeCompare(b.country);
                    } else if (compareValue === "type") {
                      return a.type.localeCompare(b.type);
                    } else if (compareValue === "revenue") {
                      // Assume revenue is in the format "$ X.XXm"
                      const revenueA = parseFloat(
                        a.revenue.substring(2, a.revenue.length - 1)
                      );
                      const revenueB = parseFloat(
                        b.revenue.substring(2, b.revenue.length - 1)
                      );
                      return revenueA - revenueB;
                    } else if (compareValue === "employees") {
                      // Assume employees is in the format "X,XXX"
                      const employeesA = parseInt(a.employees.replace(",", ""));
                      const employeesB = parseInt(b.employees.replace(",", ""));
                      return employeesA - employeesB;
                    } else {
                      return 0;
                    }
                  })
                  .map((row) => (
                    <Box
                      key={row.name}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "40% 11% 10% 7% 6% 17% 10%",
                        alignItems: "center",
                        padding: "10px 10px 10px 15px",
                        overflowX: "clip",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      onClick={() => handleListItemClick(row.name, "company")}
                    >
                      <Box
                        sx={{
                          color: "#636973",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                        }}
                      >
                        {row.name}
                      </Box>
                      <Box
                        sx={{
                          color: "#636973",
                          whiteSpace: "nowrap",
                          fontSize: "12px",
                        }}
                      >
                        {row.country}
                      </Box>
                      <Box
                        sx={{
                          color: "#636973",
                          whiteSpace: "nowrap",
                          fontSize: "12px",
                        }}
                      >
                        {row.type}
                      </Box>
                      <Box
                        sx={{
                          color: "#636973",
                          whiteSpace: "nowrap",
                          fontSize: "12px",
                        }}
                      >
                        {row.revenue}
                      </Box>
                      <Box
                        sx={{
                          color: "#636973",
                          whiteSpace: "nowrap",
                          fontSize: "12px",
                        }}
                      >
                        {row.employees}
                      </Box>
                      <Box>
                        <Button
                          sx={{
                            textTransform: "none",
                            color: "#636973",
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                          }}
                        >
                          {row.viewProfile}
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          sx={{
                            textTransform: "none",
                            color: "#636973",
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                          }}
                        >
                          {row.addToSearch}
                        </Button>
                      </Box>
                    </Box>
                  ))}
              </Box>
            )}
          </Box>
        )}
        {selectedInput === "industries" && showList && (
          <Box
            sx={{
              p: 2,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              marginTop: "4px",
              maxHeight: "120px",
              overflowY: "auto",
            }}
          ></Box>
        )}
        {selectedInput === "fundingRound" && showList && (
          <Box
            sx={{
              p: 2,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              marginTop: "4px",
              maxHeight: "250px",
              overflowY: "auto",
            }}
          >
            <FormControlLabel
              sx={{ ".MuiFormControlLabel-label": { fontSize: 14 } }}
              control={
                <Checkbox
                  sx={{
                    color: grey[800],

                    "&.Mui-checked": {
                      color: grey[900],
                    },
                    ".MuiSvgIcon-root": {
                      width: "0.7em",
                      height: "0.7em",
                    },
                  }}
                  checked={
                    isAllSelected ||
                    (selectedItems.length > 0 &&
                      selectedItems.length === investType.length)
                  } // Update checked state
                  onChange={handleAllCheckboxChange}
                  indeterminate={
                    selectedItems.length > 0 &&
                    selectedItems.length < investType.length
                  }
                />
              }
              label="Select All"
            />
            {investType.map((type) => (
              <Box key={TypeError} ml={2.5}>
                <FormControlLabel
                  sx={{ ".MuiFormControlLabel-label": { fontSize: 14 } }}
                  control={
                    <Checkbox
                      sx={{
                        color: grey[800],

                        "&.Mui-checked": {
                          color: grey[900],
                        },
                        ".MuiSvgIcon-root": {
                          width: "0.7em",
                          height: "0.7em",
                        },
                      }}
                      checked={selectedItems.includes(type)}
                      onChange={handleCheckboxChange(type)}
                    />
                  }
                  label={type}
                />
              </Box>
            ))}
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                textTransform:"capitalize",
                backgroundColor: "#969899",
                ":hover": {
                  backgroundColor: "#969899",
                },
              }}
              onClick={handleApplyFundingRound}
            >
              Apply Funding Round
            </Button>
          </Box>
        )}
        {selectedInput === "financials" && showList && (
          <Box
            sx={{
              p: 2,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              marginTop: "4px",
              overflowY: "auto",
              position: "relative",
              zIndex: 2000, // Set a higher z-index value
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Title</Typography>
              <Box sx={{ m: 1, minWidth: 120, zIndex: 2000 }}>
                <Select
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  label="Currency"
                  MenuProps={{ style: { zIndex: 2000 } }} // Set a higher z-index value
                >
                  <MenuItem value={10}>USD ($)</MenuItem>
                  <MenuItem value={20}>EUR (€)</MenuItem>
                </Select>
              </Box>
            </Box>
            {inputData.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography sx={{ width: 150 }}>{item.label}</Typography>
                <Box>
                  <TextField
                    type="number"
                    placeholder={item.minPlaceholder}
                    variant="outlined"
                    size="small"
                    value={minValues[index] || ""}
                    onChange={(e) =>
                      handleMinValueChange(index, e.target.value)
                    }
                  />
                  <TextField
                    type="number"
                    placeholder={item.maxPlaceholder}
                    variant="outlined"
                    size="small"
                    value={maxValues[index] || ""}
                    onChange={(e) =>
                      handleMaxValueChange(index, e.target.value)
                    }
                  />
                </Box>
                <Typography>{item.type}</Typography>
              </Box>
            ))}
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                textTransform:"capitalize",
                backgroundColor: "#969899",
                ":hover": {
                  backgroundColor: "#969899",
                },
              }}
              onClick={handleApplyFinancials}
            >
              Apply Financials
            </Button>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default HeaderSearchBar;
