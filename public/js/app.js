// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1000);
});

// Particles.js
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#00f0ff" },
            shape: { type: "circle" },
            opacity: { value: 0.2, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#00f0ff", opacity: 0.1, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true }
        },
        retina_detect: true
    });
}

// Full-Stack Form Handler (Connects to API)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // UI Feedback
        submitBtn.disabled = true;
        submitBtn.innerText = 'Connecting to Database...';
        formStatus.innerHTML = '<p style="color: #00f0ff;">Saving transmission to MongoDB...</p>';

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.status === 'success') {
                formStatus.innerHTML = '<p style="color: #00ff00;">Success! Your message is now in the MongoDB database.</p>';
                contactForm.reset();
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            console.error('Database error:', error);
            formStatus.innerHTML = '<p style="color: #ff3333;">Error: Could not save to database. Is the server running?</p>';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerText = 'Save to MongoDB';
        }
    });
}
