function calcularNota() {
    let nota1 = parseFloat(prompt("Digite sua nota"));

    let nota2 = parseFloat(prompt("Digite sua nota"));

    let nota3 = parseFloat(prompt("Digite sua nota"));

    let nota1Final = nota1 * 2;

    let nota2Final = nota1 * 3;

    let nota3Final = nota1 * 5;

    let mediaPonderada = (nota1Final + nota2Final + nota3Final) / 10;

    const trabalhosExtras = confirm("Você fez trabalhos extras?");

    if (mediaPonderada >= 7) {
        alert("Sua nota final: " + mediaPonderada +
            "\nParabéns! Você foi aprovado!");
    } else if (mediaPonderada < 6.8 && trabalhosExtras === false) {
        let notaExame = parseFloat(prompt("Digite sua nota do exame"));
        if ((mediaPonderada + notaExame) / 2 >= 6) {
            alert("Sua nota final: " + (mediaPonderada + notaExame) / 2 +
                "\nParabéns! Você foi aprovado com exame!");
        } else if ((mediaPonderada + notaExame) / 2 < 6) {
            alert("Sua nota final: " + (mediaPonderada + notaExame) / 2 +
                "\nVocê foi reprovado.");
        }
    } else if (mediaPonderada < 6.8 && trabalhosExtras === true) {
        let notaExame = parseFloat(prompt("Digite sua nota do exame"));
        if ((mediaPonderada + notaExame) / 2 >= 6) {
            alert("Sua nota final: " + (mediaPonderada + notaExame) / 2 +
                "\nParabéns! Você foi aprovado com exame!");
        } else if ((mediaPonderada + notaExame) / 2 < 6) {
            alert("Sua nota final: " + (mediaPonderada + notaExame) / 2 +
                "\nVocê foi reprovado.");
        }
    } else if (6.8 <= mediaPonderada <= 6.9 && trabalhosExtras === true) {
        alert("Sua nota final: " + (mediaPonderada + 0.2) +
            "\nParabéns! Você foi aprovado!");
    }
};

function aplicarDesconto() {
    let compra = parseFloat(prompt("Digite o valor final da compra."));

    let cupom = prompt("Digite um cupom de desconto, caso possua um.");

    if (compra >= 500 && cupom === "DESC10") {
        let calculoAlto = (25 * compra) / 100;

        let valorAlto = compra - calculoAlto;

        alert("Desconto aplicado! Valor final da compra: R$ " + valorAlto.toFixed(2).replace(".", ",") +
            "\nValor do frete: R$ 25."
        );
    } else if (compra >= 300 && cupom === "DESC10") {
        let calculoMedio = (20 * compra) / 100;

        let valorMedio = compra - calculoMedio;

        alert("Desconto aplicado! Valor final da compra: R$ " + valorMedio.toFixed(2).replace(".", ",") +
            "\nValor do frete: R$ 25."
        );
    } else if (compra >= 150 && cupom === "DESC10") {
        let calculoBaixo = (15 * compra) / 100;

        let valorBaixo = compra - calculoBaixo;

        alert("Desconto aplicado! Valor final da compra: R$ " + valorBaixo.toFixed(2).replace(".", ",") +
            "\nValor do frete: R$ 25."
        );
    } else if (compra < 150 && cupom === "DESC10") {
        let calculoFixo = (10 * compra) / 100;

        let valorFixo = compra - calculoFixo;

        alert("Desconto aplicado! Valor final da compra: R$ " + valorFixo.toFixed(2).replace(".", ",") +
            "\nValor do frete: R$ 25."
        );
    }

    if (compra >= 500 && cupom === "FRETEGRATIS") {
        let calculoDesconto15 = (15 * compra) / 100;

        let valorDesconto15 = compra - calculoDesconto15;

        alert("Desconto aplicado! Valor final da compra: R$ " + valorDesconto15.toFixed(2).replace(".", ",") +
            "\nValor do frete: R$ 0."
        );
    } else if (compra >= 300 && cupom === "FRETEGRATIS") {
        let calculoDesconto10 = (10 * compra) / 100;

        let valorDesconto10 = compra - calculoDesconto10;

        alert("Desconto aplicado! Valor final da compra: R$ " + valorDesconto10.toFixed(2).replace(".", ",") +
            "\nValor do frete: R$ 0."
        );
    } else if (compra >= 150 && cupom === "FRETEGRATIS") {
        let calculoDesconto5 = (5 * compra) / 100;

        let valorDesconto5 = compra - calculoDesconto5;

        alert("Desconto aplicado! Valor final da compra: R$ " + valorDesconto5.toFixed(2).replace(".", ",") +
            "\nValor do frete: R$ 0."
        );
    } else if (compra < 150 && cupom === "FRETEGRATIS") {
        alert("Desconto aplicado! Valor final da compra: R$ " + compra.toFixed(2).replace(".", ",") +
            "\nValor do frete: R$ 0."
        );
    }
}

