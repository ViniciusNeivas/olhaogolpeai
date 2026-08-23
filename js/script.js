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
        title: "💸 Pix falso",
        category: "Golpe digital",
        description: "Alguém tenta convencer você a fazer um Pix usando urgência ou uma história falsa.",
        signs: [
            "Pedido de dinheiro com muita urgência.",
            "Pessoa dizendo que está usando um número novo.",
            "Pressão para realizar o pagamento rapidamente.",
            "Dados bancários enviados por mensagem."
        ],
        prevention: "Antes de fazer um Pix, confirme a identidade da pessoa por outro canal e confira cuidadosamente o nome do destinatário."
    },

    whatsapp: {
        title: "📱 WhatsApp falso",
        category: "Golpe digital",
        description: "O criminoso finge ser alguém conhecido, geralmente usando outro número, e pede dinheiro ou informações.",
        signs: [
            "Mensagem dizendo que o número mudou.",
            "Pedido inesperado de dinheiro.",
            "História envolvendo alguma emergência.",
            "Recusa em fazer uma ligação."
        ],
        prevention: "Entre em contato com a pessoa pelo número antigo ou por outro meio conhecido antes de realizar qualquer pagamento."
    },

    bank: {
        title: "🏦 Falso funcionário do banco",
        category: "Golpe digital",
        description: "O criminoso se apresenta como funcionário de um banco e afirma existir algum problema na conta da vítima.",
        signs: [
            "Ligação inesperada do suposto banco.",
            "Pedido de senha ou código.",
            "Solicitação para instalar aplicativo.",
            "Pedido para realizar uma transferência."
        ],
        prevention: "Nunca informe senhas ou códigos por telefone. Encerre a ligação e procure o banco pelos canais oficiais."
    },

    job: {
        title: "💼 Falsa vaga de emprego",
        category: "Golpe digital",
        description: "Uma falsa oportunidade de emprego pode ser usada para obter dinheiro ou dados pessoais.",
        signs: [
            "Promessa de salário muito acima do normal.",
            "Pedido de pagamento para participar do processo.",
            "Contato exclusivamente por aplicativos de mensagem.",
            "Pressão para enviar documentos rapidamente."
        ],
        prevention: "Pesquise a empresa e a vaga em canais oficiais. Desconfie de processos seletivos que exigem pagamento."
    },

    prize: {
        title: "🎁 Falso prêmio",
        category: "Golpe digital",
        description: "A vítima recebe uma mensagem dizendo que ganhou dinheiro, um produto ou algum benefício.",
        signs: [
            "Você não participou de nenhum sorteio.",
            "Pedido de pagamento para liberar o prêmio.",
            "Pedido de dados pessoais ou bancários.",
            "Mensagem com muita urgência."
        ],
        prevention: "Não pague para receber um prêmio inesperado. Procure informações diretamente nos canais oficiais da empresa."
    },

    phishing: {
        title: "🔗 Phishing",
        category: "Golpe digital",
        description: "Links falsos podem levar a páginas que imitam bancos, lojas ou serviços conhecidos para roubar informações.",
        signs: [
            "Endereço estranho ou diferente do site oficial.",
            "Erros de português.",
            "Mensagem criando urgência.",
            "Pedido de senha ou cartão."
        ],
        prevention: "Evite acessar serviços importantes por links recebidos em mensagens. Digite o endereço oficial diretamente no navegador."
    },

    lawyer: {
        title: "⚖️ Falso advogado",
        category: "Golpe digital",
        description: "O criminoso se passa por advogado ou escritório e informa que existe uma causa, indenização ou processo que exige pagamento.",
        signs: [
            "Contato inesperado sobre um processo.",
            "Pedido de depósito para liberar dinheiro.",
            "Pressão para pagar rapidamente.",
            "Dados do processo usados para parecer legítimo."
        ],
        prevention: "Confirme o advogado ou escritório por canais oficiais e não faça pagamentos antes de verificar a informação."
    },

    government: {
        title: "🏛️ Falso órgão do governo",
        category: "Golpe digital",
        description: "O golpista se passa por órgão público e tenta obter dinheiro, documentos ou dados pessoais.",
        signs: [
            "Ameaça de multa ou bloqueio.",
            "Pedido de pagamento imediato.",
            "Link para suposta regularização.",
            "Solicitação de dados sensíveis por mensagem."
        ],
        prevention: "Procure o órgão público diretamente pelo site ou aplicativo oficial. Não use links recebidos em mensagens suspeitas."
    },

    ai: {
        title: "🤖 Golpe com voz ou imagem de IA",
        category: "Golpe digital",
        description: "Criminosos podem usar inteligência artificial para imitar voz ou imagem de pessoas conhecidas e pedir dinheiro.",
        signs: [
            "Pedido urgente feito por áudio ou vídeo.",
            "Voz ou imagem parecendo diferente.",
            "Pedido para manter segredo.",
            "Solicitação de Pix ou transferência."
        ],
        prevention: "Confirme a identidade por outro canal. Uma voz ou vídeo convincente não prova que a pessoa é realmente quem diz ser."
    },

    investment: {
        title: "📈 Falso investimento",
        category: "Golpe digital",
        description: "Uma falsa oportunidade de investimento promete ganhos rápidos, altos ou garantidos para convencer a vítima a enviar dinheiro.",
        signs: [
            "Lucro alto e garantido.",
            "Pressão para investir rapidamente.",
            "Pedido de novos depósitos para liberar o saldo.",
            "Plataforma ou empresa difícil de verificar."
        ],
        prevention: "Desconfie de retornos garantidos e pesquise a empresa antes de investir. Nunca envie dinheiro apenas por indicação recebida em mensagem."
    },

    support: {
        title: "🖥️ Falso suporte técnico",
        category: "Golpe digital",
        description: "O criminoso finge ser do suporte de uma empresa e tenta convencer a vítima a instalar programas ou fornecer acesso ao dispositivo.",
        signs: [
            "Contato inesperado sobre um suposto problema.",
            "Pedido para instalar aplicativo de acesso remoto.",
            "Solicitação de senhas ou códigos.",
            "Pressão para agir imediatamente."
        ],
        prevention: "Não permita acesso remoto a desconhecidos. Encerre o contato e procure o suporte pelos canais oficiais."
    },

    pix_return: {
        title: "↩️ Pix recebido por engano",
        category: "Golpe digital",
        description: "A pessoa afirma ter enviado um Pix por engano e pede que você devolva o valor para uma conta diferente.",
        signs: [
            "Pedido para devolver para outra chave Pix.",
            "Pressão para devolver rapidamente.",
            "História difícil de confirmar.",
            "Valor ou comprovante que não bate com a transação."
        ],
        prevention: "Confira o extrato e use a função de devolução da própria instituição financeira quando aplicável. Não envie para uma conta indicada pelo desconhecido."
    },

    account: {
        title: "🔐 Furto de conta",
        category: "Golpe digital",
        description: "O criminoso tenta obter códigos de confirmação ou outras informações para assumir uma conta de mensagem, rede social ou serviço.",
        signs: [
            "Pedido de código recebido por SMS.",
            "Suposto contato de suporte.",
            "Sessão ou dispositivo desconhecido.",
            "Perda repentina de acesso à conta."
        ],
        prevention: "Nunca compartilhe códigos de autenticação. Ative a verificação em duas etapas e revise os dispositivos conectados."
    },

    caregiver: {
        title: "🧑‍⚕️ Falso cuidador",
        category: "Mundo real",
        description: "O criminoso se apresenta como cuidador ou profissional de saúde para conquistar a confiança da família e ter acesso à residência e à vítima.",
        signs: [
            "Referências profissionais que não podem ser confirmadas.",
            "Pressa para começar o trabalho.",
            "Recusa em apresentar documentos ou referências.",
            "Comportamentos ou sintomas incomuns na pessoa cuidada."
        ],
        prevention: "Confirme referências, documentos e histórico profissional. Evite deixar valores, joias, cartões e senhas acessíveis e acompanhe a rotina do profissional."
    },

    delivery: {
        title: "📦 Falso entregador",
        category: "Mundo real",
        description: "O criminoso usa uma suposta entrega para entrar em contato com a vítima e tentar obter pagamento, dados ou acesso à residência.",
        signs: [
            "Entrega que você não espera.",
            "Cobrança inesperada na porta.",
            "Pedido para fornecer dados ou código.",
            "Pressão para resolver a situação imediatamente."
        ],
        prevention: "Confirme a entrega pelo aplicativo ou site oficial. Não forneça códigos e não permita acesso à residência sem verificar a situação."
    },

    atm: {
        title: "🏧 Falsa ajuda no caixa eletrônico",
        category: "Mundo real",
        description: "O criminoso se oferece para ajudar no caixa eletrônico e pode tentar descobrir senha, trocar cartão ou realizar operações sem autorização.",
        signs: [
            "Pessoa se oferecendo sem ser solicitada.",
            "Pedido para entregar o cartão.",
            "Tentativa de observar sua senha.",
            "Pressa ou distração durante a operação."
        ],
        prevention: "Prefira atendimento oficial do banco. Nunca entregue cartão ou senha a desconhecidos e, se precisar de ajuda, procure um funcionário identificado."
    },

    social_security: {
        title: "🪪 Falso funcionário do INSS",
        category: "Mundo real",
        description: "O criminoso se apresenta como funcionário do INSS ou outro serviço público e tenta obter dados, documentos ou dinheiro.",
        signs: [
            "Visita ou contato inesperado.",
            "Pedido de documentos ou dados bancários.",
            "Cobrança para liberar benefício.",
            "Ameaça de suspensão do benefício."
        ],
        prevention: "Não entregue documentos ou dados bancários a desconhecidos. Confirme qualquer atendimento pelos canais oficiais do INSS."
    },

    technician: {
        title: "🔧 Falso técnico ou prestador",
        category: "Mundo real",
        description: "O criminoso se passa por técnico, funcionário de empresa ou prestador para conseguir acesso à residência e aos bens.",
        signs: [
            "Visita sem agendamento.",
            "Empresa ou serviço que você não solicitou.",
            "Pedido para entrar em áreas privadas.",
            "Pressão para permitir o acesso."
        ],
        prevention: "Confirme o agendamento e a identidade do profissional diretamente com a empresa. Não permita entrada sem verificar a visita."
    }

};


