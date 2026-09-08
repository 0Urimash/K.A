document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('#menu');

    if (toggler && menu) {
        toggler.setAttribute('aria-controls', 'menu');
        toggler.setAttribute('aria-expanded', 'false');

        toggler.addEventListener('click', () => {
            const isOpen = toggler.getAttribute('aria-expanded') === 'true';
            toggler.setAttribute('aria-expanded', String(!isOpen));
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const openMenu = document.querySelector('.navbar-collapse.show');
            if (openMenu) {
                openMenu.classList.remove('show');
                if (toggler) {
                    toggler.setAttribute('aria-expanded', 'false');
                }
            }
        }
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        document.documentElement.style.scrollBehavior = 'auto';
    }

    document.querySelectorAll('a, button, input, select, textarea').forEach((element) => {
        element.addEventListener('focus', () => {
            element.classList.add('focus-visible');
        });
        element.addEventListener('blur', () => {
            element.classList.remove('focus-visible');
        });
    });
});
