const numeros = [54, 22, 14, 87, 10, 284];

for (const num of numeros) {
    if (num === 10) console.log(numeros.indexOf(num));
    else if (!numeros.includes(10)) { 
        console.log(-1); 
        break;
    }
}


// let count = 0;

// for (const num of numeros) {
//     if (num === 10) {
//         console.log(numeros.indexOf(num))
//         break;
//     }

//     else { 
//         count++;
//         console.log(-1);
//         break;
//     }
// }

