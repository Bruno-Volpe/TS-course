export abstract class Pessoa {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        private readonly idade: number,
        protected cpf: string
    ){}

    getIdade(): number {
        return this.idade
    }

    getCpf(): string {
        return this.cpf
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome
    }
}

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        console.log("FAzendo isso antes")
        return super.getNomeCompleto()
    }
}
export class Cliente extends Pessoa {}

const aluno = new Aluno('Bruno', 'Volpe', 18, '1111.111.111-12')
const cliente = new Cliente('Bruno', 'Volpe', 18, '1111.111.111-12')
