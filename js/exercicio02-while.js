function apresentarSistemaCompra() {
    // Batata Palha | R$ 12,50 · Arroz 5kg | 29,90 · Leite | R$ 4,79
    let desejaCadastrar = "sim";

    let separarTabela = "-".padEnd(30, "-");

    let resultado = "Produto              Preço\n" + separarTabela + "\n";

    let total = 0;

    let produtos = 0;

    let guardarPreco = "";

    let guardarProduto = "";

    let mediaFinal = 0;

    let maiorValor = 0;

    while (desejaCadastrar === "sim") {
        produtos = produtos + 1;

        let produto = prompt("Digite o nome do produto.").trim();

        while (produto.length < 2) {
            produto = prompt("Nome digitado inválido. Precisa ser maior ou igual a dois caractéres.").trim();
        }

        let preco = parseFloat(prompt("Digite o valor do produto. Ex.: 'R$ 1.299,90' ").replace("R$", "").replace(",", ".").replaceAll(" ", "").trim());

        if (preco > maiorValor) {
            maiorValor = preco;
            guardarPreco = maiorValor;
            guardarProduto = produto;
        }

        total = total + preco;

        desejaCadastrar = prompt("Deseja cadastrar mais um produto? (Sim/não)").toLowerCase().trim();

        if (desejaCadastrar !== "sim") {
            mediaFinal = total / produtos;
        }

        resultado += `${produto.padEnd(20, " ")} ${preco.toFixed(2)}\n`
    }

    console.log(resultado + separarTabela + "\nTotal:".padEnd(22, " ") + total.toFixed(2) + "\n" + separarTabela + "\nMedia:".padEnd(22, " ") + mediaFinal.toFixed(2)+ "\n" + separarTabela + "\nQuantidade:".padEnd(22, " ") + produtos + "\nNome maior preço:".padEnd(22, " ") + guardarProduto + "\nMaior preço:".padEnd(22, " ") + guardarPreco);
};

function validarCsv() {
    let indice = 0;

    let quantidadeValida = 0;

    let quantidadeInvalida = 0;

    let idValida = 0;

    let idInvalida = 0;

    let nomeValido = 0;

    let nomeInvalido = 0;

    let cpfValido = 0;

    let cpfInvalido = 0;

    let dataValida = 0;

    let dataInvalida = 0;

    while (indice < 5) {
        //0;Carlos;123.123.123-1;2025-0820

        let csv = prompt("Digite o csv no formato: 'id;nome;cpf;aaaa-mm-dd' .");

        indice = indice + 1;

        let partesCsv = csv.split(";");

        let id = partesCsv[0].padStart(2, 0).replace(/\d/g, "");

        let nome = partesCsv[1].trim();

        let cpf = partesCsv[2];

        let data = partesCsv[3];

        if (id > 0 && nome.length >= 7 && cpf.length === 14 && cpf.charAt(3) === "." && cpf.charAt(7) === "." && cpf.charAt(11) === "-" && data.length === 10 && data.charAt(4) === "-" && data.charAt(7) === "-") {
            quantidadeValida = quantidadeValida + 1;
        } else {
            quantidadeInvalida = quantidadeInvalida + 1;
        }

        if (id <= 0) {
            idInvalida = idInvalida + 1;
        } else if (id > 0) {
            idValida = idValida + 1;
        }

        if (nome.length >= 7) {
            nomeValido = nomeValido + 1;
        } else {
            nomeInvalido = nomeInvalido + 1;
        }

        if (cpf.length === 14 && cpf.charAt(3) === "." && cpf.charAt(7) === "." && cpf.charAt(11) === "-") {
            cpfValido = cpfValido + 1;
        } else {
            cpfInvalido = cpfInvalido + 1;
        }

        if (data.length === 10 && data.charAt(4) === "-" && data.charAt(7) === "-") {
            dataValida = dataValida + 1;

        } else {
            dataInvalida = dataInvalida + 1;
        }
    }

    console.log("Quantidade válidas: " + quantidadeValida +
        "\nQuantidade inválidas: " + quantidadeInvalida +
        "\nQuantidade de ID inválidos: " + idInvalida +
        "\nQuantidade de nome inválidos: " + nomeInvalido +
        "\nQuantidade de CPF inválidos " + cpfInvalido +
        "\nQuantidade de data inválidas: " + dataInvalida
    );
};

function contarPontuacao() {
    // Oi? · Tudo bem! · Amanhã eu vou · Sério! · Como assim? · Tá certo
    let indice = 0;

    let quantidadePerguntas = 0;

    let quantidadeExclamacao = 0;

    let quantidadeNeutro = 0;

    while (indice < 6) {
        indice = indice + 1;

        let frase = prompt("Digite uma frase aqui.");

        let fraseLimpa = frase.trimEnd().toLowerCase();

        if (fraseLimpa.endsWith("?")) {
            quantidadePerguntas = quantidadePerguntas + 1;
        } else if (fraseLimpa.endsWith("!")) {
            quantidadeExclamacao = quantidadeExclamacao + 1;
        } else {
            quantidadeNeutro = quantidadeNeutro + 1;
        }
    }
    alert("Quantidade de perguntas (?): " + quantidadePerguntas + ";" +
        "\nQuantidade de exclamações (!): " + quantidadeExclamacao + ";" +
        "\nOutras: " + quantidadeNeutro + "."
    );
};

