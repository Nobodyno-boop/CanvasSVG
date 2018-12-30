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
