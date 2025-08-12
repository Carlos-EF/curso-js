//exercício 7

function apresentarDadosNumero() {
    let numero = parseFloat(prompt("Digite um número.").replace(",", "."));

    let paridade;
    let positividade;
    let maior10;
    let menorIgual50;
    let menor10Negativo;
    let maiorIgual30;
    let diferente1;

    if (numero === 0) {
        paridade = "neutro";
    } else if (numero % 2 === 0) {
        paridade = "par";
    } else if (numero % 2 === 1 || numero === -1) {
        paridade = "ímpar";
    }

    if (numero > 0) {
        positividade = "Positivo";
    } else if (numero <= 0) {
        positividade = "Negativo";
    }

    if (numero > 10) {
        maior10 = "Maior que 10";
    } else if (numero <= 10) {
        maior10 = "Menor que 10";
    } else {
        maior10 = "Igual a 10";
    }

    if (numero <= 50) {
        menorIgual50 = "Menor que 50";
    } else if (numero === 50) {
        menorIgual50 = "Igual a 50";
    } else {
        menorIgual50 = "Maior que 50";
    }

    if (numero <= -10) {
        menor10Negativo = "Menor do que -10";
    } else {
        menor10Negativo = "Maior que -10";
    }

    if (numero === 30) {
        maiorIgual30 = "Igual a 30";
    } else if (numero > 30) {
        maiorIgual30 = "Maior que 30";
    } else {
        maiorIgual30 = "Menor que 30";
    }

    if (numero !== 1) {
        diferente1 = "Número diferente do que 1";
    } else {
        diferente1 = "Número igual a 1";
    }

    alert("Número digitado: " + numero +
        "\nDado 1: " + paridade + ";" +
        "\nDado 2: " + positividade + ";" +
        "\nDado 3: " + maior10 + ";" +
        "\nDado 4: " + menorIgual50 + ";" +
        "\nDado 5: " + menor10Negativo + ";" +
        "\nDado 6: " + maiorIgual30 + ";" +
        "\nDado 7: " + diferente1 + "."
    )
}

//exercício 7

//exercício 9

function verificarQuadrado() {
    let lado1 = parseFloat(prompt("Digite um número.").replace(",", "."));

    let lado2 = parseFloat(prompt("Digite um outro número.").replace(",", "."));

    let lado3 = parseFloat(prompt("Digite mais um número.").replace(",", "."));

    let lado4 = parseFloat(prompt("Digite um último número.").replace(",", "."));

    if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
        alert("Pode ser um quadrado.")
    } else {
        alert("Não pode ser um quadrado.");
    }
};

//exercício 9

//exercício 10

function verificarRetangulo() {
    let lado1 = parseFloat(prompt("Digite um número.").replace(",", "."));

    let lado2 = parseFloat(prompt("Digite um outro número.").replace(",", "."));

    let lado3 = parseFloat(prompt("Digite mais um número.").replace(",", "."));

    let lado4 = parseFloat(prompt("Digite um último número.").replace(",", "."));

    if (lado1 === lado2 && lado3 === lado4 && lado1 !== lado3 || lado1 === lado3 && lado2 === lado4 && lado1 !== lado2 || lado1 === lado4 && lado2 === lado3 && lado1 !== lado3) {
        alert("Pode ser um retângulo.");
    } else {
        alert("Não pode ser um retângulo.");
    }
};

//exercício 10

//exercício 14

function apresentarOrdemCrescente() {
    let numero1 = parseFloat(prompt("Digite um número.").replace(",", "."));

    let numero2 = parseFloat(prompt("Digite um outro número.").replace(",", "."));

    let numero3 = parseFloat(prompt("Digite mais um número.").replace(",", "."));

    let comeco;

    let meio;

    let fim;

    if (numero1 <= numero2 && numero2 <= numero3) {
        comeco = numero1;
        meio = numero2;
        fim = numero3;
    }

    if (numero1 <= numero3 && numero3 <= numero2) {
        comeco = numero1;
        meio = numero3;
        fim = numero2;
    }

    if (numero2 <= numero1 && numero1 <= numero3) {
        comeco = numero2;
        meio = numero1;
        fim = numero3;
    }

    if (numero2 <= numero3 && numero3 <= numero1) {
        comeco = numero2;
        meio = numero3;
        fim = numero1;
    }

    if (numero3 <= numero1 && numero1 <= numero2) {
        comeco = numero3;
        meio = numero1;
        fim = numero2;
    }

    if (numero3 <= numero2 && numero2 <= numero1) {
        comeco = numero3;
        meio = numero2;
        fim = numero1;
    }


    alert("Em ordem crescente: " + comeco + ", " + meio + ", " + fim + ".")

    // const ordem = [numero1, numero2, numero3];
    // ordem.sort(function (a, b) {
    //     return a - b;
    // });

    // alert("Em ordem crescente: " + ordem);
}

//exercício 14

//exercício 17

function apresentarAnoExtenso() {
    let ano = (prompt("Digite seu ano de nascimento.").trim());

    let partes = ano.split('');

    let milhar = parseInt(partes[0]);

    let centena = parseInt(partes[1]);

    let dezena = parseInt(partes[2]);

    let unidade = parseInt(partes[3]);
    
    let milharApresentado;

    let centenaApresentado;

    let dezenaApresentado;

    let unidadeApresentado;
    
    if (milhar === 1 && centena === 0 && dezena === 0 && unidade === 0){
        milharApresentado = "Mil";
    }

    if (milhar === 2 && centena === 0 && dezena === 0 && unidade === 0){
        milharApresentado = "Dois mil";
    }

    alert("Ano " + milharApresentado + centenaApresentado + dezenaApresentado + unidadeApresentado);
}
//exercício 17


//exercício 18

function apresentarHoraExtenso() {
    let hora = prompt("Digite a hora em que você nasceu no formato XX:XX:XX.");

}
//exercício 18

