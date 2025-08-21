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

        let fraseLimpa = frase.trimEnd();

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

    // let dataRecente = "";

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

        let dia = parseInt(partesData[0].padStart(2, 0));

        let mes = parseInt(partesData[1].padStart(2, 0));

        let ano = parseInt(partesData[2]);
      
        if (mes === 12) {
            quantidadeDezembro = quantidadeDezembro + 1;
        } else if (mes === 3) {
            quantidadeMarco = quantidadeMarco + 1;
        }
    }

    console.log("Data mais antiga: " + dataAntiga +
        "\nQuantidade de março: " + quantidadeMarco + ";" +
        "\nQuantidade de dezembro: " + quantidadeDezembro + "."
    )
}