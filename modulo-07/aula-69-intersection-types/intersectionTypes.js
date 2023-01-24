"use strict";
/**
 * arquivo: intersectionTypes.ts
 * descrição: arquivo responsável por ensinar uso de 'Intersection Types' em TypeScript
 * data: 12/22/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
const dadosCliente = {
    conta: 123456,
    agencia: 123,
    banco: "Banco do Brasil",
    nome: "Glaucia Lemos",
    email: "glaucia@email.com",
    cpf: 123456789,
};
console.log(dadosCliente);
const enderecoPessoa = {
    nome: 'Glaucia Lemos',
    idade: 36,
    profissao: 'Software Engineer',
    rua: 'Rua das Tulipas',
    bairro: 'Bairro das Tulipas',
    cidade: 'Rio de Janeiro',
};
console.log(enderecoPessoa);
module.exports = {};
