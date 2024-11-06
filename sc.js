const usuario = {nome: 'João', idade: 16, time: 'fluminense'}
const mensagedeboasVindas1 = "Bem-vindo ao Fluminense!";
const mensagedeboasVindas2 = "Bem-vindo ao Flamengo!";
const mensagedeboasVindas3 = "Bem-vindo ao Vasco!";
const mensagedeboasVindas4 = "Bem-vindo ao Náutico!";
const mensagedeboasVindas5 = "Bem-vindo ao Atlético MG!";


switch(usuario.time) {
    case 'fluminense':
        console.log(mensagedeboasVindas1);
        break;
    case 'flamengo': 
        console.log(mensagedeboasVindas2);
        break;
    case 'vasco':
        console.log(mensagedeboasVindas3);
        break;
    case 'nautico':
        console.log(mensagedeboasVindas4);
        break;
    case 'atleticomg':
        console.log(mensagedeboasVindas5);
        break;
}

switch(usuario.time) {
    case 'fluminense':
    case 'são paulo':
    case 'grêmio':
        console.log(mensagedeboasVindas1); 
        break;
    default:
        console.log("Time não encontrado ou não tem mensagem personalizada");
}


