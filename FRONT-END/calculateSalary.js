const numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);

const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

const greaterThan25 = numbers.filter(num => num > 25);
console.log("Greater than 25:", greaterThan25);

const total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Total:", total);

const found = numbers.find(num => num === 30);
console.log("Found:", found);