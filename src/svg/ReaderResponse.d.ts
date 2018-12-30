import SvgLetter from "./SvgLetter";
export default interface ReaderResponse {
    str: string;
    data: SvgLetter | SvgLetter[];
}
