/*DESAFIO 01
Reajuste salarial
As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%
Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento."
*/

const salario = parseInt(prompt('Salario do colaborador: '));
let porcentagem;
let salarioReajustado;
let aumento;

if (salario <= 280) {
    porcentagem = 20;
    aumento = (salario * porcentagem) / 100;
    salarioReajustado = salario + aumento;
} else if (salario >= 280 && salario < 700) {
    porcentagem = 15;
    aumento = (salario * porcentagem) / 100;
    salarioReajustado = salario + aumento;
} else if (salario >= 700 && salario < 1500) {
    porcentagem = 10;
    aumento = (salario * porcentagem) / 100;
    salarioReajustado = salario + aumento;
} else if (salario >= 1500) { 
    porcentagem = 5;
    aumento = (salario * porcentagem) / 100;
    salarioReajustado = salario + aumento;
}

console.log(`Atual salário: ${salario.toLocaleString("pt-br", {style:"currency",currency:'BRL'})}\nPercentual de reajuste: ${porcentagem}%\nValor do aumento: ${aumento.toLocaleString("pt-br", {style:"currency",currency:'BRL'})}\nNovo salário: ${salarioReajustado.toLocaleString("pt-br", {style:"currency",currency:'BRL'})}`);
bre