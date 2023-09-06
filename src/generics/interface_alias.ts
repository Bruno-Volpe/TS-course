interface PessoaProtocolo<T, U> {
    nome: T,
    sobrenome: T,
    idade: U
}

const aluno: PessoaProtocolo<string, number> = {
    nome: 'bruno',
    sobrenome: 'volpe',
    idade: 25
}
