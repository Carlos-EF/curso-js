function exemploCarro() {
    let placa = "ACB-1201"; // String
    let anoModelo = 2026; // int
    let anoFabricacao = 2025; // int
    let modelo = "BYD Song Plus Premium"; // string
    let preco = 299800.00; // float
    let compraRealizada = true; // boolean: false(falso) / true(verdadeiro)
    alert("Placa: " + placa);
    console.log("Ano Modelo: " + anoModelo);
}

function exemploIfComparacaoIgualdade() {
    const tarefa = prompt("Digite a tarefa realizada");

    if (tarefa.toLowerCase() === "lavar louça") {
        alert("Posso jogar Fifa");
    } else {
        alert("Não posso jogar");
    }
}

function exemploCompararMenor() {
    let idade = parseInt(prompt("Digite a sua idade"));
    if (idade < 18) {
        alert("Menor de 18 anos");
    } else {
        alert("Maior ou Igual a 18 anos");
    }
}

function exemploCompararMaior() {
    let saldo = 2000.90;
    alert("Saldo atual: " + saldo);

    let valorSaque = parseFloat(prompt("Digite o valor do saque"));

    if (valorSaque > saldo) {
        alert("Saldo insuficiente");
    } else {
        saldo = saldo - valorSaque;
        alert("Saldo atual: " + saldo);
    }
}

function exemploOperadorLogicoE() {
    const login = prompt("Digite o login");
    const senha = prompt("Digite a senha");
    // root e admin V e V (caí no if)
    // root e asodkaoskdasd V e F (caí no else)
    // superman e admin F e V (caí no else)
    // superman e batman F e F (caí no else)

    if (login === "root" && senha === "admin") {
        window.location.href = "https://google.com";
    } else {
        alert("Login e/ou Senha inválidos");
    }
}

function exemploOperadorLogicoOu() {
    const nome = prompt("Digite o nome do bonequinho").trim();
    /*
        V ou V => V 
        V ou F => V Ja
        F ou V => V Boneco Super Tubro Vemelho do Power Ranger Azul Com Robocop Vestido de Narutinho
        F ou F => F
    */
    if (nome.length < 3 || nome.length > 50) {
        alert("Nome deve conter no mínimo 3 caracteres e no máximo 50");
        exemploOperadorLogicoOu(); // Repetir a solicitação do nome
    } else {
        alert("Nome válido: '" + nome + "'");
    }
}

function exemploNumeroPar() {
    let numero = parseInt(prompt("Digite um número"));
    // se o número divido por 2 onde o resto é zero ele é um número par
    if (numero % 2 === 0) {
        alert("Número par");
    } else {
        alert("Não é par");
    }
}

function exemploNumeroImpar() {
    let numero = parseInt(prompt("Digite um número"));
    if (numero % 2 !== 0) {
        alert("Ímpar");
    } else {
        alert("N é um número ímpar");
    }
}

function verificarEstoque() {
    let quantidadeEstoque = parseInt(prompt("Digite a quantidade de estoque"));

    if (quantidadeEstoque >= 1) {
        alert("Saldo positivo");
    } else if (quantidadeEstoque <= -1) {
        alert("Saldo negativo");
    } else {
        alert("Saldo zerado");
    }
}

function obterPDL() {
    let pdl = parseInt(prompt("Digite o pdl"));

    let elo = "";

    if (pdl <= 0) {
        elo = "Unranked";
    } else if (pdl > 0 && pdl <= 99) {
        elo = "Bronze";
    } else if (pdl >= 100 && pdl <= 199) {
        elo = "Prata";
    } else if (pdl >= 200 && pdl <= 299) {
        elo = "Ouro";
    } else {
        elo = "Limite máximo atigindo";
    }

    alert("Elo: " + elo);
}

function descobrirGeneroMusical() {
    let artista = prompt("Digite o Artista").toLowerCase();

    if (artista === "michael jackson" || artista === "justin bieber") {
        genero = "Pop";
    } else if (artista === "eminem" || artista === "50 cent" || artista === "kendrick lamar") {
        genero = "Rap";
    } else {
        genero = "Gênero desconhecido";
    }

    alert("Gênero: " + genero)
}

/*
    Tabela Operadores Relacionais
    Igualdade           ===
    Diferente           !==
    Menor               <
    Menor ou Igual      <=
    Maior               >
    Maior ou Igual      >=

    Tabela Operadores Lógicos
    E           &&
    OU          ||

    Tabela Verdade E
    Lavar Louça e Limpar Banheiro
    V e V => V
    V e F => F
    F e V => F
    F e F => F

    Tabela Verdade OU
    Lavar Louça ou Limpar Banheiro
    V ou V => V
    V ou F => V
    F ou V => V
    F ou F => F
*/



// String
// Int
// float
// boolean (vdd, falso)

// exemploIfComparacaoIgualdade();