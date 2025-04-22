const _0x225052 = _0x38cc;
(function (_0x219678, _0x163487) {
  const _0x5934ef = _0x38cc,
    _0x547f17 = _0x219678();
  while (!![]) {
    try {
      const _0x50358b =
        parseInt(_0x5934ef(0x103)) / 0x1 +
        parseInt(_0x5934ef(0x117)) / 0x2 +
        parseInt(_0x5934ef(0xf4)) / 0x3 +
        parseInt(_0x5934ef(0x100)) / 0x4 +
        -parseInt(_0x5934ef(0x101)) / 0x5 +
        parseInt(_0x5934ef(0x10e)) / 0x6 +
        -parseInt(_0x5934ef(0x109)) / 0x7;
      if (_0x50358b === _0x163487) break;
      else _0x547f17["push"](_0x547f17["shift"]());
    } catch (_0x33938e) {
      _0x547f17["push"](_0x547f17["shift"]());
    }
  }
})(_0x5e7a, 0xb78a2);
const backToTopButton = document[_0x225052(0x112)](_0x225052(0x10a)),
  scrollDown = document[_0x225052(0x112)](_0x225052(0x10c));
window[_0x225052(0xf0)](_0x225052(0x115), () => {
  const _0x1fdf2a = _0x225052;
  document[_0x1fdf2a(0xf5)]["scrollTop"] > 0x28a
    ? ((backToTopButton[_0x1fdf2a(0xfc)]["opacity"] = "1"),
      (scrollDown[_0x1fdf2a(0xfc)][_0x1fdf2a(0x10b)] = "0"),
      (backToTopButton["style"][_0x1fdf2a(0x10f)] = "auto"),
      (scrollDown[_0x1fdf2a(0xfc)][_0x1fdf2a(0x10f)] = _0x1fdf2a(0x118)),
      (backToTopButton[_0x1fdf2a(0xfc)][_0x1fdf2a(0xfb)] = _0x1fdf2a(0x116)))
    : ((backToTopButton[_0x1fdf2a(0xfc)][_0x1fdf2a(0x10b)] = "0"),
      (scrollDown[_0x1fdf2a(0xfc)][_0x1fdf2a(0x10b)] = "1"),
      (backToTopButton[_0x1fdf2a(0xfc)][_0x1fdf2a(0x10f)] = _0x1fdf2a(0x118)),
      (scrollDown[_0x1fdf2a(0xfc)][_0x1fdf2a(0x10f)] = _0x1fdf2a(0xeb)),
      (backToTopButton[_0x1fdf2a(0xfc)][_0x1fdf2a(0xfb)] = "none"));
});
const elements = document["querySelectorAll"](".fade-in"),
  observer = new IntersectionObserver(
    (_0x5bbfdc, _0x525d09) => {
      const _0x45a45e = _0x225052;
      _0x5bbfdc[_0x45a45e(0xfd)]((_0x499ea5) => {
        const _0x5b4068 = _0x45a45e;
        _0x499ea5[_0x5b4068(0xfa)] &&
          (_0x499ea5[_0x5b4068(0x113)][_0x5b4068(0xec)][_0x5b4068(0x114)](
            _0x5b4068(0x104)
          ),
          _0x525d09[_0x5b4068(0xf7)](_0x499ea5[_0x5b4068(0x113)]));
      });
    },
    { threshold: 0.1 }
  );
elements[_0x225052(0xfd)]((_0xb5160) => observer[_0x225052(0xee)](_0xb5160)),
  document["querySelectorAll"](".progress-bar")[_0x225052(0xfd)](
    (_0x12bcc3) => {
      const _0xcdb568 = _0x225052,
        _0x44cf4c = parseInt(_0x12bcc3["style"][_0xcdb568(0xf9)]),
        _0x1191ef = document[_0xcdb568(0xf3)]["classList"][_0xcdb568(0x10d)](
          _0xcdb568(0x111)
        );
      let _0x108c81;
      if (_0x1191ef) {
        const _0x33d4c5 = 0xe9,
          _0x2a5daf = 0x64,
          _0x13e4ff = 0x3c + _0x44cf4c * 0.25;
        _0x108c81 =
          "hsl(" +
          _0x33d4c5 +
          ",\x20" +
          _0x2a5daf +
          _0xcdb568(0xef) +
          _0x13e4ff +
          "%)";
      } else {
        const _0x3d5b2c = 0xfa,
          _0x5adf65 = 0x50,
          _0x5a3a16 = 0x5a - _0x44cf4c * 0.15;
        _0x108c81 =
          "hsl(" +
          _0x3d5b2c +
          ",\x20" +
          _0x5adf65 +
          _0xcdb568(0xef) +
          _0x5a3a16 +
          "%)";
      }
      _0x12bcc3[_0xcdb568(0xfc)][_0xcdb568(0x106)] = _0x108c81;
    }
  );
