
// Tüm kodları metin degişkenine atadık
let metin = "120.01.001 120.01.002 120.01.003 120.01.004";

// Split ile kelimelere ayırdık
let kelimeler = metin.split(" ");

// Başına ve sonuna ekle Tırnak ve virgül ekleme
let sonuc = kelimeler.map(kelime => `'${kelime}'`).join(",");

console.log(sonuc);
