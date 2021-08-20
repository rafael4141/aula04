/*#DESAFIO 3
Caixa eletrônico
Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas exisnota10tes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/

console.log(`Notas disponíveis: 1, 5, 10, 50 e 100
Valor mínimo: 10 reais
Valor máximo: 600 reais`)

var saque = Number(prompt("Qual o valor do saque?"))

var nota100 = parseInt(saque / 100)
var num = saque - (nota100 * 100)

var nota50 = parseInt(num / 50)
num = num - (nota50 * 50)

var nota10 = parseInt(num / 10)
num = num - (nota10 * 10)

var nata5 = parseInt(num / 5)
num = num - (nata5 * 5)

nota1 = num

console.log(`Quantidade de notas de 100: ${nota100}
Quantidade de notas de 50: ${nota50}
Quantidade de notas de 10: ${nota10}
Quantidade de notas de 5: ${nata5}
Quantidade de notas de 1: ${nota1}`)