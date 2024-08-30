// Função para comparar caminho completo dos links e adicionar a classe active
document.addEventListener('DOMContentLoaded', () => {
    // Obtém o caminho da URL atual
    const currentPath = window.location.pathname;

    // Obtém todos os links de navegação
    const navLinks = document.querySelectorAll('.nav-item');

    // Itera sobre todos os links e adiciona a classe 'active' ao link correspondente
    navLinks.forEach(link => {
        // Obtém o caminho completo do href do link
        const linkPath = new URL(link.getAttribute('href'), window.location.origin).pathname;

        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
