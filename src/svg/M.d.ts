import SvgLetter from "./SvgLetter";
import ReaderResponse from "./ReaderResponse";
export declare class M implements SvgLetter {
    letter: string;
    regex: RegExp;
    params: number;
    data: any[];
    constructor(x: number, y: number);
    compile(): string;
    read(e: string): ReaderResponse;
    setX(x: number): void;
    setY(y: number): void;
    getX(): number;
    getY(): number;
}
