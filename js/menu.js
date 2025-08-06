// load menu dynamically
  fetch('/menu.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('menu-placeholder').innerHTML = data;
    })
    .catch(err => console.error('Failed to load menu:', err));
