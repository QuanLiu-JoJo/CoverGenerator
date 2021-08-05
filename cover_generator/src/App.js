/* eslint-disable */
import "./App.scss";
import { Input, Button, Radio } from "antd";
import React, { useState, useEffect } from "react";
import { downloadImage } from "./api";
import { ChromePicker } from "react-color";

function App() {
  const [title, setTitle] = useState("默认标题");
  const [color, setColor] = useState({
    h: 250,
    s: 0,
    l: 0.2,
    a: 1,
  });
  const [bgColor, setBgColor] = useState("skyblue");
  const [opacity, setOpacity] = useState(1);
  const [bgType, setBgType] = useState("color");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onBgcolorChange = (e) => {
    setBgcolor(e.target.value);
  };

  const downloadClick = () => {
    downloadImage(".cover_content", title);
  };

  const onChangeColor = (obj) => {
    setColor(obj.hsl);
    setBgColor(obj.hex);
    setOpacity(obj.hsl.a);
  };

  const handleBgTypeChange = (e) => {
    setBgType(e.target.value);
  };

  return (
    <div className="App">
      <div className="cover_generator_wrapper">
        <div className="cover_setting">
          <div>标题：</div>
          <Input
            allowClear
            placeholder="封面标题"
            maxLength="200"
            onChange={onTitleChange}
          />
          <div>背景颜色：</div>
          <Input
            allowClear
            placeholder="背景颜色"
            maxLength="200"
            onChange={onBgcolorChange}
          />
          <Button onClick={downloadClick}>下载封面</Button>
        </div>
        <div className="color_warrper">
          <div className="bgChoose">
            <Radio.Group value={bgType} onChange={handleBgTypeChange}>
              <Radio.Button value="color">纯色</Radio.Button>
              <Radio.Button value="gradual">渐变</Radio.Button>
              <Radio.Button value="image">图片</Radio.Button>
            </Radio.Group>
          </div>

          <ChromePicker color={color} onChange={onChangeColor} />
        </div>
        <div className="cover_display">
          <div className="cover_content_wrapper">
            <div
              className="cover_content"
              style={{ background: bgColor, opacity: opacity }}
            >
              <div className="cover_title">
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