/* ========================================
   FILTRO DOS GOLPES
======================================== */

const scamFilters = document.querySelectorAll(".scam-filter");
const scamCards = document.querySelectorAll(".scam-card");

scamFilters.forEach(filter => {
    filter.addEventListener("click", () => {
        scamFilters.forEach(button => button.classList.remove("active"));
        filter.classList.add("active");

        const selectedFilter = filter.dataset.filter;

        scamCards.forEach(card => {
            const category = card.dataset.category;
            card.style.display =
                selectedFilter === "all" || category === selectedFilter
                    ? "flex"
                    : "none";
        });
    });
});


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
        question: "Uma pessoa conhecida manda mensagem de um número novo dizendo que perdeu o celular e pede um Pix urgente. O que você faria?",
        options: [
            "Faria o Pix imediatamente.",
            "Confirmaria a identidade da pessoa por outro canal.",
            "Mandaria uma foto do meu documento para confirmar."
        ],
        correct: 1,
        explanation: "O mais seguro é confirmar a identidade por outro meio antes de realizar qualquer pagamento."
    },

    {
        category: "PHISHING",
        question: "Você recebe um SMS dizendo que sua conta será bloqueada hoje e apresenta um link para regularizar o acesso. Qual é a atitude mais segura?",
        options: [
            "Clicar rapidamente para evitar o bloqueio.",
            "Responder a mensagem pedindo mais informações.",
            "Não clicar e acessar o serviço pelo canal oficial."
        ],
        correct: 2,
        explanation: "Mensagens com urgência e links inesperados são sinais comuns de phishing."
    },

    {
        category: "BANCO",
        question: "Uma pessoa liga dizendo ser do banco e pede seu código de autenticação para cancelar uma transação suspeita. O que fazer?",
        options: [
            "Informar o código para proteger a conta.",
            "Desligar e entrar em contato com o banco pelos canais oficiais.",
            "Passar somente os últimos números do código."
        ],
        correct: 1,
        explanation: "Códigos de autenticação são pessoais e não devem ser compartilhados dessa forma."
    },

    {
        category: "FALSO PRÊMIO",
        question: "Você recebe uma mensagem dizendo que ganhou um prêmio, mas precisa pagar uma taxa para receber o dinheiro. O que isso indica?",
        options: [
            "Pode ser um golpe.",
            "É normal pagar uma taxa antes de receber qualquer prêmio.",
            "É seguro se a mensagem tiver o logotipo de uma empresa."
        ],
        correct: 0,
        explanation: "Pedidos de pagamento para liberar prêmios inesperados são um forte sinal de golpe."
    },

    {
        category: "FALSA VAGA",
        question: "Uma suposta empresa oferece uma vaga de emprego com salário muito alto e pede um pagamento para liberar o treinamento. O que fazer?",
        options: [
            "Pagar, pois a vaga parece muito boa.",
            "Enviar os documentos antes de pesquisar a empresa.",
            "Pesquisar a empresa e desconfiar de qualquer cobrança."
        ],
        correct: 2,
        explanation: "Cobranças para participar ou liberar uma vaga são um forte sinal de alerta."
    },

    {
        category: "FALSO ADVOGADO",
        question: "Uma pessoa diz ser advogada e informa que você tem direito a uma indenização, mas pede um depósito para liberar o dinheiro.",
        options: [
            "Fazer o depósito.",
            "Confirmar o profissional e o processo por canais oficiais.",
            "Enviar seus dados bancários."
        ],
        correct: 1,
        explanation: "Verifique o advogado, o escritório e o processo por canais independentes antes de pagar."
    },

    {
        category: "FALSO GOVERNO",
        question: "Uma mensagem diz que seu benefício será bloqueado hoje e traz um link para regularizar. O que fazer?",
        options: [
            "Clicar no link.",
            "Pagar a taxa.",
            "Acessar o órgão público pelo canal oficial."
        ],
        correct: 2,
        explanation: "Consulte órgãos públicos pelos canais oficiais, especialmente diante de mensagens urgentes."
    },

    {
        category: "IA",
        question: "Um familiar envia um áudio pedindo dinheiro com urgência, mas a voz parece diferente. O que fazer?",
        options: [
            "Enviar o dinheiro.",
            "Confirmar por outro canal conhecido.",
            "Pedir foto do documento."
        ],
        correct: 1,
        explanation: "Vozes e imagens podem ser manipuladas por IA. Confirme a identidade."
    },

    {
        category: "INVESTIMENTO",
        question: "Uma plataforma promete dobrar seu dinheiro em poucos dias e pede um depósito. O que isso indica?",
        options: [
            "Uma oportunidade segura.",
            "Um forte sinal de alerta.",
            "Investir uma pequena quantia."
        ],
        correct: 1,
        explanation: "Ganhos altos ou garantidos e pressão para depositar são sinais de possível fraude."
    },

    {
        category: "SUPORTE",
        question: "Uma pessoa liga dizendo ser do suporte e pede para instalar um aplicativo de acesso remoto. O que fazer?",
        options: [
            "Instalar.",
            "Informar sua senha.",
            "Encerrar e procurar o suporte oficial."
        ],
        correct: 2,
        explanation: "Contatos inesperados que pedem acesso remoto podem permitir controle do dispositivo."
    },

    {
        category: "PIX RECEBIDO",
        question: "Alguém diz que enviou um Pix por engano e pede devolução para outra chave. O que fazer?",
        options: [
            "Enviar imediatamente.",
            "Conferir o extrato e usar a devolução adequada.",
            "Enviar para a conta indicada."
        ],
        correct: 1,
        explanation: "Confira a transação e evite enviar o valor para uma conta indicada por desconhecidos."
    },

    {
        category: "FURTO DE CONTA",
        question: "Uma pessoa diz ser do suporte e pede o código que chegou por SMS. O que fazer?",
        options: [
            "Informar o código.",
            "Informar parte do código.",
            "Não compartilhar e procurar o suporte oficial."
        ],
        correct: 2,
        explanation: "Códigos de autenticação podem permitir que outra pessoa assuma sua conta."
    },

    {
        category: "FALSO CUIDADOR",
        question: "Uma família encontra um cuidador com ótimas referências, mas nenhuma pode ser confirmada. Qual a melhor atitude?",
        options: [
            "Contratar pelo currículo.",
            "Confirmar referências e histórico.",
            "Entregar chaves e cartões."
        ],
        correct: 1,
        explanation: "Verifique referências e histórico antes de permitir o acesso à residência."
    },

    {
        category: "FALSO ENTREGADOR",
        question: "Uma pessoa aparece com uma entrega que você não reconhece e exige pagamento na porta. O que fazer?",
        options: [
            "Pagar.",
            "Confirmar a entrega no aplicativo ou site oficial.",
            "Entregar documentos."
        ],
        correct: 1,
        explanation: "Confirme pedidos e cobranças diretamente no serviço oficial."
    },

    {
        category: "CAIXA ELETRÔNICO",
        question: "Uma pessoa desconhecida se oferece para ajudar no caixa eletrônico e pede seu cartão. O que fazer?",
        options: [
            "Entregar o cartão.",
            "Deixar fazer a operação.",
            "Procurar um funcionário identificado."
        ],
        correct: 2,
        explanation: "Nunca entregue cartão ou senha a desconhecidos."
    },

    {
        category: "FALSO INSS",
        question: "Uma pessoa diz ser do INSS e pede dados bancários para evitar a suspensão de um benefício. O que fazer?",
        options: [
            "Passar os dados.",
            "Confirmar pelos canais oficiais.",
            "Enviar foto do cartão."
        ],
        correct: 1,
        explanation: "Confirme qualquer informação sobre benefício pelos canais oficiais."
    },

    {
        category: "FALSO TÉCNICO",
        question: "Um suposto técnico aparece sem agendamento e quer entrar na sua casa. O que fazer?",
        options: [
            "Deixar entrar pelo uniforme.",
            "Confirmar a visita com a empresa.",
            "Entregar documentos."
        ],
        correct: 1,
        explanation: "Uniforme não prova identidade. Confirme a visita por canal independente."
    }

];

