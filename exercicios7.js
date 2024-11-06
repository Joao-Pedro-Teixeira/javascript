//ex1
const a = 'Neymar jr'
console.log(a.toUpperCase(a));
console.log(a.toLowerCase(a));
 
//ex2
const b = 'Neymar jr'
console.log(b.includes(a));
console.log(b.indexOf(a))

//ex3
const c = 'Cristiano Ronaldo'
console.log(c.slice(1));

//ex4 
const d = 'Neymar jr'
console.log(d.concat(' é fiel'));

//ex5
const e = 'O Neymar tem bola de ouro';
console.log(e.replace('Neymar', 'Messi'));

//ex6
const f = 'Eu amo o Neymar'
console.log(f.split('Eu')); 
//join não está funcionando

//ex7
const fila = [101, 102, 103, 104, 105];
console.log("Atendida:", fila.pop(), "Fila:", fila);

//ex8
const clientes = [];
clientes.unshift("Cliente 1", "Cliente 2");
console.log("Atendido:", clientes.shift(), "Restantes:", clientes);

//ex9
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.reverse());

//ex10
const precos = [100, 200, 300];
console.log(precos.map(p => p * 0.9));

//ex11
const notas = [5, 8, 6, 9, 7];
console.log(notas.filter(n => n > 7));

//ex12
const total = [10, 20, 30].reduce((acc, v) => acc + v, 0);
console.log(total);

//ex13
const titulos = ["O Senhor dos Anéis", "A Guerra dos Tronos", "Harry Potter"];
console.log(titulos.sort());

//ex14
console.log(Math.floor(Math.random() * 101));

//ex15
const cliente = { nome: "João", idade: 30 };
console.log(Object.keys(cliente), Object.values(cliente));

//ex16
const carro = {
    marca: "Fusca", modelo: "Clássico", ano: 1970,
    detalhes() { return `${this.marca} ${this.modelo}, ${this.ano}`; }
};
console.log(carro.detalhes());

//ex17
function Pessoa(nome, idade) { this.nome = nome; this.idade = idade; }
const g = new Pessoa("Maria", 28);
console.log(g.nome, g.idade);

//ex18
class Produto {
    constructor(nome, preco) { this.nome = nome; this.preco = preco; }
    detalhes() { return `${this.nome}, R$${this.preco}`; }
}
const p = new Produto("Teclado", 150);
console.log(p.detalhes());

//ex19
const relogio = {
    hora: new Date().toLocaleTimeString(),
    mostrarHora() { setTimeout(() => console.log(this.hora), 1000); }
};
relogio.mostrarHora();

//ex20
const usuario = { nome: "João", email: "joaoppt1903@gmail.com", exibir() { console.log(this.nome, this.email); } };
usuario.exibir = usuario.exibir.bind(usuario);
usuario.exibir();

//21
console.log(parseInt("45.67"));

//22












