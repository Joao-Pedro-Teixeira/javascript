// 1. Variáveis e Operadores
let preco = 100;
let desconto = 0.20;
let precoComDesconto = preco - (preco * desconto);
console.log(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`); // Correto

// 2. Concatenando Strings
let nome = 'João';
let sobrenome = 'Silva';
let nomeCompleto = `${nome} ${sobrenome}`; // Correto
console.log(`Nome completo: ${nomeCompleto}`); // Correto

// 3. Arrays
let numeros = [1, 2, 3, 4, 5];
console.log('Números:');
for (let numero of numeros) {
    console.log(numero);
}

// 4. Manipulação de Arrays
let frutas = ['maçã', 'banana', 'laranja'];
frutas.push('uva');
console.log('Frutas:', frutas);

// 5. Objetos
let pessoa = {
    nome: 'Ana',
    idade: 30,
    cidade: 'São Paulo'
};
console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`); // Correto

// 6. Manipulação de Objetos
pessoa.email = 'ana.silva@example.com';
console.log('Pessoa com email:', pessoa);

// 7. Arrays e Métodos
let numerosDobro = numeros.map(num => num * 2);
console.log('Números dobrados:', numerosDobro);

// 8. Filtrando Arrays
let idades = [15, 22, 18, 30, 12];
let idadesMaiorQue18 = idades.filter(idade => idade > 18);
console.log('Idades maiores que 18:', idadesMaiorQue18);

// 9. Looping em Arrays
let cores = ['vermelho', 'verde', 'azul'];
console.log('Cores:');
cores.forEach(cor => {
    console.log(cor);
});

// 10. Objetos Aninhados
let carro = {
    marca: 'Fusca',
    modelo: 'Clássico',
    especificacoes: {
        ano: 1976,
        cor: 'cinza'
    }
};
console.log('Cor do carro:', carro.especificacoes.cor);

// 11. Desestruturação de Objetos
let usuario = { nome: 'João', idade: 16 };
let { nome: usuarioNome, idade: usuarioIdade } = usuario;
console.log(`Nome: ${usuarioNome}, Idade: ${usuarioIdade}`); // Correto

// 12. Contagem de Elementos em um Array
let animais = ['cachorro', 'gato', 'pássaro', 'gato'];
let contagemGato = animais.filter(animal => animal === 'gato').length;
console.log(`O gato aparece ${contagemGato} vezes no array.`); // Correto

// 13. Operador Ternário
let nota = 8; // Atribua um valor a nota
let resultado = nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(`Resultado: ${resultado}`); // Correto

// 14. Transformando Strings
let texto = "Olá, mundo!";
let textoMinusculo = texto.toLowerCase();
console.log(`Texto em minúsculas: ${textoMinusculo}`); // Correto

// 15. União de Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let uniaoArrays = [...array1, ...array2];
console.log('União dos arrays:', uniaoArrays);

// 16. Removendo Elementos de um Array
numeros = [10, 20, 30, 40];
numeros.shift(); // Remove o primeiro elemento
console.log('Array após remover o primeiro elemento:', numeros);

// 17. Verificação de Propriedades de Objetos
let produto = { nome: 'Notebook', preco: 2500 };
if ('preco' in produto) {
    console.log('A propriedade "preco" existe no objeto produto.');
} else {
    console.log('A propriedade "preco" não existe no objeto produto.');
}

// 18. Iterando com for
let numerosAleatorios = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
let soma = 0;
for (let i = 0; i < numerosAleatorios.length; i++) {
    soma += numerosAleatorios[i];
}
console.log('Soma dos números aleatórios:', soma);

// 19. Clonando Objetos
let usuarioOriginal = { nome: 'João', idade: 16 };
let usuarioCopia = Object.assign({}, usuarioOriginal, { cidade: 'São Paulo' });
console.log('Usuário Original:', usuarioOriginal);
console.log('Usuário Cópia:', usuarioCopia);

// 20. Manipulação de Arrays com reduce
let numerosParaProduto = [1, 2, 3, 4];
let produtoResultado = numerosParaProduto.reduce((acc, num) => acc * num, 1);
console.log('Produto dos números:', produtoResultado);
