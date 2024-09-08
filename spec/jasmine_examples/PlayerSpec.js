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
  

});
