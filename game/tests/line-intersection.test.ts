import { describe, it, expect } from 'vitest';
import { Point, Line, intersect } from "../src/utils/Line";

describe("line interection", () => {
    it("line intersection #1", () => {
        const lineA = new Line(new Point(-1, -1), new Point(1, 1));
        const lineB = new Line(new Point(1, -1), new Point(-1, 1));

        const line = intersect(lineA, lineB);

        expect(line).not.toBeFalsy();

        if (line) {
            expect({ x: line.x, y: line.y }).toStrictEqual({ x: 0.0, y: 0.0 });
        }
    });

    it("line intersection #2", () => {
        const lineA = new Line(new Point(0, -1), new Point(0, 1));
        const lineB = new Line(new Point(1, 0), new Point(-1, 0));

        const line = intersect(lineA, lineB);

        expect(line).not.toBeFalsy();

        if (line) {
            expect({ x: line.x, y: line.y }).toStrictEqual({ x: 0.0, y: 0.0 });
        }
    });

    it("line intersection #3", () => {
        const lineA = new Line(new Point(0, -1), new Point(0, 1));
        const lineB = new Line(new Point(1, 0.5), new Point(-1, 0.5));

        const line = intersect(lineA, lineB);

        expect(line).not.toBeFalsy();

        if (line) {
            expect({ x: line.x, y: line.y }).toStrictEqual({ x: 0.0, y: 0.5 });
        }
    });

    it("line intersection #4", () => {
        const lineA = new Line(new Point(0, -1), new Point(0, 1));
        const lineB = new Line(new Point(0.1, -1), new Point(-0.1, 1));

        const line = intersect(lineA, lineB);

        expect(line).not.toBeFalsy();

        if (line) {
            expect({ x: line.x, y: line.y }).toStrictEqual({ x: 0.0, y: 0.0 });
        }
    });

    it("parallel test #1", () => {
        const lineA = new Line(new Point(1, 0), new Point(-1, 0));
        const lineB = new Line(new Point(1, 1), new Point(-1, 1));

        const line = intersect(lineA, lineB);

        expect(line).toBeFalsy();
    });

    it("ontop test #1", () => {
        const lineA = new Line(new Point(1, 0), new Point(-1, 0));
        const lineB = new Line(new Point(0.5, 1), new Point(-1.5, 1));

        const line = intersect(lineA, lineB);

        expect(line).toBe(false);
    });
});