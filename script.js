// =========================
// TROCAR ENTRE TELAS
// =========================

function mostrarTela(tela) {
    // Esconde todas as telas
    document.querySelectorAll(".tela").forEach(t => t.style.display = "none");

    // Mostra a tela selecionada
    document.getElementById(tela).style.display = "block";
}



// =========================
// ENVIO DE MENSAGENS DO ATENDENTE
// =========================

function enviarMensagem() {
    const input = document.getElementById("mensagemInput");
    const chatBox = document.getElementById("chatMensagens");

    if (input.value.trim() === "") {
        alert("Digite uma mensagem!");
        return;
    }

    // Cria elemento <p> com mensagem do atendente
    const novaMensagem = document.createElement("p");
    novaMensagem.innerHTML = `<strong>Atendente:</strong> ${input.value}`;

    // Adiciona no chat
    chatBox.appendChild(novaMensagem);

    // Limpa o campo
    input.value = "";

    // Scroll sempre para o final do chat
    chatBox.scrollTop = chatBox.scrollHeight;
}



// =========================
// INICIAR COM A TELA PACIENTE VISÍVEL
// =========================
mostrarTela("paciente");
