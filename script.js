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
    const sections = document.querySelectorAll('.about-me, .longevity, .services, .cta, .contact-section, .speaking-block, .speaking-page-hero, .testimonials, .speaking-video, .speaking-talks, .insomnia-page-hero, .insomnia-video, .insomnia-faq, .insomnia-cta');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Site header scroll state
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                siteHeader.classList.add('is-scrolled');
            } else {
                siteHeader.classList.remove('is-scrolled');
            }
        });
    }

    // Mobile navigation toggle
    const navToggle = document.querySelector('.site-header-toggle');
    const siteNav = document.querySelector('.site-header-nav');

    if (navToggle && siteNav) {
        navToggle.addEventListener('click', function() {
            const isOpen = siteNav.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', isOpen);
            navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        });

        siteNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                siteNav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Open menu');
            });
        });
    }

    // Smooth scroll for in-page navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;

            e.preventDefault();
            const headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
            const targetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;

            window.scrollTo({ top: targetTop, behavior: 'smooth' });
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
        widget.setAttribute('data-url', 'https://calendly.com/hello-thevitalroom/the-vital-run-project');
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

    // Animate hero on load
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual-frame');

    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease-out, transform 0.6s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }

    if (heroVisual) {
        heroVisual.style.opacity = '0';
        heroVisual.style.transform = 'rotate(2deg) translateY(32px)';
        setTimeout(() => {
            heroVisual.style.transition = 'opacity 0.9s ease-out, transform 0.5s ease, box-shadow 0.45s ease';
            heroVisual.style.opacity = '1';
            heroVisual.style.transform = 'rotate(2deg) translateY(0)';
        }, 380);
    }
});
