import { getRectanglePerimeter, getRectangleArea } from "./rectangle";


test('Set length 2 and width 2 to get rectangle perimeter = 8', () => {
    const perimeter = getRectanglePerimeter(2, 2);
    expect(perimeter).toBe(8);
});

test('Set length 2 and width 2 to get rectangle area = 4', () => {
    const area = getRectangleArea(2, 2);
    expect(area).toBe(4);
});

test('Get rectangles perimeter and area and check that value in log are correct', () => {
    const logSpy = jest.spyOn(console, 'log');
    const perimeter = getRectanglePerimeter(2, 2);
    const area = getRectangleArea(2, 2);
    console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`);
    expect(logSpy).toHaveBeenCalledWith('The perimeter of a rectangle is 8 and the area is 4');
});