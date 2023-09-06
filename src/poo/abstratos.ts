export abstract class Personagem {
    constructor (
        protected name: string,
        protected ataque: number,
        protected vida: number
    ) {}

    atacar(personagem: Personagem): void {
        this.bordao()
        personagem.perderVida(this.ataque)
    }

    perderVida(forcaAtque: number) {
        this.vida -= forcaAtque
        console.log(`${this.name} agora tem ${this.vida} de vida...`)
    }

    abstract bordao(): void
}

class Guerreira extends Personagem {
    bordao(): void {
        console.log('Sou a guerreira')
    }
}

class Monstro extends Personagem {
    bordao(): void {
        console.log('Sou o mosntro')
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000)
const monstro = new Monstro('Guerreira', 87, 1000)

guerreira.atacar(monstro)
