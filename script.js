// Portfolio Website JavaScript
(function() {
    'use strict';
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function highlightNav() {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach((section, index) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(link => {
                    link.style.opacity = '0.5';
                    if (link.getAttribute('href') === `#${id}`) {
                        link.style.opacity = '1';
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Initial call
    
    // Add loaded class for animations
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe timeline items and project cards
    document.querySelectorAll('.timeline-item, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key to blur active element
        if (e.key === 'Escape') {
            document.activeElement.blur();
        }
    });
    
    // Mobile menu toggle (if needed in future)
    // Can be expanded for mobile hamburger menu
    
})();
