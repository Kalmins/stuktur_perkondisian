const prompt = require('prompt-sync')({sigint:true})

let angka = Number(prompt('Angka : '))

if (angka % 10 == 0)
    console.log('Kelipatan 10')
else
    console.log('Bukan kelipatan 10')