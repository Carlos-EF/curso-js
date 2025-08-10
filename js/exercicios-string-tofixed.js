function modificarFrase() {
    let frase = prompt("Escreva uma frase.");

    let escolha = prompt("Da frase " + " ' " + frase + " ' " + ", escolha uma palavra para substituir.");

    let substituicao = prompt("Escolha a palavra desejada para trocar " + " ' " + escolha + " ' " + ".");

    let fraseTrocada = frase.replace(escolha, substituicao);

    alert("Frase iniciada: " + frase + "," +
        "\nfrase modificada: " + fraseTrocada + "."
    );
}

function removerEspacos() {
    let frase = prompt("Digite uma frase.");

    let fraseModificada = frase.replaceAll(" ", "");

    alert("Frase inicial: " + " ' " + frase + " ' " + " ," +
        "\nfrase modificada: " + " ' " + fraseModificada + " ' " + " ."
    );
}

function separarNomes() {
    let nome = prompt("Digite um/seu nome completo.");

    let partes = nome.split(" ");

    alert("Seu apelido será: " + partes[0] + " " + partes[partes.length - 1] + "."
    );
}

function separarParte() {
    let frase = prompt("Digite uma frase.");

    let parte = frase.substring(3, 9);

    alert("Está parte da sua frase me chamou a atenção: " + " ' " + parte + " '.")
};

function limparEspacos() {
    let frase = prompt("Digite uma frase com espaços no começo e fim dela.");

    alert("Sua frase sem os espaços ficará assim: " + " '" + frase.trim() + "'.")
};

function limparInicio() {
    let frase = prompt("Digite uma frase com espaços no começo dela.");

    alert("Sua frase sem os espaços no começo ficará assim: " + " '" + frase.trimStart() + "'.")
};

function limparFinal() {
    let frase = prompt("Digite uma frase com espaços no final dela.");

    alert("Sua frase sem os espaços no final ficará assim: " + " '" + frase.trimEnd() + "'.")
};

function adicionarDdd() {
    let celular = prompt("Digite seu número de celular no formato 9XXXXXXXX");

    let corrigido = celular.padStart(11, 47);

    alert("Seu número com o DDD: '" + corrigido + "' .")
};

function adicionarZeros() {
    let contaBancaria = prompt("Digite uma conta bancária.");

    let corrigido = contaBancaria.padEnd(10, 0);

    alert("Conta Bancária: '" + corrigido + "' .")
};

function formatarValor() {
    let valor = parseFloat(prompt("Digite um valor decimal."));

    console.log("R$ " + valor.toFixed(2))
};