function multiplica(...args: number[]): number {
    return args.reduce((ac, valor) => {
        return ac * valor
    }, 1)
}

console.log(multiplica(1, 2, 3, 6, 7, 9))

export default multiplica
