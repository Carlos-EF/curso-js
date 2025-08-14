function calcularNota() {
    let nota1 = parseFloat(prompt("Digite sua nota"));

    let nota2 = parseFloat(prompt("Digite sua nota"));

    let nota3 = parseFloat(prompt("Digite sua nota"));

    let nota1Final = nota1 * 2;

    let nota2Final = nota1 * 3;

    let nota3Final = nota1 * 5;

    let mediaPonderada = (nota1Final + nota2Final + nota3Final) / 10;

    if (mediaPonderada >= 7) {
        alert("Sua nota final: " + mediaPonderada.toFixed(2) +
            "\nParabéns! Você está aprovado!"
        );
    } else if ( 5 <= mediaPonderada < 7) {
        let notaExame = parseFloat(prompt("Digite sua nota do exame."));
        let notaFinal = (mediaPonderada + notaExame) / 2;
        if (notaFinal >= 6) {
            alert("Sua nota final: " +  notaFinal +
                "\nParabéns! Você está aprovado com exame!"
        )
        } else if (notaFinal < 6) {
            
        }
    }
}