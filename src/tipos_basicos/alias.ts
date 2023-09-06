type Idade = number
type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorWG = 'White' | 'Grey'
type CorPreferida = CorRGB | CorWG

type Pessoa = {
    nome: string,
    idade: Idade,
    salario: number,
    corPreferida?: CorPreferida
}


export default 1
