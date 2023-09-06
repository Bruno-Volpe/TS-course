type ObterChaveFn = <O, k extends keyof O>(objeto: O, chave: k) => O[k]
