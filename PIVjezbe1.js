// JavaScript - basics
// console.log("Vaša majka")
// za imenovanje(mapiranje varijable) koristimo keyword let
/*
let total = 0;
let count = 1;

while(count<=10) { // ovo zbraja 1+2+3+4+5+6+7+8+9+10
  total += count;
  count += 1;
}

console.log(total);
*/
// slično kao print(sum(range(11))) u Pythonu
//console.log([...Array(11).keys()].reduce((a,b)=> a + b, 0));
/*Array(11): Stvara novi prazni niz s 11 mjesta. Ovo stvara niz s 11 undefined elemenata.

.keys(): Metoda koja vraća novi objekt koji sadrži ključeve ili indekse elemenata niza kao iterator. Za ovaj primjer, to će biti iterator koji generira brojeve od 0 do 10.

[...Array(11).keys()]: Ovo pretvara iterator ključeva u običan niz, koristeći spread operator .... Kao rezultat, dobivamo niz brojeva od 0 do 10.

.reduce((a, b) => a + b, 0): Metoda reduce koristi se za reduciranje niza u jednu vrijednost, primjenjujući funkciju akumulatora na svaki element niza. U ovom slučaju, funkcija akumulatora je (a, b) => a + b, što znači da će se svi elementi niza zbrojiti. Početna vrijednost akumulatora je 0 (proslijeđeno kao drugi argument metode reduce). Dakle, ova metoda izračunava zbroj svih brojeva u nizu.*/

// RUŽNI JS PRIMJERI
//console.log(0.1+0.2); // 0.30000000000000004
//console.log(0.1+0.2===0.3); // false
// x = 1.000000000001
// x === 1 // ovo daje true
//console.log(16 == [16]) // true -> array se prvo interno pretvori u string pa u broj
//console.log(16 == [1,6]) // false
//console.log("1,6" == [1,6]) // true
/*var arr = [];
arr.length // -> 0 (prazan je)
arr[3] // undefined (nema elementa, ali ne dobimo error)
arr[3] = "hi";// moremo postavit neovisno ča ne postoji drugi element
console.log(arr.length); //4
console.log(arr["3"]); // hi
*/
// Vježbanje 1)
// Modificirati kod tako da se uvede dodatno mapiranje(varijabla) koja će poopćiti problem i pokazivati koliko brojeva treba zbrojiti (npr. n = 10 ili n = 1000)
/*let total = 0;
let count = 1;

while(count<=10) { // ovo zbraja 1+2+3+4+5+6+7+8+9+10
  total += count;
  count += 1;
};
*/
/*
let total = 0;
let count = 1;
let n = 50; // Definiramo varijablu n koja predstavlja koliko brojeva treba zbrojiti

while (count <= n) { // iterirat ćemo kroz sve brojeve, zbrajat ih i brojat kroz kolike smo iterirali i to sve dok ne dojdemo do n
  total += count;
  count += 1;
}

console.log(`Suma prvih ${n} brojeva je:`, total);

*/
/*
NPM:

Osnovni alat za upravljanje paketima u Node.js ekosustavu.
Ugrađen u Node.js, stoga ga ne morate posebno instalirati.
Dolazi s Node.js instalacijom kao zadani paketni upravitelj.
Omogućuje instalaciju, upravljanje i ažuriranje paketa, kao i upravljanje ovisnostima u projektima.
Koristi centralni registar paketa npmjs.com kao izvor paketa.
Nudi širok raspon funkcionalnosti, uključujući skripte, verzioniranje, upravljanje skriptama, itd.
Imajte na umu da je brzina instalacije paketa ponekad problematična s npm-om, posebno kod velikih projekata s mnogo ovisnosti.
Yarn:

Alternativa npm-u, razvijena od strane Facebooka, koja nudi poboljšanja u performansama, sigurnosti i pouzdanosti.
Može se koristiti kao zamjena za npm, a ima i svoj vlastiti CLI.
Nudi bržu instalaciju paketa i paralelno preuzimanje ovisnosti, što ga čini bržim od npm-a u mnogim slučajevima.
Koristi isti registar paketa kao i npm (npmjs.com), tako da možete koristiti iste pakete.
Ima mogućnost kreiranja "lock" datoteke (Yarn.lock) koja osigurava determinističke instalacije paketa na različitim okolinama.
Nudi alate za rješavanje problema s ovisnostima i upravljanje sigurnosnim ranjivostima.
Iako Yarn nije ugrađen u Node.js, možete ga lako instalirati pomoću npm-a ili direktne preuzimanjem binarne datoteke.

*/
/*
// Program za zbrajanje prvih n brojeva pomoću samo 1 varijable
const n = 10; // Definiramo broj n

// Izračun zbroja prvih n brojeva pomoću Gaussove formule
const suma = (n * (n + 1)) / 2;

// Ispis rezultata
console.log(`Zbroj prvih ${n} brojeva je:`, suma);
*/
/*
// NOVO
// let i const ne možemo redeklarirati
// var možemo redeklarirati
//  let ima block scope
// glavni tipovi podataka su number, string i boolean
// const se mora inicijalizirati prilikom deklaracije i više se ne može mijenjati
let broj = 5;
let tekst = "hello";
let c = true;

//console.log(typeof(a)); // number
//console.log(typeof(b)); // string 
//console.log(typeof(c)); // boolean


/* ovo ne more
const h = 6;
h = 4;
*/
// OPERATORI
let a = 8;
let b = 4;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

