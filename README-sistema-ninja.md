# 🥷 Exercício JS — Cadastro de Ninjas (funções sem parâmetros + while)

**Objetivo:** desenvolver um programa em JavaScript que cadastre ninjas enquanto o usuário desejar, utilizando **apenas funções sem parâmetros**, um **laço `while`** para repetir o cadastro, **validações** e **relatórios** ao final. Todas as solicitações de dados do ninja devem ser feitas **em funções separadas**.

---

## ✅ Requisitos técnicos

* **Somente funções sem parâmetros** (use retorno para passar dados).
* **Cadastro repetido com `while`** perguntando: *“Deseja cadastrar outro ninja?”*.
* **Cada dado** do ninja deve ter **sua própria função** de solicitação/validação.
* Ao final, gerar um **relatório** com os cálculos pedidos.

---

## 🧾 Dados de cada ninja (com validação)

* **Nome**: mínimo 3, máximo 40 caracteres.
* **Nível**: `Genin`, `Chūnin`, `Jōnin I`, `Jōnin II`, `ANBU`, `Kage`.
* **Quantidade de missões**: mínimo **5**, máximo **200** (número inteiro).
* **Vila**: `Vila da Folha`, `Vila da Areia`, `Vila da Névoa`, `Vila da Nuvem`, `Vila da Pedra`, `Vila da Chuva`, `Vila da Grama`, `Vila da Cachoeira`, `Vila do Som`.
* **Elemento** (um por ninja): `Fogo`, `Vento`, `Relâmpago`, `Terra`, `Água`.

> Dica: normalize maiúsculas/minúsculas e recuse entradas inválidas, pedindo novamente.

---

## 💰 Salário por nível (tabela fixa)

* Genin → **R\$ 1.200**
* Chūnin → **R\$ 2.500**
* Jōnin I → **R\$ 5.000**
* Jōnin II → **R\$ 7.000**
* ANBU → **R\$ 9.000**
* Kage → **R\$ 15.000**

O salário **não é digitado**: calcule automaticamente a partir do nível.

---

## 📊 Relatórios ao final

Calcule e exiba:

1. **Qtd de dominantes por elemento** *(5 contadores: Fogo, Vento, Relâmpago, Terra, Água)*.
2. **Menor quantidade de missões** entre todos os ninjas cadastrados.
3. **Média das missões** de todos os ninjas.

---

## 🔁 Fluxo esperado

1. Mostrar uma **boas-vindas**.
2. **Loop `while`**:

   * Chamar funções que coletam **nome**, **nível**, **missões**, **vila**, **elemento** (cada uma com validação).
   * Calcular **salário** a partir do nível (função dedicada).
   * Montar o objeto do ninja e **guardar no array**.
   * Perguntar **“Deseja cadastrar outro ninja? (s/n)”**.
3. Ao sair do loop, gerar e mostrar o **relatório**.

---

## 🔧 Sugestão de funções (todas sem parâmetros)

* `obterNome()`, `obterNivel()`, `obterQuantidadeMissoes()`, `obterVila()`, `obterElemento()`
* `calcularSalarioPorNivel()`
* `desejaContinuar()`
* `gerarRelatorio()` (lê o array e imprime todos os cálculos)

> Você pode ter funções auxiliares internas para **validar** e **normalizar** strings.

---

## 🧪 Critérios de avaliação

* Cumpriu **funções sem parâmetros** e **separação por responsabilidade**.
* Validações corretas (rejeita valores fora das regras).
* Uso adequado do **`while`** para controle do fluxo.
* Cálculos do relatório **corretos** e bem formatados.
* Código **organizado**, nomes claros e comentários objetivos.

---

## 🌟 Desafios (opcionais)

* Permitir **múltiplos elementos** por ninja (array) e atualizar o relatório.
* Exibir o relatório em **tabela** no console (strings alinhadas).
* Ordenar e mostrar o **Top 3** por quantidade de missões.

---

Quer que eu gere um **esqueleto de código** com essas funções já declaradas (sem parâmetros) para seus alunos completarem?
