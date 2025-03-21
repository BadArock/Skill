// Efeito de rolagem suave nos links do menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Seleciona os botões de "Agende Agora"
const botoesAgendar = document.querySelectorAll('.botao-plano');

// Seleciona o modal
const modal = document.getElementById('modal-agendamento');

// Seleciona o botão de fechar modal
const fecharModal = document.querySelector('.fechar-modal');

// Para cada botão de agendamento, adiciona o evento de clique
botoesAgendar.forEach(botao => {
    botao.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o redirecionamento imediato
        modal.style.display = 'flex'; // Exibe o modal
    });
});

// Fecha o modal ao clicar no botão de fechar
fecharModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const botaoModo = document.getElementById("modo-toggle");
    const body = document.body;

    // Verifica se o usuário já tem uma preferência salva
    if (localStorage.getItem("modo") === "claro") {
        body.classList.add("light-mode");
        botaoModo.textContent = "☀️";
    }

    botaoModo.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        // Atualiza o ícone do botão
        if (body.classList.contains("light-mode")) {
            botaoModo.textContent = "☀️";
            localStorage.setItem("modo", "claro");
        } else {
            botaoModo.textContent = "🌙";
            localStorage.setItem("modo", "escuro");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContato");
    const erroMensagem = document.getElementById("erroMensagem");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio automático

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            erroMensagem.textContent = "Todos os campos são obrigatórios!";
            erroMensagem.style.color = "red";
        } else if (!validarEmail(email)) {
            erroMensagem.textContent = "E-mail inválido!";
            erroMensagem.style.color = "red";
        } else {
            erroMensagem.textContent = "Enviado com sucesso!";
            erroMensagem.style.color = "green";
            form.submit(); // Envia o formulário se estiver tudo certo
        }
    });

    function validarEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});