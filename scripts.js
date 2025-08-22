// Portfolio Romeo Yota - JavaScript

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // Éléments du DOM
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const navbar = document.querySelector('.navbar');

    // Menu hamburger pour mobile
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Animation du hamburger
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Fermer le menu mobile lors du clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Réinitialiser l'animation du hamburger
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Navigation lisse et mise en surbrillance du lien actif
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Effet de scroll sur la navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mise en surbrillance du lien de navigation actif
    function updateActiveNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // Animation d'apparition des éléments au scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.project-card, .skill-category, .about-content');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    
    // Animation initiale
    animateOnScroll();

    // Effet de parallaxe léger sur la section hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Animation des compétences au survol
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotateY(360deg)';
                icon.style.transition = 'transform 0.6s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotateY(0deg)';
            }
        });
    });

    // Animation des cartes de projet au survol
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.project-image i');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotateZ(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.project-image i');
            if (icon) {
                icon.style.transform = 'scale(1) rotateZ(0deg)';
            }
        });
    });

    // Animation de la visualisation IA dans le hero
    function animateAIVisualization() {
        const nodes = document.querySelectorAll('.node');
        const connections = document.querySelectorAll('.connection');
        
        // Animer les connexions
        connections.forEach((connection, index) => {
            setTimeout(() => {
                connection.style.opacity = '1';
                connection.style.animation = 'pulse 3s infinite';
            }, index * 500);
        });
    }

    // Démarrer l'animation IA après un délai
    setTimeout(animateAIVisualization, 1000);

    // Effet de machine à écrire pour le titre (optionnel)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Compteur d'animations pour les projets
    let projectAnimationDelay = 0;
    
    projectCards.forEach(card => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, projectAnimationDelay);
        projectAnimationDelay += 200;
    });

    // Gestion du resize de la fenêtre
    window.addEventListener('resize', function() {
        // Fermer le menu mobile si on passe en desktop
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Réinitialiser l'animation du hamburger
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Smooth scroll pour tous les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Préloader pour les images (si ajoutées plus tard)
    function preloadImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            const imageLoad = new Image();
            imageLoad.src = img.src;
        });
    }

    // Gestion de l'accessibilité
    // Focus visible pour la navigation au clavier
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });

    // Performance: throttle du scroll
    let ticking = false;
    
    function updateOnScroll() {
        updateActiveNavLink();
        animateOnScroll();
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    // Console easter egg
    console.log(`
    ╔══════════════════════════════════════╗
    ║        Portfolio Romeo Yota          ║
    ║    Ingénieur IA & Développeur Web    ║
    ║                                      ║
    ║  Intéressé par mon code ?            ║
    ║  Contactez-moi ! 🚀                  ║
    ╚══════════════════════════════════════╝
    `);

    // Analytics simple (optionnel)
    function trackEvent(eventName, elementId) {
        console.log(`Event: ${eventName} on ${elementId}`);
        // Ici vous pouvez ajouter Google Analytics ou autre
    }

    // Tracker les clics sur les projets et liens de contact
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            trackEvent('project_click', `project_${index + 1}`);
        });
    });

    document.querySelectorAll('.contact-link').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('contact_click', link.querySelector('span').textContent);
        });
    });

    console.log('Portfolio Romeo Yota - JavaScript chargé avec succès! ✨');
});