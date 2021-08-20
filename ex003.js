/*#DESAFIO 3
Caixa eletrônico
Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/

let nota1 = 0;
let nota5 = 0;
let nota10 = 0;
let nota50 = 0;
let nota100 = 0;

let valor = parseInt(prompt('Digite o valor a ser sacado: '))

while (true) {
    if (valor >= 100) {
        nota100++;
        valor -= 100;

    } else if (valor >= 50) {
        nota50 += 1;
        valor -= 50;

    } else if (valor >= 10) {
        nota10++;
        valor -= 10;

    } else if (valor >= 5) { 
        nota5++;
        valor -= 5;

    } else if (valor >= 1) {
        nota1++;
        valor -= 1;

    } else { 
        break;
    }
} 

console.log(`Foi necessario ${nota100} de 100, ${nota50} de 50, ${nota10} de 10, ${nota5} de 5, ${nota1} de 1.`)