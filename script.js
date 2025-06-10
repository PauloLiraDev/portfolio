// Animated text rotation
document.addEventListener('DOMContentLoaded', function() {
    const textItems = document.querySelectorAll('.text-item');
    let currentIndex = 0;

    // Ensure the first item is visible
    textItems.forEach((item, index) => {
        if (index === 0) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    function rotateText() {
        // Remove active class from current item and add exit class
        textItems[currentIndex].classList.remove('active');
        textItems[currentIndex].classList.add('exit');
        
        // Move to next item
        currentIndex = (currentIndex + 1) % textItems.length;
        
        // After a short delay, remove exit class and add active to new item
        setTimeout(() => {
            // Remove exit class from all items
            textItems.forEach(item => item.classList.remove('exit'));
            
            // Add active class to current item
            textItems[currentIndex].classList.add('active');
        }, 250);
    }

    // Start rotation every 3 seconds
    setInterval(rotateText, 3000);
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Download CV function
function downloadCV() {
    // Create a temporary link element
    const link = document.createElement('a');
    
    // Set the href to your CV file
    link.href = 'Paulo-Lira-Desenvolvedor-Back-end-RPA.docx';
    
    // Set the download attribute with a user-friendly filename
    link.download = 'Paulo-Lira-Desenvolvedor-Back-end-RPA.docx';
    
    // Add the link to the document temporarily
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
    
    // Optional: Show a success message
    console.log('Download do CV iniciado!');
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (name && email && message) {
                alert('Mensagem enviada com sucesso! (Adicione sua lógica de envio aqui)');
                this.reset();
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(37, 37, 38, 0.95)';
    } else {
        header.style.backgroundColor = 'var(--bg-secondary)';
    }
});