/* eslint-disable */
import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { rgbaToString } from "../api";
import "./index.scss";

const ColorPiker = ({ onChange }) => {
  // console.log(props);
  const [color, setColor] = useState({
    r: 163,
    g: 26,
    b: 40,
    a: 1,
  });
  const [bgColor, setBgColor] = useState(rgbaToString(color));

  const onChangeColor = (obj) => {
    setColor(obj.rgb);
    setBgColor(obj.hex);
  };

  useEffect(() => {
    onChange(rgbaToString(color));
  }, [color]);

  return (
    <div className="colorPikerWarpper">
      <div className="bgExample">
        <div className="border">
          <div className="content" style={{ background: bgColor }}></div>
        </div>
      </div>
      <ChromePicker color={color} onChange={onChangeColor} />
    </div>
  );
};

export default ColorPiker;
