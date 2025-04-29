document.addEventListener('DOMContentLoaded', function () {
    // Time-based greeting
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) greeting = 'Good morning!';
    else if (hour < 18) greeting = 'Good afternoon!';
    else greeting = 'Good evening!';
    alert(greeting);
  
    // Form validation
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{10}$/;
        if (!emailPattern.test(email)) {
          alert('Invalid email address.');
          e.preventDefault();
        }
        if (!phonePattern.test(phone)) {
          alert('Phone number must be 10 digits.');
          e.preventDefault();
        }
      });
    }
  });
  
  function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === 'none') {
      details.style.display = 'block';
    } else {
      details.style.display = 'none';
    }
  }
  