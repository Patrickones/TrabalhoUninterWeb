document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById('button'); // Se você tiver um botão com id "button", adicione-o ao HTML
    if (button) {
        button.addEventListener('click', function () {
            window.location.href = '/TrabalhoUninter/templates/portifolio.html'; // URL relativa
        });
    } else {
        console.warn('Botão com id "button" não encontrado.');
    }
})