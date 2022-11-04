import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle.js"

test('should output perimeter', () => {
    const perimeter = getRectanglePerimeter(4, 5);
    expect(perimeter).toBe(18)
});

test('should output area', () => {
    const area = getRectangleArea(4,5);
    expect(area).toBe(20)
});

test('should output text with valid values', () => {
    const result = getRectangleInfo(4,5);
    expect(result).toBe('The perimeter of a rectangle is 18 and the area is 20')
});