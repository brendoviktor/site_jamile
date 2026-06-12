const surpriseBtn = document.getElementById('surpresaBtn');
const mensagemSurpresa = document.getElementById('mensagemSurpresa');
const quizBtn = document.getElementById('quizBtn');
const quizResultado = document.getElementById('quizResultado');

const mensagens = [
  'Você é a razão do meu sorriso em todos os dias.',
  'Com você, cada momento fica mais doce e especial.',
  'Adoro o jeito como seus olhos brilham quando você sorri.',
  'Hoje e sempre, sou grato por ter você ao meu lado.',
  'Nosso amor é minha aventura favorita.'
];

const quizPerguntas = [
  'Qual é a lembrança mais querida que vocês têm juntos?',
  'Qual sua comida favorita para dividir com ela?',
  'Se vocês pudessem viajar agora, para onde iriam?',
  'Qual música faz vocês dois sorrirem?',
  'O que você mais admira nela?' 
];

function mostrarSurpresa() {
  const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
  mensagemSurpresa.innerHTML = mensagem;
}

function iniciarQuiz() {
  const resultado = quizPerguntas
    .map((pergunta, index) => `${index + 1}. ${pergunta}`)
    .join('<br>');

  quizResultado.innerHTML = `Responda estas perguntas juntos:<br>${resultado}`;
}

surpriseBtn.addEventListener('click', mostrarSurpresa);
quizBtn.addEventListener('click', iniciarQuiz);
