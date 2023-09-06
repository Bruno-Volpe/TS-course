export class Pessoa {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        private readonly idade: number,
        protected _cpf: string
    ){}

    falaOi(): void {
        console.log('OI')
    }

    static criaPessoa(nome: string, sobrenome: string): Pessoa { //Nao preciso estar instanciado para poder usar esse metodo
        return new Pessoa(nome, sobrenome, 18, '169.312.567-43')
    }
}

const pessoa = new Pessoa('Bruno', "Volpe", 18, '169.312.567-43')
const pessoa2 = Pessoa.criaPessoa('Breno','lopes')
