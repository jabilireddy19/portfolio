// Toggle the navigation menu on small screens
const menuIcon = document.querySelector('.checkbox');
const menu = document.querySelector('nav ul');

menuIcon.addEventListener('click', function() {
    const checkBox = document.querySelector('#check');
    if (checkBox.checked) {
        menu.style.left = "0";
    } else {
        menu.style.left = "-100%";
    }
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove the '#' from href
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Hire Me button functionality
const hireMeBtn = document.querySelector('.hire__me');
hireMeBtn.addEventListener('click', function() {
    alert('Thank you for your interest! You can contact me via the form or email.');
});

// Portfolio button functionality (could scroll to the portfolio section if it exists)
const portfolioBtn = document.querySelector('.portfolio');
portfolioBtn.addEventListener('click', function() {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Portfolio section coming soon!');
    }
});
