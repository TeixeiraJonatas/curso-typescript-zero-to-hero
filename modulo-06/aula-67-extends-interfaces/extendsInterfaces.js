"use strict";
/**
 * arquivo: extendsInterfaces.ts
 * descrição: arquivo responsável por ensinar uso de 'extends' e 'implements' em TypeScript
 * data: 12/12/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
exports = {};
const cachorro = {
    nome: 'Prince',
    idade: 2,
    porte: 'Médio',
    raca: 'Spiz Alemao',
};
console.log(cachorro);
const animal = {
    nome: 'Farofa',
    idade: 5,
};
console.log(animal);
const desenvolvedor = {
    id: 'js-123',
    nome: 'Glaucia Lemos',
    salario: '10k',
    linguageProgramacao: 'JavaScript',
};
console.log(desenvolvedor);
// Exemplo 04 - Uso do pipe
/*interface Funcionario {
  id: number | string;
  nome: string;
  salario: number | string;
}

interface Desenvolvedor extends Funcionario {
  id: string;
  salario: string;
  linguageProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: 'js-123',
  nome: 'Glaucia Lemos',
  salario: '10k',
  linguageProgramacao: 'JavaScript',
}

console.log(desenvolvedor)*/ 
