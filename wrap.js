function wrap(text, maxLineLength) {
  let wrappedText = ''
  let i = 0
  for (i; i < Math.floor(text.length / maxLineLength); i++) {
    const lineBreakIndex = i * maxLineLength + maxLineLength
    wrappedText += text.slice(i * maxLineLength, lineBreakIndex) + '\n'
  }
  wrappedText += text.slice(i * maxLineLength, maxLineLength)
  console.log(wrappedText)
  return wrappedText
}

module.exports = wrap
