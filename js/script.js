    /* ========================================
   MENU MOBILE
======================================== */

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* Fechar menu ao clicar em um link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


/* ========================================
   DADOS DOS GOLPES
======================================== */

const scams = {

    pix: {
        title: "💸 Golpe do Pix falso",

        description:
            "O criminoso tenta convencer a vítima a realizar um Pix usando uma história falsa, normalmente acompanhada de urgência.",

        signs: [
            "Pedido de dinheiro com muita urgência.",
            "Pessoa dizendo que está usando um número novo.",
            "Pressão para realizar o pagamento rapidamente.",
            "Dados bancários enviados por mensagem."
        ],

        prevention:
            "Antes de fazer um Pix, confirme a identidade da pessoa por outro canal e confira cuidadosamente o nome do destinatário."
    },


    whatsapp: {
        title: "📱 Golpe do WhatsApp",

        description:
            "O golpista pode fingir ser um amigo ou familiar e usar outro número para pedir dinheiro.",

        signs: [
            "Mensagem dizendo que o número mudou.",
            "Pedido inesperado de dinheiro.",
            "História envolvendo alguma emergência.",
            "Recusa em fazer uma ligação."
        ],

        prevention:
            "Entre em contato com a pessoa pelo número antigo ou por outro meio conhecido antes de realizar qualquer pagamento."
    },


    bank: {
        title: "🏦 Falso funcionário do banco",

        description:
            "O criminoso se apresenta como funcionário de um banco e afirma existir algum problema na conta da vítima.",

        signs: [
            "Ligação inesperada do suposto banco.",
            "Pedido de senha ou código.",
            "Solicitação para instalar aplicativo.",
            "Pedido para realizar uma transferência."
        ],

        prevention:
            "Nunca informe senhas ou códigos por telefone. Encerre a ligação e procure o banco pelos canais oficiais."
    },


    job: {
        title: "💼 Falsa vaga de emprego",

        description:
            "Uma falsa oportunidade de emprego pode ser utilizada para obter dinheiro ou dados pessoais.",

        signs: [
            "Promessa de salário muito acima do normal.",
            "Pedido de pagamento para participar do processo.",
            "Contato exclusivamente por aplicativos de mensagem.",
            "Pressão para enviar documentos rapidamente."
        ],

        prevention:
            "Pesquise a empresa e a vaga em canais oficiais. Desconfie de processos seletivos que exigem pagamento."
    },


    prize: {
        title: "🎁 Falso prêmio",

        description:
            "A vítima recebe uma mensagem dizendo que ganhou dinheiro, um produto ou algum benefício.",

        signs: [
            "Você não participou de nenhum sorteio.",
            "Pedido de pagamento para liberar o prêmio.",
            "Pedido de dados pessoais ou bancários.",
            "Mensagem com muita urgência."
        ],

        prevention:
            "Não pague para receber um prêmio inesperado. Procure informações diretamente nos canais oficiais da empresa."
    },


    phishing: {
        title: "🔗 Phishing",

        description:
            "Links falsos podem levar a páginas que imitam bancos, lojas ou serviços conhecidos para roubar informações.",

        signs: [
            "Endereço estranho ou diferente do site oficial.",
            "Erros de português.",
            "Mensagem criando urgência.",
            "Pedido de senha ou cartão."
        ],

        prevention:
            "Evite acessar serviços importantes através de links recebidos por mensagens. Digite o endereço oficial diretamente no navegador."
    }

};


/* ========================================
   MODAL DOS GOLPES
======================================== */

const modal = document.getElementById("scamModal");
const modalClose = document.getElementById("modalClose");
const modalContent = document.getElementById("modalContent");

const scamButtons = document.querySelectorAll(".learn-more");


scamButtons.forEach(button => {

    button.addEventListener("click", () => {

        const scamId = button.dataset.scam;

        const scam = scams[scamId];

        modalContent.innerHTML = `

            <h2>${scam.title}</h2>

            <p>
                ${scam.description}
            </p>

            <h3>🚨 Sinais de alerta</h3>

            <ul>
                ${scam.signs
                    .map(sign => `<li>${sign}</li>`)
                    .join("")}
            </ul>

            <h3>🛡️ Como se proteger</h3>

            <p>
                ${scam.prevention}
            </p>

        `;

        modal.classList.remove("hidden");

        document.body.style.overflow = "hidden";

    });

});


