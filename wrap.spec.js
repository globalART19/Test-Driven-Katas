const { expect } = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
  const wrapPhrase = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns a string with less than 1 line character limit', () => {
    expect(wrap("lorem ipsum", 20)).to.equal("lorem ipsum");
  })
  it('Returns a string with less than 1 line character limit', () => {
    expect(wrap("lorem ipsum", 20)).to.equal("lorem ipsum");
  })
  it('returns string with less than character limit per line', () => {
    const result = wrap(wrapPhrase, 20)
    expect(result.indexOf('\n')).to.be.greaterThan(0)
    expect(result.indexOf('\n')).to.be.lessThan(21)
    expect(result.indexOf('\n', 20)).to.be.lessThan(21)
  })
  it('Does not split words between lines', () => {

  })
});

