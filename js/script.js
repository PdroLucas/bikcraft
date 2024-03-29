//
// Ativar links do menu
//

const links = document.querySelectorAll(".header-menu a");

function paginaAtiva(pagina) {
    const url = location.href;
    const paginaAtual = pagina.href;
    if (url.includes(paginaAtual)) {
        pagina.classList.add("pagina-ativada");
    }
}

links.forEach(paginaAtiva);

//
// Produtos pré-selecionados no Orçamento
//

function preSelecao(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

const parametros = new URLSearchParams(location.search);
parametros.forEach(preSelecao);

//
// Perguntas Frequentes
//

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(evento) {
    const pergunta = evento.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//
// Galeria de Bicicletas
//

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(evento) {
    const imagemSelectionada = evento.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
        galeriaContainer.prepend(imagemSelectionada);
    }
}

function eventosGaleria(imagem) {
    imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//
// Animação
//

if (window.SimpleAnime) {
    new SimpleAnime();
}