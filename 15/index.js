const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

original.filter(num => num % 2 === 0 && pares.push(num));
original.filter(num => num % 2 !== 0 && impares.push(num));

console.log(pares)
console.log(impares)