export function createPerson(nome: string, idade:number): {
    nome: string,
    idade: number
} {
    return {
        nome,
        idade
    }
}

export function square(x: any): number | null {
    if (typeof x === 'number') return x * x
    return null
}
