const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

console.log(numeros.filter(num => num % 2 === 0).reduce((previous, next) => previous + next));