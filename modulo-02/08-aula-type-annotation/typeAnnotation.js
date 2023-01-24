"use strict";
/* eslint-disable prettier/prettier */
/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * data: 16/02/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Variáveis [Type Annotations]
let nome = 'Jonatas Santos Teixeira';
console.log(nome);
console.log('simples ' + '----------------');
// ==> Arrays [Type Annotations]
let animais = ['cachorro', 'elefante', 'gato', 'tartaruga'];
console.log(animais);
console.log('Arrays ' + '----------------');
// ==> Objetos [Type Annotations]
let carro;
carro = { nome: 'Toyota Corolla', ano: 2010, preco: 49000 };
console.log(carro);
// ==> Functions [Type Annotation]
