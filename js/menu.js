// Dynamically load menu.html into the nav tag on all pages
fetch('/menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-placeholder').innerHTML = data;

    const current = window.location.pathname;
    document.querySelectorAll('#menu-placeholder a').forEach(link => {
      if (link.href.includes(current)) {
        link.classList.add('active');
      }
    });
  });