// Used to load a random work on index.html

/*
fetch('/works/index.json')
  .then(response => response.json())
  .then(works => {
    const random = works[Math.floor(Math.random() * works.length)];
    window.location.href = `/works/${random.file}`;
  });
*/

// File: /js/randomWork.js

fetch('/works/index.json')
  .then(response => response.json())
  .then(works => {
    if (!works || works.length === 0) return;

    // Pick a random work
    const randomIndex = Math.floor(Math.random() * works.length);
    const work = works[randomIndex];

    const container = document.getElementById('random-work');
    const preview = document.createElement('div');
    preview.className = 'work-preview-container';

    preview.innerHTML = `
      <img src="${work.thumbnail}" alt="${work.title}" class="work-thumbnail" />
      <div class="work-details">
        <div class="work-title">${work.title}</div>
        <div class="work-description">${work.description}</div>
        <a href="/works/${work.file}">Read more</a>
      </div>
    `;

    container.appendChild(preview);
  })
  .catch(error => {
    console.error("Error loading random work:", error);
  });

