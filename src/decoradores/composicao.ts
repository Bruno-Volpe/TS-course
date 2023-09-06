function docrador(param1: string) {
    return function <T extends new (...args: any[]) => any>(target: T): T {
        return class extends target {
            cor: string;

            constructor(...args: any[]) {
                super(...args);
                this.cor = args[0].split('').reverse().join('');
            }
        }
    }
}

function outroDecorador<T> (target: T): T {
    return target;
}

@outroDecorador
@docrador('teste')
export class Animal {
    constructor(public cor: string) {}
}
const animal = new Animal('roxo');
