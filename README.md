# sqlTopluKodIslemi
Sql de toplu kodlarla ilgili işlem yapmak için başına sonuna tırnak koyma


let metin = "merhaba dünya nasılsın";

// 1. split → string'i kelimelere böler
let kelimeler = metin.split(" "); 
// ["merhaba", "dünya", "nasılsın"]

// 2. map → her kelimenin başına ve sonuna işaret ekler
let donusmus = kelimeler.map(kelime => `'${kelime}'`); 
// ["'merhaba'", "'dünya'", "'nasılsın'"]

// 3. join → araya virgül koyarak string'e çevirir
let sonuc = donusmus.join(","); 
// "'merhaba','dünya','nasılsın'"

console.log(sonuc);
