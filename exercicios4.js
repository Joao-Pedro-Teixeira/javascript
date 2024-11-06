//ex1_easy
let imparoupar = 3;
if (imparoupar % 2 === 0) {
 console.log(`esse numero é par`);
} else {
console.log(`esse numero não é par`);
} 

 //ex2_easy
 let anoatual = 2024; 
 let nascimento = 2006;
 if (anoatual - nascimento >= 18) {
    console.log(`você é maior de idade`);
 } else {
    console.log(`você é menor de idade`);
 }

 //ex3_easy
let nota1 = 9;
let nota2 = 7;
let nota3 = 7;
if (nota1 + nota2 + nota3  % 3 >= 7) {
    console.log(`aprovado`);
} else {
   console.log(`reprovado`);
}

//ex4_easy
let idade = 18;
if (idade >= 16) {
    console.log(`você pode votar`);
} else {
   console.log(`você não pode votar`);
}

//ex5_easy
let numero1 = 11;
let numero2 = 12;
if (numero1 > numero2) {
    console.log(numero1);
} else {
    console.log(numero2);
} 

//ex6_easy
let horastrabalhadas = 41;
if (horastrabalhadas >= 40) {
    console.log(`você fez hora extra`);
} else {
   console.log(`você não fez hora extra`);
}

//ex7_easy
let nummm = 9;
if (nummm > 10 && nummm < 50) {
    console.log(`este numero está entra 10 e 50`);
} 
else {
    console.log(`este numero não está entra 10 e 50`);
}

//ex8_easy
const letra = 'a';
if ( letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    console.log(`a letra é uma vogal`);
} else {
    console.log(`a letra é uma consoante`);
}

//ex9_easy
const mês = 'dezembro';
if ( mês === 'janeiro' || mês === 'julho' || mês === 'dezembro') {
    console.log(`esse mês é ferias`);
} else {
    console.log(`esse mês não é ferias`);
}

//ex10_easy
let nota = 100;
if (nota >= 80 && nota <= 90) {
  console.log(nota = "A")  
} else if (nota >= 60 && nota <= 70){
  console.log(nota = "B")  
 } else if ( nota >= 40 && nota <=50){
  console.log(nota = "C")
} else if ( nota >= 20 && nota <= 30){
  console.log(nota = "D");
} else if (nota >= 0 && nota <= 10){
  console.log(nota = "F");
} else {
    console.log(nota = "A+"); 
}

//ex1_medium
let num1 = 30;
let num2 = 20;
let num3 = 25;
if (num1 > num2 && num1 > num2) {
    console.log(num1)
} else if (num2 > num1 && num2 > num3){
    console.log(num2)
} else {
    console.log(num3)
}

//ex2_medium 


//ex3_medium

//ex3_hard
let faixaidade = 18;
 if (faixaidade > 1 && faixaidade <= 12) {
    console.log(`criança`);
} else if (faixaidade > 12 && faixaidade <= 17){
    console.log(`adolecente`);
} else if (faixaidade >17 && faixaidade <= 65){
console.log(`adulto`);
} else {
    console.log(`idoso`);
}