let currentQuestion = 0;
let score = 0;
let answered = false;
let quizQuestions = [];


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

    const current = quizQuestions[currentQuestion];

    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${quizQuestions.length}`;

    scoreElement.textContent =
        `Pontos: ${score}`;

    progress.style.width =
        `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

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

    const current = quizQuestions[currentQuestion];

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

    if (currentQuestion >= quizQuestions.length) {

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

    quizQuestions = getRandomQuestions();

    quizResult.classList.add("hidden");

    quizContainer.classList.remove("hidden");

    loadQuestion();

    document
        .getElementById("quiz")
        .scrollIntoView({
            behavior: "smooth"
        });

});


function getRandomQuestions() {
    return [...questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
}

/* ========================================
   INICIAR
======================================== */

quizQuestions = getRandomQuestions();
loadQuestion();

/* ========================================
   POPUP DE AVALIAÇÃO
======================================== */

/*
 * Quando você criar o Google Forms,
 * coloque o link aqui.
 */
const GOOGLE_FORMS_URL =
    "https://forms.gle/VYNSQEqrfk97vyLJ7";

/*
 * Tempo de espera depois que o usuário
 * termina o quiz.
 *
 * 5000 = 5 segundos
 */
const FEEDBACK_DELAY = 5000;

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
    feedbackFormButton.href = "https://forms.gle/VYNSQEqrfk97vyLJ7";
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
        if (event.target === feedbackOverlay) {
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
