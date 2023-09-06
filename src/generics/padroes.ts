// Required
type Pessoa = {
    nome: string;
    idade: number;
    cpf?: string;
};

type PessoaRequired = Required<Pessoa>

export const pessoa: PessoaRequired = {
    nome: 'bruno',
    idade: 15,
    cpf: 'preciso dele aqui'
};


// Partial
type PessoaPartial = Partial<PessoaRequired> // tudo passa a ser opcional

//readOnly
type PessoaReadOnly = Readonly<Pessoa> //tudo passa a ser imutavel

// Pick
//type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>



// Extract | Exclude
type ABC = 'a' | 'b' | 'c'
type CDE = 'c' | 'd' | 'e'

// s


type AccountMongo = {
    _id: string,
    nome: string,
    idade: number
}

type AccountAPI = {
    id: string,
    nome: string,
    idade: number
}

function mapMongo(datas: AccountMongo): AccountAPI {
    const {_id, ...data} = datas
    return {...data, id: _id}
}

