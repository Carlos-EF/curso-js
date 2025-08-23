// function apresentarSistemaCompra() {
//     // Batata Palha | R$ 12,50 · Arroz 5kg | 29,90 · Leite | R$ 4,79
// }

function validarCsv() {
    let indice = 0;

    let statusId;

    let idStatus = "";

    let statusNome;

    let nomeStatus = "";

    let statusCpf;

    let cpfStatus = "";

    let statusData;

    let dataStatus = "";

    while (indice < 5) {
        //0;Carlos;123.123.123-1;2025-0820

        let csv = prompt("Digite o csv no formato: 'id;nome;cpf;aaaa-mm-dd' .");

        indice = indice + 1;

        let partesCsv = csv.split(";");

        let id = parseInt(partesCsv[0].padStart(2, 0));

        let nome = partesCsv[1].trim();

        let cpf = partesCsv[2];

        let data = partesCsv[3];

        if (id <= 0) {
            statusId = "ID inválido."
        } else if (id > 0) {
            statusId = "ID válido."
        }

        if (nome.length >= 7) {
            statusNome = "Nome válido."
        } else {
            statusNome = "Nome inválido."
        }

        if (cpf.length === 14 && cpf.charAt(3) === "." && cpf.charAt(7) === "." && cpf.charAt(11) === "-") {
            statusCpf = "CPF válido."
        } else {
            statusCpf = "CPF inválido."
        }

        if (data.length === 10 && data.charAt(4) === "-" && data.charAt(7) === "-") {
            statusData = "Data válida."
        } else {
            statusData = "Data inválida."
        }

        idStatus = idStatus + "\n" + statusId;

        nomeStatus = nomeStatus + "\n" + statusNome;

        cpfStatus = cpfStatus + "\n" + statusCpf;

        dataStatus = dataStatus + "\n" + statusData;

    }
    console.log(idStatus +
        "\n" + nomeStatus +
        "\n" + cpfStatus +
        "\n" + dataStatus
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

// function validarEmailDominio() {
//     // Ana@Gmail.com joao@outlook.com maria@yahoo.com x@empresa.com.br errado@@mail

//     let cadastrarEmail = "";

//     let quantidadeGmail = 0;

//     let quantidadeOutlook = 0;

//     let quantidadeYahoo = 0;

//     let quantidadeOutros = 0;

//     let quantidadeInvalida = 0;

//     while (cadastrarEmail !== "fim") {
//         cadastrarEmail = prompt("Digite seu email aqui. Caso queira parar digite: 'fim' .").toLowerCase().trim();

//         const partesEmail = cadastrarEmail.split("@");

//         const validarEmail = ["@", "."];

//         if (cadastrarEmail.includes(validarEmail) === false) {
//             quantidadeInvalida = quantidadeInvalida + 1;
//         }

//         let emailDigitado = partesEmail[0];

//         let dominioEmail = partesEmail[1];

//         if (dominioEmail === "gmail.com") {
//             quantidadeGmail = quantidadeGmail + 1;
//         } else if (dominioEmail === "outlook.com") {
//             quantidadeOutlook = quantidadeOutlook + 1;
//         } else if (dominioEmail === "yahoo.com") {
//             quantidadeYahoo = quantidadeYahoo + 1;
//         } else {
//             quantidadeOutros = quantidadeOutros + 1;
//         }

//         if (cadastrarEmail === "fim") {
//             quantidadeOutros = quantidadeOutros - 1;

//             alert("Quantidade de gmails: " + quantidadeGmail + ";" +
//                 "\nQuantidade de outlooks: " + quantidadeOutlook + ";" +
//                 "\nQuantidade de yahoos: " + quantidadeYahoo + ";" +
//                 "\nQuantidade de outros emails: " + quantidadeOutros + ";" +
//                 "\n\nQuantidade inválidas: " + quantidadeInvalida + "."
//             )
//         }
//     }

// }

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
}