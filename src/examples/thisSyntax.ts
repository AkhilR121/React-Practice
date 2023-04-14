type MyPoint = { x: number; y: number };

function print(this: MyPoint) {
  console.log(this.x, this.y);
}

// #region use object
const pt0 = { x: 1, y: 2, print };
pt0.print(); // 1 2
// #endregion

// #region use call
print.call({ x: 1, y: 2 }); // 1 2
// #endregion

function distance(this: MyPoint, that: MyPoint) {
  return Math.sqrt(Math.pow(this.x - that.x, 2) + Math.pow(this.y - that.y, 2));
}

// #region use object for distance
const pt1 = { x: 1, y: 2, distance };
const pt2 = { x: 3, y: 4, distance };

console.log(distance.call(pt1, pt2));

// #endregion

// #region create function
function point(x: number, y: number) {
  return { x, y, distance };
}
console.log(distance.call(point(1, 2), point(3, 4)));
// #endregion
