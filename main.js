document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');

    // Define o estado inicial do menu como escondido
    menu.classList.remove('show');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});
