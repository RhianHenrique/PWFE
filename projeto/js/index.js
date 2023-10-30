/**
 * @author Victor Hugo
 * @author José
 */

document.querySelector("#student-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const data = document.getElementById("data").value || new Date().toISOString().substr(0, 10);
    const cpf = document.getElementById("cpf").value;
    const matricula = document.getElementById("matricula").value;
    const nome = document.getElementById("nome").value;
    const numero = document.getElementById("numero").value;
    const disciplina = document.getElementById("disciplina").value;
    const turma = document.getElementById("turma").value;
    const notaProva1 = parseFloat(document.getElementById("nota1").value);
    const notaProva2 = parseFloat(document.getElementById("nota2").value);
    const notaProva3 = parseFloat(document.getElementById("nota3").value);
    const notaTrabalho1 = parseFloat(document.getElementById("nota-trabalho1").value);
    const notaTrabalho2 = parseFloat(document.getElementById("nota-trabalho2").value);
    const notaTrabalho3 = parseFloat(document.getElementById("nota-trabalho3").value);

    if (isNaN(notaProva1) || isNaN(notaProva2)  || isNaN(notaProva3)  || isNaN(notaTrabalho1)  || isNaN(notaTrabalho2)  || isNaN(notaTrabalho3)) {
        alert("Insira valores numéricos válidos para as notas.");
        return;
    }

    if(notaProva1 < 0 || notaProva2 < 0 || notaProva3 < 0 || notaTrabalho1 < 0 || notaTrabalho2 < 0 || notaTrabalho3 < 0) {
        alert("As notas não podem ser negativas.");
        return;
    }

    if (notaProva1 > 10 || notaProva2 > 10 || notaProva3 > 10 || notaTrabalho1 > 10 || notaTrabalho2 > 10 || notaTrabalho3 > 10) {
        alert("As notas não podem ser maiores que 10.");
        return;
    }

    const maiorNotaProva = calcularMaiorNota(notaProva1, notaProva2, notaProva3);
    const menorNotaProva = calcularMenorNota(notaProva1, notaProva2, notaProva3);
    const mediaNotaProva = calcularMedia(notaProva1, notaProva2, notaProva3);

    const maiorNotaTrabalho = calcularMaiorNota(notaTrabalho1, notaTrabalho2, notaTrabalho3);
    const menorNotaTrabalho = calcularMenorNota(notaTrabalho1, notaTrabalho2, notaTrabalho3);
    const mediaNotaTrabalho = calcularMedia(notaTrabalho1, notaTrabalho2, notaTrabalho3);

    const resultadoAprovacao = estaAprovado(mediaNotaProva, mediaNotaTrabalho);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
    <h2>Informações do Aluno</h2>
    <p>Data: ${data}</p>
    <p>CPF do Aluno: ${cpf}</p>
    <p>Matrícula do Aluno: ${matricula}</p>
    <p>Nome do Aluno: ${nome}</p>
    <p>Número do Aluno: ${numero}</p>
    <p>Nome da Turma: ${turma}</p>
    <p>Nome da Disciplina: ${disciplina}</p>
    <p>Maior Nota Prova: ${maiorNotaProva}</p>
    <p>Menor Nota Prova: ${menorNotaProva}</p>
    <p>Média Nota prova: ${mediaNotaProva.toFixed(2)}</p>
    <p>Maior Nota Trabalho: ${maiorNotaTrabalho}</p>
    <p>Menor Nota Trabalho: ${menorNotaTrabalho}</p>
    <p>Média Nota Trabalho: ${mediaNotaTrabalho.toFixed(2)}</p>
    <p>Resultado: ${resultadoAprovacao}</p>`;
});


/**
 * @author Victor Hugo
 */
function calcularMaiorNota(nota1, nota2, nota3) {
    return Math.max(nota1, nota2, nota3);
}

/**
 * @author José
 */
function calcularMenorNota(nota1, nota2, nota3) {
    return Math.min(nota1, nota2, nota3);
}

/**
 * @author Rhian
 */
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

/**
 * @author Pedro
 * @author Rhian
 */
function estaAprovado(mediaProva, mediaTrabalho) {
    if(mediaProva > 5 && mediaTrabalho > 5){
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}