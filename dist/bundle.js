(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var M_1 = require("./svg/M");
var C_1 = require("./svg/C");
var GPoint2D = /** @class */ (function () {
    function GPoint2D(path) {
        this.m = new M_1.M(0, 0);
        this.c = new C_1.C(0, 0, 0, 0, 0, 0);
        this.d = [];
        if (typeof path != "undefined") {
            this.path = path;
            this.cl = path.trim();
        }
    }
    GPoint2D.prototype.initPath = function () {
        while (this.cl != "") {
            var char = this.cl.charAt(0);
            var d = void 0;
            switch (char) {
                case "m":
                case "M":
                    d = this.m.read(this.cl);
                    this.d.push(d.data);
                    this.cl = this.cl.replace(d.str, "");
                    break;
                case "c":
                case "C":
                    d = this.c.read(this.cl);
                    this.d.push(d.data);
                    this.cl = this.cl.replace(d.str, "");
                    break;
                case "Z":
                case "z":
                    this.cl = "";
                    break;
                default:
                    break;
            }
        }
    };
    GPoint2D.prototype.compil = function () {
        var t = "";
        for (var i = 0; i < this.d.length; i++) {
            var element = this.d[i];
            t += element.compile();
        }
        return new Path2D(t + "z");
    };
    GPoint2D.prototype.moveTo = function (x, y) {
        if (this.d[0] instanceof M_1.M) {
            var m = this.d[0];
            m.setX(x);
            m.setY(y);
        }
        else
            throw new Error("THE M DATA IS NOT CORRECT ! [!]");
    };
    return GPoint2D;
}());
exports.default = GPoint2D;

},{"./svg/C":3,"./svg/M":4}],2:[function(require,module,exports){
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

},{"./GPoint2D":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * C x1     y1   x2    y2    x     y
 * c -11.3 -17.8 -22.3 -35.2 -33.5 -52.9
 */
var C = /** @class */ (function () {
    function C(x1, y1, x2, y2, x, y) {
        this.letter = "C";
        this.regex = /(c([-]?\d+(\.\d+)?[,]?){6,6})/i;
        this.params = 6;
        this.data = [];
        this.data.push({ x1: x1, x2: x2, y1: y1, y2: y2, y: y, x: x });
    }
    C.prototype.compile = function () {
        var m = "";
        var d = this.data[0];
        return "c" + d["x1"] + "," + d["y1"] + "," + d["x2"] + "," + d["y2"] + "," + d["x"] + "," + d["y"];
    };
    C.prototype.read = function (e) {
        //TODO: make for a simple regex ! 
        var m;
        var u = [];
        var r = /([-]?\d+(\.\d+)?[,]?)/;
        var a = this.regex.exec(e.trim());
        var l = a[0];
        var o = {};
        for (var i = 0; i < 6; i++) {
            var d = r.exec(l);
            var k = d[0].replace(",", "");
            switch (i) {
                case 0:
                    o["x1"] = k;
                    break;
                case 1:
                    o["y1"] = k;
                    break;
                case 2:
                    o["x2"] = k;
                    break;
                case 3:
                    o["y2"] = k;
                    break;
                case 4:
                    o["x"] = k;
                    break;
                case 5:
                    o["y"] = k;
                    break;
            }
            l = l.replace(d[0], "");
        }
        return { data: new C(o["x1"], o["y1"], o["x2"], o["y2"], o["x"], o["y"]), str: a[0] };
    };
    return C;
}());
exports.C = C;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var M = /** @class */ (function () {
    function M(x, y) {
        this.letter = "M";
        this.regex = /(M([-]?\d+(\.\d+)?[,]?)([-]?\d+(\.\d+)?[,]?))/gi;
        this.params = 2;
        this.data = [];
        this.data.push({ x: x, y: y });
    }
    M.prototype.compile = function () {
        var d = this.data[0];
        return "M" + d["x"] + "," + d["y"];
    };
    M.prototype.read = function (e) {
        e = e.trim();
        if (e.match(this.regex)) {
            var d = this.regex.exec(e);
            var m = new M(Number(d[2]), Number(d[4]));
            return { data: m, str: d[0] };
        }
        return null;
    };
    M.prototype.setX = function (x) {
        this.data[0]["x"] = x;
    };
    M.prototype.setY = function (y) {
        this.data[0]["y"] = y;
    };
    M.prototype.getX = function () {
        return this.data[0]["x"];
    };
    M.prototype.getY = function () {
        return this.data[0]["Y"];
    };
    return M;
}());
exports.M = M;

},{}]},{},[2]);
