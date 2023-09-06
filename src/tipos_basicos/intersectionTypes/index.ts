// Union eh a juncao |
// Interseccao eh um tersecao &

type TemNome = {nome: string}
type TemSobrenome = {sobrenome: string}
type TemIdade = {idade: number}

type Pessoa = TemNome & TemIdade & TemSobrenome // Mesma coisa que ler como AND (&&)

export default 1
