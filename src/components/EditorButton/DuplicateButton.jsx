import React from "react";
import { Button } from "@mui/material";
const DuplicateButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="primary"
      sx={{ textTransform: "capitalize",mr: 2 }}
    >
      Duplicate Slide
    </Button>
  );
};

export default DuplicateButton;
// const duplicateSlide = () => {
//   if (
//     mainRef.current &&
//     sideRef.current &&
//     selectedSlide !== null &&
//     selectedMainSlide !== null
//   ) {
//     // 복제된 슬라이드의 데이터를 저장할 배열 선언
//     const duplicatedSlideData = [];
//     const slideObjects = selectedSlide.getObjects();
//     console.log(slideObjects, "slideObjects");

//     // 메인 캔버스 컨테이너 생성
//     const newMainContainer = document.createElement("div");
//     newMainContainer.style.display = "flex";
//     newMainContainer.style.justifyContent = "space-between";
//     let selectedMainIndex =
//       mainRef.current.querySelectorAll(".main-container").length;
//     newMainContainer.style.display =
//       selectedMainIndex !== null ? "none" : "block";
//     mainRef.current.appendChild(newMainContainer);

//     // 고유한 메인 슬라이드 인덱스 생성
//     while (usedMainIndices.includes(selectedMainIndex)) {
//       selectedMainIndex++;
//     }

//     // 사용된 슬라이드 인덱스 배열 업데이트
//     usedMainIndices.push(selectedMainIndex);

//     newMainContainer.className = `main-${selectedMainIndex} main-container`;

//     // 메인 슬라이드 라벨 생성
//     const mainLabel = document.createElement("span");
//     mainLabel.innerText = (selectedMainIndex + 1).toString();
//     newMainContainer.appendChild(mainLabel);

//     // 메인 슬라이드 캔버스 요소 생성
//     const newCanvasElement = document.createElement("canvas");
//     newCanvasElement.width = 1400;
//     newCanvasElement.height = 700;
//     newMainContainer.appendChild(newCanvasElement);

//     const newMainCanvas = new fabric.Canvas(newCanvasElement);
//     setMainSlides((prevSlides) => [...prevSlides, newMainCanvas]);

//     // 슬라이드 객체들을 새로운 메인 슬라이드에 추가
//     slideObjects.forEach((obj) => {
//       if (obj instanceof fabric.IText) {
//         // 객체가 IText인 경우, 새로운 메인 슬라이드에 새로운 IText를 생성
//         const newText = new fabric.IText(obj.text, {
//           left: obj.left, 
//           top: obj.top, // 필요한 대로 위치 조정 (위쪽에 20픽셀 추가)
//           fontSize: obj.fontSize, // 필요에 따라 폰트 크기 조정
//           lockUniScaling: true,
//           fill: obj.fill,
//           // 필요에 따라 다른 속성들 추가
//         });

//         newMainCanvas.add(newText); // 새로운 IText를 새로운 메인 슬라이드에 추가
//       } else {
//         // 객체가 IText가 아닌 경우, 해당 객체를 그대로 복제하여 새로운 메인 슬라이드에 추가
//         const newObj = fabric.util.object.clone(obj);
//         newObj.left += 0; // 
//         newObj.top += 0; // 
//         newMainCanvas.add(newObj); // 복제된 객체를 새로운 메인 슬라이드에 추가
//       }
//     });

//      // 기존 선택된 슬라이드의 객체들을 순회하며 복제한 뒤 새로운 메인 슬라이드에 추가


//   setSelectedMainSlide(newMainCanvas);
//   setSelectedMainIndex(selectedMainIndex);

//     // 새로운 메인 슬라이드의 객체 개수 텍스트 표시
//     const objectCountText = document.createElement("span");
//     objectCountText.innerText = `Objects: ${slideObjects.length}`;
//     console.log(`Objects:`, slideObjects.length);
//     newMainContainer.appendChild(objectCountText);

