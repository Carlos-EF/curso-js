function exemplo01() {
    let indice = 0;

    while (indice < 5) {
        let nome = prompt("Digite o nome do user")

        indice = indice + 1;
    }

}


function exemplo02() {
    let indice = 0;

    while (indice < 3) {
        let tatuagem = parseInt(prompt("Digite a quantidade de tatuagens"))

        indice = indice + 1;
    }
}



function precoAcoes() {

    let indice = 0;
    while (indice < 5) {
        let precoAcoes = parseFloat(prompt("Digite o valor da ação"))
        indice = indice + 1;
    }
}


function exemplo03() {
    let indice = 0;

    while (indice < 12) {
        let avaliacao = prompt("Digite a sua avaliação")
        indice = indice + 1;
    }
}

function exemplo04() {
    let indice = 0;


    while (indice < 2) {
        let musica = prompt("digite o nome da musica")


        indice = indice + 1;
    }

}













function exemplo05() {
    let indice = 0;

    while (indice <= 3) {
        let timeDeFutebol = prompt("Digite o time de futebol")

        indice = indice + 1;
    }
}







function exemplo06() {
    let indice = 0;
    let soma = 0;
    while (indice < 5) {
        let categorias = prompt("Digite uma categoria")
        let quantidadeCategoria = parseInt(prompt("Quantidade da categoria"))
        soma = soma + quantidadeCategoria;
        indice = indice + 1;



    }
    alert("quantidade de categorias" + soma)


}













function exemplo07() {
    let indice = 0;
    let quantidadeTotalCamisetas = 0;
    while (indice < 3) {
        let tamanhoCamiseta = prompt("tamanho da sua camiseta")

        let quantidadeCamisetas = parseInt(prompt("Digite a quantidade de camisetas"))

        quantidadeTotalCamisetas = quantidadeTotalCamisetas + quantidadeCamisetas;

        indice = indice + 1;
    }

    alert("Quantidade total de camisetas" + quantidadeTotalCamisetas);
}








function exemplo08() {
    let indice = 0;
    let soma = 0;
    while (indice < 5) {
        let idade = parseInt(prompt("digite a idade do seu animal"));

        soma = soma + idade;

        indice = indice + 1;
    }
    let media = soma / 5;
    alert("a soma das idades do seu animal " + soma +
        "\n a media das idades dos animais " + media)
}

function exemplo00() {
    // split, ✔ replace, trim, endsWith, 
    // menor, maior, 
    // até o usuário digitar parar
    let opcaoEscolhida = "";
    while (opcaoEscolhida.toLowerCase().trim() !== "parar") {
        let nomeJogoFavorito = prompt("Digite o nome do jogo favorito");

        // Subtituir LOL por COD, caso usuário escolher LOL, 
        // pq o Vandeco n gosta de LOL
        nomeJogoFavorito = nomeJogoFavorito.replace("LOL", "COD")

        if (nomeJogoFavorito.startsWith("Fort") === true) {
            nomeJogoFavorito = "Daysgone"
        }

        opcaoEscolhida = prompt("Digite 'parar' para encerrar")
    }
}

function exemploFolhaPagamento() {
    // qtd silva
    // menor salario
    // maior nome

    // perguntar enquanto escolher continuar
    let continuar = true;
    let quantidadeSilva = 0;
    let maiorNome = "";
    let menorSalario = 999999999999;
    let nomeMenorSalario = "";

    while (continuar === true) {
        let nomeCompleto = prompt("Digite o seu nome completo").trim()
        let salario = parseFloat(prompt("Digite o salário"))

        if (nomeCompleto.toLowerCase().endsWith("silva") === true ||
            nomeCompleto.toLowerCase().includes(" silva ")) {
            quantidadeSilva = quantidadeSilva + 1;
        }

        if (salario < menorSalario) {
            menorSalario = salario;
            nomeMenorSalario = nomeCompleto;
        }

        if (nomeCompleto.length > maiorNome.length) {
            maiorNome = nomeCompleto;
        }
        continuar = confirm("Deseja continuar?")
    }
    alert("Quantidade Silva: " + quantidadeSilva +
        "\n" + nomeMenorSalario + " tem o menor salário: " + menorSalario +
        "\nMaior nome: " + maiorNome)
}

function exemploCSV() {
    let indice = 0;
    while (indice < 3) {
        let linha = prompt("Digite no seguinte formato 'nome|idade|salario'");
        let partes = linha.split("|") // quebrar por pipeline
        // [´nome, idade, salario]
        let nome = partes[0];
        let idade = parseInt(partes[1]);
        let salario = parseFloat(partes[2]);
        alert(nome + "|" + idade + "|" + salario)
    }
}

function exemplo09() {
    let indice = 0;
    let maior = 0;
    let menor = 9999;
    while (indice < 3) {
        let nomeDaFruta = prompt("Digite o nome da fruta");
        let quantidadeDeFrutas = parseInt(prompt("Digite a quantidade de frutas"));

        if (quantidadeDeFrutas > maior) {
            maior = quantidadeDeFrutas
        } if (quantidadeDeFrutas < menor) {
            menor = quantidadeDeFrutas
        }
        indice = indice + 1;
    }
    alert("A maior quantidade " + maior + "\nMenor quantidade " + menor)
}