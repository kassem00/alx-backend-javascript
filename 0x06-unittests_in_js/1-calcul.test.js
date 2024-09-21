// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  
  describe('SUM', () => {
    it('should return 4 when inputs are 1 and 3', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when inputs are 1 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 5 when inputs are 1.2 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return 6 when inputs are 1.5 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should return 0 when inputs are 0.1 and 0.3', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.3), 0);
    });

    it('should return -2 when inputs are -1.2 and -1', () => {
      assert.strictEqual(calculateNumber('SUM', -1.2, -1), -2);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 when inputs are 1 and 3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should return -3 when inputs are 1 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });

  });

  describe('DIVIDE', () => {
    it('should return 0.25 when inputs are 1 and 3.7', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
