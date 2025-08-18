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
    } else if (validacaoTriangulo === false || lado1 === 0 || lado2 === 0 || lado3 === 0) {
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

function liberarEmprestimo() {
    let salario = parseFloat(prompt("Digite seu salário."));

    let tempoEmpresa = parseFloat(prompt("Digite quanto tempo está no seu emprego atual."));

    let parcela = parseFloat(prompt("Digite o valor da parcela."));

    const tempoNecessario = tempoEmpresa >= 6;

    const parcelaNecessaria = parcela <= (salario * 0.3);

    const negativado = confirm("Você está negativado?");

    let demonstrarNegativado;

    let demonstrarTempo;

    let demonstrarParcela;

    if (tempoNecessario === false) {
        demonstrarTempo = "Tempo de empresa abaixo do que o necessário."
    };

    if (negativado === true) {
        demonstrarNegativado = "Você está negativado."
    };

    if (parcelaNecessaria === false) {
        demonstrarParcela = "Valor da parcela muito alto."
    };

    if (tempoNecessario === true && parcelaNecessaria === true && negativado === false) {
        alert("Parabéns! Seu empréstimo foi aprovado!");
    } else if (tempoNecessario === true && parcelaNecessaria === true && negativado === true) {
        alert("Desculpa, seu empréstimo foi negado pelo motivo:" +
            "\n" + demonstrarNegativado
        );
    } else if (tempoNecessario === false && parcelaNecessaria === true && negativado === false) {
        alert("Desculpa, seu empréstimo foi negado pelo motivo:" +
            "\n" + demonstrarTempo
        );
    } else if (tempoNecessario === true && parcelaNecessaria === false && negativado === false) {
        alert("Desculpa, seu empréstimo foi negado pelo motivo:" +
            "\n" + demonstrarParcela
        );
    } else if (tempoNecessario === false && parcelaNecessaria === false && negativado === false) {
        alert("Desculpa, seu empréstimo foi negado pelo motivo:" +
            "\n" + demonstrarTempo +
            "\n" + demonstrarParcela
        );
    } else if (tempoNecessario === false && parcelaNecessaria === true && negativado === true) {
        alert("Desculpa, seu empréstimo foi negado pelo motivo:" +
            "\n" + demonstrarTempo +
            "\n" + demonstrarNegativado
        );
    } else if (tempoNecessario === false && parcelaNecessaria === false && negativado === true) {
        alert("Desculpa, seu empréstimo foi negado pelo motivo:" +
            "\n" + demonstrarTempo +
            "\n" + demonstrarParcela +
            "\n" + demonstrarNegativado
        );
    } else if (tempoNecessario === true && parcelaNecessaria === false && negativado === true) {
        alert("Desculpa, seu empréstimo foi negado pelo motivo:" +
            "\n" + demonstrarParcela +
            "\n" + demonstrarNegativado
        );
    }
};

function calcularGravidadeMulta() {

    let velocidade = parseInt(prompt("Digite a velocidade na qual você estava dirigindo."));

    let limite = parseInt(prompt("Digite o limite da via."));

    if (velocidade <= limite) {
        alert("Dentro do limite.");
    } else if (velocidade > limite && velocidade <= ((limite * 0.20) + limite)) {
        alert("Infração leve.")
    } else if (velocidade > ((limite * 0.20) + limite) && velocidade <= ((limite * 0.50) + limite)) {
        alert("Infração grave.")
    } else if (velocidade > ((limite * 0.50) + limite)) {
        alert("Infração gravíssima.")
    }
};

function serEducado() {
    let hora = parseFloat(prompt("Digite somente a hora atual."));

    if (hora >= 5 && hora <= 11) {
        alert("Bom dia!");
    } else if (hora >= 12 && hora <= 17) {
        alert("Boa tarde!");
    } else if (hora >= 18 && hora <= 23 || hora <= 4 && hora >= 0) {
        alert("Boa noite!");
    } else if (hora < 0 || hora > 24) {
        alert("Hora inválida.")
    }
};

function venderPlano() {
    let planoCelular = parseInt(prompt("Selecione o seu plano desejado." +
        "\nDigite 1 = Basic" +
        "\nDigite 2 = Plus" +
        "\nDigite 3 = Pro"
    ));

    let basic = 39;

    let plus = 59;

    let pro = 79;

    const internetExtra = confirm("Deseja internet extra no seu plano?");

    if (planoCelular === 1 && internetExtra === true) {
        alert("Desculpe, porém o plano no qual você tentou contratar não aceita internet extra.");
    } else if (planoCelular === 1 && internetExtra === false) {
        alert("Valor do plano contratado: R$ " + basic);
    }

    if (planoCelular === 2 && internetExtra === true) {
        alert("Valor do plano contratado com internet extra: R$ " + (plus + 15));
    } else if (planoCelular === 2 && internetExtra === false) {
        alert("Valor do plano contratado: R$ " + plus);
    }

    if (planoCelular === 3 && internetExtra === true) {
        alert("Valor do plano contratado com internet extra: R$ " + (pro + 15));
    } else if (planoCelular === 2 && internetExtra === false) {
        alert("Valor do plano contratado: R$ " + pro);
    }
};

function validarData() {
    let dataEscolhida = prompt("Digite uma data no formato XX/XX/XXXX");

    let partes = dataEscolhida.split("/");

    let dia = parseInt(partes[0].padStart(2, 0));

    let mes = parseInt(partes[1].padStart(2, 0));

    let ano = parseInt(partes[2]);

    if (dia > 0 && dia <= 31 && mes === 1) {
        alert("Data válida.");
    } else if (dia > 0 && dia <= 31 && mes === 3) {
        alert("Data válida.");
    } else if (dia > 0 && dia <= 31 && mes === 5) {
        alert("Data válida.");
    } else if (dia > 0 && dia <= 31 && mes === 7) {
        alert("Data válida.");
    } else if (dia > 0 && dia <= 31 && mes === 8) {
        alert("Data válida.");
    } else if (dia > 0 && dia <= 31 && mes === 10) {
        alert("Data válida.");
    } else if (dia > 0 && dia <= 31 && mes === 12) {
        alert("Data válida.");
    } else if (dia > 0 && dia <= 30 && mes === 4) {
        alert("Data válida.");
    } else if (dia > 0 && dia <= 30 && mes === 6) {
        alert("Data válida.");
    } else if (dia > 0 && dia <= 30 && mes === 9) {
        alert("Data válida.");
    } else if (dia > 0 && dia <= 30 && mes === 11) {
        alert("Data válida.");
    } else if (dia > 0 && dia <= 28 && mes === 2) {
        alert("Data válida.");
    } else if (dia > 0 && dia <= 29 && mes === 2 && ano % 4 === 0 || ano % 400 === 0 && ano % 100 === 1) {
        alert("Data válida.");
    } else {
        alert("Data inválida.")
    }
};

function calcularEnergia() {
    let consumo = parseFloat(prompt("Digite o seu consumo de energia."));

    let calculoConsumo100 = consumo * 0.60;

    let calculoConsumo199 = consumo * 0.75;

    let calculoConsumo150 = (consumo * 0.75) - (consumo * 0.15);

    let calculoConsumo200 = consumo * 0.90;

    const tarifaSocial = confirm("É tarifa social?");

    if (consumo < 0) {
        alert("Consumo inválido.")
    } else if (consumo >= 1 && consumo <= 100) {
        alert("Valor final do consumo = R$ " + calculoConsumo100.toFixed(2).replace(".", ","));
    } else if (consumo >= 101 && consumo <= 150 && tarifaSocial === true) {
        alert("Valor final do consumo (com 15% de desconto da tarifa) = R$ " + calculoConsumo150.toFixed(2).replace(".", ","));
    } else if (consumo >= 101 && consumo <= 150 && tarifaSocial === false) {
        alert("Valor final do consumo = R$ " + calculoConsumo199.toFixed(2).replace(".", ","));
    } else if (consumo >= 151 && consumo <= 199) {
        alert("Valor final do consumo = R$ " + calculoConsumo199.toFixed(2).replace(".", ","));
    } else if (consumo >= 200) {
        alert("Valor final do consumo = R$ " + calculoConsumo200.toFixed(2).replace(".", ","));
    }
};

function pagarMeiaEntrada() {
    let idade = parseInt(prompt("Digite a sua idade"));

    let regraIdade;

    const estudante = confirm("Você é estudante?");

    let regraEstudante;

    if (idade < 12) {
        regraIdade = "Menor de 12 anos.";
    } else if (idade >= 60) {
        regraIdade = "Pessoa com ou acima de 60 anos.";
    }

    if (estudante === true) {
        regraEstudante = "Pessoa estudante.";
    } else if (estudante === false) {
        regraEstudante = "";
    }

    if (idade < 12) {
        alert("Você tem direito de pagar meia-entrada pois:" +
            "\n" + regraIdade
        );
    } else if (idade >= 60) {
        alert("Você tem direito de pagar meia-entrada pois:" +
            "\n" + regraIdade
        );
    } else if (estudante === true) {
        alert("Você tem direito de pagar meia-entrada pois:" +
            "\n" + regraEstudante
        );
    } else {
        alert("Você pagará o preço cheio.");
    }
};

function jogarParTrincaSequencia() {
    let numero1 = parseInt(prompt("Digite um número."));

    let numero2 = parseInt(prompt("Digite um número."));

    let numero3 = parseInt(prompt("Digite um número."));

    let jeitoGanhar;

    let comeco;

    let meio;

    let fim;


    if (numero1 === numero2 && numero3 === numero1) {
        jeitoGanhar = "Ganhou com trinca!"
    }

    if (numero1 === numero2 && numero1 !== numero3 || numero1 === numero3 && numero1 !== numero2 || numero3 === numero2 && numero1 !== numero3) {
        jeitoGanhar = "Ganhou com par!"
    }

    if (numero1 < numero2 && numero2 < numero3) {
        jeitoGanhar = "Ganhou com sequência!"
    }

    if (numero1 < numero3 && numero3 < numero2) {
        jeitoGanhar = "Ganhou com sequência!"
    }

    if (numero2 < numero1 && numero1 < numero3) {
        jeitoGanhar = "Ganhou com sequência!"
    }

    if (numero2 < numero3 && numero3 < numero1) {
        jeitoGanhar = "Ganhou com sequência!"
    }

    if (numero3 < numero1 && numero1 < numero2) {
        jeitoGanhar = "Ganhou com sequência!"
    }

    if (numero3 < numero2 && numero2 < numero1) {
        jeitoGanhar = "Ganhou com sequência!"
    }

    if (numero1 <= 0 || numero2 <= 0 || numero3 <= 0) {
        alert("Só pode ser números de 1 a 6.");
    } else if (numero1 >= 7 || numero2 >= 7 || numero3 >= 7) {
        alert("Só pode ser números de 1 a 6.");
    } else if (numero1 === numero2 && numero3 === numero1) {
        alert(jeitoGanhar);
    } else if (numero1 === numero2 && numero1 !== numero3 || numero1 === numero3 && numero1 !== numero2 || numero3 === numero2 && numero1 !== numero3) {
        alert(jeitoGanhar);
    } else if (numero1 < numero2 && numero2 < numero3) {
        alert(jeitoGanhar);
    } else if (numero1 < numero3 && numero3 < numero2) {
        alert(jeitoGanhar);
    } else if (numero2 < numero1 && numero1 < numero3) {
        alert(jeitoGanhar);
    } else if (numero2 < numero3 && numero3 < numero1) {
        alert(jeitoGanhar);
    } else if (numero3 < numero1 && numero1 < numero2) {
        alert(jeitoGanhar);
    } else if (numero3 < numero2 && numero2 < numero1) {
        alert(jeitoGanhar);
    } else {
        alert("Sem combinação! Mais sorte da próxima vez.")
    }
}

function calcularEstoque() {
    let quantidade = parseInt(prompt("Digite a quantidade no estoque."));

    let estoqueMinimo = parseInt(prompt("Digite a quantidade mínima no estoque."));

    let calculoMinimo = (estoqueMinimo * 2);

    if (quantidade <= 0) {
        alert("Produto esgotado.")
    } else if (quantidade <= estoqueMinimo) {
        alert("Crítica.");
    } else if (quantidade > estoqueMinimo && quantidade <= calculoMinimo) {
        alert("Baixa.");
    } else if (quantidade >= calculoMinimo) {
        alert("OK!");
    }
};

function calcularContaRestaurante() {
    let valorConta = parseFloat(prompt("Digite o valor da conta."));

    let qualidade = parseInt(prompt("Avalie o serviço recebido com: 1 = Ruim, 2 = OK e 3 = Ótima."));

    let quantidadePessoas = parseInt(prompt("Quantas pessoas na mesa?"));

    const servicoAdicional = confirm("Teve serviço adicional?");

    let contaFinal = valorConta / quantidadePessoas;

    if (quantidadePessoas <= 0) {
        alert("Número de pessoas inválido.");
    } else if (qualidade === 1 && servicoAdicional === true) {
        alert("Valor da conta = R$ " + valorConta +
            "\nCom 5% de gorjeta (Ruim) e 10% de serviço adicional: R$ " + (((valorConta * 0.05) + (valorConta * 0.10)) + valorConta).toFixed(2).replace(".", ",") +
            "\nValor para cada pessoa: R$ " + ((((valorConta * 0.05) + (valorConta * 0.10)) + valorConta) / quantidadePessoas).toFixed(2).replace(".", ",")
        );
    } else if (qualidade === 2 && servicoAdicional === true) {
        alert("Valor da conta = R$ " + valorConta +
            "\nCom 10% de gorjeta (OK) e 10% de serviço adicional: R$ " + (((valorConta * 0.10) + (valorConta * 0.10)) + valorConta).toFixed(2).replace(".", ",") +
            "\nValor para cada pessoa: R$ " + ((((valorConta * 0.10) + (valorConta * 0.10)) + valorConta) / quantidadePessoas).toFixed(2).replace(".", ",")
        );
    } else if (qualidade === 3 && servicoAdicional === true) {
        alert("Valor da conta = R$ " + valorConta +
            "\nCom 15% de gorjeta (Ótima) e 10% de serviço adicional: R$ " + (((valorConta * 0.15) + (valorConta * 0.10)) + valorConta).toFixed(2).replace(".", ",") +
            "\nValor para cada pessoa: R$ " + ((((valorConta * 0.15) + (valorConta * 0.10)) + valorConta) / quantidadePessoas).toFixed(2).replace(".", ",")
        );
    } else if (qualidade === 1 && servicoAdicional === false) {
        alert("Valor da conta = R$ " + valorConta +
            "\nCom 5% de gorjeta (Ruim): R$ " + ((valorConta * 0.05) + valorConta).toFixed(2).replace(".", ",") +
            "\nValor para cada pessoa: R$ " + (((valorConta * 0.05) + valorConta) / quantidadePessoas).toFixed(2).replace(".", ",")
        );
    } else if (qualidade === 2 && servicoAdicional === false) {
        alert("Valor da conta = R$ " + valorConta +
            "\nCom 10% de gorjeta (OK): R$ " + ((valorConta * 0.10) + valorConta).toFixed(2).replace(".", ",") +
            "\nValor para cada pessoa: R$ " + (((valorConta * 0.10) + valorConta) / quantidadePessoas).toFixed(2).replace(".", ",")
        );
    } else if (qualidade === 3 && servicoAdicional === false) {
        alert("Valor da conta = R$ " + valorConta +
            "\nCom 15% de gorjeta (Ótima): R$ " + ((valorConta * 0.15) + valorConta).toFixed(2).replace(".", ",") +
            "\nValor para cada pessoa: R$ " + (((valorConta * 0.15) + valorConta) / quantidadePessoas).toFixed(2).replace(".", ",")
        );
    }
};

function calcularFrete() {
    let peso = parseFloat(prompt("Digite o peso do seu produto (Kg)."));

    let valorPeso;

    let distancia = parseFloat(prompt("Digite o peso do seu produto (Km)."));

    let valorDistancia;

    if (peso <= 2) {
        valorPeso = 12;
    } else if (peso <= 10) {
        valorPeso = 25;
    } else if (peso >= 11) {
        valorPeso = 40;
    }

    if (distancia <= 100) {
        valorDistancia = 0;
    } else if (distancia >= 101 && distancia <= 499) {
        valorDistancia = 15;
    } else if (distancia >= 500) {
        valorDistancia = 30;
    }

    if (peso <= 0) {
        alert("Peso inválido");
    } else if (peso <= 2 && distancia <= 100) {
        alert("Valor final: R$ " + (valorPeso + valorDistancia));
    } else if (peso <= 2 && distancia >= 101 && distancia <= 499) {
        alert("Valor final: R$ " + (valorPeso + valorDistancia));
    } else if (peso <= 2 && distancia >= 500) {
        alert("Valor final: R$ " + (valorPeso + valorDistancia));
    } else if (peso <= 10 && distancia <= 100) {
        alert("Valor final: R$ " + (valorPeso + valorDistancia));
    } else if (peso <= 10 && distancia >= 101 && distancia <= 499) {
        alert("Valor final: R$ " + (valorPeso + valorDistancia));
    } else if (peso <= 10 && distancia >= 500) {
        alert("Valor final: R$ " + (valorPeso + valorDistancia));
    } else if (peso >= 11 && distancia <= 100) {
        alert("Valor final: R$ " + (valorPeso + valorDistancia));
    } else if (peso >= 11 && distancia >= 101 && distancia <= 499) {
        alert("Valor final: R$ " + (valorPeso + valorDistancia));
    } else if (peso >= 11 && distancia >= 500) {
        alert("Valor final: R$ " + (valorPeso + valorDistancia));
    }
};

function verificarHorario() {
    let diaSemana = parseInt(prompt("Digite o dia da semana (1 = dom, 2 = seg, 3 = ter, ..., 7 = sab)."));

    let hora = parseInt(prompt("Digite o horario (0 - 23)."));

    const feriado = confirm("Dia útil e feriado?");

    if (diaSemana <= 0 || diaSemana >= 8) {
        alert("Dia digitado inválido.");
    } else if (hora < 0 || hora >= 24) {
        alert("Hora digitada inválida.");
    } else if (diaSemana === 1) {
        alert("Fechados ao domingo.");
    } else if (diaSemana >= 2 && diaSemana <= 6 && hora >= 9 && hora <= 18 && feriado === true) {
        alert("Fechado por conta de feriado.");
    } else if (diaSemana >= 2 && diaSemana <= 6 && hora >= 9 && hora <= 18 && feriado === false) {
        alert("Aberto de segunda a sexta entre 9 horas até as 18 horas.");
    } else if (diaSemana === 7 && hora >= 9 && hora <= 13 && feriado === true) {
        alert("Fechado por conta de feriado.");
    } else if (diaSemana === 7 && hora >= 9 && hora <= 13 && feriado === false) {
        alert("Aberto de sábado entre 9 horas até as 13 horas.");
    } else {
        alert("Fechado.");
    }
};

function verificarNotas() {
    let nota1 = parseFloat(prompt("Digite a primeira nota."));

    let nota2 = parseFloat(prompt("Digite a segunda nota."));

    let nota3 = parseFloat(prompt("Digite a terceira nota."));

    let nota4 = parseFloat(prompt("Digite a quarta nota."));

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        alert("Uma das notas digitadas é inválida.");
    } else if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10) {
        alert("Uma das notas digitadas é inválida.");
    } else if (media >= 7) {
        alert("Media do aluno: " + media.toFixed(1) +
            "\nAluno aprovado.");
    } else if (media >= 5 && media <= 6.9) {
        alert("Media do aluno: " + media.toFixed(1) +
            "\nAluno em recuperação.");
    } else if (media < 5) {
        alert("Media do aluno: " + media.toFixed(1) +
            "\nAluno reprovado.");
    }
};

