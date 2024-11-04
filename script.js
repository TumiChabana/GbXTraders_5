// Custom JavaScript can be added here for additional interactivity and animations

// Example: Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for Form Validation and Success/Error Messaging
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from refreshing the page

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.classList.add('error');
        formMessage.style.opacity = '1';
    } else if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.add('error');
        formMessage.style.opacity = '1';
    } else {
        formMessage.textContent = 'Thank you for reaching out! We will get back to you shortly.';
        formMessage.classList.remove('error');
        formMessage.classList.add('success');
        formMessage.style.opacity = '1';

        // Reset form
        document.getElementById('contactForm').reset();
    }

    // Fade out the message after 5 seconds
    setTimeout(() => {
        formMessage.style.opacity = '0';
    }, 5000);
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
