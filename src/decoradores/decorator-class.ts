@docrador
export class Animal {
    constructor(public cor: string) {}
}

function docrador<T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
        cor: string;

        constructor(...args: any[]) {
            super(...args);
            this.cor = args[0].split('').reverse().join('');
        }
    }
}

const animal = new Animal('roxo');
