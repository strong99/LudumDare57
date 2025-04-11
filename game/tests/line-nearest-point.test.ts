import { describe, it, expect } from 'vitest';
import { Point, Line, nearestPointOnLine } from "../src/utils/Line";

describe("nearest point on line", () => {
    it("nearest point #1", () => {
        const lineA = new Line(new Point(0, -1), new Point(0, 1));
        const pointA = new Point(-1, 0);

        const result = nearestPointOnLine(lineA, pointA);

        expect(result).not.toBeFalsy();

        expect({ x: result.x, y: result.y }).toStrictEqual({ x: 0.0, y: 0.0 });
    });

    it("nearest point #2", () => {
        const lineA = new Line(new Point(0, -1), new Point(0, 1));
        const pointA = new Point(-1, 0.5);

        const result = nearestPointOnLine(lineA, pointA);

        expect(result).not.toBeFalsy();

        expect({ x: result.x, y: result.y }).toStrictEqual({ x: 0.0, y: 0.5 });
    });

    it("nearest point #3", () => {
        const lineA = new Line(new Point(0, -1), new Point(0, 1));
        const pointA = new Point(-1, -1.5);

        const result = nearestPointOnLine(lineA, pointA);

        expect({ x: result.x, y: result.y }).toStrictEqual({ x: 0, y: -1 });
    });

    it("nearest point #4", () => {
        const lineA = new Line(new Point(-1, -1), new Point(1, 1));
        const pointA = new Point(1, -1);

        const result = nearestPointOnLine(lineA, pointA);

        expect({ x: result.x, y: result.y }).toStrictEqual({ x: 0, y: 0 });
    });
});