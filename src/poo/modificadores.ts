export class Empresa {
    public readonly nome: string  // Pode ser acessado de fora da classe
    private readonly colaboradores: Colaborador[] = [] // SO pode ser acessado de dentro da classe
    protected readonly cnpj: string // Classe com heranca possuem acesso, mas no escopo global eh impossivel acessar

    constructor(nome: string, cnpj: string) {
        this.nome = nome
        this.cnpj = cnpj
        }

    adicionarColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
    }

    mostrarColaboradores() {
        this.colaboradores.forEach(colaborador => {
            console.log(colaborador)
        })
    }
}

class Colaborador{
    constructor(public readonly nome: string) {}
}

const empresa = new Empresa('Udemy', '1111.111.11./2')

const colaborador1 = new Colaborador('Bruno')
const colaborador2 = new Colaborador('Denise')
const colaborador3 = new Colaborador('Glauco')

empresa.adicionarColaborador(colaborador1)
empresa.adicionarColaborador(colaborador2)
empresa.adicionarColaborador(colaborador3)

empresa.mostrarColaboradores()
