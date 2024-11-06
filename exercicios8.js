let nota1 = 9;
let nota2 = 7;
let nota3 = 7;
if (nota1 + nota2 + nota3  % 3 >= 6) {
    console.log('aprovado');
} else {
   console.log('reprovado');
}

//ex2
let idade = 18;
if (idade >= 16) {
    console.log('pode se increver');
} else {
   console.log('você não pode se inscrever');
}

//ex3
let valor = 100
if (valor > 50 ) {
   let sub = valor * 0.1
   console.log(valor - sub)
} else {
    console.log (valor)
}

//ex4
let frequencia = 80;
if (frequencia >= 75) { 
    console.log('aprovado');
} else {
    console.log('reprovado');
}

//ex5
let turno = 'B';
if (turno === 'M'){
   console.log('Você está no turno Matutino') ;
} else if (turno === 'V'){
    console.log('Você está no turno Vespertino');
} else if(turno === 'N'){
console.log('Você está no turno Noturno');
} else{
    console.log('Este turno não está disponivel');
}
  
//ex6
let primeiranota = 10;
let segundanota = 10;
let terceiranota = 4;
if (nota1 + nota2 + nota3  % 3 >= 6) {
    console.log('aprovado');
} else {
   console.log('reprovado');
}

//ex7
let teclado = 20;
let monitor = 9;

if (teclado < 10) {
  console.log(`apenas ${teclado} teclados, reponha estoque!`);  
} else {
  console.log(`você possui ${teclado} teclados!`);
}

if (monitor < 10) {
  console.log(`apenas ${monitor} monitores, reponha estoque!`);    
} else {
  console.log(`você possui ${monitor} monitores!`);
}

//ex8 
let media = 6;
if (media > 8) {
    console.log('aluno exelente!')
} else if (media > 6 && media < 7.9){
   console.log('aluno bom') 
} else{
    console.log('Precisa melhorar');
}



