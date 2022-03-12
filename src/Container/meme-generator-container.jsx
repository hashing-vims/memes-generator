import React, { useState } from "react";
import ControlPanel from "../Components/control-panel";
import "../Styleshetts/appStyle.css";
const MemeGenerator = () => {
  return (
    <div className="mg-container">
      <div className="mg-container-header">Memes Generator</div>
      <div className="mg-container-body">
        <div className="control-panel-left">
          <ControlPanel />
        </div>
        <div className="preview-window-right">^^^^^^^^^^^^^^^</div>
      </div>
    </div>
  );
};

export default MemeGenerator;
