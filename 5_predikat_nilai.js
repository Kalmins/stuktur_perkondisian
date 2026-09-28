const prompt = require('prompt-sync')({sigint:true})

let nilai = Number(prompt('nilai : '))

if (nilai >= 90 && nilai < 100)
    console.log('A')
else if (nilai >= 80 && nilai < 90)
    console.log('B')
else if (nilai >= 75 && nilai < 80)
    console.log('C')
else if (nilai >= 60 && nilai < 75)
    console.log('D')
else if (nilai >= 0 && nilai < 60)
    console.log('E')
else 
    console.log('out of range')