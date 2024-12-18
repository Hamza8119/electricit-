document.addEventListener('DOMContentLoaded', () => {
    // FAQ toggle functionality
    document.querySelectorAll('.faq-item h3').forEach(item => {
        item.addEventListener('click', () => {
            const p = item.nextElementSibling;
            p.style.display = p.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Testimonials slider (auto scrolling)
    const testimonialItems = document.querySelectorAll('.testimonial');
    let index = 0;

    function showNextTestimonial() {
        testimonialItems.forEach(item => item.style.display = 'none');
        testimonialItems[index].style.display = 'block';

        index = (index + 1) % testimonialItems.length;
    }

    setInterval(showNextTestimonial, 3000); // Auto switch every 3 seconds
});
