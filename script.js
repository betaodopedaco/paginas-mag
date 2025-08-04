// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hero animations
gsap.to('.hero h1', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5
});

gsap.to('.hero p', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.8
});

gsap.to('.hero-button', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.1
});

// Terminal animation
const terminalLines = document.querySelectorAll('.terminal-text');
terminalLines.forEach((line, index) => {
    gsap.to(line, {
        opacity: 1,
        delay: 2 + (index * 0.5),
        duration: 0.5
    });
});

// Scroll animations for cards
gsap.utils.toArray('.proof-card, .testimonial-card').forEach(card => {
    gsap.fromTo(card, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none none'
        }
    });
});

// Card hover animations
document.querySelectorAll('.step, .proof-card, .testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Button hover effects
document.querySelectorAll('.cta-button, .hero-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.3
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3
        });
    });
});

// Comparison slider
const slider = document.querySelector('.comparison-container');
const divider = document.querySelector('.divider');
let isDragging = false;

divider.addEventListener('mousedown', function(e) {
    isDragging = true;
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    
    const containerRect = slider.getBoundingClientRect();
    let position = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    position = Math.max(0, Math.min(100, position));
    
    document.querySelector('.before').style.width = `${position}%`;
    divider.style.left = `${position}%`;
});

// Touch events for mobile
divider.addEventListener('touchstart', function(e) {
    isDragging = true;
});

document.addEventListener('touchend', function() {
    isDragging = false;
});

document.addEventListener('touchmove', function(e) {
    if (!isDragging) return;
    const touch = e.touches[0];
    const containerRect = slider.getBoundingClientRect();
    let position = ((touch.clientX - containerRect.left) / containerRect.width) * 100;
    position = Math.max(0, Math.min(100, position));
    
    document.querySelector('.before').style.width = `${position}%`;
    divider.style.left = `${position}%`;
});
