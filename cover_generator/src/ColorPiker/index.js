/* eslint-disable */
import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import "./index.scss";

const ColorPiker = ({ onChange }) => {
  // console.log(props);
  const [color, setColor] = useState({
    h: 250,
    s: 0,
    l: 0.2,
    a: 1,
  });
  const [opacity, setOpacity] = useState(1);
  const [bgColor, setBgColor] = useState("skyblue");

  const onChangeColor = (obj) => {
    setColor(obj.hsl);
    setBgColor(obj.hex);
    setOpacity(obj.hsl.a);
    onChange(obj);
  };

  return (
    <div className="colorPikerWarpper">
      <div className="bgExample">
        <div className="border">
          <div
            className="content"
            style={{ background: bgColor, opacity: opacity }}
          ></div>
        </div>
      </div>
      <ChromePicker color={color} onChange={onChangeColor} />
    </div>
  );
};

export default ColorPiker;
