export class Pessoa {
    // Maneira mais longa
    public readonly nome: string
    private readonly parentes: Parentes[] = []
    protected readonly cpf: string

    constructor (nome: string, cpf: string) {
        this.nome = nome
        this.cpf = cpf
    }

    addParent(parente: Parentes): void {
        this.parentes.push(parente)
    }

    showParents(): void {
        this.parentes.forEach(parent => {
            console.log(parent)
        })
    }
}

class Parentes {
    // Maneira curta
    constructor(public readonly nome: string) {
    }
}

const pessoa1 = new Pessoa('Bruno', '169.361.728-57')
const parente1 = new Parentes('Glauco')
const parente2 = new Parentes('Denise')
const parente3 = new Parentes('Livia')

pessoa1.addParent(parente1)
pessoa1.addParent(parente2)
pessoa1.addParent(parente3)
pessoa1.showParents()
