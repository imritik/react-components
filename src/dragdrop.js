import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Dropzone from "./dropzone/Dropzone";
// import Skeleton from "./Skeleton";

function Drag() {
  return (
    <div>
      <p className="title">React Drag and Drop Image Upload</p>
      <div className="content">
        <Dropzone />
      </div>
    </div>
  );
}

export default Drag;
