// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Fade in animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    const sections = document.querySelectorAll('.about, .services, .cta');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Navbar background on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for hero video
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroVideo.style.transform = `translateY(${rate}px)`;
        });
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Service cards hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // CTA button pulse effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.boxShadow = '0 15px 40px rgba(0, 212, 170, 0.4)';
            setTimeout(() => {
                ctaButton.style.boxShadow = '0 5px 20px rgba(0, 212, 170, 0.2)';
            }, 1000);
        }, 3000);
    }

    // Dr Sandhu section interactions
    const ringDots = document.querySelectorAll('.ring-dot');
    const infoBoxes = document.querySelectorAll('.info-box');
    
    ringDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Hide all info boxes
            infoBoxes.forEach(box => {
                box.classList.remove('active');
            });
            
            // Show the corresponding info box
            const infoType = dot.getAttribute('data-info');
            const targetBox = document.getElementById(`${infoType}-info`);
            if (targetBox) {
                targetBox.classList.add('active');
            }
        });
    });
    
    // No info boxes shown by default - user must click a dot
});

// Add some subtle animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Animate logo on load
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        logoContainer.style.opacity = '0';
        logoContainer.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            logoContainer.style.transition = 'all 0.8s ease';
            logoContainer.style.opacity = '1';
            logoContainer.style.transform = 'translateY(0)';
        }, 300);
    }

    // Animate hero content with staggered timing
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
    
    if (heroLeft) {
        heroLeft.style.opacity = '0';
        heroLeft.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            heroLeft.style.transition = 'all 1s ease-out';
            heroLeft.style.opacity = '1';
            heroLeft.style.transform = 'translateX(0)';
        }, 200);
    }
    
    if (heroRight) {
        heroRight.style.opacity = '0';
        heroRight.style.transform = 'translateX(30px) scale(0.9)';
        setTimeout(() => {
            heroRight.style.transition = 'all 1.2s ease-out';
            heroRight.style.opacity = '1';
            heroRight.style.transform = 'translateX(0) scale(1)';
        }, 400);
    }
});