//     // 사이드 슬라이드 컨테이너 생성
//     const newSlideContainer = document.createElement("div");
//     newSlideContainer.style.display = "flex";
//     newSlideContainer.style.justifyContent = "space-between";
//     newSlideContainer.style.alignItems = "center";

//     sideRef.current.appendChild(newSlideContainer);

//     let slideIndex =
//       sideRef.current?.querySelectorAll(".slide-container").length;

//     // 이미 사용된 슬라이드 인덱스인지 확인하고 새로운 인덱스 찾기
//     while (usedSlideIndices.includes(slideIndex)) {
//       slideIndex++;
//     }

//     // 사용된 슬라이드 인덱스 배열 업데이트
//     usedSlideIndices.push(slideIndex);
//     newSlideContainer.className = `slide-${slideIndex} slide-container`;

//     // 사이드 슬라이드 라벨 추가
//     const slideLabel = document.createElement("span");
//     slideLabel.innerText = (slideIndex + 1).toString();

//     // 사이드 슬라이드 옵션 버튼 추가
//     const sideCanvasOption = document.createElement("button");
//     sideCanvasOption.style.border = "none";
//     sideCanvasOption.style.background = "none";
//     sideCanvasOption.style.padding = "0";
//     sideCanvasOption.style.cursor = "pointer";

//     // 사이드 슬라이드 캔버스 클릭 처리
//     sideCanvasOption.addEventListener("click", (event) => {
//       createSlideDivWithMenu(slideIndex, event);
//     });
//     newSlideContainer.addEventListener("click", () =>
//       handleSideCanvasClick(slideIndex)
//     );

//     newSlideContainer.appendChild(slideLabel);

//     // 사이드 슬라이드 캔버스 요소 생성
//     const newSlideElement = document.createElement("canvas");
//     newSlideElement.width = 1400 / 8;
//     newSlideElement.height = 700 / 8;
//     newSlideContainer.appendChild(newSlideElement);

//     const newSlide = new fabric.Canvas(newSlideElement);
//     setSlides((prevSlides) => [...prevSlides, newSlide]);

//     // 슬라이드 객체들을 새로운 사이드 슬라이드에 추가
//     slideObjects.forEach((obj) => {
//       if (obj instanceof fabric.IText) {
//         // 객체가 IText인 경우, 새로운 사이드 슬라이드에 새로운 IText를 생성
//         const newText = new fabric.IText(obj.text, {
//           left: obj.left / 8, // 필요한 대로 위치 조정
//           top: obj.top / 8, // 필요한 대로 위치 조정
//           fontSize: obj.fontSize / 8, // 필요에 따라 폰트 크기 조정
//           lockMovementX: true,
//           lockMovementY: true,
//           lockScalingX: true,
//           lockScalingY: true,
//           selectable: false,
//           fill: obj.fill,
//           // 필요에 따라 다른 속성들 추가
//         });

//         newSlide.add(newText); // 새로운 IText를 새로운 사이드 슬라이드에 추가
//         duplicatedSlideData.push({
//           id: newText.id,
//           text: newText.text,
//           left: newText.left,
//           top: newText.top,
//           scaleX: newText.scaleX,
//           scaleY: newText.scaleY,
//         });
//       } else {
//         // 객체가 IText가 아닌 경우, 해당 객체를 그대로 복제하여 새로운 사이드 슬라이드에 추가
//         const newObj = fabric.util.object.clone(obj);
//         // 필요에 따라 복제된 객체의 속성을 수정
//         // newObj.left += 20;
//         // newObj.top += 20;
//         // 필요한 경우 다른 수정사항들 적용 가능
//         newSlide.add(newObj); // 복제된 객체를 새로운 사이드 슬라이드에 추가
//       }
//     });

//     setSelectedSlide(newSlide);
//     setSelectedSlideIndex(slideIndex);

