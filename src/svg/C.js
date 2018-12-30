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
