import GPoint2D from "./GPoint2D";

declare global {
    interface Window { CSVG: any; }
}

const SVG = {
    GPoint2D: GPoint2D
}

var isBrowser=new Function("try {return this===window;}catch(e){ return false;}");

// tests if global scope is binded to window
if(isBrowser()){
    window.CSVG = window.CSVG || SVG;
} else {
    module.exports = SVG;
}