function verificarDataMaisAntiga() {
    let indice = 0;

    let chave;

    let dataAntiga = "99/99/9999";

    let dataRecente = "00/00/0000";

    let quantidadeMarco = 0;

    let quantidadeDezembro = 0;

    while (indice < 5) {
        //03/12/2025

        indice = indice + 1;

        let data = prompt("Digite uma data no formato: 'XX/XX/XXXX'.").trim();

        let partesData = data.split("/");

        let compararDia = partesData[0];

        let compararMes = partesData[1];

        let compararAno = partesData[2];

        let chave = compararDia + "/" + compararMes + "/" + compararAno;

        if (chave < dataAntiga) {
            dataAntiga = chave;
        }

        if (chave > dataRecente) {
            dataRecente = chave
        }

        let dia = parseInt(partesData[0].padStart(2, 0));

        let mes = parseInt(partesData[1].padStart(2, 0));

        let ano = parseInt(partesData[2]);

        if (mes === 12) {
            quantidadeDezembro = quantidadeDezembro + 1;
        } else if (mes === 3) {
            quantidadeMarco = quantidadeMarco + 1;
        }
    }

    console.log("Data mais antiga: " + dataAntiga + ";" +
        "\nData mais recente: " + dataRecente + ";" +
        "\nQuantidade de março: " + quantidadeMarco + ";" +
        "\nQuantidade de dezembro: " + quantidadeDezembro + "."
    )
};

function normalizarNumerosTelefone() {
    // (47) 99999-1234 · 47 3232-1122 · 4732321122 · 47-9-8888-7777

    let indice = 0;

    let ddd;

    let numeroCelular;

    let numeroFixo;

    let quantidadeInvalida = 0;

    let guardarNumeroFixo = "";

    let guardarNumeroCelular = "";

    while (indice < 4) {
        indice = indice + 1;

        let numeroTelefone = prompt("Digite o seu numero de telefone/celular.").replaceAll(" ", "").replaceAll("-", "").replaceAll("(", "").replaceAll(")", "");

        let ddd = numeroTelefone.substring(0, 2);

        if (numeroTelefone.length === 10) {
            numeroFixo = "(" + ddd + ")" + " " + numeroTelefone.substring(2, 6) + "-" + numeroTelefone.substring(6, 10)
            guardarNumeroFixo = guardarNumeroFixo + "\n" + numeroFixo;
        }

        if (numeroTelefone.length === 11) {
            numeroCelular = "(" + ddd + ")" + " " + numeroTelefone.substring(2, 7) + "-" + numeroTelefone.substring(7, 11)
            guardarNumeroCelular = guardarNumeroCelular + "\n" + numeroCelular;
        }

        if (numeroTelefone.length <= 9 || numeroTelefone.length > 11) {
            quantidadeInvalida = quantidadeInvalida + 1;
        }

    }

    alert("Números fixo: " + "\n" + guardarNumeroFixo + ";" +
        "\n\nNúmeros celulares: " + "\n" + guardarNumeroCelular + ";" +
        "\n\nQuantidade inválidas: " + "\n" + quantidadeInvalida + ";"
    )
};

function validarEmailDominio() {
    // Ana@Gmail.com joao@outlook.com maria@yahoo.com x@empresa.com.br errado@@mail

    let cadastrarEmail = "";

    let quantidadeGmail = 0;

    let quantidadeOutlook = 0;

    let quantidadeYahoo = 0;

    let quantidadeOutros = 0;

    let quantidadeInvalida = 0;

    while (cadastrarEmail !== "fim") {
        cadastrarEmail = prompt("Digite seu email aqui. Caso queira parar digite: 'fim' .").toLowerCase().trim();

        if (cadastrarEmail.includes("@")) {
            let partesEmail = cadastrarEmail.split("@");

            let dominioEmail;

            if (partesEmail.length === 2 && partesEmail[1].includes(".")) {
                dominioEmail = partesEmail[1];
            } else {
                quantidadeInvalida = quantidadeInvalida + 1;
            }

            if (dominioEmail === "gmail.com") {
                quantidadeGmail = quantidadeGmail + 1;
            } else if (dominioEmail === "outlook.com") {
                quantidadeOutlook = quantidadeOutlook + 1;
            } else if (dominioEmail === "yahoo.com") {
                quantidadeYahoo = quantidadeYahoo + 1;
            } else if (dominioEmail !== "gmail.com" || dominioEmail !== "outlook.com" || dominioEmail !== "yahoo.com") {
                quantidadeOutros = quantidadeOutros + 1;
            }
        }

        if (cadastrarEmail === "fim") {
            quantidadeOutros = quantidadeOutros - 1;

            alert("Quantidade de gmails: " + quantidadeGmail + ";" +
                "\nQuantidade de outlooks: " + quantidadeOutlook + ";" +
                "\nQuantidade de yahoos: " + quantidadeYahoo + ";" +
                "\nQuantidade de outros emails: " + quantidadeOutros + ";" +
                "\n\nQuantidade inválidas: " + quantidadeInvalida + "."
            )
        }
    }
}

