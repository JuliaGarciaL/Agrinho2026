// ///////////////////////////////////////////
// 1. ALTERNAR MODO ESCURO (Acessibilidade)
// ///////////////////////////////////////////
const btnTheme = document.getElementById('btn-theme');

btnTheme.addEventListener('click', () => {
    // Adiciona ou remove a classe dark-mode do corpo da página
    document.body.classList.toggle('dark-mode');
});


// ///////////////////////////////////////////
// 2. LÓGICA DE VALIDAÇÃO DO QUIZ
// ///////////////////////////////////////////
function verificarQuiz() {
    // Variáveis para armazenar as respostas selecionadas
    const r1 = document.querySelector('input[name="p1"]:checked');
    const r2 = document.querySelector('input[name="p2"]:checked');
    
    const resultadoBox = document.getElementById('resultado-box');
    const resultadoTexto = document.getElementById('resultado-texto');

    // Validação básica caso o usuário não responda tudo
    if (!r1 || !r2) {
        alert("Por favor, responda todas as perguntas antes de enviar!");
        return;
    }

    // Contagem de acertos utilizando variáveis numéricas
    let acertos = 0;

    if (r1.value === "correto") acches = acertos++;
    if (r2.value === "correto") acches = acertos++;

    // Altera o texto e mostra a div de resultados baseada nos acertos
    if (acertos === 2) {
        resultadoTexto.textContent = "🏆 Excelente! Você acertou todas as 2 questões. É um verdadeiro protetor da natureza!";
    } else if (acertos === 1) {
        resultadoTexto.textContent = "🌱 Bom trabalho! Você acertou 1 de 2 questões. Leia o texto novamente para virar um especialista!";
    } else {
        resultadoTexto.textContent = "🔍 Ops! Nenhuma resposta correta. Que tal reler o texto rapidinho e tentar de novo?";
    }

    // Remove a classe que esconde a div de resultado
    resultadoBox.classList.remove('oculto');
}