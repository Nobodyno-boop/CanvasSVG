import ReaderResponse from "./ReaderResponse";
export default interface SvgLetter {
    letter: string;
    regex: RegExp;
    params: number;
    data: any[];
    compile(): string;
    read(element: string): ReaderResponse;
}
