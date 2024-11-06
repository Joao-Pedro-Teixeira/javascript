//ex1
const a = 2000;
const b = `O numero que decidi registrar foi o ${a} `;
console.log(b);

//ex2
const a2 = 10;
const b2 = 20;
const StringleTemplatee = `o resultado da soma é ${a2+b2} `;
console.log(StringleTemplatee);

//ex3
const nome = 'joão Pedro';
const idade = 16;
const StringTemplateee = `oi meu nome é ${nome}! minha idade é ${idade}`;
console.log (StringTemplateee);

//ex4
const numero1 = 27;
const numero2 = 23.25;
const numero3 = -40;
const total = numero1 + numero2 + numero3;
console.log(total);

//5
let x = 2;
console.log(x > 1);
console.log(x > 10);

//ex6
 let y ="string de teste";
 console.log(y ==="string de teste");
console.log(y ==="novo teste que eu inventei");

//ex7
let y1 = "string teste";
console.log(y1 !== "novo texto que eu inventei");

//ex8
let x3 = 2;
let y3 = 'string template'

console.log(`01:${x3 > 1}`);
console.log(`02:${x3 > 10}`);

console.log(`03:${y3 === 'String template'}`);
console.log(`04:${y3 != 'novo texto que eu iventei'}`);

console.log(`05:${x3 >= 2}`);
console.log(`06:${x3 >= 1}`);
console.log(`07:${x3 >= 3}`);
console.log(`08:${x3 <= 3}`);
console.log(`09:${x3 < 10}`);

//ex9
let valor1 = 2;
console.log(valor1);
console.log(typeof valor1);

//ex10

let valor2;
console.log(valor2);
console.log(typeof valor2)

//ex11
let valor3 = undefined;
console.log(valor3);

//ex12

let valor4 = undefined;
console.log(valor4);
console.log(typeof valor4);

//ex13

let valor5 = null;
console.log(valor5);

//ex14

const documentoidade = {
    nome:'joao',
    sobrenome:'pereira',
    cpf:'111.111.111.111',
    empresa: 'Senai103',
    idade: 16,
}
console.log(documentoidade)

//ex15

const documentoidade2 = {
    nome:'joao',
    sobrenome:'pereira',
    cpf:'111.111.111-11',
    empresa: 'Senai103',
    idade: 16,
}
console.log(documentoidade2.nome);
console.log(documentoidade2.idade);
console.log(documentoidade2['cpf']);

//ex16
const investimentomensal = [1000, 2000, 3000, 2000, 1500, 1200, 1300];
console.log(`o valor investido no mês de janeiro é: ${investimentomensal[0]}`);
console.log(`o valor investido no mês de fevereiro é: ${investimentomensal[1]}`);
console.log(`o valor investido no mês de março é: ${investimentomensal[2]}`);
console.log(`o valor investido no mês de abril é: ${investimentomensal[3]}`);
console.log(`o valor investido no mês de maio é: ${investimentomensal[4]}`);
console.log(`o valor investido no mês de junho é: ${investimentomensal[5]}`);

function pegarComanda(){
    console.log('Olá, boa noite');
    console.log('pegue aqui sua comanda!');
    console.log('bom apetite!!');
    console.log('--------------------------');
}

 pegarComanda();
/*
 let numerodavez = 4;
 function calcularQuadrado(){
    console.log(`o numero da vez é o ${numerodavez}`);
    console.log(`o numero da vez é o ${numerodavez} ao quadrado passa a ser ${numerodavez ** 2}`)
}


function calcularRaizQuadrada(base) {
    base**(1/2);
    console.log(base**(1/2));
}

function resolvebhaskara(){}

function calcularRaizQuadrada(base){
    return base** (1/2);
}

let valoRaizQuadrada = calcularRaizQuadrada(4);

function resolverBhaskara(a, b, c){
    const delta = b ** 2 - 4 * a * c;
    const x1 = (-b + calcularRaizQuadrada(delta)) / (2* a);
    const x2 = (-b - calcularRaizQuadrada(delta)) / (2* a);

    
}
*/

switch (usuario.time){
    case 'fluminense':
        console.log(mensagedeboasVindas1);
        break;
    case 'lamengo':
        console.log(mensagedeboasVindas2);
         break;
    
    case 'vasco':
        console.log(mensagedeboasVindas3);
        break;
    
    case 'nautico':
        console.log(mensagedeboasVindas4);
        break;
    
    case 'atleticoMG':
        console.log(mensagedeboasVindas5);
         break;
    
}

switch(usuario.time) {
    case 'fluminense':
    case 'são paulo':
    case 'grêmio':
        console.log(mensagedeboasVindas1)
        break
}


const usuario = { nome: 'Daniel', idade: 17, time: 'Sport' };
const mensagemBoasVindas1 = 'bem vindo, torcedor Tricolor!';
const mensagemBoasVindas2 = 'bem vindo, torcedor Rubro-Negro!';
const mensagemBoasVindas3 = 'bem vindo, torcedor Vascaíno!';
const mensagemBoasVindasGeral = 'bem vindo, amante do esporte!';
const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!';

if (usuario.idade < 18) {
    console.log('Não vendemos ingressos para torcedores menores de 18 anos');
} else {
    switch (usuario.time) {
        case 'Fluminense':
            console.log(mensagemBoasVindas1);
            break;
        case 'Flamengo':
            console.log(mensagemBoasVindas2);
            break;
        case 'Vasco':
            console.log(mensagemBoasVindas3);
            break;
        default:
            console.log(mensagemBoasVindasGeral);
    }
}
