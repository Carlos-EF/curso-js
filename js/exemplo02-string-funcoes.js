function substituicao() {
    let texto = "R$ 299.000,10"; // "R$ 299.000,10"
    // replace(antigo, novo)
    texto = texto.replace("R$", "");// " 299.000,10"
    texto = texto.replace(" ", "");// "299.000,10"
    texto = texto.replace(".", ""); // "299000,10"
    texto = texto.replace(",", "."); // "299000,10"
    let preco = parseFloat(texto);

    preco = preco - 1000
    alert(preco)
}

function tamanhoDaString() {
    let texto = "Oi, tudo bem?";
    let tamanho = texto.length;

    alert("Texto: '" + texto + "'\nTamaho: " + tamanho);
    /*
        Cenários de uso:
        Ex. 02: Validação de CPF:
            691.735.128-43 
            min: 14
            max: 14
        Ex. 01: Validação de nome: 
            Nome Completo:
            max: 200
            min: 7
    */
}


function transformarMinusculo() {
    let login = "BataTinha";
    // Converter para minúsculo
    let loginMinusculo = login.toLowerCase();

    alert(
        "Texto original: " + login +
        "\nTexto minúsculo: " + loginMinusculo
    );
}

function transformarMaiusculo() {
    let login = "BataTinha";
    // Converter para maiúsculo
    let loginMaiusculo = login.toUpperCase();

    alert(
        "Texto original: " + login +
        "\nTexto maiúsculo: " + loginMaiusculo
    );
}

function removerEspacosComeco() {
    let aluno = "  Vanderlei da Silva Mello  ";
    let alunoSemEspacosComeco = aluno.trimStart();
    alert(
        "Texto original: '" + aluno + "'" +
        "\nTexto modificado: '" + alunoSemEspacosComeco + "'"
    );
}

function removerEspacosFinal() {
    let aluno = "  Vanderlei da Silva Mello  ";
    let alunoSemEspacosFinal = aluno.trimEnd();
    alert(
        "Texto original: '" + aluno + "'" +
        "\nTexto modificado: '" + alunoSemEspacosFinal + "'"
    );
}

function removerEspacosComecoFinal() {
    let aluno = "  Vanderlei da Silva Mello  ";
    let alunoSemEspacosComecoFinal = aluno.trim();
    alert(
        "Texto original: '" + aluno + "'" +
        "\nTexto modificado: '" + alunoSemEspacosComecoFinal + "'"
    );
}

function preencherComeco() {
    let nome = "Ana Silva";
    let texto = nome.padStart(40, "*");
    alert("Texto: " + texto);
}

function preenchimentoTabela() {
    let paciente1 = "Ana Silva";
    let paciente2 = "Augusto Primeiro";
    let idade1 = 28;
    let idade2 = 26;

    console.log(" -----------------------------------------" +
        "\n| Nome                 | Idade            |" +
        "\n -----------------------------------------" +
        "\n| " + paciente1.padEnd(20, " ") + " | " + idade1.toString().padEnd(16, " ") + " |" +
        "\n| " + paciente2.padEnd(20, " ") + " | " + idade2.toString().padEnd(16, " ") + " |" +
        "\n -----------------------------------------")
}

function preencherFinal() {
    let nome = "Ana Silva";
    let texto = nome.padEnd(40, "*");
    alert("Texto: " + texto);
}

function dividirStringEmPartes() {
    let data = "23/03/1993";
    let partes = data.split("/");
    // let partes = ["23", "03", "1993"] // 3 posições
    let dia = partes[0];
    let mes = partes[1];
    let ano = partes[2];
    alert("Blumenau, " + dia + " de " + mes + " de " + ano)
    // Apresentar: "Blumenau, 23 de 03 de 1993"
}

function pegarParteString() {
    let texto = "Superman Batman Thor";
    let heroiMeio = texto.substring(9, 15);
    alert("Herói meio: " + heroiMeio)
}

function exemploComecaCom() {
    let empresa = prompt("Digite o nome da empresa");
    if (empresa.toLowerCase().startsWith("blu") === true) {
        alert("Empresa de Blumenau");
    } else {
        alert("Empresa de fora");
    }
}

function exemploTerminaCom() {
    let empresa = prompt("Digite o nome da empresa");
    if (empresa.toLowerCase().endsWith("blu") === true) {
        alert("Empresa de Blumenau");
    } else {
        alert("Empresa de fora");
    }
}


function validarLinhaCSV(linha) {
    const partes = linha.split(";");

    if (partes.length !== 4) {
        console.log("❌ Linha inválida: número incorreto de campos.");
        return;
    }

    const id = partes[0];
    const nome = partes[1];
    const cpf = partes[2];
    const dataNascimento = partes[3];

    // Regex para validações
    const regexID = /^\d+$/;
    const regexNome = /^([A-ZÁ-Úa-zá-ú]+ )+[A-ZÁ-Úa-zá-ú]+$/;
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const regexData = /^\d{4}-\d{2}-\d{2}$/;

    // Validação do ID
    if (regexID.test(id) && parseInt(id) > 0) {
        console.log("✅ ID válido");
    } else {
        console.log("❌ ID inválido");
    }

    // Validação do Nome
    if (regexNome.test(nome.trim())) {
        console.log("✅ Nome válido");
    } else {
        console.log("❌ Nome inválido");
    }

    // Validação do CPF (apenas formato)
    if (regexCPF.test(cpf)) {
        console.log("✅ CPF com formato válido");
    } else {
        console.log("❌ CPF com formato inválido");
    }

    // Validação da Data de Nascimento
    if (regexData.test(dataNascimento)) {
        console.log("✅ Data de nascimento válida");
    } else {
        console.log("❌ Formato da data de nascimento inválido");
    }
}

// Exemplo de uso com a primeira linha
const linha = "1;Maria da Silva;123.129.120-20;1994-06-10";
console.log(linha)
validarLinhaCSV(linha);