function confirmarLogin() {
    let perfil = parseInt(prompt("Digite o nível do seu perfil. (1 = usuário, 2 = gestor ou 3 = admin)."));

    let senha = parseInt(prompt("Digite a sua senha."));

    if (perfil <= 0) {
        alert("Tipo de perfil inexistente.");
    } else if (perfil > 3) {
        alert("Tipo de perfil inexistente.");
    } else if (perfil === 1) {
        alert("Acesso para usuário liberado.")
    } else if (perfil === 2 && senha % 2 === 0) {
        alert("Acesso para gestor liberado.")
    } else if (perfil === 2 && senha % 2 === 1) {
        alert("Acesso para gestor negado." +
            "\nMotivo: chave de acesso não é par.")
    } else if (perfil === 3 && senha % 5 === 0 && senha > 100) {
        alert("Acesso para admin liberado."
        )
    } else if (perfil === 3 && senha < 100) {
        alert("Acesso para admin negado. " +
            "\nMotivo: chave de acesso não é maior que 100.")
    } else if (perfil === 3 && senha % 5 === 1 && senha < 100) {
        alert("Acesso para admin negado. " +
            "\nMotivo: não é multiplo de 5;" +
            "\nChave de acesso não é maior que 100.")
    } else if (perfil === 3 && senha % 5 === 1) {
        alert("Acesso para admin negado. " +
            "\nMotivo: não é multiplo de 5."
        )
    }
};

