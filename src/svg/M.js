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
