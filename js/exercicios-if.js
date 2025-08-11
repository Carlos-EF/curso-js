function validarIdade() {
    let idade = parseInt(prompt("Digite sua idade."));

    if (idade >= 18) {
        alert("Você é maior de idade.");
    } else {
        alert("Você é menor de idade");
    }
};

function verificarPar() {
    let numero = parseInt(prompt("Digite um número."));

    if (numero % 2 === 0) {
        alert("O número é par.");
    } else {
        alert("O número é ímpar.");
    }
};

function verificarNota() {
    let nota = parseFloat(prompt("Digite sua nota."))

    if (nota >= 7) {
        alert("Aprovado.");
    } else {
        alert("Reprovado");
    }
};

function verificarSenha() {
    let senha = parseInt(prompt("Digite sua senha."));

    if (senha === 8001) {
        alert("Acesso permitido.");
    } else {
        alert("Acesso negado.");
    }
};

function adicionarDesconto() {
    let compra = parseFloat(prompt("Digite o valor final da sua compra."));

    let desconto = 10;

    let calculo = (desconto * compra) / 100;

    let valor = compra - calculo;

    if (compra >= 100) {
        alert("Parabéns! Você ganhou um desconto de 10%. O valor final com o desconto será de: R$ " + valor);
    } else {
        alert("Sem desconto disponível.");
    }
};

function classificarIdade() {
    let idade = parseInt(prompt("Digite sua idade."));

    if (idade <= 12) {
        alert("Você é uma criança.");
    } else if (idade === 13 || idade <= 17) {
        alert("Você é um adolescente");
    } else if (idade === 18 || idade <= 59) {
        alert("Você é um adulto.");
    } else if (idade >= 60) {
        alert("Você é um idoso.");
    }
};

function demonstrarNumeroMaior() {
    let numero1 = parseFloat(prompt("Digite um número."));

    let numero2 = parseFloat(prompt("Digite outro número."));

    if (numero1 > numero2) {
        alert("Esse número é o maior entre os dois: " + numero1);
    } else if (numero2 > numero1) {
        alert("Esse número é o maior entre os dois: " + numero2);
    } else if (numero1 === numero2) {
        alert("Os números são iguais.");
    }
};

function verificarValorNumero() {
    let numero = parseInt(prompt("Digite um número."));

    if (numero > 0) {
        alert("O número " + numero + " é positivo.");
    } else if (numero < 0) {
        alert("O número " + numero + " é negativo.");
    } else if (numero === 0) {
        alert("Zero.");
    }
};

function verificarMedia() {
    let media = parseFloat(prompt("Digite a média final do aluno."));

    if (media >= 7) {
        alert("O aluno está aprovado :D .");
    } else if (media < 5) {
        alert("O aluno está reprovado :( .");
    } else if (media === 5 || media <= 6.9) {
        alert("O aluno está em recuperação :| .");
    }
};

function verificarMultiplos3e5() {
    let numero = parseInt(prompt("Digite um número inteiro."))

    if (numero % 3 === 0 && numero % 5 === 0) {
        alert("Múltiplo de 3 e 5.");
    } else if (numero % 5 === 0) {
        alert("Múltiplo de 5.");
    } else if (numero % 3 === 0) {
        alert("Múltiplo de 3.");
    } else {
        alert("Não é multiplo de 3 ou 5.");
    }
};

function verificarAcessoEvento() {
    let idade = parseInt(prompt("Nos informe sua idade."));

    const ingresso = confirm("Você possui um ingresso?");

    if (idade >= 18 && ingresso === true) {
        alert("Acesso permitido! Se divirta no evento.");
    } else {
        alert("Acesso negado.");
    }
};

function confirmarBrinde() {
    let compra = parseFloat(prompt("Digite o valor final da sua compra."));

    const vip = confirm("Você é cliente VIP?");

    if (compra > 200 || vip === true) {
        alert("Parabéns! Você acabou de ganhar um brinde.");
    } else {
        alert("Sem brinde disponível.");
    }
};

function confirmarUsuario() {
    let usuario = prompt("Digite seu usuário.");

    let senha = parseInt(prompt("Digite sua senha"));

    if (usuario === "admin" && senha === 1234) {
        alert("Login bem-sucedido!");
    } else {
        alert("Usuário ou senha inválidos.");
    }
};

function validarTriangulo() {
    let lado1 = parseFloat(prompt("Digite o valor desejado."));

    let lado2 = parseFloat(prompt("Digite o valor desejado."));

    let lado3 = parseFloat(prompt("Digite o valor desejado."));

    if (lado1 + lado2 > lado3 || lado1 + lado3 > lado2 || lado2 + lado3 > lado1) {
        alert("Triângulo válido!");
    } else {
        alert("Triângulo inválido!");
    }
};

function verificarBissexto() {
    let ano = parseInt(prompt("Digite um ano."));

    if (ano % 4 === 0 || ano % 400 === 0 && ano % 100 === 1) {
        alert("o ano de " + ano + " é um ano bissexto.");
    } else {
        alert("O ano de " + ano + " é um ano comum.");
    }
};