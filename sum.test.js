const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('mock function test',() => {
    const mock = jest.spyOn({"sum":sum},'sum');
    const result = mock(1,2);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith(1,2);
    expect(result).toBe(3);
})