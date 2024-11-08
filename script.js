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
  