"use strict";
/**
 * arquivo: typeGuards.ts
 * descrição: arquivo responsável por ensinar o uso de Type Guards em TypeScript
 * data: 01/12/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
exports = {};
function exibirTipo(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Argumentos inválidos! Ambos os argumentos devem ser númericos ou string.');
}
console.log(exibirTipo('Glaucia', '2'));
console.log(exibirTipo(5, 5));
// console.log(exibirTipo('Lemos', 5));
// ==> Exemplo 02 - Type Guards: instanceof
class Carro {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}
class Moto {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
function detalhesVeiculo(veiculo) {
    if (veiculo instanceof Carro) {
        return `O nome do carro é: ${veiculo.nome} e a marca é: ${veiculo.marca}`;
    }
    else if (veiculo instanceof Moto) {
        return `O nome da moto é: ${veiculo.nome} e o ano é: ${veiculo.ano}`;
    }
}
const carro = new Carro('Gol', 'Volkswagen');
console.log(detalhesVeiculo(carro));
const moto = new Moto('CBR', 2020);
console.log(detalhesVeiculo(moto));
class Peixe {
    constructor(grupo, corPeixe) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}
class Passaro {
    constructor(grupo, corPena) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
}
function nadar(grupo) {
    console.log(`O ${grupo} está nadando!`);
}
function voar(grupo) {
    console.log(`O ${grupo} está voando!`);
}
function mover(animal) {
    if ('corPeixe' in animal) {
        nadar(animal.grupo);
    }
    else if ('corPena' in animal) {
        voar(animal.grupo);
    }
}
mover(new Passaro('Pássaro', 'Vermelho'));
mover(new Peixe('Peixe', 'Azul'));
