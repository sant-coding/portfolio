// Function to check if the device is mobile
function isMobile() {
  return window.innerWidth <= 768;  // Consider screen width <= 768px as mobile
}

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Prevent the default behavior of anchor links
    e.preventDefault();

    // Get the target element from the href attribute of the link
    const targetElement = document.querySelector(this.getAttribute('href'));

    // If the target element exists, scroll into view
    if (targetElement) {
      // Smooth scroll behavior
      targetElement.scrollIntoView({
        behavior: 'smooth', // Enables smooth scrolling
        block: isMobile() ? 'center' : 'start' // For mobile: center the element, for desktop: align to the top
      });
    }
  });
});
