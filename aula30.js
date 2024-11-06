function CalcularTamanhodaCasaEmM2(
    tamanhoSala,
    tamanhoCozinha,
    tamanhoBanheiro,
    tamanhoQuarto
) {
    const tamanhoTotal = tamanhoSala + tamanhoCozinha + tamanhoBanheiro + tamanhoQuarto;
    console.log(`O tamanho da casa é de ${tamanhoTotal} m²`);
    return tamanhoTotal;
}

// Objeto casa
let casa = {
    cor: 'branca',
    sala: 30,
    cozinha: 20,
    banheiro: 40,
    quarto: 30,
};

// Chamando a função
CalcularTamanhodaCasaEmM2(
    casa.sala,
    casa.cozinha,
    casa.banheiro,
    casa.quarto
);

// Definindo a função novamente como método de casa
casa.CalcularTamanhodaCasaEmM2 = function () {
    const tamanhoTotal = this.sala + this.cozinha + this.banheiro + this.quarto;
    console.log(`O tamanho da casa é de ${tamanhoTotal} m²`);
    return tamanhoTotal;
};

// Atribuindo a função
casa.CalcularTamanhodaCasaEmM2();

let a = 20;
console.log(a.toFixed(5));
console.log(a.toString(4));

let b = ' texto da aula de metodo'
console.log(b.charAt(2));
console.log(b.concat(' que eu já dominei totalmente'));
console.log(b.split('da'));
console.log(b.split(' '));

let c = '10110';
console.log(Number.parseInt(c));
console.log(Number.parseInt(' '));
console.log(Number.isNaN(Number.parseInt('b')));
console.log(b.length);

const listaNotas = [
    { nome: 'Daniel', nota: 5 },
    { nome: 'Pedro', nota: 15 },
    { nome: 'Lucas', nota: 12 },
    { nome: 'Fabricio', nota: 16 },
    { nome: 'Izabelle', nota: 18 },
    { nome: 'Nathalia', nota: 20 },
    { nome: 'Amanda', nota: 20 },
    { nome: 'João', nota: 20 },
    { nome: 'Marcus', nota: 12 },
    { nome: 'Sergio', nota: 13 },
    { nome: 'Diego', nota: 14 },
    { nome: 'Renam', nota: 11 },
    { nome: 'Rodrigo', nota: 9 },
    { nome: 'Messi', nota: 0 },
    { nome: 'CR7', nota: 0 },
    
]

const alunoAprovado = listaNotas.filter(function (aluno){
return aluno.nota >= 12;
})

console.log(alunoAprovado);

const alunoQUeTiraramZero = listaNotas.find(function (aluno){
    return aluno.nota === 0;
    })
    
    console.log(alunoQUeTiraramZero);

    const alunosAprovados = alunoAprovado.map(function (aluno){
        return aluno.nome;
        })
        
        console.log(alunosAprovados);

        

