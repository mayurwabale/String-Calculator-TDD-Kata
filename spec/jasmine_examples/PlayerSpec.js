const Addition = require('../../lib/jasmine_examples/Player');

describe('Addition', function() {
  let addition;

  beforeEach(function() {
    addition = new Addition();
  });

  it('should return zero if string is empty', () => {
    const input = '';
    const expectedSum = 0;

    const result = addition.add(input);

    expect(result).toBe(expectedSum);
  });
  
  it('should return the sum of comma-separated numbers', () => {
    const input = '1,2';
    const expectedSum = 3;
    const result = addition.add(input);
    expect(result).toBe(expectedSum);
  });

  it('should return the sum  of n comma-separated numbers', () => {
    const input = '1,2,5,7,8,9';
    const expectedSum = 32;
    const result = addition.add(input);
    expect(result).toBe(expectedSum);
  });

  it('Allow the  method to handle new lines between numbers', () => {
    const input = '1\n2,3';
    const expectedSum = 6;
    const result = addition.add(input);
    expect(result).toBe(expectedSum);
    const anotherInput = '2,\n4,6'
    const anotherExpectedSum = 12;
    const anotherResult = addition.add(anotherInput);
    expect(anotherResult).toBe(anotherExpectedSum);
  });

  it('should handle different delimeters', () => {
    const input = '//:\n1:2:6:1';
    const expectedSum = 10;
    const result = addition.add(input);
    expect(result).toBe(expectedSum);
  });
});
