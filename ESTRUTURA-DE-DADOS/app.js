`use strict`

import { showArray } from "./showArray.js"

const numbers = [23, 5, 9, 10, 100, 45];

// MAP - Percorre o Array e retorna um array do mesmo tamanho modificado ou não.
// Sintaxe - array.map(callBack)
// Parametros do callBack: 
// 1 - Elemento
// 2 - Índice 
// 3 - Array

// Aplicando um desconto de 2 unidades no Array. 
const desconto2 = (number) => number - 2
const numbersDesconto = numbers.map (desconto2) 

// Filtrar os elementos menores que 20 

const menor20 = (valor) => valor < 20
const valorMenor2 = numbers.filter(menor20)

const soma = (a, b) =>  a + b
const valorTotal = numbers.reduce(soma)

const aumentar = (valor) => valor + 100
const reaisM = numbers.map(aumentar)

const Pares = (valor) => valor % 2 == 0
const paresS = numbers.filter(Pares)


const desconto4 = (numbers1, numbers2) => (numbers1 - 4) + (numbers2 - 4)
const numbersDesc = numbers.reduce (desconto4) 

const impar = (valor) => (valor % 2 != 0)
const somar = (impar) => (impar + 21)
const impars = numbers.filter(impar)




showArray(numbers, 'main', 'Produtos: ')
showArray(numbersDesconto, 'main', 'Produtos com Desconto!')
showArray(valorMenor2, 'main', 'Produtos Menor que 20')
showArray([valorTotal], 'main', 'Total de valores')
showArray(reaisM, 'main', 'Valor adicionado a mais 100')
showArray(paresS, 'main', 'Valores Pares')
showArray([numbersDesc], 'main', 'Produtos com 4 de desconto')
showArray(impars, 'main', 'Impares mais 21')








//Exercicio 
// 1 - Aumentar 100 em cada elemento 
// 2 - Somente os numeros Pares
// 3 - Total dos valroes com desconto de 4.
// 4 - Array com todos os elementos ímpares somando 21