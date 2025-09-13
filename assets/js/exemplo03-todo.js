let body = document.getElementsByTagName("body")[0];

let ol = document.createElement("ol");

ol.id = "lista-tarefas"

function criarTituloPagina() {
    let h1 = document.createElement("h1");

    h1.innerText = "Minhas Tarefas do Curso SuperDev";

    body.appendChild(h1);
};

function criarDescricaoSuperDev() {
    let p = document.createElement("p");

    p.innerText = "Maturidade é saber que o curso do SuperDev não é fruta :D";

    body.appendChild(p);
};

function criarTituloTarefa() {
    let TituloTarefa = document.createElement("label");

    TituloTarefa.setAttribute("for", "campo-tarefa")

    TituloTarefa.innerText = "Tarefas para fazer";

    let digitarTarefa = document.createElement("input");

    digitarTarefa.id = "campo-tarefa";

    digitarTarefa.setAttribute("type", "text");

    body.appendChild(TituloTarefa);

    body.appendChild(digitarTarefa);
}


function registrar() {
    let registro = document.getElementById("campo-tarefa");

    let salvarRegistro = registro.value;

    let data = document.getElementById("campo-data");

    let dataFinal = data.value;

    let partes = dataFinal.split("-");

    const ordemCerta = `${partes[2]}/${partes[1]}/${partes[0]}`;

    data = ` ,data prevista para fazer a tarefa: ${ordemCerta}`;

    salvarRegistro = registro.value + data;

    criarItemLista(salvarRegistro);
}

function criarItemLista(salvarRegistro) {
    let li = document.createElement("li");

    li.innerText = salvarRegistro;

    ol.appendChild(li);
}

function criarLista() {
    body.appendChild(ol);
}

function digitarData() {
    let input = document.createElement("input");

    input.setAttribute("type", "date");

    input.id = "campo-data";

    let label = document.createElement("label");

    label.setAttribute("for", "campo-data");

    label.innerText = "Data prevista para fazer";

    body.appendChild(label);

    body.appendChild(input);
}

function criarBotao() {
    let botao = document.createElement("button");

    botao.setAttribute("type", "button");

    botao.innerText = "Registrar";

    botao.addEventListener("click", registrar);

    body.appendChild(botao);
}

function botaoLimparLista() {
    let botao = document.createElement("button");

    botao.setAttribute("type", "button");

    botao.innerHTML = "Apagar";

    botao.addEventListener("click", apagar);

    body.appendChild(botao);
}

function apagar() {
    ol.innerHTML = "";
}

criarTituloPagina();

criarDescricaoSuperDev();

criarTituloTarefa();

digitarData();

criarBotao();

criarLista();

botaoLimparLista();
