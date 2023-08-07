import React, { useState } from "react";
import { Box, TextField, NativeSelect, Button, Divider } from "@mui/material";

const PeopleInput = () => {
  // 선택된 값을 상태로 관리하기 위한 state
  const [selectedValue, setSelectedValue] = useState("");
  // 입력된 텍스트 값을 상태로 관리하기 위한 state
  const [textInput, setTextInput] = useState("");

  // Select에서 값을 선택했을 때의 이벤트 핸들러
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // TextField에 입력한 값을 변경했을 때의 이벤트 핸들러
  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",

        border: "1px solid #c8cacc",

        boxSizing: "border-box",
        "& .MuiNativeSelect-select:focus": {
          backgroundColor: "transparent",
        },
        "& .MuiInput-root:before ,& .MuiInput-root:after": {
          borderBottom: "none",
        },
        "& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
          borderBottom: "none",
        },
      }}
    >
      <NativeSelect
        value={selectedValue}
        onChange={handleSelectChange}
        sx={{
          boxSizing: "border-box",
          fontSize: "12px",

        }}
        defaultValue={30}
      >
        <option value={10} style={{ fontSize: "12px" }}>
          Job Department
        </option>
        <option value={20} style={{ fontSize: "12px" }}>
          Twenty
        </option>
        <option value={30} style={{ fontSize: "12px" }}>
          Thirty
        </option>
      </NativeSelect>
      <Divider orientation="vertical" flexItem sx={{ my: 1 }} />
      <TextField
        value={textInput}
        onChange={handleTextChange}
        placeholder
        variant="standard"
        sx={{ minWidth: 200, marginRight: 2 }}
      />
    </Box>
  );
};

export default PeopleInput;
