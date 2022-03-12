import React, { useState } from "react";
import ImageTabs from "./ImageTabs";

const ControlPanel = () => {
  return (
    <div className="control-panel-main">
      <div className="cp-main-text">Create your memes:</div>
      <div className="cp-main-body">
        <ImageTabs />
        {/* <Option text="Add image" value="Add image"></Option> */}
      </div>
    </div>
  );
};

export default ControlPanel;
