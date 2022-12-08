function reverseNumber(input) {
  return [].map
    .call(input, function (x) {
      return x;
    })
    .reverse()
    .join('');
}

function plainNumber(number) {
  return number.split('.').join('');
}

function splitInDots(input) {
  if (input) {
    var value = input,
      plain = plainNumber(value),
      reversed = reverseNumber(plain),
      reversedWithDots = reversed.match(/.{1,3}/g).join('.'),
      normal = reverseNumber(reversedWithDots);
  }

  return normal;
}

export default splitInDots;
