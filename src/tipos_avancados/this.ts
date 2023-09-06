export class Calculadora {
    constructor (
        public numero: number
    ) {}

    add(n: number): this {
        this.numero += n
        return this //Estou retornando a instancia da classe, o que permite fazer chamadas de funcao em cadeia
    }
}
