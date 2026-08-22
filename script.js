// Portfólio Paulo Lira — interações (vanilla JS)
document.documentElement.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {

    /* ── Revelação ao rolar ─────────────────────────── */
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !reduceMotion) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
        revealEls.forEach((el) => io.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('in'));
    }

    /* ── Rotação de palavras no hero ────────────────── */
    const rotItems = document.querySelectorAll('.rot-item');
    if (rotItems.length > 1 && !reduceMotion) {
        let current = 0;
        setInterval(() => {
            rotItems[current].classList.remove('is-active');
            current = (current + 1) % rotItems.length;
            rotItems[current].classList.add('is-active');
        }, 2800);
    }

    /* ── Menu mobile ────────────────────────────────── */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const open = navMenu.classList.toggle('open');
            hamburger.classList.toggle('open', open);
            hamburger.setAttribute('aria-expanded', String(open));
            hamburger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        });
        navMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ── Sombra do header ao rolar ──────────────────── */
    const header = document.querySelector('.header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ── Link ativo conforme a seção visível ────────── */
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = new Map(
        [...document.querySelectorAll('.nav-link')].map((a) => [a.getAttribute('href').slice(1), a])
    );
    if ('IntersectionObserver' in window) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((a) => a.classList.remove('active'));
                    const link = navLinks.get(entry.target.id);
                    if (link) link.classList.add('active');
                }
            });
        }, { rootMargin: '-40% 0px -55% 0px' });
        sections.forEach((s) => spy.observe(s));
    }
});
