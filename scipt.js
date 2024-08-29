document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('submitted');
    this.reset(); // Reset the form
});