function calcularEtanolGasolina() {
    let precoEtanol = parseFloat(prompt("Digite o valor do etanol."));

    let precoGasolina = parseFloat(prompt("Digite o valor da gasolina."));

    if (precoEtanol < 0) {
        alert("Preço do etanol negativo.")
    } else if (precoGasolina < 0) {
        alert("Preço da gasolina negativo.")
    } else if (precoEtanol <= precoGasolina * 0.7) {
        alert("Etanol compensa mais neste caso pois está mais barato do que gasolina.");
    } else if (precoEtanol > precoGasolina * 0.7) {
        alert("Gasolina compensa mais neste caso pois está mais barato do que etanol.")
    }
};

function confirmarSenha() {
    let senha = prompt("Digite sua senha.").trim();

    let confirmarSenha = prompt("Confirme sua senha.").trim();

    if (senha === "") {
        alert("Senha digitada está vazia.");
    } else if (confirmarSenha === "") {
        alert("Confirmação de senha digitada está vazia.")
    } else if (senha.length < 6) {
        alert("Senha muito fraca.( tem que ter no mínimo 6 caractéres).");
    } else if (senha !== confirmarSenha) {
        alert("Senhas não coincidem.");
    } else if (senha === confirmarSenha) {
        alert("Senha cadastrada com sucesso!");
    }
};

