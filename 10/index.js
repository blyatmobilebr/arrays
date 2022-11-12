const numeros = [8, 11, 4, 1];

const max = numeros.reduce((previous, next) => Math.max(previous, next));
const min = numeros.reduce((previous, next) => Math.min(previous, next));

console.log(max - min);