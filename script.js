// ==UserScript==
// @name             Bilibili弹幕颜色过滤器
// @description      将指定的 B 站弹幕颜色隐藏或替换为其他颜色
// @namespace        https://cldxiang.com/
// @version          1.0.0
// @include          https://*.bilibili.com/*
// @supportURL       https://github.com/CLDXiang/bili-danmaku-color-filter
// @author           CLDXiang
// @noframes
// ==/UserScript==

(function () {
  'use strict';

  /** 刷新弹幕颜色的间隔时间(毫秒) */
  var CD = 233;
  /** 需要过滤的颜色列表，对应发送弹幕面板中的颜色顺序，不需要过滤的将其删掉即可 */
  var COLORS_TO_FILTER = [
    '#FE0302', // 红色
    '#FF7204', // 橙色
    '#FFAA02', // 浅橙色
    '#FFD302', // 黄色
    '#FFFF00', // 亮黄色
    '#A0EE00', // 浅绿色
    '#00CD00', // 绿色
    '#019899', // 青色
    '#4266BE', // 深蓝色
    '#89D5FF', // 浅蓝色
    '#CC0273', // 紫色
    '#222222', // 黑色
    '#9B9B9B', // 灰色
    'rgb(254, 241, 2)', // 也可以添加自定义颜色，十六进制或 RGB 表示均可
  ];
  /** 想要转换成的颜色，此处默认转为白色弹幕，如果想要直接隐藏，可以用 '#FFF0' */
  var TARGET_COLOR = '#FFF';

  /**
   * 将颜色值由十六进制表示转为 RGB 表示，如 `#FFFFFF` 转为 `rgb(255, 255, 255)`
   * @param colorHex 十六进制表示的颜色字符串
   */
  function hex2RGB(colorHex) {
    if (/rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)/.test(colorHex)) {
      return colorHex;
    }
    if (!/#[0-9A-Fa-f]{6}/.test(colorHex)) {
      throw new Error("请按照正确格式输入颜色值，如 '#123abc'");
    }
    var r = parseInt(colorHex.slice(1, 3), 16);
    var g = parseInt(colorHex.slice(3, 5), 16);
    var b = parseInt(colorHex.slice(5, 7), 16);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

  var parsedColorsToFilter = COLORS_TO_FILTER.map(hex2RGB);
  console.log('将被过滤的弹幕颜色：', parsedColorsToFilter);

  setInterval(function () {
    document.querySelectorAll('.b-danmaku').forEach(function (ele) {
      if (parsedColorsToFilter.indexOf(ele.style.color) !== -1) {
        ele.style.color = TARGET_COLOR;
      }
    });
  }, CD);

  /** 输出当前显示的所有弹幕的颜色 */
  unsafeWindow.showDanmakuColor = function () {
    var colorList = [];
    document.querySelectorAll('.b-danmaku').forEach(function (ele) {
      colorList.push(ele.style.color);
    });
    if (colorList.length) {
      console.log('当前显示的弹幕颜色：', Array.from(new Set(colorList)));
    } else {
      console.log('没有找到弹幕');
    }
  };
})();
