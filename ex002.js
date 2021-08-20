/*DESAFIO 02
Jogo da adivinhação
Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/

const computador = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
console.log(computador);
let pessoa = parseInt(prompt('Digite um valor entre 0 e 10: '));
while (true) {
    if (pessoa === computador) {
        break;
    } else {
        console.log('Você errou!')
        pessoa = parseInt(prompt('Digite um valor entre 0 e 10: '))
    }
}

console.log(`Você acertou o número que o computador escolheu: ${computador}`);