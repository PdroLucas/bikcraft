const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
    if (resposta.ok) {
        formulario.innerHTML = "<p class='fonte-2-l' style='grid-column: 1/-1; padding: 1rem'>Mensagem enviada.</p>"
    } else {
        formulario.innerHTML = "<p class='fonte-2-l' style='grid-column: 1/-1; padding: 1rem'>Erro no envio, você pode enviar diretamente para o nosso email em contato@bikcraft.net</p>"
    }
}

function enviarFormulario(evento) {
    evento.preventDefault();
    const botao = document.querySelector("form button");
    botao.disabled = true;
    botao.innerText = "Enviando...";

    const data = new FormData(formulario);

    fetch("./enviar.php", {
        method: "POST",
        body: data,
    }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);