// Used to load a random work on index.html

fetch('/works/index.json')
  .then(response => response.json())
  .then(works => {
    const random = works[Math.floor(Math.random() * works.length)];
    window.location.href = `/works/${random.file}`;
  });