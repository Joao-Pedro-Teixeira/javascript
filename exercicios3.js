//ex1_easy
let ex1 = [1, 2, 3 ];
console.log(ex1)

//ex2_easy
let ex2 = [1, 2, 3, 4,];
console.log(`${ex2[0]}`);

//ex3_easy
let ex3 = [1, 2, 3];
ex3[0] = 100;
console.log(ex3);

//ex4_easy
let ex4 = [1, 2, 3, 4, 5];
console.log(ex4.length)

//ex5_easy
let ex5 = [1, 2, 3, 4, 5];
console.log(`${ex5[0] + ex5[1] + ex5[2] + ex5[3] + ex5[4]}`);

//ex6_easy
let ex6 = [1, 2, 3, 4, 5];
ex6.pop(4);
console.log(ex6)

//ex7_easy
let ex7 = [1, 2, 3, 4, 5];
ex7.unshift(5)
console.log(ex7)

//ex8_easy
let ex8 = [1, 2, 3, 4, 5];
let ex9 = [6, 7, 8, 9, 10];
let ex10 = ex8.concat(ex9);
console.log(ex10);

//ex1_medium
let ex1m = [1, 2, 3, 4, 5];
for (let i = 0; i < ex1m.length; i++) {
    console.log(ex1m[i]);
}

//ex2_medium
const livros = [
    { nome: "1984", autor: "George Orwell" },
    { nome: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" },
    { nome: "Dom Casmurro", autor: "Machado de Assis" },
    { nome: "A Revolução dos Bichos", autor: "George Orwell" },
    { nome: "Fahrenheit 451", autor: "Ray Bradbury" }
];

for (let i = 0; i < livros.length; i++) {
    console.log(livros[i].nome);
}

//ex3_medium
let ex3m = [1, 2, 3, 4, 5];
let resultado = ex3m.map(x => x * 2);
console.log(resultado);  

//ex4_medium
 maior_que_10 = [2,4,6,8,10,12,14,16,18,20];
maior_que_10r.filter(maior_que_10r => 10);
console.log(maior_que_10r);




