"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('botao-atualizar-saldo');
let botaoLimpar = document.getElementById('botao-limpar-saldo');
let somaElement = document.getElementById('valorASerSomado');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal = saldoTotal + soma;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = "";
    }
}
if (botaoAtualizar != null) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(somaElement.value));
    });
}
if (botaoLimpar != null) {
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
}