++a; // povećali smo a za 1
a--; // smanjili smo a za 1

console.log(a**b);
console.log(a%b);

// kao u C++
a = a+2;
a+=2;

a = a-2;
a-=2;

a = a*2;
a*=2;

a=a/2;
a/=2;

console.log(a>b);
console.log(a<b);
console.log(a==b); // ovo provjerava dali se vrijednost poklapa
console.log(a===b); // ovo provjerava dali se i vrijednost i tip poklapa (operator identično)

console.log(true && true); // true
console.log(true&&false); // false

console.log(true || true); // true
console.log(false || false); // false
console.log(false || true); // true


let d = 7;

console.log(typeof(d)) // typeof vraća tip podataka
// ovi logički operatori su intuitivni kao u svakom jeziku



let brojProcitanihStranica = 150;
let ciljaniBrojStranica = 200;

let ciljPostignut = brojProcitanihStranica >= ciljaniBrojStranica;

console.log(ciljPostignut);


let avionskeKarteKupljene = false;
let kartaZaVlakKupljena = true;
let rezerviranSmjestajHotela = true;
let nacinZaPutovanjeSpreman = avionskeKarteKupljene || kartaZaVlakKupljena

let spremniZaPutovanje = nacinZaPutovanjeSpreman && rezerviranSmjestajHotela;
console.log(spremniZaPutovanje);

// dinamičko mijenjanje tipa podataka
let h = 5;
console.log(typeof(a));
let i = tekst;
let j = true;
a = "tekst2";
console.log(typeof(a));


// vježba
let a = 5;
let b = "5";
let c = true;

console.log("Varijabla a je tipa " + typeof(a)); // number
console.log("Varijabla b je tipa " + typeof(b)); // string
console.log("Varijabla c je tipa " + typeof(c)); // boolean


let a = 5;
let b = 10;

console.log("Zbroj: " + (a+b));
console.log("Razlika: " + (a-b));
console.log("Umnožak: " + (a*b));
console.log("Količnik: " + (a/b));
console.log("Ostatak dijeljenja: " + (a%b));
console.log("Potenciranje: " + (a**b));


// JS tipovi podataka su čudni :)

let x = 16 + "Volvo";
let b = "16" + "Volvo";

let c = 16+4+"Volvo";

console.log(x);
console.log(b);
console.log(c);

// JS stringovi se moru pisat u bilo kojima navodnicima
let x = "Petar";

let y = 'Petar';


// ako želimo navodnike unutar stringa, samo ubacimo one druge
let h = "Pero 'Terminator' Perić";
let z = "Petar je \"kralj\"";

console.log(h, z, x, y)

// varijable unutar stringa...treba nam dolar sign

let c = `Moje ime je ${x}`;
console.log(c);

let s = `2 + 5 = ${2 + 5}`;
console.log(s);


// JS stringovi se moru pisat u bilo kojima navodnicima
let x = "Petar";

let y = 'Petar';


// ako želimo navodnike unutar stringa, samo ubacimo one druge
let h = "Pero 'Terminator' Perić";
let z = "Petar je \"kralj\"";

console.log(h, z, x, y)

// varijable unutar stringa...treba nam dolar sign

let c = `Moje ime je ${x}`;
console.log(c);

let s = `2 + 5 = ${2 + 5}`;
console.log(s);

// Konkatenacija stringova

let ime = "Marko";

let prezime = "Matić";

console.log("Moje ime je " + ime + " " + prezime);
console.log(`Moje ime je ${ime} ${prezime}`);



let cilj_1_prođena_prva_skripta = true;

let broj_procitanih_stranica = 300;

let broj_stranica_knjige = 300;

let cilj_2_procitana_knjiga = broj_procitanih_stranica >= broj_stranica_knjige;

broj_sati_odvjezbano = 2;
broj_sati_vjezbanja = 2;

let sati_su_odvjezbani = broj_sati_odvjezbano >= broj_sati_vjezbanja;

let rijeseni_zadaci = 10;
let trazeni_broj_rijesenih_zadataka = 10;

let rijesili_zadatke = rijeseni_zadaci >= trazeni_broj_rijesenih_zadataka;
let cilj_3_vjezbanje_javascripta = sati_su_odvjezbani && rijesili_zadatke;

let cilj_4_odspavali_smo_svaki_dan = true;

let tjedni_cilj = cilj_1_prođena_prva_skripta && cilj_2_procitana_knjiga && cilj_3_vjezbanje_javascripta && cilj_4_odspavali_smo_svaki_dan;

console.log(tjedni_cilj);
*/