//     // 새로운 메인 슬라이드 캔버스의 선택 해제
//     newMainCanvas.discardActiveObject();
//     newMainCanvas.renderAll();

//     // Add event listeners specific to the duplicateSlide function
//     const onSideSlideObjectMoving = (e) => {
//       updateTextCoordinates(e, selectedMainIndex);
//     };

//     const onSideSlideObjectScaling = (e) => {
//       updateTextScaling(e, selectedMainIndex);
//     };

//     const onSideSlideObjectModified = (e) => {
//       updateTextContent(e);
//     };

//     newSlide.on("object:moving", onSideSlideObjectMoving);
//     newSlide.on("object:scaling", onSideSlideObjectScaling);
//     newSlide.on("object:modified", onSideSlideObjectModified);

//     // 새로운 슬라이드 객체들을 복제한 데이터 배열에 추가
//     duplicatedSlideData.push({
//       id: newSlideElement.id,
//       objects: slideObjects.map((obj) => {
//         if (obj instanceof fabric.IText) {
//           // IText 객체의 경우 위치와 텍스트 정보를 저장
//           return {
//             type: "IText",
//             text: obj.text,
//             left: obj.left,
//             top: obj.top,
//             fontSize: obj.fontSize,
//             fill: obj.fill,
//           };
//         } else {
//           // IText가 아닌 경우 객체를 직렬화하여 저장
//           return obj.toObject();
//         }
//       }),
//     });

//     setSelectedSlide(newSlide);
//     setSelectedSlideIndex(slideIndex);

//     newMainCanvas.on("object:moving", (e) => {
//       if (e.target instanceof fabric.IText) {
//         // 이동 중인 IText 객체 가져오기
//         const movingIText = e.target;
//         const sideSlideIText = newSlide
//           .getObjects()
//           .find((obj) => obj.id === movingIText.id);

//         if (sideSlideIText) {
//           // 사이드 슬라이드의 IText 객체 위치 업데이트
//           sideSlideIText.set({
//             left: movingIText.left / 8,
//             top: movingIText.top / 8,
//           });

//           newSlide.renderAll();
//           // Update text values array
//           setTextValues((prevTextValues) =>
//             prevTextValues.map((textValue, index) =>
//               index === selectedMainIndex
//                 ? {
//                     ...textValue,
//                     left: movingIText.left,
//                     top: movingIText.top,
//                   }
//                 : textValue
//             )
//           );
//         }
//       }
//     });

//     // 메인 슬라이드 캔버스에 "object:scaling" 이벤트 리스너 추가
//     newMainCanvas.on("object:scaling", (e) => {
//       if (e.target instanceof fabric.IText) {
//         // 스케일 조정 중인 IText 객체 가져오기
//         const scalingIText = e.target;
//         const sideSlideIText = newSlide
//           .getObjects()
//           .find((obj) => obj.id === scalingIText.id);

//         if (sideSlideIText) {
//           // 사이드 슬라이드의 IText 객체 스케일 조정 업데이트
//           sideSlideIText.set({
//             scaleX: scalingIText.scaleX,
//             scaleY: scalingIText.scaleY,
//           });

//           newSlide.renderAll();
//         }
//       }
//     });

//     // 메인 슬라이드 캔버스에 "object:modified" 이벤트 리스너 추가
//     newMainCanvas.on("object:modified", (e) => {
//       if (e.target instanceof fabric.IText) {
//         // 수정된 IText 객체 가져오기 (내용 변경)
//         const modifiedIText = e.target;
//         const sideSlideIText = newSlide
//           .getObjects()
//           .find((obj) => obj.id === modifiedIText.id);

//         if (sideSlideIText) {
//           // 사이드 슬라이드의 IText 객체 내용 업데이트
//           sideSlideIText.set("text", modifiedIText.text).setCoords();
//           newSlide.renderAll();
//         }
//       }
//     });
//   }
// };