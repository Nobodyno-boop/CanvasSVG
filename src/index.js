"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GPoint2D_1 = require("./GPoint2D");
var SVG = {
    GPoint2D: GPoint2D_1.default
};
var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
// tests if global scope is binded to window
if (isBrowser()) {
    window.CSVG = window.CSVG || SVG;
}
else {
    module.exports = SVG;
}
