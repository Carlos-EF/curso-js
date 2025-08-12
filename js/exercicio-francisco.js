//exercício 7

function apresentarDadosNumero() {
    let numero = parseInt(prompt("Digite um número."));
}

//exercício 7

//exercício 9

function verificarQuadrado() {
    let lado1 = parseInt(prompt("Digite um número."));

    let lado2 = parseInt(prompt("Digite um outro número."));

    let lado3 = parseInt(prompt("Digite mais um número."));

    let lado4 = parseInt(prompt("Digite um último número."));

    if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
        alert("Pode ser um quadrado.")
    } else {
        alert("Não pode ser um quadrado.");
    }
};

//exercício 9

//exercício 10

function verificarRetangulo() {
    let lado1 = parseInt(prompt("Digite um número."));

    let lado2 = parseInt(prompt("Digite um outro número."));

    let lado3 = parseInt(prompt("Digite mais um número."));

    let lado4 = parseInt(prompt("Digite um último número."));

    if (lado1 === lado2 && lado3 === lado4 && lado1 !== lado3 || lado1 === lado3 && lado2 === lado4 && lado1 !== lado2 || lado1 === lado4 && lado2 === lado3 && lado1 !== lado3) {
        alert("Pode ser um retângulo.");
    } else {
        alert("Não pode ser um retângulo.");
    }
};

//exercício 10

//exercício 14

function apresentarOrdemCrescente() {
    let numero1 = parseInt(prompt("Digite um número."));

    let numero2 = parseInt(prompt("Digite um outro número."));

    let numero3 = parseInt(prompt("Digite mais um número."));

    const ordem = [numero1, numero2, numero3];
    ordem.sort(function (a, b) {
        return a - b;
    });

    alert("Em ordem crescente: " + ordem);
}

//exercício 14

//exercício 17

function apresentarAnoExtenso() {
    let ano = parseInt(prompt("Digite seu ano de nascimento."));

    if (ano = 1990) {
        alert("Mil novecentos e noventa.");
    } else if (ano = 1991) {
        alert("Mil novecentos e noventa e um");
    } else if (ano = 1992) {
        alert("Mil novecentos e noventa e dois");
    } else if (ano = 1993) {
        alert("Mil novecentos e noventa e três");
    } else if (ano = 1994) {
        alert("Mil novecentos e noventa e quatro");
    } else if (ano = 1995) {
        alert("Mil novecentos e noventa e cinco");
    } else if (ano = 1996) {
        alert("Mil novecentos e noventa e seis");
    } else if (ano = 1997) {
        alert("Mil novecentos e noventa e sete");
    } else if (ano = 1998) {
        alert("Mil novecentos e noventa e oito");
    } else if (ano = 1999) {
        alert("Mil novecentos e noventa e nove");
    } else if (ano = 2000) {
        alert("Dois mil");
    } else if (ano = 2001) {
        alert("Dois mil e um");
    } else if (ano = 2002) {
        alert("Dois mil e dois");
    } else if (ano = 2003) {
        alert("Dois mil e três");
    } else if (ano = 2004) {
        alert("Dois mil e quatro");
    } else if (ano = 2005) {
        alert("Dois mil e cinco");
    } else if (ano = 2006) {
        alert("Dois mil e seis");
    }
}
//exercício 17


//exercício 18

function apresentarHoraExtenso() {
    let hora = prompt("Digite a hora em que você nasceu no formato XX:XX:XX.");

}
//exercício 18

