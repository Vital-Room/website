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

});

// Initialize automatic scrolling
document.addEventListener('DOMContentLoaded', function() {
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Show loading state
            const submitBtn = contactForm.querySelector('.form-submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Formspree will handle the submission and redirect
            // We'll show success message after a short delay
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#00d4aa';
                contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
            }, 1000);
        });
    }
});

// Calendly Modal Functions
function openCalendlyModal(type) {
    const modal = document.getElementById('calendly-modal');
    const widget = document.querySelector('.calendly-inline-widget');
    
    // Update the URL based on the type
    if (type === 'high-performance') {
        widget.setAttribute('data-url', 'https://calendly.com/hello-thevitalroom/lifestyle-medicine-x-high-performance-protocol');
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Initialize Calendly widget
    if (typeof Calendly !== 'undefined') {
        Calendly.initInlineWidget({
            url: widget.getAttribute('data-url'),
            parentElement: widget
        });
    }
}

function closeCalendlyModal() {
    const modal = document.getElementById('calendly-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('calendly-modal');
    if (event.target === modal) {
        closeCalendlyModal();
    }
}

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
