document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.typed', {
        strings: ["DevOps Engineer", "Cloud Enthusiast", "Automation Expert"],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true
    });

    const navLinks = document.querySelectorAll('.nav-links a');

    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});