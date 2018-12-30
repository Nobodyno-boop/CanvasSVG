

import SvgLetter from "./SvgLetter";
import ReaderResponse from "./ReaderResponse";


/**
 * 
 * C x1     y1   x2    y2    x     y   
 * c -11.3 -17.8 -22.3 -35.2 -33.5 -52.9
 */
export class C implements SvgLetter {
    letter: string = "C"
    regex: RegExp = /(c([-]?\d+(\.\d+)?[,]?){6,6})/i
    params:number =6
    data:any[] = []
    private clone:string
    constructor(x1:number, y1:number, x2:number, y2:number, x:number, y:number){
        this.data.push({x1:x1, x2:x2, y1:y1, y2:y2, y:y, x:x});
    }

    compile():string{
        let m = "";
        let d = this.data[0];
        return "c"+d["x1"]+","+d["y1"]+","+d["x2"]+","+d["y2"]+","+d["x"]+","+d["y"];
    }


    read(e:string): ReaderResponse{
        //TODO: make for a simple regex ! 
        let m;
        let u: SvgLetter[] = [];
        let r = /([-]?\d+(\.\d+)?[,]?)/;
        let a = this.regex.exec(e.trim());
        let l = a[0];
        let o: any = {};
        for (let i = 0; i < 6; i++) {
            let d = r.exec(l);
            let k = d[0].replace(",","");
            switch (i) {
                case 0:
                    o["x1"] = k
                    break;
                    case 1:
                    o["y1"] = k
                    break;
                    case 2:
                    o["x2"] = k
                    break;
                    case 3:
                    o["y2"] = k
                    break;
                    case 4:
                    o["x"] = k
                    break;
                    case 5:
                    o["y"] = k 
                    break;
            }
            l = l.replace(d[0], "");
        }
        return {data:new C(o["x1"], o["y1"], o["x2"], o["y2"], o["x"], o["y"]), str:a[0]};
    }
}