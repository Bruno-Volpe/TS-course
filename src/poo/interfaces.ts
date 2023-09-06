interface TipoNome {
    nome: string
}

type TipoSobrenome = {
    sobrenome: string
}

type TipoNomeCompleto = {
    nomeCompleto: () => string
}

interface TipoPessoa extends TipoNome, TipoSobrenome, TipoNomeCompleto{}

class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
    constructor (
        public nome: string,
        public sobrenome: string
    ){}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome
    };
}
