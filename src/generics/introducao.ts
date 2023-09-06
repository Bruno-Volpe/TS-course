type FilterCallBack<U> = (
    value: U,
    index?:number,
    array?: U[]
) => boolean

type ReduceCallBack<T> = (
    sum: T,
    value: T,
    array ?: T[]
) => T

type ForEachCallBack<T> = (
    value: T,
    index ?:    number,
    array ?: T[]
) => T

function meuFilter<T>(array: T[], callBackFn: FilterCallBack<T>): T[] {
    const newArray = []

    for (let i = 0; i < array.length; i++) {
        if (callBackFn(array[i])) {
            newArray.push(array[i])
        }
    }

    return newArray
}

function meuReduce<T> (array: T[], callBackFn: ReduceCallBack<T>, sumStart: T): T {
    let sum = sumStart

    for (let i = 0; i < array.length; i++) {
        sum = callBackFn(sum, array[i])
    }

    return sum
}

function meuForEach<T>(array: T[], callBackFn: ForEachCallBack<T>): void {
    for (let element of array) {
        callBackFn(element);
    }
}

const array = [1, 2, 3, 4, 5, 6]

const arrayFiltradoOriginal = array.filter(value => value < 5)
const arrayReduceOriginal = array.reduce((sum, value) => sum += value, 0)
const arrayForEachOriginal = array.forEach((v, index) => console.log(v, index))

console.log(arrayReduceOriginal)
