// Given coordinate and nDigits as numbers,
// return coordinate as string with specific number of digits after point.
const getFixed = (coordinate, nDigits) => coordinate.toFixed(nDigits);

const examples = [
  1 / 2,
  1 / 4,
  7 / 8,
  27 / 62,
];

for (let i = 0; i < examples.length; i += 1) {
  const example = examples[i];
  console.log(getFixed(example, 1), example);
}
//nDigits is setting the number of digits that you want to truncate to
//change the (example, #) to change the decimal place.