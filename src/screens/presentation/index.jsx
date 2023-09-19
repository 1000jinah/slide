import {
  CircleOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  NotInterestedOutlined,
} from "@mui/icons-material";
import { ReactComponent as Undo } from "assets/img/btn_undo_able.svg";
import { ReactComponent as Redo } from "assets/img/btn_redo_able.svg";
import { ReactComponent as CheckBoxOutlined } from "assets/img/icon_slidestatus_normal.svg";
import { ReactComponent as AccountBoxOutlined } from "assets/img/icon_assignslide_normal.svg";
import { ReactComponent as SmsOutlined } from "assets/img/icon_comments_normal.svg";
import { ReactComponent as SpeakerNotesOutlined } from "assets/img/icon_notes_normal.svg";
import { ReactComponent as PlayArrow } from "assets/img/btn_play_slide.svg";
import { ReactComponent as MoreVert } from "assets/img/btn_option_slide.svg";
import { ReactComponent as AddCircleOutline } from "assets/img/icon_insesrt.svg";
import { ReactComponent as BorderStyle } from "assets/img/icon_styleguide.svg";
import { ReactComponent as Add } from "assets/img/icon_plus_small_black.svg";
import { ReactComponent as HelpOutlineOutlined } from "assets/img/icon_help.svg";
import { ReactComponent as NotificationsNoneOutlined } from "assets/img/btn_notification_line.svg";
import { ReactComponent as TitleArrow } from "assets/img/btn_arrow_left_gray_small.svg";
import UserProfile from "assets/img/img_userprofile.webp";
import { ReactComponent as InviteOtherUser } from "assets/img/img_inviteother.svg";

import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import MainButtonBox from "components/Presentation/MainButtonBox";
import MenuBox from "components/Presentation/MenuBox";
import React, { useState } from "react";
import PresentationSwitch from "components/Presentation/Switch";

