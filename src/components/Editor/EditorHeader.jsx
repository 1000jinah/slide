import React from "react";

import AddTextButton from "components/EditorButton/AddTextButton";
import DuplicateButton from "components/EditorButton/DuplicateButton";
import DeleteSlideButton from "components/EditorButton/DeleteSlideButton";

const Header = ({ addText, duplicateSlide, deleteSlide }) => {
  return (
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
          <DuplicateButton onClick={duplicateSlide} />
          <DeleteSlideButton onClick={deleteSlide} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Add other header components as needed */}
        </div>
      </div>
    </div>
  );
};

export default Header;
