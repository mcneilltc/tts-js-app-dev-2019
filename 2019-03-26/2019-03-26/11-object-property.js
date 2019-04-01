const getFixed3 = coordinate => coordinate.toFixed(3);

const pointsJ = [
  { x: 1 / 2, y: 29 / 63 },
  { x: 1 / 2, y:  7 /  8 },
  { x: 1 / 4, y:  7 /  8 },
];

const pointsFormattedJ =[];
  
  for (let i = 0; i < pointsJ.length; i += 1) {
     pointsFormattedJ[i] = `${pointsJ.x}, ${pointsJ.y}`;
  }
  const points = pointsFormattedJ.getFixed3;   

 // pointsJ.join(' ');
 console.log(points); 

/*
const pointsFormattedJ = [];
for (TODO; TODO; TODO) {
  pointsFormattedJ[i] = `${TODO},${TODO}`;
}

const points = pointsFormattedJ.TODO;
console.log(points);
*/