const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante uma aula difícil, o professor permite o uso de IA como apoio. O que você faz?",
        alternativas: [
            {
                texto: "Uso a IA para entender melhor o conteúdo e tirar dúvidas.",
                afirmacao: "Você utiliza a tecnologia como ferramenta de aprendizagem consciente."
            },
            {
                texto: "Copio a resposta da IA sem tentar entender.",
                afirmacao: "Você opta pelo caminho mais fácil, mesmo que isso comprometa seu aprendizado."
            }
        ]
    },
    {
        enunciado: "Seu colega usou IA para fazer uma redação inteira. O que você acha?",
        alternativas: [
            {
                texto: "Acho que ele perdeu a chance de desenvolver suas próprias ideias.",
                afirmacao: "Você valoriza o pensamento crítico e a expressão pessoal."
            },
            {
                texto: "Se a nota foi boa, então valeu a pena.",
                afirmacao: "Você prioriza resultados, mesmo que o processo de aprendizagem seja prejudicado."
            }
        ]
    },
    {
        enunciado: "A escola oferece um curso sobre como usar IA de forma ética. Qual sua decisão?",
        alternativas: [
            {
                texto: "Participo para aprender a usar com responsabilidade.",
                afirmacao: "Você busca se informar e usar a IA com consciência."
            },
            {
                texto: "Acho perda de tempo, cada um usa como quiser.",
                afirmacao: "Você acredita na liberdade total, mesmo sem considerar as consequências."
            }
        ]
    },
    {
        enunciado: "Você está fazendo um trabalho em grupo. Um membro sugere usar IA para montar toda a apresentação. Você:",
        alternativas: [
            {
                texto: "Concorda, desde que todos revisem e entendam o conteúdo.",
                afirmacao: "Você valoriza o uso da IA com responsabilidade e colaboração."
            },
            {
                texto: "Aceita sem se preocupar, contanto que o trabalho fique pronto.",
                afirmacao: "Você prioriza a praticidade, mesmo que o grupo aprenda menos."
            }
        ]
    },
    {
        enunciado: "A IA pode responder quase tudo. Como você vê isso na escola?",
        alternativas: [
            {
                texto: "Como uma aliada, se for usada para complementar o estudo.",
                afirmacao: "Você entende que a IA é uma ferramenta, não um atalho."
            },
            {
                texto: "Como uma forma de escapar de estudar.",
                afirmacao: "Você encara a IA como substituta do esforço, o que pode limitar seu crescimento."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Como você tem usado a inteligência artificial na escola:";
    textoResultado.innerHTML = historiaFinal.trim().split(". ").map(frase => `• ${frase.trim()}.`).join("<br><br>");
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

document.getElementById("btn-iniciar").addEventListener("click", () => {
    document.querySelector(".caixa-inicio").style.display = "none";
    document.querySelector(".conteudo-quiz").style.display = "block";
    mostraPergunta();
});

const botaoReiniciar = document.createElement("button");
botaoReiniciar.textContent = "Jogar novamente";
botaoReiniciar.style.marginTop = "20px";
botaoReiniciar.addEventListener("click", () => {
    atual = 0;
    historiaFinal = "";
    caixaResultado.style.display = "none";
    mostraPergunta();
    window.scrollTo(0, 0);
});
caixaResultado.appendChild(botaoReiniciar);
