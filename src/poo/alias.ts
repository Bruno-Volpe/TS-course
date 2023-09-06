export abstract class TipoPessoa {
    protected abstract nome: string
    protected abstract sobrenome: string
    protected abstract nomeCompleto(): string
}

class Pessoa extends TipoPessoa {
    protected abstract sobrenome: string
    protected abstract nomeCompleto(): string
    protected abstract nome: string
}
