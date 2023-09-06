/* eslint-disable */

// Esses sao os tipos mais basicons do TS
let nome: string = 'João'
let idade: number = 27
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer-symbol')
// let big: bigint = 10n


// Arrays
let arrayDeNumers: Array<number> = [1, 2, 3]
let arrayDeStrins: string[] = ['a', 'b', 'c']

//Objeto
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'João',
    idade: 27
}

// Funções
function soma(x: number, y: number) {
    return x + y
}
const soma2: (x: number, y:number) => number = (x, y) => x + y