function closeModal() {

    modal.classList.add("hidden");

    document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);


modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* ========================================
   QUIZ
======================================== */

const questions = [

    {
        category: "WHATSAPP",

        question:
            "Uma pessoa conhecida manda mensagem de um número novo dizendo que perdeu o celular e pede um Pix urgente. O que você faria?",

        options: [
            "Faria o Pix imediatamente.",
            "Confirmaria a identidade da pessoa por outro canal.",
            "Mandaria uma foto do meu documento para confirmar."
        ],

        correct: 1,

        explanation:
            "O mais seguro é confirmar a identidade por outro meio antes de realizar qualquer pagamento."
    },


    {
        category: "PHISHING",

        question:
            "Você recebe um SMS dizendo que sua conta será bloqueada hoje e apresenta um link para regularizar o acesso. Qual é a atitude mais segura?",

        options: [
            "Clicar rapidamente para evitar o bloqueio.",
            "Responder a mensagem pedindo mais informações.",
            "Não clicar e acessar o serviço pelo canal oficial."
        ],

        correct: 2,

        explanation:
            "Mensagens com urgência e links inesperados são sinais comuns de phishing."
    },


    {
        category: "BANCO",

        question:
            "Uma pessoa liga dizendo ser do banco e pede seu código de autenticação para cancelar uma transação suspeita. O que fazer?",

        options: [
            "Informar o código para proteger a conta.",
            "Desligar e entrar em contato com o banco pelos canais oficiais.",
            "Passar somente os últimos números do código."
        ],

        correct: 1,

        explanation:
            "Códigos de autenticação são pessoais. O banco não deve pedir que você informe esse código dessa maneira."
    },


    {
        category: "FALSO PRÊMIO",

        question:
            "Você recebe uma mensagem dizendo que ganhou um prêmio, mas precisa pagar uma taxa para receber o dinheiro. O que isso indica?",

        options: [
            "Pode ser um golpe.",
            "É normal pagar uma taxa antes de receber qualquer prêmio.",
            "É seguro se a mensagem tiver o logotipo de uma empresa."
        ],

        correct: 0,

        explanation:
            "Pedidos de pagamento para liberar prêmios inesperados são um forte sinal de golpe."
    },


    {
        category: "FALSA VAGA",

        question:
            "Uma suposta empresa oferece uma vaga de emprego com salário muito alto e pede um pagamento para liberar o treinamento. O que fazer?",

        options: [
            "Pagar, pois a vaga parece muito boa.",
            "Enviar os documentos antes de pesquisar a empresa.",
            "Pesquisar a empresa e desconfiar de qualquer cobrança."
        ],

        correct: 2,

        explanation:
            "Cobranças para participar ou liberar uma vaga são um forte sinal de alerta."
    }

];


let currentQuestion = 0;
let score = 0;
let answered = false;


/* Elementos */

const questionNumber =
    document.getElementById("questionNumber");

const scoreElement =
    document.getElementById("score");

const progress =
    document.getElementById("progress");

const questionCategory =
    document.getElementById("questionCategory");

const questionElement =
    document.getElementById("question");

const quizOptions =
    document.getElementById("quizOptions");

const feedback =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("nextButton");

const quizContainer =
    document.getElementById("quizContainer");

const quizResult =
    document.getElementById("quizResult");

const finalScore =
    document.getElementById("finalScore");

const resultMessage =
    document.getElementById("resultMessage");

const restartQuiz =
    document.getElementById("restartQuiz");


/* ========================================
   CARREGAR PERGUNTA
======================================== */

function loadQuestion() {

    answered = false;

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    scoreElement.textContent =
        `Pontos: ${score}`;

    progress.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    questionCategory.textContent =
        current.category;

    questionElement.textContent =
        current.question;

    quizOptions.innerHTML = "";

    feedback.className = "feedback";
    feedback.innerHTML = "";

    nextButton.style.display = "none";


    current.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className = "quiz-option";

        button.textContent = option;

        button.addEventListener("click", () => {

            selectAnswer(index);

        });

        quizOptions.appendChild(button);

    });

}


/* ========================================
   RESPONDER
======================================== */

