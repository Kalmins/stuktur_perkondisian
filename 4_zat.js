const prompt = require('prompt-sync')({sigint:true})

let namaZat = prompt('namaZat : ')

if (namaZat === 'air')
    console.log('cair')
else if (namaZat === 'laptop')
    console.log('padat')
else if (namaZat === 'uap air')
    console.log('gas')
else 
    console.log('gatau')