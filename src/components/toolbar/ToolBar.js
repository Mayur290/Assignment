import React from "react";
import "./ToolBar.css";

function ToolBar(props) {

  const selectTagfun = (tag) => {
     props.selectTag(tag)
  }

  return (
    <div className="container">
      <h2>Tags:</h2>
      <div className="toolbar">
        <h2 onClick={() => {selectTagfun("fav")}}>Favourites</h2>
        <h2 onClick={() => {selectTagfun("asthma")}} >Asthma</h2>
        <h2  onClick={() => {selectTagfun("tb")}}>Tb</h2>
        <h2  onClick={() => {selectTagfun("copd")}}>Copd</h2>
        <h2  onClick={() => {selectTagfun("bp")}}>BP</h2>
        <h2  onClick={() => {selectTagfun("cancer")}}>Cancer</h2>
        <h2  onClick={() => {selectTagfun("heart")}}>Heart</h2>
        <h2  onClick={() => {selectTagfun("diabetes")}}>Diabetes</h2>
      </div>
    </div>
  );
}

export default ToolBar;
