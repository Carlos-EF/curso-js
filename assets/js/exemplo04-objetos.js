function exemploDadosPacientes() {
    // Utilizando multiplas variáveis
    let tipoSanguineo = "A+";
    let cpf = "102.123.1239-20";
    let idade = 20;
    let nome = "Maria";

    console.log(`Nome: ${nome}
        Tipo Sanguíneo: ${tipoSanguineo}
        Idade: ${idade}
        CPF: ${cpf}`);

    // Criando um objeto para armazenar várias características
    let pacienteMaria = {
        tipoSanguineo: "A+",
        cpf: "102.123.1239-20",
        idade: 20,
        nome: "Maria"
    };

    // Alterar a idade da Maria
    pacienteMaria.idade = 21;

    console.log(`Nome: ${pacienteMaria.nome}
        Tipo Sanguíneo: ${pacienteMaria.tipoSanguineo}
        Idade: ${pacienteMaria.idade}
        CPF: ${pacienteMaria.cpf}`)
}

/*
 Criar uma função exercicioDadosJogo
    Criar as seguintes variáveis: nome, genero, dataLancamento (string)
    Apresentar as variáveis
    Criar um objeto chamado jogo com os atributos (nome, genero, dataLancamento)
    Apresentar o objeto por completo
    Adicionar os seguintes atributos no objeto do jogo (categoria, preco)
    Apresentar o objeto por completo
*/

function exercícioDadosJogos() {
    let nomeJogo = "Darksiders 2";

    let generoJogo = "Ação";

    let dataLancamentoJogo = "2012";

    console.log(`
        Nome do jogo: ${nomeJogo}
        Genêro do Jogo: ${generoJogo}
        Data de lançamento: ${dataLancamentoJogo}`);

    let jogo = {
        nomeJogo: "Darksiders 2",
        generoJogo: "Ação",
        dataLancamentoJogo: "2012"
    }

    console.log(`Apresentar com objetos:
        Nome do jogo: ${jogo.nomeJogo}
        Genêro do jogo: ${jogo.generoJogo}
        Data de lançamento: ${jogo.dataLancamentoJogo}`)

    jogo.preco = 79.90;

    jogo.publisher = "THQ";

    console.log(`
        Nome do jogo: ${jogo.nomeJogo}
        Genêro do jogo: ${jogo.generoJogo}
        Data de lançamento: ${jogo.dataLancamentoJogo}
        Preço: ${jogo.preco.toFixed(2)}
        Publisher do jogo: ${jogo.publisher}`)
};

function exemploObjetoEmVetor() {
    let alunos = [];

    let aluno1 = {};
    aluno1.nome = prompt("Digite o nome do Aluno");

    aluno1.nota1 = parseFloat(prompt("Digite a nota 1"));

    aluno1.nota2 = parseFloat(prompt("Digite a nota 2"));

    aluno1.nota3 = parseFloat(prompt("Digite a nota 3"));

    //aluno1.media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;

    aluno1.media = calcularMedia(aluno1);

    alunos.push(aluno1);

    let aluno2 = {};
    aluno2.nome = prompt("Digite o nome do Aluno");

    aluno2.nota1 = parseFloat(prompt("Digite a nota 1"));

    aluno2.nota2 = parseFloat(prompt("Digite a nota 2"));

    aluno2.nota3 = parseFloat(prompt("Digite a nota 3"));

    aluno2.media = calcularMedia(aluno2);

    alunos.push(aluno2);

    console.table(alunos);
};

function calcularMedia(aluno) {
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    return media;
};

/*
Ex. 2: Criar uma lista de colaboradores
    Solicitar os dados armazenando em objetos
    Atributos: nome, valor hroa, quantidade de horas
    Criar uma função para calcular o salario Bruto, armazenando no objeto
    Apresentar os objetos com o console.table
*/

function armazenarColaboradores() {
    let colaboradores = [];

    let colaborador1 = {};

    colaborador1.nome = prompt("Digite o nome do colaborador");

    colaborador1.valorHora = parseFloat(prompt("Digite o valor ganho por hora"));

    colaborador1.quantidadeHoras = parseFloat(prompt("Digite a quantidade de horas trabalhadas"));

    colaborador1.salario = calcularSalarioBruto(colaborador1);

    colaboradores.push(colaborador1);

    let colaborador2 = {};

    colaborador2.nome = prompt("Digite o nome do colaborador");

    colaborador2.valorHora = parseFloat(prompt("Digite o valor ganho por hora"));

    colaborador2.quantidadeHoras = parseFloat(prompt("Digite a quantidade de horas trabalhadas"));

    colaborador2.salario = calcularSalarioBruto(colaborador2);

    colaboradores.push(colaborador2);

    let colaborador3 = {};

    colaborador3.nome = prompt("Digite o nome do colaborador");

    colaborador3.valorHora = parseFloat(prompt("Digite o valor ganho por hora"));

    colaborador3.quantidadeHoras = parseFloat(prompt("Digite a quantidade de horas trabalhadas"));

    colaborador3.salario = calcularSalarioBruto(colaborador3);

    colaboradores.push(colaborador3);
    
    console.table(colaboradores);
}

function calcularSalarioBruto(colaborador) {
    const calculoSalarioBruto = colaborador.quantidadeHoras * colaborador.valorHora;
    return calculoSalarioBruto;
}