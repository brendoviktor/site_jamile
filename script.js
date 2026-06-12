const surpriseBtn = document.getElementById('surpresaBtn');
const mensagemSurpresa = document.getElementById('mensagemSurpresa');
const quizLives = document.getElementById('quizLives');
const quizProgress = document.getElementById('quizProgress');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');
const heartBtns = document.querySelectorAll('.heart-btn');
const heartPrompt = document.getElementById('heartPrompt');

const mensagens = [
  'Você é a razão do meu sorriso em todos os dias.',
  'Com você, cada momento fica mais doce e especial.',
  'Adoro o jeito como seus olhos brilham quando você sorri.',
  'Hoje e sempre, sou grato por ter você ao meu lado.',
  'Nosso amor é minha aventura favorita.'
];

const quizQuestions = [
  {
    question: 'Qual parte do dia vocês mais gostam de passar juntos?',
    options: ['Manhã tranquila', 'Noite de cinema', 'Almoço rápido', 'Reunião de trabalho'],
    answer: 1
  },
  {
    question: 'Qual presente combinaria mais com um encontro romântico?',
    options: ['Flores e poemas', 'Uma marmita prática', 'Um gadget', 'Uma assinatura de app'],
    answer: 0
  },
  {
    question: 'O que nunca pode faltar em um momento especial a dois?',
    options: ['Risos e carinho', 'Silêncio absoluto', 'Sair de casa', 'Fazer compras'],
    answer: 0
  },
  {
    question: 'Qual plano é mais romântico para uma noite a dois?',
    options: ['Piquenique', 'Show de música', 'Festa com amigos', 'Academia juntos'],
    answer: 0
  },
  {
    question: 'Qual é o melhor jeito de começar um Dia dos Namorados?',
    options: ['Surpresa doce', 'Fazer hora', 'Ficar no celular', 'Ignorar a data'],
    answer: 0
  }
];

const heartChallenges = [
  'Abraçe ela por 10 segundos e diga o que mais admira nela.',
  'Envie uma mensagem romântica agora mesmo, com um emoji de coração.',
  'Prepare uma playlist para vocês ouvirem juntos.',
  'Fale um elogio criativo que ela ainda não ouviu hoje.',
  'Planeje um passeio simples cheio de carinho.',
  'Dê um beijo na testa e conte sua lembrança favorita juntos.'
];

let currentQuestion = 0;
let lives = 3;
let quizLocked = false;

function mostrarSurpresa() {
  const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
  mensagemSurpresa.textContent = mensagem;
}

function atualizarQuiz() {
  const pergunta = quizQuestions[currentQuestion];
  quizLives.textContent = `Vidas: ${lives}`;
  quizProgress.textContent = `Pergunta ${currentQuestion + 1} / ${quizQuestions.length}`;
  quizQuestion.textContent = pergunta.question;

  quizOptions.innerHTML = pergunta.options
    .map((opcao, index) => `<button type="button" class="quiz-option" data-index="${index}">${opcao}</button>`)
    .join('');

  quizFeedback.textContent = '';
  document.querySelectorAll('.quiz-option').forEach(button => {
    button.addEventListener('click', () => handleAnswer(Number(button.dataset.index)));
  });
}

function fimDoQuiz(mensagem) {
  quizQuestion.textContent = mensagem;
  quizOptions.innerHTML = '';
  quizFeedback.textContent = 'Jogo finalizado. Recarregue a página para jogar novamente.';
  quizLocked = true;
}

function handleAnswer(optionIndex) {
  if (quizLocked) return;

  const pergunta = quizQuestions[currentQuestion];
  if (optionIndex === pergunta.answer) {
    quizFeedback.textContent = 'Certo! Vamos para a próxima pergunta.';
    currentQuestion += 1;
    if (currentQuestion >= quizQuestions.length) {
      fimDoQuiz('Parabéns! Você completou o Quiz do Amor com muito carinho.');
      return;
    }
    setTimeout(atualizarQuiz, 900);
    return;
  }

  lives -= 1;
  if (lives <= 0) {
    fimDoQuiz('Você ficou sem vidas. Tente novamente mais tarde com muito amor.');
    quizLives.textContent = 'Vidas: 0';
    return;
  }

  quizLives.textContent = `Vidas: ${lives}`;
  quizFeedback.textContent = 'Errado! Tente de novo nesta mesma pergunta.';
}

function abrirCoracao(event) {
  const index = Number(event.currentTarget.dataset.id);
  const prompt = heartChallenges[index];
  heartPrompt.textContent = prompt;
  event.currentTarget.classList.add('opened');
}

surpriseBtn.addEventListener('click', mostrarSurpresa);
heartBtns.forEach(btn => btn.addEventListener('click', abrirCoracao));

if (quizQuestion && quizOptions) {
  atualizarQuiz();
}
