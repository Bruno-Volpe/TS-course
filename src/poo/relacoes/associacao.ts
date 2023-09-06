export class Escritor {
    private _ferramenta: Ferramenta | null = null

    set Ferramenta(ferramenta: Ferramenta) {
        this._ferramenta = ferramenta
    }

    escrever(): void {
        if(this._ferramenta)
            this._ferramenta?.escrever()
    }

    constructor(
        private _name: string
    ) {}
}

export abstract class Ferramenta {
    constructor(
        private _name: string
    ) {}

    abstract escrever(): void

    get name(): string {
        return this._name
    }
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.name} esta escrevendo...`)
    }
}

export class MaquinaDeEscrever extends Ferramenta {
    escrever(): void {
        console.log(`${this.name} esta digitando...`)
    }
}
