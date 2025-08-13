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

    if (numero < 50) {
        menorIgual50 = "Menor que 50";
    } else if (numero === 50) {
        menorIgual50 = "Igual a 50";
    } else {
        menorIgual50 = "Maior que 50";
    }

    if (numero < -10) {
        menor10Negativo = "Menor do que -10";
    } else if (numero > -10) {
        menor10Negativo = "Maior que -10";
    } else {
        menor10Negativo = "Igual a -10";
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
    let ano = (prompt("Digite seu ano de nascimento no formato.").trim());

    let partes = ano.split('');

    let milhar = parseInt(partes[0]);

    let centena = parseInt(partes[1]);

    let dezena = parseInt(partes[2]);

    let unidade = parseInt(partes[3]);

    let milharApresentado;

    let centenaApresentado;

    let dezenaApresentado;

    let unidadeApresentado;

    if (milhar === 1 && centena === 0 && dezena === 0 && unidade === 0) {
        milharApresentado = "Mil";
    }

    if (milhar === 2 && centena === 0 && dezena === 0 && unidade === 0) {
        milharApresentado = "Dois mil";
    }

    if (milhar === 1) {
        milharApresentado = "Mil";
    } else if (milhar === 2) {
        milharApresentado = "Dois mil";
    }


    if (centena === 0) {
        centenaApresentado = "";
    } else if (centena === 1 && dezena === 0 && unidade === 0) {
        centenaApresentado = " e cem";
    } else if (centena === 2 && dezena === 0 && unidade === 0) {
        centenaApresentado = " e duzentos";
    } else if (centena === 3 && dezena === 0 && unidade === 0) {
        centenaApresentado = " e trezentos";
    } else if (centena === 4 && dezena === 0 && unidade === 0) {
        centenaApresentado = " e quatrocentos";
    } else if (centena === 5 && dezena === 0 && unidade === 0) {
        centenaApresentado = " e quinhentos";
    } else if (centena === 6 && dezena === 0 && unidade === 0) {
        centenaApresentado = " e seiscentos";
    } else if (centena === 7 && dezena === 0 && unidade === 0) {
        centenaApresentado = " e setecentos";
    } else if (centena === 8 && dezena === 0 && unidade === 0) {
        centenaApresentado = " e oitocentos";
    } else if (centena === 9 && dezena === 0 && unidade === 0) {
        centenaApresentado = " e novecentos";
    } else if (centena === 1) {
        centenaApresentado = " cento";
    } else if (centena === 2) {
        centenaApresentado = " duzentos";
    } else if (centena === 3) {
        centenaApresentado = " trezentos";
    } else if (centena === 4) {
        centenaApresentado = " quatrocentos";
    } else if (centena === 5) {
        centenaApresentado = " quinhentos";
    } else if (centena === 6) {
        centenaApresentado = " seiscentos";
    } else if (centena === 7) {
        centenaApresentado = " setecentos";
    } else if (centena === 8) {
        centenaApresentado = " oitocentos";
    } else if (centena === 9) {
        centenaApresentado = " novecentos";
    }

    if (dezena === 0) {
        dezenaApresentado = "";
    } else if (dezena === 1 && unidade === 0) {
        dezenaApresentado = " e dez";
    } else if (dezena === 1 && unidade === 1) {
        dezenaApresentado = " e onze";
    } else if (dezena === 1 && unidade === 2) {
        dezenaApresentado = " e doze";
    } else if (dezena === 1 && unidade === 3) {
        dezenaApresentado = " e treze";
    } else if (dezena === 1 && unidade === 4) {
        dezenaApresentado = " e quatorze";
    } else if (dezena === 1 && unidade === 5) {
        dezenaApresentado = " e quinze";
    } else if (dezena === 1 && unidade === 6) {
        dezenaApresentado = " e dezesseis";
    } else if (dezena === 1 && unidade === 7) {
        dezenaApresentado = " e dezessete";
    } else if (dezena === 1 && unidade === 8) {
        dezenaApresentado = " e dezoito";
    } else if (dezena === 1 && unidade === 9) {
        dezenaApresentado = " e dezenove";
    } else if (dezena === 2) {
        dezenaApresentado = " e vinte";
    } else if (dezena === 3) {
        dezenaApresentado = " e trinta";
    } else if (dezena === 4) {
        dezenaApresentado = " e quarenta";
    } else if (dezena === 5) {
        dezenaApresentado = " e cinquenta";
    } else if (dezena === 6) {
        dezenaApresentado = " e sessenta";
    } else if (dezena === 7) {
        dezenaApresentado = " e setenta";
    } else if (dezena === 8) {
        dezenaApresentado = " e oitenta";
    } else if (dezena === 9) {
        dezenaApresentado = " e noventa";
    }

    if (unidade === 0) {
        unidadeApresentado = "";
    } else if (unidade === 1 && dezena === 0) {
        unidadeApresentado = " e um";
    } else if (unidade === 2 && dezena === 0) {
        unidadeApresentado = " e dois";
    } else if (unidade === 3 && dezena === 0) {
        unidadeApresentado = " e três";
    } else if (unidade === 4 && dezena === 0) {
        unidadeApresentado = " e quatro";
    } else if (unidade === 5 && dezena === 0) {
        unidadeApresentado = " e cinco";
    } else if (unidade === 6 && dezena === 0) {
        unidadeApresentado = " e seis";
    } else if (unidade === 7 && dezena === 0) {
        unidadeApresentado = " e sete";
    } else if (unidade === 8 && dezena === 0) {
        unidadeApresentado = " e oito";
    } else if (unidade === 9 && dezena === 0) {
        unidadeApresentado = " e nove";
    } else if (unidade === 1) {
        unidadeApresentado = " e um";
    } else if (unidade === 2) {
        unidadeApresentado = " e dois";
    } else if (unidade === 3) {
        unidadeApresentado = " e três";
    } else if (unidade === 4) {
        unidadeApresentado = " e quatro";
    } else if (unidade === 5) {
        unidadeApresentado = " e cinco";
    } else if (unidade === 6) {
        unidadeApresentado = " e seis";
    } else if (unidade === 7) {
        unidadeApresentado = " e sete";
    } else if (unidade === 8) {
        unidadeApresentado = " e oito";
    } else if (unidade === 9) {
        unidadeApresentado = " e nove";
    }

    alert("Ano: " + milharApresentado + centenaApresentado + dezenaApresentado + unidadeApresentado + ".");
}

