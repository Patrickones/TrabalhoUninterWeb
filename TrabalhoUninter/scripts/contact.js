document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    
    // Obtém os dados do formulário
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Exibe os dados no console
    console.log('Dados do Formulário:', data);

    // Mostra uma mensagem para o usuário 
    alert('Formulário enviado! Veja o console para os dados.');
    event.target.reset();
});