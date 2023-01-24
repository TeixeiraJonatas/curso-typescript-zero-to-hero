"use strict";
/**
 * arquivo: abastractClasses.ts
 * descrição: arquivo responsável por ensinar uso de classes abstratas no TypeScript
 * data: 11/18/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    emitirContraCheque() {
        return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;
    }
}
class FuncionarioCLT extends Funcionario {
    constructor(nome, sobrenome, salario) {
        super(nome, sobrenome);
        this.salario = salario;
    }
    retornarSalario() {
        return this.salario;
    }
}
class FuncionarioPJ extends Funcionario {
    constructor(nome, sobrenome, valorHora, horasTrabalhadas) {
        super(nome, sobrenome);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    retornarSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
}
const glaucia = new FuncionarioCLT('Glaucia', 'Lemos', 18000);
const joao = new FuncionarioPJ('João', 'Silva', 150, 160);
console.log(glaucia.emitirContraCheque());
console.log(joao.emitirContraCheque());
// const funcionario = new Funcionario('Glaucia', 'Lemos');
