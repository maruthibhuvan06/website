document.addEventListener('DOMContentLoaded', () => {
    // Loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
    }, 1000);

    // Particles.js Config
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: ["#10b981", "#fbbf24"] },
                shape: { type: "circle" },
                opacity: { value: 0.4, random: true },
                size: { value: 2, random: true },
                line_linked: { enable: true, distance: 150, color: "#10b981", opacity: 0.1, width: 1 },
                move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { bubble: { distance: 200, size: 4, duration: 2, opacity: 0.8 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });
    }

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    if (themeBtn) {
        const icon = themeBtn.querySelector('i');
        themeBtn.addEventListener('click', () => {
            if (html.getAttribute('data-theme') === 'dark') {
                html.setAttribute('data-theme', 'light');
                icon.classList.replace('fa-sun', 'fa-moon');
            } else {
                html.setAttribute('data-theme', 'dark');
                icon.classList.replace('fa-moon', 'fa-sun');
            }
        });
    }

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navLinks.style.display = navLinks.classList.contains('active') ? 'flex' : 'none';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (window.innerWidth <= 768) navLinks.style.display = 'none';
            });
        });
    }

    // Contact Form (Simplified simulation)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formStatus.innerHTML = '<p style="color: var(--primary-color); margin-top: 1rem;">Sending message...</p>';
            
            setTimeout(() => {
                formStatus.innerHTML = '<p style="color: var(--primary-color); margin-top: 1rem;">Message sent to Maruthi successfully!</p>';
                contactForm.reset();
                setTimeout(() => formStatus.innerHTML = '', 3000);
            }, 1500);
        });
    }
});
