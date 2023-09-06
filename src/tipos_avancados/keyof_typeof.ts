const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'azul'
}

function traduzirCor(cor: 'vermelho' | 'verde' | 'azul', objCor: typeof coresObj ) {
    return objCor[cor]
}

