const obj: {nome: string, idade: number, [key: string]: unknown} = {
    nome: 'bruno',
    idade: 6
}

obj.idade = 15
obj.chaveAdicional = 'Nova chave'
