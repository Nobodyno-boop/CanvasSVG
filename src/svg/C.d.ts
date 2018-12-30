import SvgLetter from "./SvgLetter";
import ReaderResponse from "./ReaderResponse";
/**
 *
 * C x1     y1   x2    y2    x     y
 * c -11.3 -17.8 -22.3 -35.2 -33.5 -52.9
 */
export declare class C implements SvgLetter {
    letter: string;
    regex: RegExp;
    params: number;
    data: any[];
    private clone;
    constructor(x1: number, y1: number, x2: number, y2: number, x: number, y: number);
    compile(): string;
    read(e: string): ReaderResponse;
}
