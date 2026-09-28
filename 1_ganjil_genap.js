const prompt = require('prompt-sync')({sigint:true})

let angka = Number(prompt('angka : '))

// short hand if --> ternary operator
// console.log(angka % 2 == 0 ? 'genap' : 'ganjil')

// let hasil = angka % 2 == 0 ? 'genap' : 'ganjil'
// console.log(hasil)

if (angka % 2 == 0 )
    console.log('genap')
else
    console.log('ganjil')