function validarEstacionamento() {
    let horas = parseFloat(prompt("Digite a quantidade de horas do estacionamento."));

    // const pernoite = confirm("Pernoite?");

    if (0 > horas) {
        alert("As informações passadas são inconsistentes.");
    } else if (0 === horas) {
        alert("Não é necessário validar o ticket.");
    }

    if (0 < horas && horas <= 1) {
        alert("Preço total do estacionamento: R$ 12,00.");
    } else if (1 < horas && horas <= 2) {
        alert("Preço total do estacionamento: R$ 18,00");
    } else if (2 < horas && horas <= 3) {
        alert("Preço total do estacionamento: R$ 24,00");
    } else if (3 < horas && horas <= 4) {
        alert("Preço total do estacionamento: R$ 30,00");
    }

    if (horas >= 10) {
        const pernoite = confirm("Pernoite?");
        if (horas >= 10 && pernoite === true) {
            alert("Preço total do estacionamento: R$ 50,00");
        } if (horas >= 10 && pernoite === false) {
            alert("Preço total do estacionamento: R$ 30,00");
        }
    }
};

function validarTriangulo() {
    let lado1 = parseFloat(prompt("Digite o valor desejado."));

    let lado2 = parseFloat(prompt("Digite o valor desejado."));

    let lado3 = parseFloat(prompt("Digite o valor desejado."));

    const validacaoTriangulo = lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1;

    let tipoTriangulo;

    if (lado1 === lado2 && lado1 === lado3) {
        tipoTriangulo = "Equillátero.";
    } else if (lado1 === lado2 && lado1 !== lado3 || lado1 === lado3 && lado1 !== lado2 || lado2 === lado3 && lado2 !== lado1) {
        tipoTriangulo = "Isósceles.";
    } else if (lado1 !== lado2 && lado2 !== lado3) {
        tipoTriangulo = "Escaleno.";
    }

    if (validacaoTriangulo === true) {
        alert("Triângulo válido!" +
            "\nTipo: " + tipoTriangulo
        );
    } else if (validacaoTriangulo === false) {
        alert("Triângulo inválido!")
    }
};

function verQuadrante() {
    let x = parseFloat(prompt("Digite o valor do X."));

    let y = parseFloat(prompt("Digite o valor do Y."));

    if (x > 0 && y > 0) {
        alert("Você está dentro do Quadrante 1.");
    } else if (x < 0 && y > 0) {
        alert("Você está dentro do Quadrante 2.");
    } else if (x < 0 && y < 0) {
        alert("Você está dentro do Quadrante 3.");
    } else if (x > 0 && y < 0) {
        alert("Você está dentro do Quadrante 4.");
    }
};

function ganharBolsa() {
    let media = parseFloat(prompt("Digite sua média escolar."));

    let rendaFamiliar = parseFloat(prompt("Digite a renda total da sua família."));

    let moradores = parseInt(prompt("Digite quantas pessoas moram com você"));

    let capita = rendaFamiliar / moradores;

    if (media >= 8 && capita <= 1320) {
        alert("Parabéns! Você tem direito a uma bolsa integral!");
    } else if (media >= 7 && capita <= 1980) {
        alert("Parabéns! Você tem direito a uma bolsa parcial!");
    } else {
        alert("Desculpa, sem bolsa dísponivel para sua situação.");
    }
};

