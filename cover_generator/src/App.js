/* eslint-disable */
import "./App.scss";
import { Input, Button, Radio } from "antd";
import React, { useState, useEffect } from "react";
import { downloadImage, rgbaToString, isParentNode } from "./api";
import ColorPiker from "./ColorPiker";
import GradualPiker from "./GradualPiker";
import ImagePiker from "./ImagePiker";

function App() {
  const [title, setTitle] = useState("默认标题");
  const [bgColor, setBgColor] = useState(
    rgbaToString({
      r: 163,
      g: 26,
      b: 40,
      a: 1,
    })
  );
  const [bgType, setBgType] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onBgcolorChange = (e) => {
    setBgcolor(e.target.value);
  };

  const downloadClick = () => {
    downloadImage(".cover_content", title);
  };

  const handleBgTypeChange = (e) => {
    setBgType(e.target.value);
  };

  const onColorPikerChange = (color) => {
    setBgColor(color);
  };

  const onGradualPikerChange = (gradual) => {
    setBgColor(gradual);
  };

  const onImagePikerChange = (imageUrl) => {
    setBgColor(`url(${imageUrl})`);
  };

  useEffect(() => {
    let color_warrper = document.querySelector(".color_warrper");
    document.body.addEventListener(
      "click",
      function (e) {
        if (!isParentNode(color_warrper, e.target)) {
          setBgType("");
        }
      },
      false
    );
  }, []);

  return (
    <div className="App">
      <div className="cover_generator_wrapper">
        <div className="cover_setting">
          <div>
            <span>标题：</span>
            <Input
              allowClear
              placeholder="封面标题"
              maxLength="200"
              onChange={onTitleChange}
            />
          </div>
          <div className="color_warrper">
            <div className="bgChoose">
              <span>背景：</span>
              <Radio.Group value={bgType} onChange={handleBgTypeChange}>
                <Radio.Button value="color">纯色</Radio.Button>
                <Radio.Button value="gradual">渐变</Radio.Button>
                <Radio.Button value="image">图片</Radio.Button>
              </Radio.Group>
            </div>

            <div className="bgPiker">
              {bgType === "color" ? (
                <ColorPiker onChange={onColorPikerChange} />
              ) : bgType === "gradual" ? (
                <GradualPiker onChange={onGradualPikerChange} />
              ) : bgType === "image" ? (
                <ImagePiker onChange={onImagePikerChange} />
              ) : null}
            </div>
          </div>
          <Button onClick={downloadClick} size="middle">
            下载封面
          </Button>
        </div>

        <div className="cover_display">
          <div className="cover_content_wrapper">
            <div
              className="cover_content"
              style={{
                background: bgColor,
              }}
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
