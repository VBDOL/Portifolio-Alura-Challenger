$(function () {
    $(".button-collapse").sideNav();
});

// Captura o formulário de contato
const formularioContato = document.getElementById('contactForm');

// Evento de envio do formulário
formularioContato.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    // Aqui você pode adicionar lógica para enviar o e-mail (usando AJAX, por exemplo)
    // ...
});

// O restante do seu código permanece inalterado
var backToTopBtn = document.getElementById('backToTopBtn');

