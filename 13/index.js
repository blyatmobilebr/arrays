const disjuntores = [false, false, true, false, false, true, false, false];


// Array.prototype.forEach() applies a callback function on each element 
// and returns an array of the elements that satisfy a certain condition
disjuntores.forEach((item, index) => item === true ? console.log(index) : -1)