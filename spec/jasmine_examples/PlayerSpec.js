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
});
