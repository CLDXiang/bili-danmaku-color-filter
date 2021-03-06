# 油猴脚本 - Bilibili弹幕颜色过滤器

可以每隔一定时间将当前显示的的 B 站弹幕颜色隐藏或替换为其他颜色

## 使用方式

修改脚本中的以下变量：

### CD

刷新弹幕颜色的时间间隔（毫秒），每间隔这个时间会尝试替换当前显示的弹幕颜色

### COLORS_TO_FILTER

需要过滤的颜色列表，可用十六进制表示（`#FFFFFF`）或 RGB 表示（`rgb(123, 123, 123)`）

以 B 站 PC 端默认色板为例（这样做会过滤所有默认颜色！）：

```js
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
  '#FFFFFF', // 白色
];
```

### TARGET_COLOR

想要转换成的颜色，默认白色，如果希望隐藏可以设置为 `#FFF0`

## 如何知道想要屏蔽的弹幕颜色

脚本提供了一个控制台函数：`showDanmakuColor()`，可以显示当前屏幕上所有弹幕的颜色

可以通过打开浏览器控制台（快捷键：win: Ctrl+Shift+J, mac: Command+Option+J）输入 `showDanmakuColor()` 按回车执行
