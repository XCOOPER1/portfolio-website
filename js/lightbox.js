// Lightbox functionality
document.querySelectorAll('.lightbox').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const imgSrc = this.getAttribute('href');
        const overlay = document.createElement('div');
        overlay.classList.add('lightbox-overlay');
        overlay.innerHTML = `<img src="${imgSrc}" alt="Lightbox Image">`;
        document.body.appendChild(overlay);

        // Close the lightbox when clicking the overlay
        overlay.addEventListener('click', function() {
            overlay.remove();
        });

        overlay.classList.add('active');
    });
});
