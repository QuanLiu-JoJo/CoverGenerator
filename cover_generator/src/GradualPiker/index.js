/* eslint-disable */
import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { ragaToString } from "../api";
import "./index.scss";

const GradualPiker = ({ onChange }) => {
  const [color1, setColor1] = useState({
    r: 250,
    g: 0,
    b: 0.2,
    a: 1,
  });
  const [bgColor1, setBgColor1] = useState("skyblue");
  const [leftDisplay, setLeftDisplay] = useState(true);

  const [color2, setColor2] = useState({
    r: 250,
    g: 0,
    b: 0.2,
    a: 1,
  });
  const [bgColor2, setBgColor2] = useState("blue");

  const onChangeColor1 = (obj) => {
    setColor1(obj.rgb);
    setBgColor1(ragaToString(obj.rgb));
    onChange(`linear-gradient(to right, ${bgColor1}, ${bgColor2})`);
  };

  const clickLeft = () => {
    setLeftDisplay(true);
  };

  const onChangeColor2 = (obj) => {
    setColor2(obj.rgb);
    setBgColor2(ragaToString(obj.rgb));
    onChange(`linear-gradient(to right, ${bgColor1}, ${bgColor2})`);
  };

  const clickRight = () => {
    setLeftDisplay(false);
  };

  return (
    <div className="gradualPikerWarpper">
      <div className="bgExample">
        <div className="border">
          <div
            className="left"
            style={{ background: bgColor1 }}
            onClick={clickLeft}
          ></div>
          <div
            className="content"
            style={{
              background: `linear-gradient(to right, ${bgColor1}, ${bgColor2})`,
            }}
          ></div>
          <div
            className="right"
            style={{ background: bgColor2 }}
            onClick={clickRight}
          ></div>
        </div>
      </div>
      {leftDisplay ? (
        <ChromePicker color={color1} onChange={onChangeColor1} />
      ) : (
        <ChromePicker color={color2} onChange={onChangeColor2} />
      )}
    </div>
  );
};

export default GradualPiker;
