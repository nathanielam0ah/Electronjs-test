document.addEventListener("DOMContentLoaded", () => {
  // ... (your existing code)

  let prevScrollPos = window.pageYOffset;

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.querySelector(".navbar");

    if (prevScrollPos > currentScrollPos) {
      // User is scrolling up
      navbar.style.left = "10px"; // Show the navbar with animation
    } else {
      // User is scrolling down
      navbar.style.left = "-300px"; // Hide the navbar with animation
    }

    prevScrollPos = currentScrollPos;
  });

  // ... (your existing code)
});
