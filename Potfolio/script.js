document.addEventListener("DOMContentLoaded", function() {
    // Typing Effect
    const typingEffectElement = document.querySelector(".typing-effect");
    const phrases = [
        "Hi, I'm Akshay Pratap Singh",
        "A Passionate Software Developer",
        "A Cloud Computing Enthusiast",
        "Public Speaker & Leader"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let currentPhrase = '';
    let isDeleting = false;
    const typingSpeed = 100;
    const erasingSpeed = 60;
    const delayBetweenPhrases = 1500;

    function typePhrase() {
        const fullPhrase = phrases[phraseIndex];

        if (isDeleting) {
            currentPhrase = fullPhrase.substring(0, charIndex--);
        } else {
            currentPhrase = fullPhrase.substring(0, charIndex++);
        }

        typingEffectElement.textContent = currentPhrase;

        if (!isDeleting && charIndex === fullPhrase.length) {
            setTimeout(() => isDeleting = true, delayBetweenPhrases);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        const speed = isDeleting ? erasingSpeed : typingSpeed;
        setTimeout(typePhrase, speed);
    }

    typePhrase();

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);

    // Dark Mode Toggle
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.textContent = "Toggle Dark Mode";
    themeToggleBtn.classList.add('theme-toggle-btn');
    document.body.appendChild(themeToggleBtn);

    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = "Toggle Light Mode";
        } else {
            themeToggleBtn.textContent = "Toggle Dark Mode";
        }
    });

    // Form Validation with Animation
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (!name || !email || !message) {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.classList.add('error');
            setTimeout(() => formMessage.classList.remove('error'), 2000);
        } else {
            formMessage.textContent = "Message sent successfully!";
            formMessage.classList.add('success');
            setTimeout(() => formMessage.classList.remove('success'), 2000);
            contactForm.reset();
        }
    });
});