function classificarTemperatura() {
    let temperatura = parseFloat(prompt("Digite a temperatura em °C."));

    if (temperatura < 0) {
        alert("Você esta congelando, não está?");
    } else if (temperatura >= 0 && temperatura <= 14) {
        alert("Esta um pouco frio aí.");
    } else if (temperatura >= 15 && temperatura <= 25) {
        alert("Clima bem agradável.")
    } else if (temperatura >= 26 && temperatura <= 35) {
        alert("Esta um pouco quente aí.")
    } else if (temperatura > 35) {
        alert("Amostra grátis do inferno.")
    }
};

function validarHoraProva() {
    let horaEntrada = parseInt(prompt("Digite a hora de entrada para a prova (0-23)."));

    let tempoProva = parseInt(prompt("Digite o tempo de prova (min)."));

    if (horaEntrada < 0 || horaEntrada > 24) {
        alert("Hora digitada inválida.");
    } else if (tempoProva < 0) {
        alert("Tempo digitado inválido.");
    } else if (horaEntrada === 10 && tempoProva <= 120) {
        alert("Entrada permitida no limite do tempo.");
    } else if (horaEntrada >= 8 && horaEntrada <= 10) {
        alert("Entrada permitida.");
    } else {
        alert("Entrada negada.");
    }
};

function validarSeguro() {
    let idade = parseInt(prompt("Digite sua idade."));

    let anosCnh = parseInt(prompt("Digite quantos anos tem de CNH."));

    const pontos = confirm("Possui pontos na carteira dentro de 12 meses?");

    let valorSeguro = 1500;
    if (idade >= 21 && anosCnh >= 2 && pontos === false) {
        alert("Você é elegível ao seguro! Valor base: R$ " + valorSeguro);
    } else if (idade < 25 || anosCnh < 3 && pontos === false) {
        alert("Você é elegível ao seguro! Valor base: R$ " + valorSeguro +
            "\nPor conta de certos critérios, o valor ajustado para sua condição sera de: R$ " + ((valorSeguro * 0.20) + valorSeguro))
    } else {
        alert("Desculpa, porém você não é elegível ao seguro.")
    }
};