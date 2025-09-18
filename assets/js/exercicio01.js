// Criar uma lista de 7 carros com os atributos (marca, placa, modelo, data de emplacamento, cor).
let carros = [
    {
        "marca": "Ford",
        "placa": "BRA1E45",
        "modelo": "Mustang",
        "data_de_emplacamento": "2024-12-21",
        "cor": "Branco"
    },
    {
        "marca": "Toyota",
        "placa": "RIC4H34",
        "modelo": "Corolla",
        "data_de_emplacamento": "2020-12-01",
        "cor": "Preto"
    },
    {
        "marca": "Fiat",
        "placa": "BRA6G33",
        "modelo": "Argo",
        "data_de_emplacamento": "2023-04-30",
        "cor": "Amarelo"
    },
    {
        "marca": "Volkswagen",
        "placa": "NAG8T20",
        "modelo": "T-Cross",
        "data_de_emplacamento": "2023-01-12",
        "cor": "Cinza"
    },
    {
        "marca": "Chevrolet",
        "placa": "JIK5R62",
        "modelo": "Onix Plus",
        "data_de_emplacamento": "2025-09-13",
        "cor": "Vermelho"
    },
    {
        "marca": "Fiat",
        "placa": "BRA4D32",
        "modelo": "Cronos",
        "data_de_emplacamento": "2024-04-12",
        "cor": "Azul"
    },
    {
        "marca": "Jeep",
        "placa": "SAO1R45",
        "modelo": "Renegade",
        "data_de_emplacamento": "2024-06-01",
        "cor": "Preto"
    }
];

// a) Criar uma lista de string com as marcas a partir da lista de carros (utilizar map)

let marcaCarros = carros.map(carro => carro.marca);

// b) Criar uma lista de objetos com placa, modelo da lista de carros (utilizar map)
let dadosCarro = carros.map(carro => {
    return {
        placa: carro.placa,
        modelo: carro.modelo
    };
});

// c) Criar uma lista de string com os modelos filtrando por marca Fiat.
let carrosFiat = carros.filter(carro => carro.marca === "Fiat");

let carrosFiatModelos = carrosFiat.map(carro => carro.modelo);

// d - Criar uma lista de (marca, modelo) filtrando por Azul
let carrosCorAzul = carros.filter(carro => carro.cor === "Azul");

let marcaModelosCarroAzul = carrosCorAzul.map(carro => {
    return {
        marca: carro.marca,
        modelo: carro.modelo
    };
});

// e - Criar uma lista filtrando por ano de emplacamento 2025
let pegarAnos = carros.filter(carro => {
    let anos = new Date(carro.data_de_emplacamento);

    if (anos.getFullYear() === 2025) {
        return true;
    } else {
        return false;
    }
});

// Criar uma lista de 2 alunos com os seguintes atributos (id, nome, sobrenome, número matricula, turma, notas (lista com 3 notas))
let alunos = [
    {
        "id": crypto.randomUUID(),
        "nome": "Fernando",
        "sobrenome": "Souza",
        "numero_matricula": "2023010299",
        "turma": "Sup 05",
        "notas": [10, 8.5, 7.6]
    },
    {
        "id": crypto.randomUUID(),
        "nome": "Rebeca",
        "sobrenome": "Moura",
        "numero_matricula": "2023021499",
        "turma": "Sup 06",
        "notas": [9, 9.5, 9.5]
    }
];

// a- Adicionar um aluno com id, nome, sobrenome, notas (lista vazia)
let novoALuno = {
    "id": crypto.randomUUID(),
    "nome": "Diego",
    "sobrenome": "Diaz",
    "numero_matricula": "2025030299",
    "notas": []
}

alunos.push(novoALuno);

// b- Adicionar um aluno com id, nome, sobrenome, número da matrícula, turma, notas
let segundoNovoAluno = {
    "id": crypto.randomUUID(),
    "nome": "Beatriz",
    "sobrenome": "Lima",
    "numero_matricula": "2025091299",
    "turma": "Sup 07",
    "notas": [10, 7.5, 8.8]
};

alunos.push(segundoNovoAluno);

// c- Adicionar um aluno com id, nome, sobrenome, número da matricula, notas
let terceiroNovoAluno = {
    "id": crypto.randomUUID(),
    "nome": "José",
    "sobrenome": "Ribeiro",
    "numero_matricula": "2024120299",
    "notas": [6, 5.5, 7.8]
};

alunos.push(terceiroNovoAluno);

// d- Adicionar um aluno preenchendo id, nome, sobrenome, notas
let quartoNovoALuno = {
    "id": crypto.randomUUID(),
    "nome": "Mayara",
    "sobrenome": "Lima",
    "notas": [7, 7.5, 8.8]
}

alunos.push(quartoNovoALuno);

// e- Criar uma lista com os ids dos alunos
let somenteIdsALunos = alunos.map(aluno => aluno.id);

// f- Criar uma lista com os ids dos alunos filtrando pela turma Sup 07
let idsAlunosTurmaSup07 = alunos.filter(aluno => aluno.turma === "Sup 07").map(aluno => aluno.id);

// g- Criar uma lista filtrando por alunos com nome menor que 10
let nomeMenorQue10Caracteres = alunos.filter(aluno => aluno.nome.length < 10).map(aluno => aluno.nome);

// h- Criar uma lista filtrando com os números das matrículas
let numerosMatricula = alunos.map(aluno => aluno.numero_matricula);

// i- Criar uma lista filtrando alunos sem número de matricula
let alunosSemMatricula = alunos.filter(aluno => {
    if (aluno.numero_matricula === undefined) {
        return true;
    } else {
        return false;
    }
});


