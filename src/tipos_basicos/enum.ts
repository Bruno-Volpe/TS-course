enum Cores {
    VERMELHO,
    AZUL,
    AMARELO
}

enum Cores2 {
    VERMELHO = 3,
    AZUL = 1000,
    AMARELO = 23,
}

console.log(Cores.VERMELHO)
console.log(Cores2[3])

function escolhaACor(cor: Cores): void {
    console.log(Cores[cor])
}
