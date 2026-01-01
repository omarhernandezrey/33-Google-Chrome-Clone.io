document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const appsMenu = document.querySelector('.google-apps-menu');

    menuIcon.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Evita que el clic se propague al documento
        appsMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!appsMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            appsMenu.classList.remove('active');
        }
    });
});