import _ from 'lodash'

_.mul = function (a: number, b: number): number {
  return a * b
}

const array = [100, 200, 300, 400]
console.log('_.sum(array)', _.sum(array))
