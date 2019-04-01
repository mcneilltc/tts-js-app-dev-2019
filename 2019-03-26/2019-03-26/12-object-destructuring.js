const pointsJ = [
  { x: 1 / 2, y: 29 / 63 },
  { x: 1 / 2, y:  7 /  8 },
  { x: 1 / 4, y:  7 /  8 },
];

const pointsFormattedJ = [];
for (let i = 0; i < pointsJ.length; i += 1) {
  // step 2
  // assign variables x and y by object destructuring
  const {x,y} = points
  
  // const xToString = TODO;
  const xToString = points=> points.x.toString();
  //const {x} = xToString;
  console.log(x);
  // const yToString = TODO;
  const yToString = points => points.y.toString();

//const {y} = points.toString(pointsJ.y);
console.log (y);
  // step 4
  // const xToFixed3 = TODO;
  const xToFixed3 = points => points.x.ToFixed3();

  //const xToFixed3 = points.toFixed3(pointsJ.x);
  // const yToFixed3 = TODO;
  const yToFixed3 = points => points.y.ToFixed3();

//const yToFixed3 = points.toFixed3(pointsJ.y);
  // step 6
  // assign to xShorter the shorter string xToString or xToFixed3
  xShorter = (xToString.lenth>xToFixed3.lenth);

  // assign to yShorter the shorter string yToString or yToFixed3
  yShorter = (yToString.length> yToFixed3.length);

  //pointsFormattedJ[i] = `${TODO},${TODO}`;
  pointsFormattedJ[i] = `${}, ${}`;
}

const points = pointsFormattedJ.join(' ');
console.log(points);
