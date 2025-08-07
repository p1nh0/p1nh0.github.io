// Used to dynamically load works on works.html

fetch('/works/index.json')
  .then(response => response.json())
  .then(works => {
    const container = document.getElementById('works-list');

    works.sort((a, b) => new Date(b.date) - new Date(a.date));

    works.forEach(work => {
      const preview = document.createElement('div');
      preview.className = 'work-preview-container';

      preview.innerHTML = `
        <a href="/works/${work.file}">
          <img src="${work.thumbnail}" alt="${work.title}" class="work-thumbnail" />
        </a>
        <div class="work-details">
          <div class="work-title">${work.title}</div>
          <div class="work-description">${work.description}</div>
          <a href="/works/${work.file}">Read more</a>
        </div>
      `;

      container.appendChild(preview);
    });
  });