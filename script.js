// Mobile Menu Functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const isVisible = mobileMenu.style.display === 'block';
    mobileMenu.style.display = isVisible ? 'none' : 'block';
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').style.display = 'none';
}

// Smooth scrolling to booking section
function scrollToBooking() {
    const bookingElement = document.getElementById('booking-form');
    if (bookingElement) {
        bookingElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    closeMobileMenu();
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }
});

// Navigation smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            closeMobileMenu();
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const contact = document.getElementById('contact').value;
            const message = document.getElementById('message').value;
            
            // Create Telegram message
            const telegramMessage = `Новая заявка с сайта:\n\nИмя: ${name}\nКонтакт: ${contact}\nСообщение: ${message || 'Не указано'}`;
            const telegramUrl = `https://t.me/romabulochka?text=${encodeURIComponent(telegramMessage)}`;
            
            // Open Telegram
            window.open(telegramUrl, '_blank');
            
            // Show success message
            alert('Спасибо! Ваша заявка отправлена. Я свяжусь с вами в течение 24 часов.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Intersection Observer for animations
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

    // Observe cards for animation
    const cards = document.querySelectorAll('.service-card, .reason-card, .certificate-card, .issue-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu.style.display === 'block' && 
        !mobileMenu.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});