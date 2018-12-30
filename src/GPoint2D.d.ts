export default class GPoint2D {
    private path;
    private cl;
    private m;
    private c;
    private d;
    constructor(path?: string);
    initPath(): void;
    compil(): Path2D;
    moveTo(x: number, y: number): void;
}
