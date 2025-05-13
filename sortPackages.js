function sort(width, height, length, mass) {
  const volume = width * height * length;

  const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) {
    return "REJECTED";
  } else if (isBulky || isHeavy) {
    return "SPECIAL";
  } else {
    return "STANDARD";
  }
}

const testCases = [
  { width: 100, height: 100, length: 100, mass: 10},
  { width: 200, height: 50, length: 30, mass: 10},
  { width: 100, height: 100, length: 100, mass: 25},
  { width: 200, height: 200, length: 200, mass: 30},
  { width: 149, height: 149, length: 149, mass: 19},
  { width: 150, height: 100, length: 100, mass: 19},
  { width: 100, height: 150, length: 100, mass: 10},
  { width: 100, height: 100, length: 150, mass: 19.9},
  { width: 100, height: 100, length: 100, mass: 20},
  { width: 100, height: 100, length: 100, mass: 19.999},
  { width: 1000, height: 1000, length: 1, mass: 5},
  { width: 10, height: 10, length: 10, mass: 21},
  { width: 151, height: 151, length: 151, mass: 21},
  { width: 1, height: 1, length: 1, mass: 0.1},
  { width: 300, height: 2, length: 2, mass: 1},
  { width: 200, height: 200, length: 200, mass: 19.9},
  { width: 149.9, height: 149.9, length: 149.9, mass: 20.1},
  { width: 150, height: 150, length: 150, mass: 20},
];

testCases.forEach((pkg, idx) => {
  const result = sort(pkg.width, pkg.height, pkg.length, pkg.mass);
  console.log(`Test ${idx + 1}: ${result}`);
});