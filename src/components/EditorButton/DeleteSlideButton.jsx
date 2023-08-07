import React from "react";
import { Button } from "@mui/material";

const DeleteSlideButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="error"
      sx={{ textTransform: "capitalize", mr: 2 }}
    >
      Delete Selected Slide
    </Button>
  );
};

export default DeleteSlideButton;

// const deleteSlide = (slideIndex) => {
//   if (mainRef.current && sideRef.current) {
//     // Remove the main slide
//     const mainSlideContainer = mainRef.current.querySelector(
//       `.main-${slideIndex}`
//     );
//     mainRef.current.removeChild(mainSlideContainer);

//     // Remove the side slide
//     const sideSlideContainer = sideRef.current.querySelector(
//       `.slide-${slideIndex}`
//     );
//     sideRef.current.removeChild(sideSlideContainer);

//     // Remove the slides from the state
//     setMainSlides((prevSlides) =>
//       prevSlides.filter((slide, index) => index !== slideIndex)
//     );
//     setSlides((prevSlides) =>
//       prevSlides.filter((slide, index) => index !== slideIndex)
//     );

//     // Clear the selected slide state if it matches the deleted index
//     if (selectedSlideIndex === slideIndex) {
//       setSelectedSlide(null);
//       setSelectedSlideIndex(null);
//     }

//     if (selectedMainIndex === slideIndex) {
//       setSelectedMainSlide(null);
//       setSelectedMainIndex(null);
//     }
//   }
// };
