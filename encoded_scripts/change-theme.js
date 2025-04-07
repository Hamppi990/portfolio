const _0x927ac3 = _0x1a01;
(function (_0x1417b8, _0x208b79) {
  const _0x3e639e = _0x1a01,
    _0x12dcdf = _0x1417b8();
  while (!![]) {
    try {
      const _0x21cf56 =
        parseInt(_0x3e639e(0x9b)) / 0x1 +
        -parseInt(_0x3e639e(0xa1)) / 0x2 +
        parseInt(_0x3e639e(0xa4)) / 0x3 +
        -parseInt(_0x3e639e(0x9f)) / 0x4 +
        (parseInt(_0x3e639e(0x99)) / 0x5) * (parseInt(_0x3e639e(0xa9)) / 0x6) +
        (parseInt(_0x3e639e(0xab)) / 0x7) * (parseInt(_0x3e639e(0xa7)) / 0x8) +
        -parseInt(_0x3e639e(0xaa)) / 0x9;
      if (_0x21cf56 === _0x208b79) break;
      else _0x12dcdf["push"](_0x12dcdf["shift"]());
    } catch (_0x2f68f2) {
      _0x12dcdf["push"](_0x12dcdf["shift"]());
    }
  }
})(_0x2b1c, 0x9303b);
function _0x2b1c() {
  const _0x2893c0 = [
    "innerHTML",
    "96oIJUDc",
    "<i\x20class=\x22fa-solid\x20fa-sun\x22\x20style=\x22font-size:\x201rem;\x20margin-top:\x200;\x22></i>",
    "9654zjzAvm",
    "1119834dXWMJX",
    "338338zEaXlF",
    "setItem",
    "addEventListener",
    "click",
    "classList",
    "2355sHXWhX",
    "getItem",
    "416341PJsecV",
    "light",
    "contains",
    "theme",
    "2089760xrIfKQ",
    "toggle",
    "1636870aqXYVe",
    "<i\x20class=\x22fa-solid\x20fa-moon\x22\x20style=\x22font-size:\x201rem;\x20margin-top:\x200;\x22></i>",
    "dark",
    "939852zsFQTj",
    "getElementById",
  ];
  _0x2b1c = function () {
    return _0x2893c0;
  };
  return _0x2b1c();
}
const themeSwitcher = document[_0x927ac3(0xa5)](_0x927ac3(0x9e)),
  bodyElement = document["body"];
function toggleDarkTheme() {
  const _0x1cfc49 = _0x927ac3;
  bodyElement[_0x1cfc49(0x98)][_0x1cfc49(0xa0)](_0x1cfc49(0xa3)),
    bodyElement["classList"][_0x1cfc49(0x9d)]("dark")
      ? (localStorage[_0x1cfc49(0xac)](_0x1cfc49(0x9e), _0x1cfc49(0xa3)),
        (themeSwitcher[_0x1cfc49(0xa6)] = _0x1cfc49(0xa2)))
      : (localStorage[_0x1cfc49(0xac)](_0x1cfc49(0x9e), _0x1cfc49(0x9c)),
        (themeSwitcher[_0x1cfc49(0xa6)] = _0x1cfc49(0xa8)));
}
function _0x1a01(_0x1465b0, _0x5d7c12) {
  const _0x2b1cbe = _0x2b1c();
  return (
    (_0x1a01 = function (_0x1a01ab, _0x2e9ba1) {
      _0x1a01ab = _0x1a01ab - 0x98;
      let _0xccbc11 = _0x2b1cbe[_0x1a01ab];
      return _0xccbc11;
    }),
    _0x1a01(_0x1465b0, _0x5d7c12)
  );
}
themeSwitcher[_0x927ac3(0xad)](_0x927ac3(0xae), toggleDarkTheme),
  window[_0x927ac3(0xad)]("load", () => {
    const _0x3c43f5 = _0x927ac3;
    localStorage[_0x3c43f5(0x9a)](_0x3c43f5(0x9e)) === _0x3c43f5(0xa3) &&
      (bodyElement[_0x3c43f5(0x98)]["add"](_0x3c43f5(0xa3)),
      (themeSwitcher["innerHTML"] =
        "<i\x20class=\x22fa-solid\x20fa-moon\x22\x20style=\x22font-size:\x201rem;\x20margin-top:\x200;\x22></i>"));
  });
