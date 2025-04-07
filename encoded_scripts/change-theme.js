function _0x4cf6(_0x7904d8, _0x184953) {
  const _0x368988 = _0x3689();
  return (
    (_0x4cf6 = function (_0x4cf628, _0x1204c8) {
      _0x4cf628 = _0x4cf628 - 0xff;
      let _0x20dca6 = _0x368988[_0x4cf628];
      return _0x20dca6;
    }),
    _0x4cf6(_0x7904d8, _0x184953)
  );
}
const _0x5edbd0 = _0x4cf6;
function _0x3689() {
  const _0x51fba0 = [
    "18200uKBGHk",
    "5654838htqmVr",
    "theme",
    "dark",
    "2426184ieUGuY",
    "light",
    "setItem",
    "classList",
    "toggle",
    "1941092AuAifS",
    "<i\x20class=\x22fa-solid\x20fa-moon\x22\x20style=\x22font-size:\x201rem;\x20margin-top:\x200;\x22></i>",
    "addEventListener",
    "36zBVEib",
    "add",
    "remove",
    "70tRkWcP",
    "load",
    "319986KKdpea",
    "37965BMALWY",
    "matchMedia",
    "innerHTML",
    "<i\x20class=\x22fa-solid\x20fa-sun\x22\x20style=\x22font-size:\x201rem;\x20margin-top:\x200;\x22></i>",
    "(prefers-color-scheme:\x20dark)",
    "1077723IqLEaE",
  ];
  _0x3689 = function () {
    return _0x51fba0;
  };
  return _0x3689();
}
(function (_0x52ddfc, _0x244037) {
  const _0x56728d = _0x4cf6,
    _0x123dcb = _0x52ddfc();
  while (!![]) {
    try {
      const _0x3d2f11 =
        -parseInt(_0x56728d(0x105)) / 0x1 +
        parseInt(_0x56728d(0x115)) / 0x2 +
        -parseInt(_0x56728d(0x110)) / 0x3 +
        (parseInt(_0x56728d(0x100)) / 0x4) *
          (parseInt(_0x56728d(0x106)) / 0x5) +
        parseInt(_0x56728d(0x10d)) / 0x6 +
        (-parseInt(_0x56728d(0x103)) / 0x7) *
          (-parseInt(_0x56728d(0x10c)) / 0x8) +
        -parseInt(_0x56728d(0x10b)) / 0x9;
      if (_0x3d2f11 === _0x244037) break;
      else _0x123dcb["push"](_0x123dcb["shift"]());
    } catch (_0x392997) {
      _0x123dcb["push"](_0x123dcb["shift"]());
    }
  }
})(_0x3689, 0xb87bd);
const themeSwitcher = document["getElementById"](_0x5edbd0(0x10e)),
  bodyElement = document["body"];
function toggleDarkTheme() {
  const _0x4893fa = _0x5edbd0;
  bodyElement[_0x4893fa(0x113)][_0x4893fa(0x114)](_0x4893fa(0x10f)),
    bodyElement[_0x4893fa(0x113)]["contains"](_0x4893fa(0x10f))
      ? (localStorage[_0x4893fa(0x112)](_0x4893fa(0x10e), "dark"),
        (themeSwitcher[_0x4893fa(0x108)] = _0x4893fa(0x116)))
      : (localStorage[_0x4893fa(0x112)](_0x4893fa(0x10e), _0x4893fa(0x111)),
        (themeSwitcher["innerHTML"] =
          "<i\x20class=\x22fa-solid\x20fa-sun\x22\x20style=\x22font-size:\x201rem;\x20margin-top:\x200;\x22></i>"));
}
themeSwitcher[_0x5edbd0(0xff)]("click", toggleDarkTheme),
  window["addEventListener"](_0x5edbd0(0x104), () => {
    const _0x59c701 = _0x5edbd0,
      _0x4bdec3 = localStorage["getItem"](_0x59c701(0x10e));
    if (_0x4bdec3 === _0x59c701(0x10f))
      bodyElement[_0x59c701(0x113)][_0x59c701(0x101)](_0x59c701(0x10f)),
        (themeSwitcher["innerHTML"] =
          "<i\x20class=\x22fa-solid\x20fa-moon\x22\x20style=\x22font-size:\x201rem;\x20margin-top:\x200;\x22></i>");
    else {
      if (_0x4bdec3 === "light")
        bodyElement[_0x59c701(0x113)][_0x59c701(0x102)](_0x59c701(0x10f)),
          (themeSwitcher[_0x59c701(0x108)] =
            "<i\x20class=\x22fa-solid\x20fa-sun\x22\x20style=\x22font-size:\x201rem;\x20margin-top:\x200;\x22></i>");
      else {
        const _0x1dc26d = window[_0x59c701(0x107)](_0x59c701(0x10a))["matches"];
        _0x1dc26d
          ? (bodyElement[_0x59c701(0x113)][_0x59c701(0x101)](_0x59c701(0x10f)),
            (themeSwitcher[_0x59c701(0x108)] = _0x59c701(0x116)))
          : (themeSwitcher["innerHTML"] = _0x59c701(0x109));
      }
    }
  });
