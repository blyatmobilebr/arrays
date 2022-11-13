const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


for (const name of filaDeFora) {
    let shiftedPerson = filaDeFora.shift()
    if (filaDeDentro.length < 5 ) filaDeDentro.push(shiftedPerson)

    else { break; }
}

console.log(filaDeDentro)
console.log(filaDeFora);