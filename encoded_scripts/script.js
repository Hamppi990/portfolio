const _0x3408ec = _0x478b;
(function (_0x64dd0e, _0x4658fa) {
  const _0x914a01 = _0x478b,
    _0x1f9ddb = _0x64dd0e();
  while (!![]) {
    try {
      const _0x5d7f60 =
        -parseInt(_0x914a01(0x160)) / 0x1 +
        (parseInt(_0x914a01(0x155)) / 0x2) *
          (-parseInt(_0x914a01(0x159)) / 0x3) +
        parseInt(_0x914a01(0x156)) / 0x4 +
        parseInt(_0x914a01(0x144)) / 0x5 +
        (parseInt(_0x914a01(0x143)) / 0x6) *
          (-parseInt(_0x914a01(0x171)) / 0x7) +
        (parseInt(_0x914a01(0x146)) / 0x8) *
          (-parseInt(_0x914a01(0x150)) / 0x9) +
        (-parseInt(_0x914a01(0x148)) / 0xa) *
          (-parseInt(_0x914a01(0x14f)) / 0xb);
      if (_0x5d7f60 === _0x4658fa) break;
      else _0x1f9ddb["push"](_0x1f9ddb["shift"]());
    } catch (_0x4ef3b5) {
      _0x1f9ddb["push"](_0x1f9ddb["shift"]());
    }
  }
})(_0xa48e, 0x6b967);
const backToTopButton = document[_0x3408ec(0x14d)](_0x3408ec(0x163)),
  scrollDown = document[_0x3408ec(0x14d)](_0x3408ec(0x168));
window["addEventListener"](_0x3408ec(0x13d), () => {
  const _0xe11aba = _0x3408ec;
  document[_0xe11aba(0x145)][_0xe11aba(0x16e)] > 0x28a
    ? ((backToTopButton[_0xe11aba(0x141)][_0xe11aba(0x142)] = "1"),
      (scrollDown[_0xe11aba(0x141)][_0xe11aba(0x142)] = "0"),
      (backToTopButton[_0xe11aba(0x141)]["pointerEvents"] = _0xe11aba(0x147)),
      (scrollDown[_0xe11aba(0x141)][_0xe11aba(0x14a)] = _0xe11aba(0x13e)),
      (backToTopButton[_0xe11aba(0x141)][_0xe11aba(0x13f)] = _0xe11aba(0x164)))
    : ((backToTopButton[_0xe11aba(0x141)][_0xe11aba(0x142)] = "0"),
      (scrollDown[_0xe11aba(0x141)][_0xe11aba(0x142)] = "1"),
      (backToTopButton[_0xe11aba(0x141)][_0xe11aba(0x14a)] = _0xe11aba(0x13e)),
      (scrollDown[_0xe11aba(0x141)][_0xe11aba(0x14a)] = _0xe11aba(0x147)),
      (backToTopButton[_0xe11aba(0x141)]["cursor"] = _0xe11aba(0x13e)));
});
const elements = document[_0x3408ec(0x15a)](_0x3408ec(0x16b)),
  observer = new IntersectionObserver(
    (_0x3fde56) => {
      _0x3fde56["forEach"]((_0x44a1dc) => {
        const _0x283dc6 = _0x478b;
        _0x44a1dc[_0x283dc6(0x174)]
          ? _0x44a1dc[_0x283dc6(0x166)]["classList"][_0x283dc6(0x13b)](
              _0x283dc6(0x161)
            )
          : _0x44a1dc["target"][_0x283dc6(0x177)]["remove"]("visible");
      });
    },
    { threshold: 0.1 }
  );
function _0x478b(_0x475f31, _0x56ef89) {
  const _0xa48ec3 = _0xa48e();
  return (
    (_0x478b = function (_0x478bd3, _0x5cfcc2) {
      _0x478bd3 = _0x478bd3 - 0x13b;
      let _0x22c9a6 = _0xa48ec3[_0x478bd3];
      return _0x22c9a6;
    }),
    _0x478b(_0x475f31, _0x56ef89)
  );
}
elements[_0x3408ec(0x170)]((_0x117fe2) =>
  observer[_0x3408ec(0x15e)](_0x117fe2)
),
  document[_0x3408ec(0x15a)](".progress-bar")[_0x3408ec(0x170)]((_0x3a00f6) => {
    const _0x3f484d = _0x3408ec,
      _0x11a5b7 = parseInt(_0x3a00f6["style"][_0x3f484d(0x165)]),
      _0x14f746 = document[_0x3f484d(0x153)][_0x3f484d(0x177)][
        _0x3f484d(0x14e)
      ](_0x3f484d(0x175));
    let _0x332a24;
    if (_0x14f746) {
      const _0x2863e7 = 0xe9,
        _0x20a103 = 0x64,
        _0x8410ea = 0x3c + _0x11a5b7 * 0.25;
      _0x332a24 =
        _0x3f484d(0x158) +
        _0x2863e7 +
        ",\x20" +
        _0x20a103 +
        _0x3f484d(0x151) +
        _0x8410ea +
        "%)";
    } else {
      const _0x487bc2 = 0xfa,
        _0x599c3e = 0x50,
        _0x57b8cb = 0x5a - _0x11a5b7 * 0.15;
      _0x332a24 =
        _0x3f484d(0x158) +
        _0x487bc2 +
        ",\x20" +
        _0x599c3e +
        _0x3f484d(0x151) +
        _0x57b8cb +
        "%)";
    }
    _0x3a00f6["style"]["backgroundColor"] = _0x332a24;
  });