function descobrirTamanhoFrase() {
    let indice = 0;

    let menorFrase = "";

    let maiorFrase = "";

    let menorLen = 9999999999;

    let maiorLen = 0;

    while (indice < 5) {
        indice = indice + 1;

        let frase = prompt("Digite uma frase qualquer.").trim();

        let fraseMaior = frase;

        let tamanhoFrase = frase.length;

        if (tamanhoFrase > maiorLen) {
            maiorLen = tamanhoFrase;

            maiorFrase = frase;
        }

        if (tamanhoFrase < menorLen) {
            menorLen = tamanhoFrase;

            menorFrase = menorFrase + frase;
        }
    }

    alert("Menor frase digitada ( length " + menorLen + "): " + menorFrase +
        "\nMaior frase digitada ( length " + maiorLen + "): " + maiorFrase);
};

function classificarHorario() {
    // Massa de dados: 07:30, 23:59, 12:00, 04:00, 19:10, 25:00

    let indice = 0;

    let horaMadrugada = 0;

    let horaManha = 0;

    let horaTarde = 0;

    let horaNoite = 0;

    let horaInvalida = 0;

    while (indice < 6) {
        indice = indice + 1;

        let hora = prompt("Digite um horário no formato: 'HH:MM' .").trim();

        let partesHora = hora.split(":");

        let horas = parseInt(partesHora[0].padStart(2, 0));

        let minutos = parseInt(partesHora[1].padStart(2, 0));

        let validarHora = parseInt(horas);

        let validarMinuto = parseInt(minutos);

        while (hora.length < 5 && hora.charAt(2) !== ":") {
            hora = prompt("Formato digitado incorreto. Verifique se está no seguinte formato: 'HH:MM' ");
        };

        if (validarHora >= 0 && validarHora <= 4 && validarMinuto <= 59) {
            horaMadrugada = horaMadrugada + 1;
        } else if (validarHora >= 5 && validarHora <= 11 && validarMinuto <= 59) {
            horaManha = horaManha + 1;
        } else if (validarHora >= 12 && validarHora <= 17 && validarMinuto <= 59) {
            horaTarde = horaTarde + 1;
        } else if (validarHora >= 18 && validarHora <= 23 && validarMinuto <= 59) {
            horaNoite = horaNoite + 1;
        } else {
            horaInvalida = horaInvalida + 1;
        }
    }

    alert("Quantidade de horários da madrugada: " + horaMadrugada + ";" +
        "\nQuantidade de horários da manhã: " + horaManha + ";" +
        "\nQuantidade de horários da tarde: " + horaTarde + ";" +
        "\nQuantidade de horários da noite: " + horaNoite + ";" +
        "\nQuantidade de horários inválidos: " + horaInvalida + "."
    )
};

function validarCodigo() {
    // Massa de dados: BLU-2024-7, BLU-2025-042, SP-2025-0010, BLU-1999-0001, BLU-2025-1234
    let indice = 0;

    let codigoInvalido = 0;

    let mostrarCodigo = "";

    while (indice < 5) {
        indice = indice + 1;

        let codigo = prompt("Digite o código promocional. (Padrão: 'BLU-ano-números') ").trim();

        let partesCodigo = codigo.split("-");

        let prefixo = codigo.substring(0, 3);

        let ano = codigo.substring(4, 8);

        let numeros = codigo.substring(9, 13);

        let numerosCorrigido;

        if (numeros.length < 4) {
            numerosCorrigido = numeros.padStart(4, "0");
        } else {
            numerosCorrigido = numeros;
        };

        let codigoCorrigido = prefixo + "-" + ano + "-" + numerosCorrigido;

        if (prefixo !== "BLU" || parseInt(ano) < 2000 || ano.length < 4) {
            codigoInvalido = codigoInvalido + 1;
        } else {
            mostrarCodigo = mostrarCodigo + codigoCorrigido + ";" + "\n";
        };
    };

    console.log("Códigos corrigidos: " + mostrarCodigo +
        "\nQuantidade de códigos inválidos: " + codigoInvalido + ";"
    );
};

function criarUsernameId() {
    // Massa de dados: Ana Maria Souza, João Pedro Lima, MARIA das DORES
    let indice = 0;

    let id = 0;

    let resultado = "Username        ID\n"

    while (indice < 3) {
        let nomeCompleto = prompt("Digite seu nome completo.").trim().toLowerCase();

        indice = indice + 1;

        id = id + 1;

        const partesNomes = nomeCompleto.split(" ");

        const ultimoNome = partesNomes[partesNomes.length - 1];

        const primeiraLetra = nomeCompleto.substring(0, 1);

        const username = primeiraLetra + ultimoNome;

        resultado += `${username.padEnd(15, " ")} ${id.toString().padStart(6, "0")}\n`;
    }

    console.log(resultado)
};