const Presentation = () => {
  const [slides, setSlides] = useState([
    { index: 0, active: true, textFields: ["asdas"] },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);
  const insertOptions = ["Option 1", "Option 2", "Option 3"];
  const styleGuideOptions = ["Option A", "Option B", "Option C"];
  const slideColorOptions = ["Red", "Green", "Blue"];
  const backgroundImageOptions = ["Option X", "Option Y", "Option Z"];

  const handleAddSlide = () => {
    const newSlideIndex = slides.length;
    const newSlide = { index: newSlideIndex, active: false, textFields: [] };
    setSlides([...slides, newSlide]);
  };

  const handleSlideClick = (clickedIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.index === clickedIndex
        ? { ...slide, active: true }
        : { ...slide, active: false }
    );
    setSlides(updatedSlides);
    setActiveIndex(clickedIndex);
    setClickedIndex(clickedIndex);
  };

  // const handleAddTextField = (slideIndex) => {
  //   const updatedSlides = slides.map((slide) =>
  //     slide.index === slideIndex
  //       ? {
  //           ...slide,
  //           textFields: [
  //             ...slide.textFields,
  //             { id: slide.textFields.length, x: 50, y: 50, value: "" },
  //           ],
  //         }
  //       : slide
  //   );
  //   setSlides(updatedSlides);
  // };

  // const handleTextFieldChange = (slideIndex, textFieldId, value) => {
  //   const updatedSlides = slides.map((slide) =>
  //     slide.index === slideIndex
  //       ? {
  //           ...slide,
  //           textFields: slide.textFields.map((textField) =>
  //             textField.id === textFieldId ? { ...textField, value } : textField
  //           ),
  //         }
  //       : slide
  //   );
  //   setSlides(updatedSlides);
  // };

  // const handleMoveTextField = (slideIndex, textFieldId, deltaX, deltaY) => {
  //   const updatedSlides = slides.map((slide) =>
  //     slide.index === slideIndex
  //       ? {
  //           ...slide,
  //           textFields: slide.textFields.map((textField) =>
  //             textField.id === textFieldId
  //               ? {
  //                   ...textField,
  //                   x: Math.max(0, textField.x + deltaX),
  //                   y: Math.max(0, textField.y + deltaY),
  //                 }
  //               : textField
  //           ),
  //         }
  //       : slide
  //   );
  //   setSlides(updatedSlides);
  // };

  // const handleDuplicateTextField = (slideIndex, textFieldId) => {
  //   const updatedSlides = slides.map((slide) =>
  //     slide.index === slideIndex
  //       ? {
  //           ...slide,
  //           textFields: [
  //             ...slide.textFields,
  //             {
  //               ...slide.textFields.find(
  //                 (textField) => textField.id === textFieldId
  //               ),
  //               id: slide.textFields.length,
  //             },
  //           ],
  //         }
  //       : slide
  //   );
  //   setSlides(updatedSlides);
  // };

  // const handleRemoveTextField = (slideIndex, textFieldId) => {
  //   const updatedSlides = slides.map((slide) =>
  //     slide.index === slideIndex
  //       ? {
  //           ...slide,
  //           textFields: slide.textFields.filter(
  //             (textField) => textField.id !== textFieldId
  //           ),
  //         }
  //       : slide
  //   );
  //   setSlides(updatedSlides);
  // };
  return (
    <Box sx={{ display: "flex", overflowY: "clip" }}>
      {/* Sider */}
      <Box sx={{ backgroundColor: "#e2e4e6", width: "16%", minWidth: 270 }}>
        {/* File */}
        <Box sx={{ px: 2.5, mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
            }}
          >
            <Button
              sx={{
                "& .MuiButton-startIcon": { mr: 1, ml: -1 },
                ":hover": {  backgroundColor: "transparent", color: "#636973", },
                backgroundColor: "transparent",
                textTransform: "capitalize",
                color: "#636973",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
              startIcon={<TitleArrow width={12} height={12} />}
              variant="contained"
            >
              Untitle Presentation
            </Button>
            <MenuBox
              sx={{ fontSize: "0.78rem" }}
              pptMenuBoxTitle="File"
              pptMenuBoxOptions={insertOptions}
              pptMenuBoxEndClose={<KeyboardArrowDownOutlined />}
              pptMenuBoxEndOpen={<KeyboardArrowUpOutlined />}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={handleAddSlide}
          >
            <Typography sx={{ color: "#636973", fontSize: "0.78rem" }}>
              Add Slide
            </Typography>
            <IconButton>
              <Add width={14} height={14} />
            </IconButton>
          </Box>
        </Box>
        {/* Slider */}
        <Box sx={{ px: 2.5, height: "calc(100vh - 109px)", overflowY: "auto" }}>
          {slides.map((slide, index) => (
            <Box
              key={slide.index}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleSlideClick(index)}
            >
              <Typography sx={{ width: 20 }}>{index + 1}</Typography>
              <Box
                sx={{
                  backgroundColor: "#c8cacc",
                  minWidth: 160,
                  height: 97,
                  m: 1,
                  border:
                    activeIndex === index || clickedIndex === index
                      ? "1px solid #969899"
                      : "none",
                }}
              ></Box>
              {(activeIndex === index || clickedIndex === index) && (
                <IconButton
                  sx={{
                    visibility: "visible",
                    ":hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <MoreVert width={18} height={18} />
                </IconButton>
              )}
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ width: "84%", overflowY: "clip" }}>
        {/* Header */}
        <Box
          sx={{
            p: 2,
            pl: 0,
            backgroundColor: "#e2e4e6",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Undo, Redo */}

          <Box sx={{ display: "flex" }}>
            <Box>
              <Divider orientation="vertical" />
            </Box>
            <Box sx={{ ml: 2, display: "flex" }}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "#636973",
                  fontSize: "0.78rem",
                  display: "flex",
                  alignItems: "center",
                }}
                startIcon={<Undo width={15} height={15} />}
              >
                Undo
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "#636973",
                  fontSize: "0.78rem",
                  display: "flex",
                  alignItems: "center",
                }}
                startIcon={<Redo width={15} height={15} />}
              >
                Redo
              </Button>
            </Box>
          </Box>
          {/* Insert, Style Guide, Silde Color, Background Image */}
          <Box sx={{ display: "flex" }}>
            <MenuBox
              pptMenuBoxStartIcon={<AddCircleOutline width={15} height={15} />}
              pptMenuBoxTitle="Insert"
              pptMenuBoxOptions={insertOptions}
              pptMenuBoxEndClose={<KeyboardArrowDownOutlined />}
              pptMenuBoxEndOpen={<KeyboardArrowUpOutlined />}
            />
            <MenuBox
              pptMenuBoxStartIcon={<BorderStyle width={15} height={15} />}
              pptMenuBoxTitle="Style Guide"
              pptMenuBoxOptions={styleGuideOptions}
              pptMenuBoxEndClose={<KeyboardArrowDownOutlined />}
              pptMenuBoxEndOpen={<KeyboardArrowUpOutlined />}
            />
            <MenuBox
              pptMenuBoxStartIcon={<CircleOutlined width={15} height={15} />}
              pptMenuBoxTitle="Slide Color"
              pptMenuBoxOptions={slideColorOptions}
              pptMenuBoxEndClose={<KeyboardArrowDownOutlined />}
              pptMenuBoxEndOpen={<KeyboardArrowUpOutlined />}
            />
            <MenuBox
              pptMenuBoxStartIcon={
                <NotInterestedOutlined width={15} height={15} />
              }
              pptMenuBoxTitle="Background Image"
              pptMenuBoxOptions={backgroundImageOptions}
              pptMenuBoxEndClose={<KeyboardArrowDownOutlined />}
              pptMenuBoxEndOpen={<KeyboardArrowUpOutlined />}
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            {/* Slide Number */}

            <PresentationSwitch />
            <Box sx={{ mx: 1, ml: 2 }}>
              <Divider orientation="vertical" />
            </Box>
            {/* User Add Button */}

            <Box sx={{ mx: 1 }}>
              <IconButton sx={{ position: "relative", zIndex: 11 }}>
                <InviteOtherUser />
              </IconButton>
              <IconButton>
                <img
                  src={UserProfile}
                  alt={"UserProfile"}
                  style={{
                    width: 38,
                    height: 38,
                    position: "absolute",
                    zIndex: 10,
                    left: -25,
                  }}
                />
              </IconButton>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Notification Button (Bell) */}
              <IconButton sx={{ mx: 1 }}>
                <NotificationsNoneOutlined width={18} height={18} />
              </IconButton>
              {/* PlayArrow */}
              <IconButton sx={{ mx: 1 }}>
                <PlayArrow width={18} height={18} />
              </IconButton>
            </Box>
          </Box>
        </Box>
        {/* Main */}
        <Box
          sx={{
            backgroundColor: "#f3f5f7",
            p: 6,
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "calc(100vh - 170px)",
            }}
          >
            {slides.map((slide) => (
              <Box
                key={slide.index}
                sx={{
                  backgroundColor: "#e2e4e6",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: slide.active ? "block" : "none",
                }}
              ></Box>
            ))}

            <Box
              sx={{
                mt: 5,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#e2e4e6",
                  borderRadius: 15,
                  px: 2.5,
                  py: 0.78,
                }}
              >
                <MainButtonBox
                  MainIconButton={
                    <CheckBoxOutlined
                      sx={{ fontSize: "1.78rem", color: "#c8cacc" }}
                    />
                  }
                  MainIconButtonLabel={"Slide Status"}
                />
                <MainButtonBox
                  MainIconButton={
                    <AccountBoxOutlined
                      sx={{ fontSize: "1.78rem", color: "#c8cacc" }}
                    />
                  }
                  MainIconButtonLabel={"Assign Slide"}
                />
                <MainButtonBox
                  MainIconButton={
                    <SmsOutlined
                      sx={{ fontSize: "1.78rem", color: "#c8cacc" }}
                    />
                  }
                  MainIconButtonLabel={"Comments"}
                />
                <MainButtonBox
                  MainIconButton={
                    <SpeakerNotesOutlined
                      sx={{ fontSize: "1.78rem", color: "#c8cacc" }}
                    />
                  }
                  MainIconButtonLabel={"Notes"}
                />
              </Box>
              <IconButton>
                <HelpOutlineOutlined
                  sx={{ height: "auto", color: "#c8cacc" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Presentation;
// AddSlide 클릭 시 사이드 슬라이드에 슬라이드 생성
// 사이드 슬라이드에 슬라이드 클릭 시 클릭한 슬라이드가 메인에 나오도록.
// 메인에서 움직일 수 있도록 하고, 메인에서 움직이면 해당 인덱스와 동일한 사이드 슬라이드도 동일하게 움직이도록.
