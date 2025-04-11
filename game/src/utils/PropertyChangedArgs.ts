export interface EventArgs {

}

export class PropertyChangedArgs implements EventArgs {
    public property: string;
    public newValue: any;
    public oldValue?: any;
    public constructor(property: string, newValue: any, oldValue?: any) {
        this.property = property;
        this.newValue = newValue;
        this.oldValue = oldValue;
    }
}

export class PointerArgs implements EventArgs {
    public readonly id: number;
    public readonly positionInDocument: { x: number; y: number; };
    public readonly positionOnCanvas: { x: number; y: number; };
    public readonly positionInCanvas: { x: number; y: number; };
    public readonly key: string;
    public readonly keys: string[];
    public readonly type: string;

    public constructor(
        type: string,
        id: number,
        positionInDocument: { x: number; y: number; },
        positionOnCanvas: { x: number; y: number; },
        positionInCanvas: { x: number; y: number; },
        key: string,
        keys: string[]
    ) {
        this.type = type;
        this.id = id;
        this.positionInCanvas = positionInCanvas;
        this.positionOnCanvas = positionOnCanvas;
        this.positionInDocument = positionInDocument;
        this.key = key;
        this.keys = keys;
    }
}
export class KeyboardArgs implements EventArgs {
    public readonly type: string;
    public readonly key: string;
    public readonly keys: string[];

    public constructor(
        type: string,
        key: string,
        keys: string[]
    ) {
        this.type = type;
        this.key = key;
        this.keys = keys;
    }
}