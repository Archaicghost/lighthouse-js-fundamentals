function calculateRectangleArea(length, width) {
  var rectangle = length * width;
   if (rectangle > 0) {
    return rectangle; } 
  else {
    console.log("undefined"); } }

function calculateTriangleArea(base, height) {
  var triangle = base * height / 2; 
  if (triangle > 0) {
    return triangle; } 
  else {
    console.log("undefined"); } }
	
function calculateCircleArea(radius) {
  var circle = Math.PI * radius * radius;
  if (radius < 0)
  	return 'undefined'
  if (circle > 0) {
    return circle; }
  else {
    console.log("undefined"); } }

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined