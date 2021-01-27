function getShapePerimeter(base, height) {
  let perimeter;

  if (typeof base !== 'number' || typeof height !== 'number') {
    console.log('Error: Only numbers allowed. Please try again.');
    return;
  } else if (base === height) {
    perimeter = 4 * base;
  } else {
    perimeter = 2 * (base + height);
  }

  console.log(`${perimeter} is the shape perimeter`);

  if (perimeter > 100) {
    console.log('The perimeter is too big');
  } else {
    console.log('The perimeter is fine');  
  }
  return perimeter;
}

getShapePerimeter(10,5);
getShapePerimeter(10,10);
getShapePerimeter(10,60);
getShapePerimeter('10',60);


