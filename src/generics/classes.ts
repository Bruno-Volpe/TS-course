export class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
    private contador = 0
    private elementos: {[k: number]: T} = {}

    push(el: T): void {
        this.elementos[this.contador] = el
        this.contador ++
    }

    checkEmpty(): boolean {
        if (this.contador === 0) return true
        return false
    }

    pop(): T | void {
        if (this.checkEmpty()) return undefined

        this.contador --
        const elemento = this.elementos[this.contador]
        delete this.elementos[this.contador]

        return elemento
    }
}
