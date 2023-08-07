import React, { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";
import AddSlideButton from "components/EditorButton/AddSlideButton";
import AddTextButton from "components/EditorButton/AddTextButton";
import DuplicateButton from "components/EditorButton/DuplicateButton";
import DeleteSlideButton from "components/EditorButton/DeleteSlideButton";
const SlideApp = () => {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);
  const sideRef = useRef(null);
  const [fontSize, setFontSize] = useState("30");
  const [textValue, setTextValue] = useState("");
  const [slides, setSlides] = useState([]);
  const [mainSlides, setMainSlides] = useState([]);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [selectedMainSlide, setSelectedMainSlide] = useState(null);
  const [selectedMainIndex, setSelectedMainIndex] = useState(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(null);
  const [textCoordinates, setTextCoordinates] = useState({ x: 0, y: 0 });
  const usedSlideIndices = slides.map((slide, index) => index);
  const usedMainIndices = slides.map((slide, index) => index);
  const [fabricObjectArray, setFabricObjectArray] = useState([]);
  const [textValues, setTextValues] = useState([]);
  const [clonedTextObjects, setClonedTextObjects] = useState([]);

  const generateColorFromId = (id) => {
    // 주어진 문자열을 기반으로 고유한 색상 생성 함수
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00ffffff).toString(16).toUpperCase();
    return "#" + "00000".substring(0, 6 - c.length) + c;
  };
  // 슬라이드 추가하는 기능
  const addSlide = () => {
    if (mainRef.current && sideRef.current) {
      // Create the main canvas container
      const newMainContainer = document.createElement("div");
      newMainContainer.style.display = "flex";
      newMainContainer.style.justifyContent = "space-between";
      let selectedMainIndex =
        mainRef.current.querySelectorAll(".main-container").length;
      newMainContainer.style.display =
        selectedMainIndex !== null ? "none" : "block";
      mainRef.current.appendChild(newMainContainer);

      // Generate a unique main slide index
      while (usedMainIndices.includes(selectedMainIndex)) {
        selectedMainIndex++;
      }

      // Update the used slide indices array
      usedMainIndices.push(selectedMainIndex);

      newMainContainer.className = `main-${selectedMainIndex} main-container`;

      // Create the main slide label
      const mainLabel = document.createElement("span");
      mainLabel.innerText = (selectedMainIndex + 1).toString();
      newMainContainer.appendChild(mainLabel);

      // Create the main slide canvas element
      const newCanvasElement = document.createElement("canvas");
      newCanvasElement.width = 1400;
      newCanvasElement.height = 700;
      newMainContainer.appendChild(newCanvasElement);

      const newMainCanvas = new fabric.Canvas(newCanvasElement);
      setMainSlides((prevSlides) => [...prevSlides, newMainCanvas]);

      setSelectedMainSlide(newMainCanvas);
      setSelectedMainIndex(selectedMainIndex);

      // Create the side slide container
      const newSlideContainer = document.createElement("div");
      newSlideContainer.style.display = "flex";
      newSlideContainer.style.justifyContent = "space-between";
      newSlideContainer.style.alignItems = "center";

      sideRef.current.appendChild(newSlideContainer);

      let slideIndex =
        sideRef.current?.querySelectorAll(".slide-container").length;

      // Check for already used slide indices and find a new one
      while (usedSlideIndices.includes(slideIndex)) {
        slideIndex++;
      }

      // Update the used slide indices array
      usedSlideIndices.push(slideIndex);
      newSlideContainer.className = `slide-${slideIndex} slide-container`;

      // Add the side slide label
      const slideLabel = document.createElement("span");
      slideLabel.innerText = (slideIndex + 1).toString();

      // Add the side slide option button
      const sideCanvasOption = document.createElement("button");
      sideCanvasOption.style.border = "none";
      sideCanvasOption.style.background = "none";
      sideCanvasOption.style.padding = "0";
      sideCanvasOption.style.cursor = "pointer";

      // const img = document.createElement("img");
      // const svgString = renderToString(<SlideButtonOption />);
      // img.src = `data:image/svg+xml;base64,${btoa(svgString)}`;
      // img.alt = "Options";
      // img.style.width = "16px";
      // img.style.height = "16px";
      // sideCanvasOption.appendChild(img);

      // Handle side slide canvas click
      sideCanvasOption.addEventListener("click", (event) => {
        createSlideDivWithMenu(slideIndex, event);
      });
      newSlideContainer.addEventListener("click", () =>
        handleSideCanvasClick(slideIndex)
      );

      newSlideContainer.appendChild(slideLabel);

      // Create the side slide canvas element
      const newSlideElement = document.createElement("canvas");
      newSlideElement.width = 1400 / 8;
      newSlideElement.height = 700 / 8;
      newSlideContainer.appendChild(newSlideElement);

      const newSlide = new fabric.Canvas(newSlideElement);
      setSlides((prevSlides) => [...prevSlides, newSlide]);

      setSelectedSlide(newSlide);
      setSelectedSlideIndex(slideIndex); // Set the selected slide index
    }
  };
  // 선택된, 가장 인덱스 값이 큰 슬라이드 삭제하는 기능(수정 필요)
  const deleteSlide = (slideIndex) => {
    if (mainRef.current && sideRef.current) {
      // Remove the main slide
      const mainSlideContainer = mainRef.current.querySelector(
        `.main-${slideIndex}`
      );
      mainRef.current.removeChild(mainSlideContainer);

      // Remove the side slide
      const sideSlideContainer = sideRef.current.querySelector(
        `.slide-${slideIndex}`
      );
      sideRef.current.removeChild(sideSlideContainer);

      // Remove the slides from the state
      setMainSlides((prevSlides) =>
        prevSlides.filter((slide, index) => index !== slideIndex)
      );
      setSlides((prevSlides) =>
        prevSlides.filter((slide, index) => index !== slideIndex)
      );

      // Clear the selected slide state if it matches the deleted index
      if (selectedSlideIndex === slideIndex) {
        setSelectedSlide(null);
        setSelectedSlideIndex(null);
      }

      if (selectedMainIndex === slideIndex) {
        setSelectedMainSlide(null);
        setSelectedMainIndex(null);
      }
    }
  };
  // 선택된 슬라이드에 텍스트 추가하는 기능
  const addText = () => {
    if (fontSize && selectedSlideIndex !== null) {
      const txtfontsize = Number(fontSize); // Convert fontSize to a number
      const selectedSlide = slides[selectedSlideIndex];
      const selectedMain = mainSlides[selectedSlideIndex];
      if (selectedSlide && selectedMain) {
        const newTextValue = textValue || "텍스트 추가";
        const customId = `itext_${Date.now()}`;

        // Create new IText object for the main slide
        const new_text_main = new fabric.IText(newTextValue, {
          id: customId,
          left: 100,
          top: 100,
          fontSize: txtfontsize,
          lockUniScaling: true,
          fill: "#000",
        });

        selectedMain.add(new_text_main);
        console.log("new_text_main", new_text_main);

        // Create new IText object for the side slide
        const new_text_side = new fabric.IText(newTextValue, {
          left: 100 / 8,
          top: 100 / 8,
          fontSize: txtfontsize / 8,
          lockMovementX: true,
          lockMovementY: true,
          lockScalingX: true,
          lockScalingY: true,
          selectable: false,
          fill: "#000",
        });

        // Add the new IText to the active side slide
        selectedSlide.add(new_text_side);
        setClonedTextObjects((prevClonedTextObjects) => [
          ...prevClonedTextObjects,
          new_text_side,
        ]);
        console.log("new_text_side:", new_text_side);

        selectedSlide.on("object:moving", (e) =>
          updateTextCoordinates(e, selectedMainIndex)
        );
        selectedSlide.on("object:scaling", (e) =>
          updateTextScaling(e, selectedMainIndex)
        );
        selectedSlide.on("object:modified", updateTextContent);

        selectedMain.on("object:moving", () => {
          if (
            new_text_main.left !== undefined &&
            new_text_main.top !== undefined
          ) {
            const { left, top } = new_text_main;
            const sideLeft = left / 8;
            const sideTop = top / 8;
            new_text_side.set({ left: sideLeft, top: sideTop });
            console.log({ left: sideLeft, top: sideTop }, "addText.obj.moving");
            selectedSlide.renderAll();

            // Update text values array
            setTextValues((prevTextValues) =>
              prevTextValues.map((textValue, index) =>
                index === selectedMainIndex
                  ? { ...textValue, left, top }
                  : textValue
              )
            );
          }
        });

        selectedMain.on("object:scaling", () => {
          if (
            new_text_main.scaleX !== undefined &&
            new_text_main.scaleY !== undefined
          ) {
            const { scaleX, scaleY } = new_text_main;
            const sideScaleX = scaleX;
            const sideScaleY = scaleY;
            new_text_side.set({ scaleX: sideScaleX, scaleY: sideScaleY });
            console.log(
              { scaleX: sideScaleX, scaleY: sideScaleY },
              "addText.obj.scaling"
            );

            selectedSlide.renderAll();

            // Update text values array
            setTextValues((prevTextValues) =>
              prevTextValues.map((textValue, index) =>
                index === selectedMainIndex
                  ? { ...textValue, scaleX, scaleY }
                  : textValue
              )
            );
          }
        });

        selectedMain.on("object:modified", () => {
          if (new_text_main.text !== undefined && new_text_main.text !== null) {
            const mainText = new_text_main.text || "";
            new_text_side.set("text", mainText).setCoords();
            console.log({ mainText }, "addText.obj.modified");
            // Update text object values array

            selectedSlide.renderAll();
            // Update text object values array
            // Update text values array
            setTextValues((prevTextValues) =>
              prevTextValues.map((textValue, index) =>
                index === selectedMainIndex
                  ? { ...textValue, mainText: newTextValue }
                  : textValue
              )
            );
          }
        });
        setSelectedSlide(selectedMain);
        setSelectedSlideIndex(selectedMainIndex);
        // if (
        //   fontSize &&
        //   ((selectedMainIndex !== null && selectedSlideIndex !== null) ||
        //     (selectedMainIndex === null && selectedSlideIndex === null))
        // ) {

        //   setFabricObjectArray(fabricObjectArray);
        //   console.log("Fabric Objects:", fabricObjectArray);
        // }
      }
    }
  };

  // 선택된 슬라이드 복제하는 기능 (moving 관련 수정 필요)
  const duplicateSlide = () => {
    if (
      mainRef.current &&
      sideRef.current &&
      selectedSlide !== null &&
      selectedMainSlide !== null
    ) {
      // 복제된 슬라이드의 데이터를 저장할 배열 선언
      const slideObjects = selectedSlide.getObjects();
      const idTextObjects = [];
      // 메인 캔버스 컨테이너 생성
      const newMainContainer = document.createElement("div");
      newMainContainer.style.display = "flex";
      newMainContainer.style.justifyContent = "space-between";
      let selectedMainIndex =
        mainRef.current.querySelectorAll(".main-container").length;
      newMainContainer.style.display =
        selectedMainIndex !== null ? "none" : "block";
      mainRef.current.appendChild(newMainContainer);

      // 고유한 메인 슬라이드 인덱스 생성
      while (usedMainIndices.includes(selectedMainIndex)) {
        selectedMainIndex++;
      }

      // 사용된 슬라이드 인덱스 배열 업데이트
      usedMainIndices.push(selectedMainIndex);

      newMainContainer.className = `main-${selectedMainIndex} main-container`;

      // 메인 슬라이드 라벨 생성
      const mainLabel = document.createElement("span");
      mainLabel.innerText = (selectedMainIndex + 1).toString();
      newMainContainer.appendChild(mainLabel);

      // 메인 슬라이드 캔버스 요소 생성
      const newCanvasElement = document.createElement("canvas");
      newCanvasElement.width = 1400;
      newCanvasElement.height = 700;
      newMainContainer.appendChild(newCanvasElement);

      const newMainCanvas = new fabric.Canvas(newCanvasElement);
      setMainSlides((prevSlides) => [...prevSlides, newMainCanvas]);

      // 슬라이드 객체들을 새로운 메인 슬라이드에 추가
      slideObjects.forEach((obj) => {
        if (obj instanceof fabric.IText) {
          // 객체가 IText인 경우, 새로운 메인 슬라이드에 새로운 IText를 생성
          const newText = new fabric.IText(obj.text, {
            left: obj.left,
            top: obj.top, // 필요한 대로 위치 조정 (위쪽에 20픽셀 추가)
            fontSize: obj.fontSize, // 필요에 따라 폰트 크기 조정
            lockUniScaling: true,
            fill: obj.fill,
            // 필요에 따라 다른 속성들 추가
          });

          newMainCanvas.add(newText); // 새로운 IText를 새로운 메인 슬라이드에 추가
        } else {
          // 객체가 IText가 아닌 경우, 해당 객체를 그대로 복제하여 새로운 메인 슬라이드에 추가
          const newObj = fabric.util.object.clone(obj);
          newMainCanvas.add(newObj); // 복제된 객체를 새로운 메인 슬라이드에 추가
        }
      });

      // 기존 선택된 슬라이드의 객체들을 순회하며 복제한 뒤 새로운 메인 슬라이드에 추가

      setSelectedMainSlide(newMainCanvas);
      setSelectedMainIndex(selectedMainIndex);

      // 새로운 메인 슬라이드의 객체 개수 텍스트 표시
      const objectCountText = document.createElement("span");
      objectCountText.innerText = `Objects: ${slideObjects.length}`;
      newMainContainer.appendChild(objectCountText);

      // 사이드 슬라이드 컨테이너 생성
      const newSlideContainer = document.createElement("div");
      newSlideContainer.style.display = "flex";
      newSlideContainer.style.justifyContent = "space-between";
      newSlideContainer.style.alignItems = "center";

      sideRef.current.appendChild(newSlideContainer);

      let slideIndex =
        sideRef.current?.querySelectorAll(".slide-container").length;

      // 이미 사용된 슬라이드 인덱스인지 확인하고 새로운 인덱스 찾기
      while (usedSlideIndices.includes(slideIndex)) {
        slideIndex++;
      }

      // 사용된 슬라이드 인덱스 배열 업데이트
      usedSlideIndices.push(slideIndex);
      newSlideContainer.className = `slide-${slideIndex} slide-container`;

      // 사이드 슬라이드 라벨 추가
      const slideLabel = document.createElement("span");
      slideLabel.innerText = (slideIndex + 1).toString();

      // 사이드 슬라이드 옵션 버튼 추가
      const sideCanvasOption = document.createElement("button");
      sideCanvasOption.style.border = "none";
      sideCanvasOption.style.background = "none";
      sideCanvasOption.style.padding = "0";
      sideCanvasOption.style.cursor = "pointer";

      // 사이드 슬라이드 캔버스 클릭 처리
      sideCanvasOption.addEventListener("click", (event) => {
        createSlideDivWithMenu(slideIndex, event);
      });
      newSlideContainer.addEventListener("click", () =>
        handleSideCanvasClick(slideIndex)
      );

      newSlideContainer.appendChild(slideLabel);

      // 사이드 슬라이드 캔버스 요소 생성
      const newSlideElement = document.createElement("canvas");
      newSlideElement.width = 1400 / 8;
      newSlideElement.height = 700 / 8;
      newSlideContainer.appendChild(newSlideElement);

      const newSlide = new fabric.Canvas(newSlideElement);
      setSlides((prevSlides) => [...prevSlides, newSlide]);

      // 슬라이드 객체들을 새로운 사이드 슬라이드에 추가
      slideObjects.forEach((obj, index) => {
        if (obj instanceof fabric.IText) {
          const customId = `itext_${Date.now()}`;
          // 객체가 IText인 경우, 새로운 사이드 슬라이드에 새로운 IText를 생성
          const newText = new fabric.IText(obj.text, {
            id: customId,
            left: obj.left / 8, // 필요한 대로 위치 조정
            top: obj.top / 8, // 필요한 대로 위치 조정
            fontSize: obj.fontSize / 8, // 필요에 따라 폰트 크기 조정
            lockMovementX: true,
            lockMovementY: true,
            lockScalingX: true,
            lockScalingY: true,
            selectable: false,
            fill: obj.fill,
            // 필요에 따라 다른 속성들 추가
          });

          // 객체가 IText인 경우, 새로운 사이드 슬라이드에 새로운 IText를 생성
          const idText = new fabric.IText(newText.id, {
            left: obj.left / 8,
            top: obj.top / 8,
            fontSize: obj.fontSize / 8,
            selectable: false,
            fill: generateColorFromId(newText.id), // 고유한 색상 할당
          });

          // 만약 새로운 IText의 id와 idText의 id가 같다면
          if (newText.id === idText.id) {
            newSlide.add(idText); // 사이드 슬라이드에 해당 IText 추가
          } else if (index < idTextObjects.length) {
            // 같은 인덱스의 idText가 이미 존재하는지 확인
            idTextObjects[index] = idText; // 기존의 idText를 업데이트
          } else {
            idTextObjects.push(idText); // 새로운 idText를 배열에 추가
          }

          // idText를 나중에 참조하기 위해 배열에 추가
          idTextObjects.push(idText);

          // 각 IText 객체마다의 이벤트 리스너 등록
          idTextObjects.forEach((idTextObject) => newSlide.add(idTextObject));

          // 객체가 IText가 아닌 경우, 해당 객체를 그대로 복제하여 새로운 사이드 슬라이드에 추가
        } else {
          const newObj = fabric.util.object.clone(obj);
          newSlide.add(newObj); // 복제된 객체를 새로운 사이드 슬라이드에 추가
        }
      });

      setSelectedSlide(newSlide);
      setSelectedSlideIndex(slideIndex);

      // 새로운 메인 슬라이드 캔버스의 선택 해제
      newMainCanvas.discardActiveObject();
      newMainCanvas.renderAll();

      // 메인 슬라이드 캔버스에 "object:moving" 이벤트 리스너 추가
      newMainCanvas.on("object:moving", (e) => {
        handleMainSlideObjectMoving(e, selectedMainIndex, newSlide);
      });

      // 메인 슬라이드 캔버스에 "object:scaling" 이벤트 리스너 추가
      newMainCanvas.on("object:scaling", (e) => {
        handleMainSlideObjectScaling(e, newSlide);
      });

      // 메인 슬라이드 캔버스에 "object:modified" 이벤트 리스너 추가
      newMainCanvas.on("object:modified", (e) => {
        handleMainSlideObjectModified(e, newSlide);
      });
      // object:moving 이벤트 처리 함수
      const handleMainSlideObjectMoving = (e, selectedMainIndex, newSlide) => {
        if (e.target instanceof fabric.IText) {
          // 이동 중인 IText 객체 가져오기
          const movingIText = e.target;
          const sideSlideIText = newSlide
            .getObjects()
            .find((obj) => obj.id === movingIText.id);

          if (sideSlideIText) {
            // 사이드 슬라이드의 IText 객체 위치 업데이트
            sideSlideIText.set({
              left: movingIText.left / 8,
              top: movingIText.top / 8,
            });

            newSlide.renderAll();
          }
        }
      };

      // object:scaling 이벤트 처리 함수
      const handleMainSlideObjectScaling = (e, newSlide) => {
        if (e.target instanceof fabric.IText) {
          // 스케일 조정 중인 IText 객체 가져오기
          const scalingIText = e.target;
          const sideSlideIText = newSlide
            .getObjects()
            .find((obj) => obj.id === scalingIText.id);

          if (sideSlideIText) {
            // 사이드 슬라이드의 IText 객체 스케일 조정 업데이트
            sideSlideIText.set({
              scaleX: scalingIText.scaleX,
              scaleY: scalingIText.scaleY,
            });

            newSlide.renderAll();
          }
        }
      };

      // object:modified 이벤트 처리 함수
      const handleMainSlideObjectModified = (e, newSlide) => {
        if (e.target instanceof fabric.IText) {
          // 수정된 IText 객체 가져오기 (내용 변경)
          const modifiedIText = e.target;
          const sideSlideIText = newSlide
            .getObjects()
            .find((obj) => obj.id === modifiedIText.id);

          if (sideSlideIText) {
            // 사이드 슬라이드의 IText 객체 내용 업데이트
            sideSlideIText.set("text", modifiedIText.text).setCoords();
            newSlide.renderAll();
          }
        }
      };
    }
  };

  // 이 기능은 아직 사용 안하고 있음, 사이드 슬라이드 메뉴 열 떄 사용할 기능
  const createSlideDivWithMenu = (slideIndex, event) => {
    const selectedSlide = slides[slideIndex];
    setSelectedSlide(selectedSlide);

    const selectedMainSlide = mainSlides[slideIndex];
    setSelectedMainSlide(selectedMainSlide);

    // Highlight the selected slide in the side canvas
    const slideContainers =
      sideRef.current?.querySelectorAll(".slide-container");
    if (slideContainers) {
      slideContainers.forEach((container, index) => {
        if (index === slideIndex) {
          container.classList.add("active");
        } else {
          container.classList.remove("active");
        }
      });
    }

    // Show the selected main canvas and hide others
    const mainContainers = mainRef.current?.querySelectorAll(".main-container");
    if (mainContainers) {
      mainContainers.forEach((container, index) => {
        if (container instanceof HTMLElement) {
          const display = index === slideIndex ? "block" : "none";
          container.style.display = display;
        }
      });
    }

    setSelectedSlideIndex(slideIndex);
    setSelectedMainIndex(slideIndex);

    // Render the selected slide from the main canvas
    if (selectedSlide && !selectedSlide.isEmpty()) {
      fabricCanvasRef.current?.clear();
      selectedSlide.getObjects().forEach((obj) => {
        const {
          left = textCoordinates.x,
          top = textCoordinates.y,
          fontSize = 0,
          text = "",
        } = fabric.IText;
        const newObject = new fabric.IText(text, {
          left: left,
          top: top,
          fontSize: fontSize,
        });
        fabricCanvasRef.current?.add(newObject);
      });
      fabricCanvasRef.current?.renderAll();
    }
  };
  // 사이드 슬라이드 선택하는 기능
  const handleSideCanvasClick = (slideIndex) => {
    const selectedSlide = slides[slideIndex];
    setSelectedSlide(selectedSlide);

    const selectedMainSlide = mainSlides[slideIndex];
    setSelectedMainSlide(selectedMainSlide);

    // Highlight the selected slide in the side canvas
    const slideContainers =
      sideRef.current?.querySelectorAll(".slide-container");
    if (slideContainers) {
      slideContainers.forEach((container, index) => {
        if (index === slideIndex) {
          container.classList.add("active");
        } else {
          container.classList.remove("active");
        }
      });
    }

    // Show the selected main canvas and hide others
    const mainContainers = mainRef.current?.querySelectorAll(".main-container");
    if (mainContainers) {
      mainContainers.forEach((container, index) => {
        if (container instanceof HTMLElement) {
          const display = index === slideIndex ? "block" : "none";
          container.style.display = display;
        }
      });
    }

    setSelectedSlideIndex(slideIndex);
    setSelectedMainIndex(slideIndex);
    if (selectedSlide && !selectedSlide.isEmpty()) {
      fabricCanvasRef.current?.clear();
      selectedSlide.getObjects().forEach((obj) => {
        const {
          left = textCoordinates.x,
          top = textCoordinates.y,
          fontSize = 0,
          text = "",
        } = fabric.IText;
        const newObject = new fabric.IText(text, {
          left: left,
          top: top,
          fontSize: fontSize,
        });
        fabricCanvasRef.current?.add(newObject);
      });
      fabricCanvasRef.current?.renderAll();
    }
  };

  // 텍스트 좌표 업데이트 및 사이드와 메인 캔버스 동기화
  const updateTextCoordinates = (e, index) => {
    if (e.target && e.target.type === "textbox") {
      const { left, top } = e.target;
      if (typeof left === "number" && typeof top === "number") {
        const x = left;
        const y = top;

        setTextCoordinates({ x: e.target.left, y: e.target.top });

        if (selectedSlide && selectedMainSlide) {
          const activeObject = selectedMainSlide.getActiveObject();
          if (activeObject && activeObject.type === "textbox") {
            activeObject.set({ left: x, top: y });

            const sideObjects = selectedSlide.getObjects();
            const mainObjects = selectedMainSlide.getObjects();

            for (let i = 0; i < sideObjects.length; i++) {
              const sideObj = sideObjects[i];
              const mainObj = mainObjects[i];

              if (
                sideObj &&
                mainObj &&
                sideObj.type === "textbox" &&
                mainObj.type === "i-text"
              ) {
                const sideLeft = sideObj.left !== undefined ? sideObj.left : 0;
                const sideTop = sideObj.top !== undefined ? sideObj.top : 0;
                mainObj.set({ left: sideLeft * 8, top: sideTop * 8 });

                // Check if the main IText is within the side canvas boundaries
                const mainCanvasWidth = 1400;
                const mainCanvasHeight = 700;
                const mainTextWidth = mainObj.getScaledWidth();
                const mainTextHeight = mainObj.getScaledHeight();

                // Hide the main IText if it goes beyond the side canvas boundaries
                if (
                  sideLeft * 8 + mainTextWidth > mainCanvasWidth ||
                  sideTop * 8 + mainTextHeight > mainCanvasHeight ||
                  sideLeft * 8 < 0 ||
                  sideTop * 8 < 0
                ) {
                  mainObj.set("opacity", 0);
                } else {
                  mainObj.set("opacity", 1);
                }
              }
            }
            selectedSlide.renderAll();
            selectedMainSlide.renderAll();

            // Update text values array
            setTextValues((prevTextValues) =>
              prevTextValues.map((textValue, index) =>
                index === selectedMainIndex
                  ? {
                      ...textValue,
                      left: x,
                      top: y,
                    }
                  : textValue
              )
            );

            // Update fabricObjectArray
            const updatedFabricObjectArray = fabricObjectArray.map((obj, i) =>
              i === index ? { ...obj, left: x, top: y } : obj
            );
            setFabricObjectArray(updatedFabricObjectArray);
          }
        }
      }
    }
  };

  // 텍스트 크기 업데이트 및 사이드와 메인 캔버스 동기화
  const updateTextScaling = (e, index) => {
    if (e.target && e.target.type === "textbox") {
      const { scaleX, scaleY } = e.target;
      if (typeof scaleX === "number" && typeof scaleY === "number") {
        const updatedScaleX = scaleX;
        const updatedScaleY = scaleY;

        if (selectedSlide && selectedMainSlide) {
          const activeObject = selectedMainSlide.getActiveObject();
          if (activeObject && activeObject.type === "textbox") {
            activeObject.set({ scaleX: updatedScaleX, scaleY: updatedScaleY });
            selectedSlide.renderAll();

            const sideObjects = selectedSlide.getObjects();
            const mainObjects = selectedMainSlide.getObjects();

            for (let i = 0; i < sideObjects.length; i++) {
              const sideObj = sideObjects[i];
              const mainObj = mainObjects[i];

              if (
                sideObj &&
                mainObj &&
                sideObj.type === "textbox" &&
                mainObj.type === "i-text"
              ) {
                const sideScaleX =
                  sideObj.scaleX !== undefined ? sideObj.scaleX : 1;
                const sideScaleY =
                  sideObj.scaleY !== undefined ? sideObj.scaleY : 1;
                mainObj.set({ scaleX: sideScaleX * 8, scaleY: sideScaleY * 8 });
              }
            }

            selectedMainSlide.renderAll();
            // Update text values array
            setTextValues((prevTextValues) =>
              prevTextValues.map((textValue, index) =>
                index === selectedMainIndex
                  ? {
                      ...textValue,
                      scaleX: updatedScaleX,
                      scaleY: updatedScaleY,
                    }
                  : textValue
              )
            );

            // Update fabricObjectArray
            const updatedFabricObjectArray = fabricObjectArray.map((obj, i) =>
              i === index
                ? { ...obj, scaleX: updatedScaleX, scaleY: updatedScaleY }
                : obj
            );
            setFabricObjectArray(updatedFabricObjectArray);
          }
        }
      }
    }
  };

  // 텍스트 내용 수정 이벤트 핸들러
  const updateTextContent = (e) => {
    const activeObject = e.target; // Cast to fabric.Textbox
    if (activeObject && activeObject.type === "textbox") {
      const newTextValue = activeObject.text || ""; // 텍스트 객체의 내용 가져오기
      setTextValue(newTextValue);

      // 메인 캔버스에 텍스트 내용 업데이트
      const activeMainObject = selectedMainSlide?.getActiveObject();
      if (activeMainObject && activeMainObject.type === "textbox") {
        activeMainObject.set("text", newTextValue).setCoords(); // 값 변경 후 좌표 업데이트
        selectedMainSlide?.renderAll();

        // 사이드 캔버스에 텍스트 내용 업데이트
        const sideObjects = selectedSlide?.getObjects() || [];
        const mainObjects = selectedMainSlide?.getObjects() || [];

        for (let i = 0; i < sideObjects.length; i++) {
          const sideObj = sideObjects[i];
          const mainObj = mainObjects[i];

          if (
            sideObj &&
            mainObj &&
            sideObj.type === "textbox" &&
            mainObj.type === "i-text"
          ) {
            const mainText = mainObj.text || "";
            sideObj.set("text", mainText).setCoords(); // 값 변경 후 좌표 업데이트
          }
        }

        selectedMainSlide?.renderAll();

        // Update text values array
        setTextValues((prevTextValues) =>
          prevTextValues.map((textValue, index) =>
            index === selectedMainIndex
              ? {
                  ...textValue,
                  mainText: newTextValue,
                }
              : textValue
          )
        );

        // Update fabricObjectArray
        const updatedFabricObjectArray = fabricObjectArray.map((obj, index) =>
          index === selectedMainIndex
            ? {
                ...obj,
                text: newTextValue,
              }
            : obj
        );
        setFabricObjectArray(updatedFabricObjectArray);
      }
    }
  };

  // useEffect for updating the text object values array
  useEffect(() => {
    fabricCanvasRef.current = new fabric.Canvas(canvasRef.current);
  }, []);

  return (
    <div style={{ backgroundColor: "#f3f5f7" }}>
      {/* 상단바 */}
      <div
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #e2e4e6",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        {/* | */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AddTextButton onClick={addText} />
            {selectedSlideIndex !== null && (
              <DuplicateButton onClick={duplicateSlide} />
            )}
            {selectedSlideIndex !== null && (
              <DeleteSlideButton
                onClick={() => deleteSlide(selectedSlideIndex)}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <Typography sx={{ color: "#202225", fontSize: "0.785rem" }}>
              Slide Number
            </Typography> */}

            {/* | */}
          </div>
        </div>
      </div>
      {/* 메인 */}
      <div
        style={{
          display: "flex",
          overflow: "clip",
          height: "calc(100vh - 75px)",
        }}
      >
        {/* 사이드 슬라이드 바 */}
        <div style={{ width: "20rem" }}>
          {/* 사이드 슬라이드 생성버튼 */}
          <AddSlideButton onClick={addSlide} />
          {/* 사이드 슬라이드 */}
          <div
            id="side"
            ref={sideRef}
            style={{
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              height: "calc(100vh - 125px)",
              backgroundColor: "#fff",
            }}
          />
        </div>
        {/* 메인 슬라이드 */}
        <div
          id="main"
          ref={mainRef}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SlideApp;