const canvas = document["getElementById"]("noiseCanvas"),
  ctx = canvas[_0x3408ec(0x16f)]("2d"),
  patternSize = 0xfa,
  patternAlpha = 0xc,
  patternRefreshInterval = 0x2;
let frame = 0x0;
const patternCanvas = document[_0x3408ec(0x16c)](_0x3408ec(0x152));
(patternCanvas[_0x3408ec(0x165)] = patternSize),
  (patternCanvas[_0x3408ec(0x162)] = patternSize);
const patternCtx = patternCanvas[_0x3408ec(0x16f)]("2d"),
  patternData = patternCtx["createImageData"](patternSize, patternSize),
  patternPixelDataLength = patternSize * patternSize * 0x4;
function scrollToTop() {
  const _0x698a52 = _0x3408ec;
  lenis[_0x698a52(0x173)](0x0, {
    duration: 0.3,
    easing: (_0x559fa3) => _0x559fa3,
  });
}
function resizeCanvas() {
  const _0x45a433 = _0x3408ec;
  (canvas[_0x45a433(0x165)] =
    window[_0x45a433(0x13c)] * window[_0x45a433(0x149)]),
    (canvas[_0x45a433(0x162)] =
      window[_0x45a433(0x15c)] * window[_0x45a433(0x149)]);
}
function updatePattern() {
  const _0x1422d4 = _0x3408ec;
  for (
    let _0x2d182d = 0x0;
    _0x2d182d < patternPixelDataLength;
    _0x2d182d += 0x4
  ) {
    const _0x3f2143 = Math[_0x1422d4(0x14c)]() * 0xff;
    (patternData["data"][_0x2d182d] = _0x3f2143),
      (patternData[_0x1422d4(0x16d)][_0x2d182d + 0x1] = _0x3f2143),
      (patternData["data"][_0x2d182d + 0x2] = _0x3f2143),
      (patternData["data"][_0x2d182d + 0x3] = patternAlpha);
  }
  patternCtx[_0x1422d4(0x14b)](patternData, 0x0, 0x0);
}
function drawGrain() {
  const _0x418124 = _0x3408ec;
  ctx["clearRect"](0x0, 0x0, canvas["width"], canvas[_0x418124(0x162)]),
    (ctx[_0x418124(0x15b)] = ctx[_0x418124(0x172)](
      patternCanvas,
      _0x418124(0x15f)
    )),
    ctx[_0x418124(0x15d)](
      0x0,
      0x0,
      canvas[_0x418124(0x165)],
      canvas[_0x418124(0x162)]
    );
}
function loop() {
  frame % patternRefreshInterval === 0x0 && (updatePattern(), drawGrain()),
    frame++,
    requestAnimationFrame(loop);
}
window[_0x3408ec(0x169)](_0x3408ec(0x16a), resizeCanvas),
  resizeCanvas(),
  loop();
const lenis = new Lenis({
  duration: 1.2,
  easing: (_0x2a5c8c) =>
    Math[_0x3408ec(0x167)](
      0x1,
      1.001 - Math[_0x3408ec(0x157)](0x2, -0xa * _0x2a5c8c)
    ),
  smooth: !![],
});
function raf(_0x5b4ff2) {
  const _0x80c0ee = _0x3408ec;
  lenis[_0x80c0ee(0x176)](_0x5b4ff2), requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
const setVH = () => {
  const _0x4244bc = _0x3408ec;
  document[_0x4244bc(0x145)][_0x4244bc(0x141)][_0x4244bc(0x140)](
    _0x4244bc(0x154),
    window[_0x4244bc(0x15c)] * 0.01 + "px"
  );
};
window["addEventListener"](_0x3408ec(0x16a), setVH), setVH();
function _0xa48e() {
  const _0x51892b = [
    "3933625VKZcae",
    "documentElement",
    "13952BykzpT",
    "auto",
    "5861110rJEhmL",
    "devicePixelRatio",
    "pointerEvents",
    "putImageData",
    "random",
    "getElementById",
    "contains",
    "22MGDnQD",
    "3384JBAwMe",
    "%,\x20",
    "canvas",
    "body",
    "--vh",
    "61632suigeo",
    "686784yMKXtW",
    "pow",
    "hsl(",
    "33aUeJSB",
    "querySelectorAll",
    "fillStyle",
    "innerHeight",
    "fillRect",
    "observe",
    "repeat",
    "210461cWXRlA",
    "visible",
    "height",
    "back-to-top",
    "pointer",
    "width",
    "target",
    "min",
    "hero-scroll-down",
    "addEventListener",
    "resize",
    ".fade-in",
    "createElement",
    "data",
    "scrollTop",
    "getContext",
    "forEach",
    "38129scqkwn",
    "createPattern",
    "scrollTo",
    "isIntersecting",
    "dark",
    "raf",
    "classList",
    "add",
    "innerWidth",
    "scroll",
    "none",
    "cursor",
    "setProperty",
    "style",
    "opacity",
    "534cCETmx",
  ];
  _0xa48e = function () {
    return _0x51892b;
  };
  return _0xa48e();
}
