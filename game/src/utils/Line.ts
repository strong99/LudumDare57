export class Point {
    public get x() { return this._x; }
    private _x: number = 0;

    public get y() { return this._y; }
    private _y: number = 0;

    public constructor();
    public constructor(other: { x: number; y: number });
    public constructor(x: number, y: number);
    public constructor(x?: number | { x: number; y: number }, y?: number) {
        if (typeof x === 'number' && typeof y === 'number') {
            this._x = x;
            this._y = y;
        }
        else if (x && typeof x === 'object' && 'x' in x && 'y' in x) {
            this._x = x.x;
            this._y = x.y;
        }
    }

    public set(x: Point): void;
    public set(x: number, y: number): void;
    public set(x?: number | Point, y?: number): void {
        if (typeof x === 'number' && typeof y === 'number') {
            this._x = x;
            this._y = y;
        }
        else if (x instanceof Point) {
            this._x = x.x;
            this._y = x.y;
        }
        else throw new Error('Unsupported set arguments for Point. Expected a point, or x and y coordinates');
    }

    public lengthSQ() {
        return this.x * this.x + this.y * this.y;
    }

    public length() {
        return Math.sqrt(this.lengthSQ());
    }

    public displacementTo(other: { x: number; y: number }) {
        return new Point(
            other.x - this.x,
            other.y - this.y
        );
    }
    public distanceTo(other: { x: number; y: number }) {
        return this.displacementTo(other).length();
    }
    public distanceToSQ(other: { x: number; y: number }) {
        return this.displacementTo(other).lengthSQ();
    }

    public directionTo(other: { x: number; y: number }) {
        return this.displacementTo(other).normalize();
    }

    public normalize() {
        const length = this.length();
        return new Point(
            (this.x / length) || 0,
            (this.y / length) || 0
        );
    }

    public add(other: { x: number; y: number }) {
        return new Point(
            this.x + other.x,
            this.y + other.y
        );
    }

    public multiply(scalar: number) {
        return new Point(
            this.x * scalar,
            this.y * scalar
        );
    }
}

export class Line {
    public readonly a: Point;
    public readonly b: Point;

    public readonly direction: Point;
    public readonly displacement: Point;
    public readonly length: number;

    public constructor(a: Point | { x: number; y: number }, b: Point | { x: number; y: number }) {
        this.a = a instanceof Point ? a : new Point(a);
        this.b = b instanceof Point ? b : new Point(b);

        this.displacement = this.a.displacementTo(this.b);
        this.direction = this.displacement.normalize();
        this.length = this.displacement.length();
    }
}

export function intersect(lineA: Line, lineB: Line): Point | false {

    const a = lineA.a.x,
        b = lineA.a.y;

    const c = lineA.b.x,
        d = lineA.b.y;

    const p = lineB.a.x,
        q = lineB.a.y;

    const r = lineB.b.x,
        s = lineB.b.y;

    const det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det !== 0) {
        const lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
        const gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
        if ((0 < lambda && lambda < 1) && (0 < gamma && gamma < 1)) {
            return lineA.a.add(lineA.displacement.multiply(lambda));
        }
    }
    return false;
}

export function nearestPointOnLine(line: Line, point: Point): Point {
    const start = line.a;
    const displacement = line.displacement;

    const t = ((point.x - start.x) * displacement.x + (point.y - start.y) * displacement.y) / (displacement.x * displacement.x + displacement.y * displacement.y);
    const clampedT = Math.max(0, Math.min(1, t));

    return new Point(
        start.x + clampedT * displacement.x,
        start.y + clampedT * displacement.y
    );
}

export function intersectEllipse(line: Line, origin: Point, radius: Point): Point | false {
    const sy = radius.y / radius.x;
    const nearestPoint = nearestPointOnLine(new Line(
        new Point(line.a.x, line.a.y / sy),
        new Point(line.b.x, line.b.y / sy)
    ), new Point(origin.x, origin.y / sy));

    const scaledNearestPoint = new Point(nearestPoint.x, nearestPoint.y * sy);
    const displacement = scaledNearestPoint.displacementTo(origin);

    if (Math.abs(displacement.x) <= radius.x && Math.abs(displacement.y) <= radius.y) {
        return scaledNearestPoint;
    }

    return false;
}