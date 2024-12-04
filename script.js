// Show the selected page and hide others
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    
    // Loop through all pages and hide them
    pages.forEach(page => {
      page.classList.remove('active');
    });
    
    // Show the selected page
    document.getElementById(pageId).classList.add('active');
  }
  
  // Show the home page on initial load
  document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
  });
  

  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel img");

  function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }



  function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('show');
  }
  
  // Close the menu when a link is clicked
  document.querySelectorAll('.nav ul li a').forEach((link) => {
    link.addEventListener('click', () => {
      const nav = document.querySelector('.nav');
      nav.classList.remove('show');
    });
  });
  
  
  // Example function to handle navigation (optional)