function selectAnswer(selectedIndex) {

    if (answered) {
        return;
    }

    answered = true;

    const current = questions[currentQuestion];

    const options =
        document.querySelectorAll(".quiz-option");


    options.forEach(option => {

        option.disabled = true;

    });


    if (selectedIndex === current.correct) {

        score++;

        options[selectedIndex]
            .classList.add("correct");

        feedback.className =
            "feedback correct";

        feedback.innerHTML = `
            <strong>✅ Muito bem!</strong><br>
            ${current.explanation}
        `;

    } else {

        options[selectedIndex]
            .classList.add("wrong");

        options[current.correct]
            .classList.add("correct");

        feedback.className =
            "feedback wrong";

        feedback.innerHTML = `
            <strong>⚠️ Atenção!</strong><br>
            ${current.explanation}
        `;

    }


    scoreElement.textContent =
        `Pontos: ${score}`;

    nextButton.style.display =
        "block";

}


/* ========================================
   PRÓXIMA PERGUNTA
======================================== */

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResult();

    } else {

        loadQuestion();

    }

});


/* ========================================
   RESULTADO
======================================== */

function showResult() {

    quizContainer.classList.add("hidden");

    quizResult.classList.remove("hidden");

    finalScore.textContent = score;


    if (score === 5) {

        resultMessage.textContent =
            "Excelente! Você demonstrou estar atento aos principais sinais de golpes digitais.";

    } else if (score >= 3) {

        resultMessage.textContent =
            "Bom trabalho! Você conhece alguns sinais importantes, mas ainda pode ficar mais atento.";

    } else {

        resultMessage.textContent =
            "Vale ficar mais atento. Revise as dicas do site e tente o quiz novamente.";

    }


    /*
     * Aguarda alguns segundos depois que
     * o usuário vê o resultado.
     */
    scheduleFeedbackAfterQuiz();

}


/* ========================================
   REINICIAR QUIZ
======================================== */

restartQuiz.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    quizResult.classList.add("hidden");

    quizContainer.classList.remove("hidden");

    loadQuestion();

    document
        .getElementById("quiz")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* ========================================
   INICIAR
======================================== */

loadQuestion();

/* ========================================
   POPUP DE AVALIAÇÃO
======================================== */

const GOOGLE_FORMS_URL =
    "COLE_AQUI_O_LINK_DO_GOOGLE_FORMS";

const FEEDBACK_DELAY =
    5000;

let feedbackTimer = null;

/* ========================================
   ELEMENTOS DO POPUP
======================================== */

const feedbackOverlay =
    document.getElementById("feedbackOverlay");

const feedbackClose =
    document.getElementById("feedbackClose");

const feedbackLater =
    document.getElementById("feedbackLater");

const feedbackFormButton =
    document.getElementById("feedbackFormButton");


/* ========================================
   CONFIGURA GOOGLE FORMS
======================================== */

if (feedbackFormButton) {

    feedbackFormButton.href =
        'https://forms.gle/1QxhqprhJYPcrcNx7';

}

/* ========================================
   MOSTRAR POPUP
======================================== */

function showFeedbackPopup() {

    feedbackOverlay.classList.remove("hidden");

    document.body.style.overflow = "hidden";

}


/* ========================================
   FECHAR POPUP
======================================== */

function closeFeedbackPopup() {

    feedbackOverlay.classList.add("hidden");

    document.body.style.overflow = "";

}


/* ========================================
   BOTÃO X
======================================== */

feedbackClose.addEventListener(
    "click",
    closeFeedbackPopup
);


/* ========================================
   BOTÃO "AGORA NÃO"
======================================== */

feedbackLater.addEventListener(
    "click",
    closeFeedbackPopup
);


/* ========================================
   CLICAR FORA DO POPUP
======================================== */

feedbackOverlay.addEventListener(
    "click",
    function(event) {

        if (
            event.target === feedbackOverlay
        ) {

            closeFeedbackPopup();

        }

    }
);


/* ========================================
   TECLA ESC
======================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            !feedbackOverlay.classList.contains("hidden")
        ) {

            closeFeedbackPopup();

        }

    }
);


/* ========================================
   AGENDAR POPUP APÓS O QUIZ
======================================== */

function scheduleFeedbackAfterQuiz() {

    if (feedbackTimer) {
        clearTimeout(feedbackTimer);
    }

    feedbackTimer = setTimeout(
        function() {

            showFeedbackPopup();

            feedbackTimer = null;

        },
        FEEDBACK_DELAY
    );

}