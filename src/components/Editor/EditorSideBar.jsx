import React from "react";
import AddSlideButton from "components/EditorButton/AddSlideButton";

const SideBar = ({ addSlide, sideRef }) => {
  return (
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
  );
};

export default SideBar;
