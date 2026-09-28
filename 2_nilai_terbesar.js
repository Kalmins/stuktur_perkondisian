const prompt = require('prompt-sync')({sigint:true})

let nilai_1 = Number(prompt('nilai_1 : '))
let nilai_2 = Number(prompt('nilai_2 : '))

if (nilai_1 < nilai_2)
    console.log('nilai ke dua lebih besar')
else
    console.log('nilai pertama lebih besar')