//exercício 17


//exercício 18

function apresentarHoraExtenso() {
    let hora = prompt("Digite a hora em que você nasceu no formato XX:XX:XX.").replaceAll(";", ":").trim();

    let partes = hora.split(":");

    let horas = parseInt(partes[0].padStart(2, 0));

    let minutos = parseInt(partes[1].padStart(2, 0));

    let segundos = parseInt(partes[2].padStart(2, 0));

    let horasApresentado;

    let minutosApresentado;

    let segundosApresentado;

    if (hora === 0) {
        horasApresentado = "";
    } else if (horas === 0 && minutos === 0 && segundos === 0) {
        horasApresentado = "Meia-noite";
    } else if (horas === 1 && minutos === 0 && segundos === 0) {
        horasApresentado = "Uma hora da manhã";
    } else if (horas === 2 && minutos === 0 && segundos === 0) {
        horasApresentado = "Duas horas da manhã";
    } else if (horas === 3 && minutos === 0 && segundos === 0) {
        horasApresentado = "Três horas da manhã";
    } else if (horas === 4 && minutos === 0 && segundos === 0) {
        horasApresentado = "Quatro horas da manhã";
    } else if (horas === 5 && minutos === 0 && segundos === 0) {
        horasApresentado = "Cinco horas da manhã";
    } else if (horas === 6 && minutos === 0 && segundos === 0) {
        horasApresentado = "Seis horas da manhã";
    } else if (horas === 7 && minutos === 0 && segundos === 0) {
        horasApresentado = "Sete horas da manhã";
    } else if (horas === 8 && minutos === 0 && segundos === 0) {
        horasApresentado = "Oito horas da manhã";
    } else if (horas === 9 && minutos === 0 && segundos === 0) {
        horasApresentado = "Nove horas da manhã";
    } else if (horas === 10 && minutos === 0 && segundos === 0) {
        horasApresentado = "Dez horas da manhã";
    } else if (horas === 11 && minutos === 0 && segundos === 0) {
        horasApresentado = "Onze horas da manhã";
    } else if (horas === 0 && minutos === 0 && segundos === 0) {
        horasApresentado = "Meia-noite";
    } else if (horas === 1 && minutos === 0) {
        horasApresentado = "Uma hora da manhã";
    } else if (horas === 2 && minutos === 0) {
        horasApresentado = "Duas horas da manhã";
    } else if (horas === 3 && minutos === 0) {
        horasApresentado = "Três horas da manhã";
    } else if (horas === 4 && minutos === 0) {
        horasApresentado = "Quatro horas da manhã";
    } else if (horas === 5 && minutos === 0) {
        horasApresentado = "Cinco horas da manhã";
    } else if (horas === 6 && minutos === 0) {
        horasApresentado = "Seis horas da manhã";
    } else if (horas === 7 && minutos === 0) {
        horasApresentado = "Sete horas da manhã";
    } else if (horas === 8 && minutos === 0) {
        horasApresentado = "Oito horas da manhã";
    } else if (horas === 9 && minutos === 0) {
        horasApresentado = "Nove horas da manhã";
    } else if (horas === 10 && minutos === 0) {
        horasApresentado = "Dez horas da manhã";
    } else if (horas === 11 && minutos === 0) {
        horasApresentado = "Onze horas da manhã";
    } else if (horas === 12 && minutos === 0) {
        horasApresentado = "Meio-dia";
    } else if (horas === 13 && minutos === 0) {
        horasApresentado = "Treze horas";
    } else if (horas === 14 && minutos === 0) {
        horasApresentado = "Quatorze horas";
    } else if (horas === 15 && minutos === 0) {
        horasApresentado = "Quinze horas";
    } else if (horas === 16 && minutos === 0) {
        horasApresentado = "Dezesseis horas";
    } else if (horas === 17 && minutos === 0) {
        horasApresentado = "Dezessete horas";
    } else if (horas === 18 && minutos === 0) {
        horasApresentado = "Dezoito horas";
    } else if (horas === 19 && minutos === 0) {
        horasApresentado = "Dezenove horas";
    } else if (horas === 20 && minutos === 0) {
        horasApresentado = "Vinte horas";
    } else if (horas === 21 && minutos === 0) {
        horasApresentado = "Vinte e uma horas";
    } else if (horas === 22 && minutos === 0) {
        horasApresentado = "Vinte e duas horas";
    } else if (horas === 23 && minutos === 0) {
        horasApresentado = "Vinte e três horas";
    } else if (horas === 0 && minutos === 0) {
        horasApresentado = "Meia-noite";
    } else if (horas === 1 && segundos === 0) {
        horasApresentado = "Uma hora da manhã";
    } else if (horas === 2 && segundos === 0) {
        horasApresentado = "Duas horas da manhã";
    } else if (horas === 3 && segundos === 0) {
        horasApresentado = "Três horas da manhã";
    } else if (horas === 4 && segundos === 0) {
        horasApresentado = "Quatro horas da manhã";
    } else if (horas === 5 && segundos === 0) {
        horasApresentado = "Cinco horas da manhã";
    } else if (horas === 6 && segundos === 0) {
        horasApresentado = "Seis horas da manhã";
    } else if (horas === 7 && segundos === 0) {
        horasApresentado = "Sete horas da manhã";
    } else if (horas === 8 && segundos === 0) {
        horasApresentado = "Oito horas da manhã";
    } else if (horas === 9 && segundos === 0) {
        horasApresentado = "Nove horas da manhã";
    } else if (horas === 10 && segundos === 0) {
        horasApresentado = "Dez horas da manhã";
    } else if (horas === 11 && segundos === 0) {
        horasApresentado = "Onze horas da manhã";
    } else if (horas === 12 && segundos === 0) {
        horasApresentado = "Meio-dia";
    } else if (horas === 13 && segundos === 0) {
        horasApresentado = "Treze horas";
    } else if (horas === 14 && segundos === 0) {
        horasApresentado = "Quatorze horas";
    } else if (horas === 15 && segundos === 0) {
        horasApresentado = "Quinze horas";
    } else if (horas === 16 && segundos === 0) {
        horasApresentado = "Dezesseis horas";
    } else if (horas === 17 && segundos === 0) {
        horasApresentado = "Dezessete horas";
    } else if (horas === 18 && segundos === 0) {
        horasApresentado = "Dezoito horas";
    } else if (horas === 19 && segundos === 0) {
        horasApresentado = "Dezenove horas";
    } else if (horas === 20 && segundos === 0) {
        horasApresentado = "Vinte horas";
    } else if (horas === 21 && segundos === 0) {
        horasApresentado = "Vinte e uma horas";
    } else if (horas === 22 && segundos === 0) {
        horasApresentado = "Vinte e duas horas";
    } else if (horas === 23 && segundos === 0) {
        horasApresentado = "Vinte e três horas";
    } else if (horas === 0 && segundos === 0) {
        horasApresentado = "Meia-noite";
    } else if (horas === 1) {
        horasApresentado = "Uma hora da manhã,";
    } else if (horas === 2) {
        horasApresentado = "Duas horas da manhã,";
    } else if (horas === 3) {
        horasApresentado = "Três horas da manhã,";
    } else if (horas === 4) {
        horasApresentado = "Quatro horas da manhã,";
    } else if (horas === 5) {
        horasApresentado = "Cinco horas da manhã,";
    } else if (horas === 6) {
        horasApresentado = "Seis horas da manhã,";
    } else if (horas === 7) {
        horasApresentado = "Sete horas da manhã,";
    } else if (horas === 8) {
        horasApresentado = "Oito horas da manhã,";
    } else if (horas === 9) {
        horasApresentado = "Nove horas da manhã,";
    } else if (horas === 10) {
        horasApresentado = "Dez horas da manhã,";
    } else if (horas === 11) {
        horasApresentado = "Onze horas da manhã,";
    } else if (horas === 12) {
        horasApresentado = "Meio-dia,";
    } else if (horas === 13) {
        horasApresentado = "Treze horas,";
    } else if (horas === 14) {
        horasApresentado = "Quatorze horas,";
    } else if (horas === 15) {
        horasApresentado = "Quinze horas,";
    } else if (horas === 16) {
        horasApresentado = "Dezesseis horas,";
    } else if (horas === 17) {
        horasApresentado = "Dezessete horas,";
    } else if (horas === 18) {
        horasApresentado = "Dezoito horas,";
    } else if (horas === 19) {
        horasApresentado = "Dezenove horas,";
    } else if (horas === 20) {
        horasApresentado = "Vinte horas,";
    } else if (horas === 21) {
        horasApresentado = "Vinte e uma horas,";
    } else if (horas === 22) {
        horasApresentado = "Vinte e duas horas,";
    } else if (horas === 23) {
        horasApresentado = "Vinte e três horas,";
    } else if (horas === 0) {
        horasApresentado = "Meia-noite,";
    } 

    if (minutos === 0) {
        minutosApresentado = "";
    } else if (minutos === 1 && segundos === 0) {
        minutosApresentado = " e um minuto";
    } else if (minutos === 2 && segundos === 0) {
        minutosApresentado = " e dois minutos";
    } else if (minutos === 3 && segundos === 0) {
        minutosApresentado = " e três minutos";
    } else if (minutos === 4 && segundos === 0) {
        minutosApresentado = " e quatro minutos";
    } else if (minutos === 5 && segundos === 0) {
        minutosApresentado = " e cinco minutos";
    } else if (minutos === 6 && segundos === 0) {
        minutosApresentado = " e seis minutos";
    } else if (minutos === 7 && segundos === 0) {
        minutosApresentado = " e sete minutos";
    } else if (minutos === 8 && segundos === 0) {
        minutosApresentado = " e oito minutos";
    } else if (minutos === 9 && segundos === 0) {
        minutosApresentado = " e nove minutos";
    } else if (minutos === 10 && segundos === 0) {
        minutosApresentado = " e dez minutos";
    } else if (minutos === 11 && segundos === 0) {
        minutosApresentado = " e onze minutos";
    } else if (minutos === 12 && segundos === 0) {
        minutosApresentado = " e doze minutos";
    } else if (minutos === 13 && segundos === 0) {
        minutosApresentado = " e treze minutos";
    } else if (minutos === 14 && segundos === 0) {
        minutosApresentado = " e quatorze minutos";
    } else if (minutos === 15 && segundos === 0) {
        minutosApresentado = " e quinze minutos";
    } else if (minutos === 16 && segundos === 0) {
        minutosApresentado = " e dezesseis minutos";
    } else if (minutos === 17 && segundos === 0) {
        minutosApresentado = " e dezessete minutos";
    } else if (minutos === 18 && segundos === 0) {
        minutosApresentado = " e dezoito minutos";
    } else if (minutos === 19 && segundos === 0) {
        minutosApresentado = " e dezenove minutos";
    } else if (minutos === 20 && segundos === 0) {
        minutosApresentado = " e vinte minutos";
    } else if (minutos === 21 && segundos === 0) {
        minutosApresentado = " e vinte e um minutos";
    } else if (minutos === 22 && segundos === 0) {
        minutosApresentado = " e vinte e dois minutos";
    } else if (minutos === 23 && segundos === 0) {
        minutosApresentado = " e vinte e três minutos";
    } else if (minutos === 24 && segundos === 0) {
        minutosApresentado = " e vinte e quatro minutos";
    } else if (minutos === 25 && segundos === 0) {
        minutosApresentado = " e vinte e cinco minutos";
    } else if (minutos === 26 && segundos === 0) {
        minutosApresentado = " e vinte e seis minutos";
    } else if (minutos === 27 && segundos === 0) {
        minutosApresentado = " e vinte e sete minutos";
    } else if (minutos === 28 && segundos === 0) {
        minutosApresentado = " e vinte e oito minutos";
    } else if (minutos === 29 && segundos === 0) {
        minutosApresentado = " e vinte e nove minutos";
    } else if (minutos === 30 && segundos === 0) {
        minutosApresentado = " e trinta minutos";
    } else if (minutos === 31 && segundos === 0) {
        minutosApresentado = " e trinta e um minutos";
    } else if (minutos === 32 && segundos === 0) {
        minutosApresentado = " e trinta e dois minutos";
    } else if (minutos === 33 && segundos === 0) {
        minutosApresentado = " e trinta e três minutos";
    } else if (minutos === 34 && segundos === 0) {
        minutosApresentado = " e trinta e quatro minutos";
    } else if (minutos === 35 && segundos === 0) {
        minutosApresentado = " e trinta e cinco minutos";
    } else if (minutos === 36 && segundos === 0) {
        minutosApresentado = " e trinta e seis minutos";
    } else if (minutos === 37 && segundos === 0) {
        minutosApresentado = " e trinta e sete minutos";
    } else if (minutos === 38 && segundos === 0) {
        minutosApresentado = " e trinta e oito minutos";
    } else if (minutos === 39 && segundos === 0) {
        minutosApresentado = " e trinta e nove minutos";
    } else if (minutos === 40 && segundos === 0) {
        minutosApresentado = " e quarenta minutos";
    } else if (minutos === 41 && segundos === 0) {
        minutosApresentado = " e quarenta e um minutos";
    } else if (minutos === 42 && segundos === 0) {
        minutosApresentado = " e quarenta e dois minutos";
    } else if (minutos === 43 && segundos === 0) {
        minutosApresentado = " e quarenta e três minutos";
    } else if (minutos === 44 && segundos === 0) {
        minutosApresentado = " e quarenta e quatro minutos";
    } else if (minutos === 45 && segundos === 0) {
        minutosApresentado = " e quarenta e cinco minutos";
    } else if (minutos === 46 && segundos === 0) {
        minutosApresentado = " e quarenta e seis minutos";
    } else if (minutos === 47 && segundos === 0) {
        minutosApresentado = " e quarenta e sete minutos";
    } else if (minutos === 48 && segundos === 0) {
        minutosApresentado = " e quarenta e oito minutos";
    } else if (minutos === 49 && segundos === 0) {
        minutosApresentado = " e quarenta e nove minutos";
    } else if (minutos === 50 && segundos === 0) {
        minutosApresentado = " e cinquenta minutos";
    } else if (minutos === 51 && segundos === 0) {
        minutosApresentado = " e cinquenta e um minutos";
    } else if (minutos === 52 && segundos === 0) {
        minutosApresentado = " e cinquenta e dois minutos";
    } else if (minutos === 53 && segundos === 0) {
        minutosApresentado = " e cinquenta e três minutos";
    } else if (minutos === 54 && segundos === 0) {
        minutosApresentado = " e cinquenta e quatro minutos";
    } else if (minutos === 55 && segundos === 0) {
        minutosApresentado = " e cinquenta e cinco minutos";
    } else if (minutos === 56 && segundos === 0) {
        minutosApresentado = " e cinquenta e seis minutos";
    } else if (minutos === 57 && segundos === 0) {
        minutosApresentado = " e cinquenta e sete minutos";
    } else if (minutos === 58 && segundos === 0) {
        minutosApresentado = " e cinquenta e oito minutos";
    } else if (minutos === 59 && segundos === 0) {
        minutosApresentado = " e cinquenta e nove minutos";
    } else if (minutos === 1) {
        minutosApresentado = " um minuto";
    } else if (minutos === 2) {
        minutosApresentado = " dois minutos";
    } else if (minutos === 3) {
        minutosApresentado = " três minutos";
    } else if (minutos === 4) {
        minutosApresentado = " quatro minutos";
    } else if (minutos === 5) {
        minutosApresentado = " cinco minutos";
    } else if (minutos === 6) {
        minutosApresentado = " seis minutos";
    } else if (minutos === 7) {
        minutosApresentado = " sete minutos";
    } else if (minutos === 8) {
        minutosApresentado = " oito minutos";
    } else if (minutos === 9) {
        minutosApresentado = " nove minutos";
    } else if (minutos === 10) {
        minutosApresentado = " dez minutos";
    } else if (minutos === 11) {
        minutosApresentado = " onze minutos";
    } else if (minutos === 12) {
        minutosApresentado = " doze minutos";
    } else if (minutos === 13) {
        minutosApresentado = " treze minutos";
    } else if (minutos === 14) {
        minutosApresentado = " quatorze minutos";
    } else if (minutos === 15) {
        minutosApresentado = " quinze minutos";
    } else if (minutos === 16) {
        minutosApresentado = " dezesseis minutos";
    } else if (minutos === 17) {
        minutosApresentado = " dezessete minutos";
    } else if (minutos === 18) {
        minutosApresentado = " dezoito minutos";
    } else if (minutos === 19) {
        minutosApresentado = " dezenove minutos";
    } else if (minutos === 20) {
        minutosApresentado = " vinte minutos";
    } else if (minutos === 21) {
        minutosApresentado = " vinte e um minutos";
    } else if (minutos === 22) {
        minutosApresentado = " vinte e dois minutos";
    } else if (minutos === 23) {
        minutosApresentado = " vinte e três minutos";
    } else if (minutos === 24) {
        minutosApresentado = " vinte e quatro minutos";
    } else if (minutos === 25) {
        minutosApresentado = " vinte e cinco minutos";
    } else if (minutos === 26) {
        minutosApresentado = " vinte e seis minutos";
    } else if (minutos === 27) {
        minutosApresentado = " vinte e sete minutos";
    } else if (minutos === 28) {
        minutosApresentado = " vinte e oito minutos";
    } else if (minutos === 29) {
        minutosApresentado = " vinte e nove minutos";
    } else if (minutos === 30) {
        minutosApresentado = " trinta minutos";
    } else if (minutos === 31) {
        minutosApresentado = " trinta e um minutos";
    } else if (minutos === 32) {
        minutosApresentado = " trinta e dois minutos";
    } else if (minutos === 33) {
        minutosApresentado = " trinta e três minutos";
    } else if (minutos === 34) {
        minutosApresentado = " trinta e quatro minutos";
    } else if (minutos === 35) {
        minutosApresentado = " trinta e cinco minutos";
    } else if (minutos === 36) {
        minutosApresentado = " trinta e seis minutos";
    } else if (minutos === 37) {
        minutosApresentado = " trinta e sete minutos";
    } else if (minutos === 38) {
        minutosApresentado = " trinta e oito minutos";
    } else if (minutos === 39) {
        minutosApresentado = " trinta e nove minutos";
    } else if (minutos === 40) {
        minutosApresentado = " quarenta minutos";
    } else if (minutos === 41) {
        minutosApresentado = " quarenta e um minutos";
    } else if (minutos === 42) {
        minutosApresentado = " quarenta e dois minutos";
    } else if (minutos === 43) {
        minutosApresentado = " quarenta e três minutos";
    } else if (minutos === 44) {
        minutosApresentado = " quarenta e quatro minutos";
    } else if (minutos === 45) {
        minutosApresentado = " quarenta e cinco minutos";
    } else if (minutos === 46) {
        minutosApresentado = " quarenta e seis minutos";
    } else if (minutos === 47) {
        minutosApresentado = " quarenta e sete minutos";
    } else if (minutos === 48) {
        minutosApresentado = " quarenta e oito minutos";
    } else if (minutos === 49) {
        minutosApresentado = " quarenta e nove minutos";
    } else if (minutos === 50) {
        minutosApresentado = " cinquenta minutos";
    } else if (minutos === 51) {
        minutosApresentado = " cinquenta e um minutos";
    } else if (minutos === 52) {
        minutosApresentado = " cinquenta e dois minutos";
    } else if (minutos === 53) {
        minutosApresentado = " cinquenta e três minutos";
    } else if (minutos === 54) {
        minutosApresentado = " cinquenta e quatro minutos";
    } else if (minutos === 55) {
        minutosApresentado = " cinquenta e cinco minutos";
    } else if (minutos === 56) {
        minutosApresentado = " cinquenta e seis minutos";
    } else if (minutos === 57) {
        minutosApresentado = " cinquenta e sete minutos";
    } else if (minutos === 58) {
        minutosApresentado = " cinquenta e oito minutos";
    } else if (minutos === 59) {
        minutosApresentado = " cinquenta e nove minutos";
    }

    if (segundos === 0) {
        segundosApresentado = "";
    } else if (segundos === 1) {
        segundosApresentado = " e um segundo";
    } else if (segundos === 2) {
        segundosApresentado = " e dois segundos";
    } else if (segundos === 3) {
        segundosApresentado = " e três segundos";
    } else if (segundos === 4) {
        segundosApresentado = " e quatro segundos";
    } else if (segundos === 5) {
        segundosApresentado = " e cinco segundos";
    } else if (segundos === 6) {
        segundosApresentado = " e seis segundos";
    } else if (segundos === 7) {
        segundosApresentado = " e sete segundos";
    } else if (segundos === 8) {
        segundosApresentado = " e oito segundos";
    } else if (segundos === 9) {
        segundosApresentado = " e nove segundos";
    } else if (segundos === 10) {
        segundosApresentado = " e dez segundos";
    } else if (segundos === 11) {
        segundosApresentado = " e onze segundos";
    } else if (segundos === 12) {
        segundosApresentado = " e doze segundos";
    } else if (segundos === 13) {
        segundosApresentado = " e treze segundos";
    } else if (segundos === 14) {
        segundosApresentado = " e quatorze segundos";
    } else if (segundos === 15) {
        segundosApresentado = " e quinze segundos";
    } else if (segundos === 16) {
        segundosApresentado = " e dezesseis segundos";
    } else if (segundos === 17) {
        segundosApresentado = " e dezessete segundos";
    } else if (segundos === 18) {
        segundosApresentado = " e dezoito segundos";
    } else if (segundos === 19) {
        segundosApresentado = " e dezenove segundos";
    } else if (segundos === 20) {
        segundosApresentado = " e vinte segundos";
    } else if (segundos === 21) {
        segundosApresentado = " e vinte e um segundos";
    } else if (segundos === 22) {
        segundosApresentado = " e vinte e dois segundos";
    } else if (segundos === 23) {
        segundosApresentado = " e vinte e três segundos";
    } else if (segundos === 24) {
        segundosApresentado = " e vinte e quatro segundos";
    } else if (segundos === 25) {
        segundosApresentado = " e vinte e cinco segundos";
    } else if (segundos === 26) {
        segundosApresentado = " e vinte e seis segundos";
    } else if (segundos === 27) {
        segundosApresentado = " e vinte e sete segundos";
    } else if (segundos === 28) {
        segundosApresentado = " e vinte e oito segundos";
    } else if (segundos === 29) {
        segundosApresentado = " e vinte e nove segundos";
    } else if (segundos === 30) {
        segundosApresentado = " e trinta segundos";
    } else if (segundos === 31) {
        segundosApresentado = " e trinta e um segundos";
    } else if (segundos === 32) {
        segundosApresentado = " e trinta e dois segundos";
    } else if (segundos === 33) {
        segundosApresentado = " e trinta e três segundos";
    } else if (segundos === 34) {
        segundosApresentado = " e trinta e quatro segundos";
    } else if (segundos === 35) {
        segundosApresentado = " e trinta e cinco segundos";
    } else if (segundos === 36) {
        segundosApresentado = " e trinta e seis segundos";
    } else if (segundos === 37) {
        segundosApresentado = " e trinta e sete segundos";
    } else if (segundos === 38) {
        segundosApresentado = " e trinta e oito segundos";
    } else if (segundos === 39) {
        segundosApresentado = " e trinta e nove segundos";
    } else if (segundos === 40) {
        segundosApresentado = " e quarenta segundos";
    } else if (segundos === 41) {
        segundosApresentado = " e quarenta e um segundos";
    } else if (segundos === 42) {
        segundosApresentado = " e quarenta e dois segundos";
    } else if (segundos === 43) {
        segundosApresentado = " e quarenta e três segundos";
    } else if (segundos === 44) {
        segundosApresentado = " e quarenta e quatro segundos";
    } else if (segundos === 45) {
        segundosApresentado = " e quarenta e cinco segundos";
    } else if (segundos === 46) {
        segundosApresentado = " e quarenta e seis segundos";
    } else if (segundos === 47) {
        segundosApresentado = " e quarenta e sete segundos";
    } else if (segundos === 48) {
        segundosApresentado = " e quarenta e oito segundos";
    } else if (segundos === 49) {
        segundosApresentado = " e quarenta e nove segundos";
    } else if (segundos === 50) {
        segundosApresentado = " e cinquenta segundos";
    } else if (segundos === 51) {
        segundosApresentado = " e cinquenta e um segundos";
    } else if (segundos === 52) {
        segundosApresentado = " e cinquenta e dois segundos";
    } else if (segundos === 53) {
        segundosApresentado = " e cinquenta e três segundos";
    } else if (segundos === 54) {
        segundosApresentado = " e cinquenta e quatro segundos";
    } else if (segundos === 55) {
        segundosApresentado = " e cinquenta e cinco segundos";
    } else if (segundos === 56) {
        segundosApresentado = " e cinquenta e seis segundos";
    } else if (segundos === 57) {
        segundosApresentado = " e cinquenta e sete segundos";
    } else if (segundos === 58) {
        segundosApresentado = " e cinquenta e oito segundos";
    } else if (segundos === 59) {
        segundosApresentado = " e cinquenta e nove segundos";
    }

    alert("Horas: " + horasApresentado + minutosApresentado + segundosApresentado + ".");
}
//exercício 18

