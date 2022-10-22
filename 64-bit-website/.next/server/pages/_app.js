"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "next/Image"
var Image_ = __webpack_require__(7047);
var Image_default = /*#__PURE__*/__webpack_require__.n(Image_);
;// CONCATENATED MODULE: ./logos/logo_main.png
/* harmony default export */ const logo_main = ({"src":"/_next/static/media/logo_main.6eb5b20c.png","height":3840,"width":3400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAqklEQVR42mPABkpWVDGBGQWL2xhBtHtPr+b6I5Z+//8zsIH402elQRTM2VMEZqw7bObaPMfDscMpw3sTAwMvQ+706WCdlVPnypi6GS+yDYm87V/ZacwAAvPDkllB9DS/lJbO0qj/09Lc72/rYRBiAIGNDDZgIxcwMAhsWutzc/dlp0fCFgwcDDCwscoTrKDxMIPIhuNmSiD2quPGTAwwsK7PlxnG3nQCYhoAWiYzkFBmc4QAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./logos/logo_text.png
/* harmony default export */ const logo_text = ({"src":"/_next/static/media/logo_text.715e70f8.png","height":833,"width":2055,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZ0lEQVR4nGNkgIKMlBQFbob/wh7OTkzTV69lE+Xk+Ddz6bIXIAViDFo6UmHKCgGSoqKC2qoqP1fPn/eXS1jkycbjJw8zeovzauTqyDvw/fvy4fHFB7eZ3zEw6fnqCT998+gOD7foHQBOWSGH87shywAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/navbar.js









const Navbar = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("navbar", {
    className: "h-screen flex flex-col fixed px-[5vw] w-[15vw] bg-black justify-center items-center gap-10 py-8 md:text-[1.5vw] text-sm font-RobotoC",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "md:w-[10vw] w-[90px] absolute -translate-y-[35vh]",
      children: /*#__PURE__*/jsx_runtime_.jsx((Image_default()), {
        priority: true,
        src: logo_main,
        className: "",
        id: "logo",
        alt: "logo"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(LinkButton, {
      to: "/",
      children: "Home"
    }), /*#__PURE__*/jsx_runtime_.jsx(LinkButton, {
      to: "/about",
      children: "About"
    }), /*#__PURE__*/jsx_runtime_.jsx(LinkButton, {
      to: "/members",
      children: "Members"
    }), /*#__PURE__*/jsx_runtime_.jsx(LinkButton, {
      to: "/recordings",
      children: "Recordings"
    }), /*#__PURE__*/jsx_runtime_.jsx(LinkButton, {
      to: "/charities",
      children: "Charities"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "md:w-[10vw] w-[90px] absolute translate-y-[40vh]",
      children: /*#__PURE__*/jsx_runtime_.jsx((Image_default()), {
        priority: true,
        src: logo_text,
        className: "",
        alt: "text logo"
      })
    })]
  });
};

const LinkButton = ({
  to,
  children
}) => {
  const router = (0,router_namespaceObject.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (router.pathname == to ? "text-amber-400" : "text-white") + " transition ease-in-out hover:text-slate-300 hover:scale-105",
    children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: to,
      scroll: true,
      children: children
    })
  });
};

/* harmony default export */ const navbar = (Navbar);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "64 Bit Jazz Combo"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "manifest",
        href: "/site.webmanifest"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#144c5b"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-TileColor",
        content: "#da532c"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#ffffff"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col justify-start relative overflow-x-hidden bg-white h-screen",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row",
        children: [/*#__PURE__*/jsx_runtime_.jsx(navbar, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "pl-[15vw]",
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
        })]
      })
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 7047:
/***/ ((module) => {

module.exports = require("next/Image");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(6686)));
module.exports = __webpack_exports__;

})();