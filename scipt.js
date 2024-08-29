document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('submitted');
    this.reset(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const textBlock = document.querySelector('.text-block');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textBlock.classList.add('visible');
                observer.unobserve(textBlock); // Stop observing after animation
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the block is visible

    observer.observe(textBlock);
});

