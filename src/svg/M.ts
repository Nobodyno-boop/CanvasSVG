import SvgLetter from "./SvgLetter";
import ReaderResponse from "./ReaderResponse";

export class M implements SvgLetter {
    letter: string = "M"
    regex: RegExp = /(M([-]?\d+(\.\d+)?[,]?)([-]?\d+(\.\d+)?[,]?))/gi
    params:number =2
    data:any[] = []

    constructor(x:number, y:number){
        this.data.push({x:x, y:y});
    }

    compile():string{
        let d = this.data[0];
        return "M"+d["x"]+ ","+d["y"];
    }


    read(e:string): ReaderResponse{
        e = e.trim();
        if(e.match(this.regex)){
            let d = this.regex.exec(e)
            let m = new M(Number(d[2]), Number(d[4]))
            return {data: m, str: d[0]};
        }
        return null;
    }

    setX(x: number){
        this.data[0]["x"] = x;
    }

    setY(y: number){
        this.data[0]["y"] = y;
    }

    getX():number{
        return this.data[0]["x"];
    }

    getY():number{
        return this.data[0]["Y"];
    }
}