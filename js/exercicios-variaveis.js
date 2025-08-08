function coletarInformacoes() {
    let nome = prompt("Digite seu nome.");

    let idade = parseInt(prompt("Digite sua idade."));

    let altura = parseFloat(prompt("Digite sua altura."));

    console.log("Olá, meu nome é " + nome + ", tenho " + idade + " anos e minha altura é " + altura + " metros.");
}

function calcularIdadeFutura() {
    let idade = parseInt(prompt("Digite sua idade."));

    let idadeFutura = idade + 5;

    alert("Você tem " + idade + " e daqui 5 anos terá " + idadeFutura + ".");
}

function converterMoedas() {
    let valor = parseFloat(prompt("Digite um valor"));

    let conversao = valor * 5;

    parseFloat(alert("O valor digitado convertido em dolar ficará " + conversao));
}

function acenderLuz() {
    let luzAcesa = false;

    let ordem = parseInt(prompt("Digite 1 ou 0"));

    if (ordem === 1) {
        console.log("A luz está acesa.");
    } else if (ordem ===0){
        console.log("A luz está apagada.");
    } else {
        console.log("Nada aconteceu.");
    }
}

function calcularArea() {
    let largura = parseFloat(prompt("Digite a largura do seu retângulo."));

    let altura = parseFloat(prompt("Digite a altura do seu retângulo."));

    let calculo = largura * altura;

    console.log("A área do seu retângulo é " + calculo.toFixed(2) + " metros quadrados.");
}

function calcularMedia() {
    let nota = parseFloat(prompt("Digite a primeira nota."));

    let nota1 = parseFloat(prompt("Digite a segunda nota."));

    let nota2 = parseFloat(prompt("Digite a terceira nota."));

    let media = (nota + nota1 + nota2) / 3;

    console.log("A média das notas é " + media.toFixed(2));
} 

function calcularDesconto() {
    let preco = parseFloat(prompt("Digite o preço original do produto."));

    let desconto = parseInt(prompt("Digite a porcentagem do desconto obtido."));

    let calculo = (desconto * preco) / 100;

    let valor = preco - calculo;

    console.log("A valor final com desconto é R$ " + valor);
}

function converterTemperatura() {
    let celsius = parseFloat(prompt("Digite uma temperatura em Celsius."));

    let fahrenheit = (celsius * (9 / 5) + 32);

    console.log("A temperatura em Fahrenheit ficará assim: F " + fahrenheit);
}

function calcular() {
    let numero = parseInt(prompt("Digite o primeiro número."));

    let numero1 = parseInt(prompt("Digite o segundo número."));

    let soma = numero + numero1;

    let multiplicacao = numero * numero1;

    console.log("A soma é " + soma);

    console.log("O produto é " + multiplicacao);
}