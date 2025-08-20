function somarPrecos() {
    let precoProduto = "";

    let indice = 0;

    let total = 0;

    let mediaPreco = 0;

    // Massa de dados: 3,50 | 10 | 7,99 | 8,5

    while (indice < 4) {
        precoProduto = parseFloat(prompt("Digite preço do produto."));

        indice = indice + 1;

        total = total + precoProduto;

        mediaPreco = total / 4;
    }

    alert(
        "Total da compra = R$ " + total.toFixed(2).replace(",", ".") +
        "\nMedia dos preços = R$ " + mediaPreco.toFixed(2)
    );
}

function contarPalavrasComecandoA() {
    let palavra = "";

    let palavraComA = 0;

    let palavraOutra = 0;

    let indice = 0;
    // Massa de dados: Ana, casa, Amora, abacaxi, rua
    while (indice < 5) {
        palavra = prompt("Digite uma palavra qualquer.").toLowerCase().trim();

        indice = indice + 1;

        if (palavra.startsWith("a")) {
            palavraComA = palavraComA + 1;
        } else {
            palavraOutra = palavraOutra + 1;
        };

    }

    alert("Palavras que começam com A: " + palavraComA +
        "\nOutras palavras: " + palavraOutra
    );
};

function validarIdade() {
    let idade = parseInt(prompt("Digite sua idade."));

    while (idade < 1 || idade > 120) {
        idade = parseInt(prompt("Sua idade tem que ser maior que um e menor que 120" +
            "\nDigite sua idade novamente."
        ));
    }
    alert("Idade cadastrada: " + idade)
}

function obterMaiorAltura() {
    // Massa de dados: 1,72 | 1,80 | 1,75
    let altura = 0;

    let MaiorAltura = 0;

    let indice = 0;

    while (indice < 3) {
        altura = parseFloat(prompt("Digite sua altura.").replace(",", "."));

        if (altura > MaiorAltura) {
            MaiorAltura = altura
        }

        indice = indice + 1;
    }

    alert("Maior altura entre os digitados: " + MaiorAltura.toFixed(2))
}

function abrirMiniMenu() {
    let menu = `Sistema: 
    1 - Saudação
    2 - Par ou ímpar
    100 - Sair`;

    let opcaoEscolhida = 0;
    while (opcaoEscolhida !== 100) {
        opcaoEscolhida = parseInt(prompt(menu));

        if (opcaoEscolhida === 1) {
            opcao1MiniMenu();
        } else if (opcaoEscolhida === 2) {
            opcao2MiniMenu();
        } else if (opcaoEscolhida !== 100) {
            alert("Opção inválida.")
        } else if (opcaoEscolhida === 100) {
            alert("Sistema encerrado.")
        }
    }
};

function opcao1MiniMenu() {
    let nome = prompt("Digite seu nome aqui.").trim();

    alert("Olá, " + nome + ".");
    return nome;
};

function opcao2MiniMenu() {
    let numero = parseFloat(prompt("Digite um número aqui.").replace(",", "."));

    if (numero % 2 === 0) {
        alert("O número " + numero + " é par.");
    } else if (numero % 2 === 1) {
        alert("O número " + numero + " é ímpar.");
    }

    return numero;
};

function mostrarNomes() {
    let quantidadeNomes = 0;

    let nomes = "";

    let nome = "";

    while (nome.trim().toLowerCase() !== "fim") {
        nome = prompt("Digite um nome.");

        quantidadeNomes = quantidadeNomes + 1;

        nomes = nomes + "\n" + nome;
    }

    alert("Nomes digitados: " + nomes + 
        "\nQuantidade de nomes: " + quantidadeNomes)
}