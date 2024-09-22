// 2-calcul_chai.test.js

const { expect } = require('chai');  // Importing Chai's expect
const calculateNumber = require('./2-calcul_chai');  // Importing the function

describe('calculateNumber', () => {

  describe('SUM', () => {
    it('should return 4 when inputs are 1 and 3', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5 when inputs are 1 and 3.7', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return 5 when inputs are 1.2 and 3.7', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return 6 when inputs are 1.5 and 3.7', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('should return 0 when inputs are 0.1 and 0.3', () => {
      expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
    });

    it('should return -2 when inputs are -1.2 and -1', () => {
      expect(calculateNumber('SUM', -1.2, -1)).to.equal(-2);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 when inputs are 1 and 3', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('should return -3 when inputs are 1 and 3.7', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.25 when inputs are 1 and 3.7', () => {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });

    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
