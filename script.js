const btnTheme = document.getElementById('btn-theme');

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});



function verificarQuiz() {
    const r1 = document.querySelector('input[name="p1"]:checked');
    const r2 = document.querySelector('input[name="p2"]:checked');
    
    const resultadoBox = document.getElementById('resultado-box');
    const resultadoTexto = document.getElementById('resultado-texto');

    if (!r1 || !r2) {
        alert("Por favor, responda todas as perguntas antes de enviar!");
        return;
    }
    let acertos = 0;

    if (r1.value === "correto") acches = acertos++;
    if (r2.value === "correto") acches = acertos++;

    if (acertos === 2) {
        resultadoTexto.textContent = " Parabéns! Você acertou todas as 2 questões!";
    } else if (acertos === 1) {
        resultadoTexto.textContent = " Você acertou 1 de 2 questões. Leia o texto novamente!";
    } else {
        resultadoTexto.textContent = " Ops! Nenhuma resposta correta. Que tal reler o texto?";
    }

    resultadoBox.classList.remove('oculto');
}