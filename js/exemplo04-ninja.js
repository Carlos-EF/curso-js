function sistemaNinja() {
    let desejaCadastrar = true;
    while (desejaCadastrar = true) {
        let nome = solicitarNome();
        let nivel = solicitarNivel();
        let missoes = solicitarQuantidadeMissoes();
        let vila = solicitarVila();
        let elementos = solicitarElementos();

        desejaCadastrar = confirm("Deseja cadastar outro ninja?");
    }
}

function solicitarNome(){
    let nomeNinja = prompt("Digite o nome do ninja");
    return nomeNinja;
}

function solicitarNivel(){
    let nivelNinja = prompt("Digite o nível");
    return nivelNinja; 
}

function solicitarQuantidadeMissoes(){
    let missoesNinja = parseInt(prompt("Digite a quantidade de missões"));
    return missoesNinja;
}

function solicitarVila(){
    let nomeVila = prompt("Digite o nome da vila");
    return nomeVila;
}

function solicitarElementos(){
    let nomeElementos = prompt("Digite os elementos separados por ';'");
    return nomeElementos;
}