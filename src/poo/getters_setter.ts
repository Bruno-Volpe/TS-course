export class Pessoa {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        private readonly idade: number,
        protected _cpf: string
    ){}

    set cpf(cpf: string) {
        this._cpf = cpf
    }

    getIdade(): number {
        return this.idade
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, '')
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome
    }
}


const pessoa = new Pessoa('Bruno', 'Volpe', 18, '1111.111.11.1/1')
pessoa.cpf = 'Esse seria o novo cpf'
console.log(pessoa.cpf)
