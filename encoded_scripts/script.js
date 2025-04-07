function _0x55f6() {
  const _0xe0e2fc = [
    "183528ASqQpD",
    "32CqOEQR",
    "getElementById",
    "7GPgLHE",
    "2972DacxsQ",
    "pointer",
    "addEventListener",
    "unobserve",
    "2341612HOIBgW",
    "isIntersecting",
    "409235kXPwYX",
    "12AIniDn",
    "scrollTop",
    "12powcLO",
    "documentElement",
    ".fade-in",
    "76635Txiqcf",
    "28AISbGE",
    "none",
    "forEach",
    "style",
    "querySelectorAll",
    "observe",
    "pointerEvents",
    "cursor",
    "opacity",
    "classList",
    "auto",
    "70DKMlMw",
    "210448EMlBQm",
    "627407rWHFrk",
    "target",
  ];
  _0x55f6 = function () {
    return _0xe0e2fc;
  };
  return _0x55f6();
}
function _0x333e(_0x1f029b, _0x246039) {
  const _0x55f6c6 = _0x55f6();
  return (
    (_0x333e = function (_0x333e0d, _0x14f736) {
      _0x333e0d = _0x333e0d - 0x10f;
      let _0x24795c = _0x55f6c6[_0x333e0d];
      return _0x24795c;
    }),
    _0x333e(_0x1f029b, _0x246039)
  );
}
const _0x5207bb = _0x333e;
(function (_0x186484, _0x2a22f3) {
  const _0xf63455 = _0x333e,
    _0x367962 = _0x186484();
  while (!![]) {
    try {
      const _0x5b871d =
        (parseInt(_0xf63455(0x12b)) / 0x1) *
          (-parseInt(_0xf63455(0x12c)) / 0x2) +
        (-parseInt(_0xf63455(0x118)) / 0x3) *
          (-parseInt(_0xf63455(0x119)) / 0x4) +
        (parseInt(_0xf63455(0x112)) / 0x5) *
          (parseInt(_0xf63455(0x115)) / 0x6) +
        (-parseInt(_0xf63455(0x125)) / 0x7) *
          (parseInt(_0xf63455(0x129)) / 0x8) +
        (-parseInt(_0xf63455(0x128)) / 0x9) *
          (-parseInt(_0xf63455(0x124)) / 0xa) +
        -parseInt(_0xf63455(0x126)) / 0xb +
        (-parseInt(_0xf63455(0x113)) / 0xc) *
          (parseInt(_0xf63455(0x110)) / 0xd);
      if (_0x5b871d === _0x2a22f3) break;
      else _0x367962["push"](_0x367962["shift"]());
    } catch (_0xd78983) {
      _0x367962["push"](_0x367962["shift"]());
    }
  }
})(_0x55f6, 0x1caba);
const backToTopButton = document[_0x5207bb(0x12a)]("back-to-top"),
  scrollDown = document[_0x5207bb(0x12a)]("hero-scroll-down");
window[_0x5207bb(0x12e)]("scroll", () => {
  const _0x27cb39 = _0x5207bb;
  document[_0x27cb39(0x116)][_0x27cb39(0x114)] > 0x28a
    ? ((backToTopButton[_0x27cb39(0x11c)]["opacity"] = "1"),
      (scrollDown[_0x27cb39(0x11c)][_0x27cb39(0x121)] = "0"),
      (backToTopButton["style"][_0x27cb39(0x11f)] = "auto"),
      (scrollDown[_0x27cb39(0x11c)][_0x27cb39(0x11f)] = "none"),
      (backToTopButton[_0x27cb39(0x11c)][_0x27cb39(0x120)] = _0x27cb39(0x12d)))
    : ((backToTopButton[_0x27cb39(0x11c)][_0x27cb39(0x121)] = "0"),
      (scrollDown[_0x27cb39(0x11c)][_0x27cb39(0x121)] = "1"),
      (backToTopButton["style"][_0x27cb39(0x11f)] = "none"),
      (scrollDown[_0x27cb39(0x11c)][_0x27cb39(0x11f)] = _0x27cb39(0x123)),
      (backToTopButton["style"][_0x27cb39(0x120)] = _0x27cb39(0x11a)));
});
const elements = document[_0x5207bb(0x11d)](_0x5207bb(0x117)),
  observer = new IntersectionObserver(
    (_0x1fe9c4, _0x355794) => {
      _0x1fe9c4["forEach"]((_0x53c35b) => {
        const _0xe1700a = _0x333e;
        _0x53c35b[_0xe1700a(0x111)] &&
          (_0x53c35b[_0xe1700a(0x127)][_0xe1700a(0x122)]["add"]("visible"),
          _0x355794[_0xe1700a(0x10f)](_0x53c35b["target"]));
      });
    },
    { threshold: 0.05 }
  );
elements[_0x5207bb(0x11b)]((_0x4f2343) =>
  observer[_0x5207bb(0x11e)](_0x4f2343)
);
