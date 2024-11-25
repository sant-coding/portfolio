// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Prevent the default behavior of anchor links
    e.preventDefault();

    // Get the target element from the href attribute of the link
    const targetElement = document.querySelector(this.getAttribute('href'));

    // If the target element exists, scroll into view
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Enables smooth scrolling
        block: 'start'      // Aligns the target element at the top of the viewport
      });
    }
  });
});
