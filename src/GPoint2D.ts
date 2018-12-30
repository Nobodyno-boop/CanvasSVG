import { M } from "./svg/M";
import { C } from "./svg/C";
import ReaderResponse from "./svg/ReaderResponse";
import SvgLetter from "./svg/SvgLetter";

export default class GPoint2D {
    private path: string
    private cl: string
    private m:M = new M(0, 0);
    private c:C = new C(0,0,0,0,0,0)
    private d: any[] = [];
    constructor(path?: string){
        if(typeof path != "undefined"){
            this.path = path;
            this.cl = path.trim();
        }
    }

    initPath(){
        while(this.cl != ""){
            let char = this.cl.charAt(0);
            let d :ReaderResponse
            switch (char) {
                case "m":
                case "M":
                    d = this.m.read(this.cl);
                    this.d.push(d.data)
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
    }

    compil():Path2D{
        let t = "";
        for (let i = 0; i < this.d.length; i++) {
            let element:SvgLetter = this.d[i];
            t += element.compile()
        }

        return new Path2D(t+"z");
    }

    moveTo(x:number, y:number){
        if(this.d[0] instanceof M){
            let m:M = this.d[0];
            m.setX(x);m.setY(y);
        } else throw new Error("THE M DATA IS NOT CORRECT ! [!]");
    }


}