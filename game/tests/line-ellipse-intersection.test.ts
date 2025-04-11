import { describe, it, expect } from 'vitest';
import { Point, Line, intersectEllipse } from "../src/utils/Line";

describe("line - ellipse interection", () => {
    it("line - ellipse intersection #1", () => {
        const lineA = new Line(new Point(0, -1), new Point(0, 1));
        const ellipsePosition = new Point(0, 0);
        const ellipseSize = new Point(1, 1);

        const result = intersectEllipse(lineA, ellipsePosition, ellipseSize);

        expect(result).not.toBeFalsy();

        if (result) {
            expect({ x: result.x, y: result.y }).toStrictEqual({ x: 0, y: 0 });
        }
    });

    it("line - ellipse intersection #2", () => {
        const lineA = new Line(new Point(1, 1), new Point(0, 0));
        const ellipsePosition = new Point(0, 1);
        const ellipseSize = new Point(1, 1);

        const result = intersectEllipse(lineA, ellipsePosition, ellipseSize);

        expect(result).not.toBeFalsy();

        if (result) {
            expect({ x: result.x, y: result.y }).toStrictEqual({ x: 0.5, y: 0.5 });
        }
    });

    it("line - ellipse intersection #3", () => {
        console.log("################################");
        console.log("line - ellipse intersection #3");
        console.log("################################");
        const lineA = new Line(new Point(0, 200), new Point(0, -200));
        const ellipsePosition = new Point(-50, -100);
        const ellipseSize = new Point(60, 30);

        const result = intersectEllipse(lineA, ellipsePosition, ellipseSize);

        expect(result).not.toBeFalsy();

        if (result) {
            expect({x: Math.round(result.x), y: Math.round(result.y)}).toStrictEqual({ x: 0, y: -100 });
        }
    });

    it("line - ellipse miss #1", () => {
        const lineA = new Line(new Point(0, -1), new Point(0, 1));
        const ellipsePosition = new Point(0, -3);
        const ellipseSize = new Point(1, 1);

        const result = intersectEllipse(lineA, ellipsePosition, ellipseSize);

        expect(result).toBeFalsy();
    });

    it("line - ellipse miss #2", () => {
        const lineA = new Line(new Point(0, -1), new Point(0, 1));
        const ellipsePosition = new Point(0, 3);
        const ellipseSize = new Point(1, 1);

        const result = intersectEllipse(lineA, ellipsePosition, ellipseSize);

        expect(result).toBeFalsy();
    });
});