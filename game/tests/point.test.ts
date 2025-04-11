import { describe, it, expect } from 'vitest';
import { Point } from "../src/utils/Line";

describe("point", () => {
    it("point #1 - addition", () => {
        const pointA = new Point(5, 6);
        const pointB = { x: 1, y: 2 };

        const result = pointA.add(pointB);

        expect(result).toStrictEqual(new Point(6, 8));
    });

    it("point #2 - multiplication", () => {
        const pointA = new Point(5, 6);
        const multiplier = 2;

        const result = pointA.multiply(multiplier);

        expect(result).toStrictEqual(new Point(10, 12));
    });

    it("point #3 - normalization", () => {
        const pointA = new Point(2, 2);

        const result = pointA.normalize();

        const x = 2 / Math.sqrt(8);
        expect(result).toStrictEqual(new Point(x, x));
    });

    it("point #4 - Length", () => {
        const pointA = new Point(4, 2);

        const result = pointA.length();

        expect(result).toBe(Math.sqrt(4 * 4 + 2 * 2));
    });
});