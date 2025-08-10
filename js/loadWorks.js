// Used to dynamically load works on works.html

fetch('/works/index.json')
  .then(response => response.json())
  .then(works => {
    const container = document.getElementById('works-list');

    works.sort((a, b) => new Date(b.date) - new Date(a.date));

    works.forEach(work => {
      const preview = document.createElement('div');
      preview.className = 'work-preview-container';

      // Detect if it's an external link
      const isExternal = /^https?:\/\//i.test(work.file);
      const link = isExternal ? work.file : `/works/${work.file}`;
      const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';

      preview.innerHTML = `
        <a href="${link}"${targetAttr}>
          <img src="${work.thumbnail}" alt="${work.title}" class="work-thumbnail" />
        </a>
        <div class="work-details">
          <div class="work-title">${work.title}</div>
          <div class="work-description">${work.description}</div>
          <a href="${link}"${targetAttr}s>Read more</a>
        </div>
      `;

      container.appendChild(preview);
    });
  });
