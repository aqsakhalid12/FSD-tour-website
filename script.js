/* Mobile burger menu toggle */
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  if (!burger || !navLinks) return;

  // Toggle menu on burger click
  burger.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    burger.classList.toggle("active");
  });

  // Close menu when a navigation link is clicked
  const links = navLinks.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      burger.classList.remove("active");
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
      navLinks.classList.remove("active");
      burger.classList.remove("active");
    }
  });
});