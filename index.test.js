const {
    describe,
    it,
    expect,
    matchers,
    adder,
    subtractor,
    multiplier,
    division 
  } = require('./index')

  describe('adder', () => {
    it('adds two numbers', () => {
      const result = adder(1, 2)
      expect(result).toBe(3)
    })
  })

  describe('subtractor', () => {
    it('subtractor two numbers', () => {
      const result = subtractor(2, 1)
      expect(result).toBe(2);
    })
  })

  describe('multiplier', () => {
    it('multiplier two numbers', () => {
      const result = multiplier(3, 4)
      expect(result).toBe(12);
    })
  })

  describe('division', () => {
    it('division two numbers', () => {
      const result = division(12, 4)
      expect(result).toBe(3);
    })
  })