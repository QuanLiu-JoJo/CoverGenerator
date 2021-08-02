/* eslint-disable */
import html2canvas from "html2canvas";

export function downloadImage(selector, fileName = "downImg") {
  let _canvas = document.querySelector(selector);

  // 创造一个a标签用于下载，使用完后再删除
  html2canvas(_canvas, {
    // height: _canvas.offsetHeight, // 此属性是指画布本身的大小
    // width: _canvas.offsetWidth,
    windowWidth: document.body.scrollWidth, // 解决左边白边，大右偏小左偏
    // windowHeight: document.body.scrollHeight, // 调节时无作用
    x: _canvas.offsetLeft, // 设为offsetLeft仍有左侧白边
    y: _canvas.offsetTop, // 负数往下，正数往上，设为offsetTop解决问题
    dpi: window.devicePixelRatio * 3, // 解决图片不清晰问题
    scale: 3,
  }).then(function (canvas) {
    //canvas转换成url，然后利用a标签的download属性，直接下载，绕过上传服务器再下载
    let _temp_a = document.createElement("a");
    _temp_a.setAttribute("href", canvas.toDataURL());
    _temp_a.setAttribute("download", fileName);
    document.body.appendChild(_temp_a);
    _temp_a.click();
    _temp_a.remove();
  });
}
