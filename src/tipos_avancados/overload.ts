type Adddeer = {
    (x:number): number
    (x:number, y:number): number
    (...args: number[]): number
}

const adder: Adddeer = (x: number, y?: number, ...args: number[]) => {
    if (args.length > 0) return args.reduce((s, v) => s + v, 0 + x + (y || 0))
    return x + (y || 0)
}