const canvas = document["getElementById"](_0x225052(0x107)),
  ctx = canvas[_0x225052(0xfe)]("2d"),
  patternSize = 0xfa,
  patternAlpha = 0xc,
  patternRefreshInterval = 0x2;
let frame = 0x0;
const patternCanvas = document["createElement"](_0x225052(0xed));
(patternCanvas["width"] = patternSize),
  (patternCanvas[_0x225052(0xea)] = patternSize);
const patternCtx = patternCanvas[_0x225052(0xfe)]("2d"),
  patternData = patternCtx[_0x225052(0xf1)](patternSize, patternSize),
  patternPixelDataLength = patternSize * patternSize * 0x4;
function resizeCanvas() {
  const _0x41525f = _0x225052;
  (canvas[_0x41525f(0xf9)] = window[_0x41525f(0xff)] * window[_0x41525f(0xf2)]),
    (canvas[_0x41525f(0xea)] =
      window[_0x41525f(0x110)] * window["devicePixelRatio"]);
}
function _0x38cc(_0x5a06a6, _0x3b4ed) {
  const _0x5e7aa7 = _0x5e7a();
  return (
    (_0x38cc = function (_0x38cc3f, _0x2769b2) {
      _0x38cc3f = _0x38cc3f - 0xe8;
      let _0x3ea897 = _0x5e7aa7[_0x38cc3f];
      return _0x3ea897;
    }),
    _0x38cc(_0x5a06a6, _0x3b4ed)
  );
}
function updatePattern() {
  const _0x5196e5 = _0x225052;
  for (
    let _0x12b1cf = 0x0;
    _0x12b1cf < patternPixelDataLength;
    _0x12b1cf += 0x4
  ) {
    const _0x20a5f3 = Math["random"]() * 0xff;
    (patternData[_0x5196e5(0x105)][_0x12b1cf] = _0x20a5f3),
      (patternData["data"][_0x12b1cf + 0x1] = _0x20a5f3),
      (patternData[_0x5196e5(0x105)][_0x12b1cf + 0x2] = _0x20a5f3),
      (patternData[_0x5196e5(0x105)][_0x12b1cf + 0x3] = patternAlpha);
  }
  patternCtx["putImageData"](patternData, 0x0, 0x0);
}
function drawGrain() {
  const _0x1177f2 = _0x225052;
  ctx[_0x1177f2(0x102)](
    0x0,
    0x0,
    canvas[_0x1177f2(0xf9)],
    canvas[_0x1177f2(0xea)]
  ),
    (ctx[_0x1177f2(0xe9)] = ctx[_0x1177f2(0xe8)](
      patternCanvas,
      _0x1177f2(0xf8)
    )),
    ctx[_0x1177f2(0x108)](
      0x0,
      0x0,
      canvas[_0x1177f2(0xf9)],
      canvas[_0x1177f2(0xea)]
    );
}
function loop() {
  frame % patternRefreshInterval === 0x0 && (updatePattern(), drawGrain()),
    frame++,
    requestAnimationFrame(loop);
}
function _0x5e7a() {
  const _0x245148 = [
    "visible",
    "data",
    "backgroundColor",
    "noiseCanvas",
    "fillRect",
    "10184643fRKQpL",
    "back-to-top",
    "opacity",
    "hero-scroll-down",
    "contains",
    "4444536wraLSi",
    "pointerEvents",
    "innerHeight",
    "dark",
    "getElementById",
    "target",
    "add",
    "scroll",
    "pointer",
    "124224BUlQra",
    "none",
    "createPattern",
    "fillStyle",
    "height",
    "auto",
    "classList",
    "canvas",
    "observe",
    "%,\x20",
    "addEventListener",
    "createImageData",
    "devicePixelRatio",
    "body",
    "3216324xMmYtV",
    "documentElement",
    "resize",
    "unobserve",
    "repeat",
    "width",
    "isIntersecting",
    "cursor",
    "style",
    "forEach",
    "getContext",
    "innerWidth",
    "1561408JpQjIx",
    "995035WkVrLU",
    "clearRect",
    "140406FgYuiX",
  ];
  _0x5e7a = function () {
    return _0x245148;
  };
  return _0x5e7a();
}
window["addEventListener"](_0x225052(0xf6), resizeCanvas),
  resizeCanvas(),
  loop();
