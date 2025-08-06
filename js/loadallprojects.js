    // List of project pages to fetch previews from (example)
    const projects = [
        //'projects/_example-project.html',
        'projects/augmut.html', 
        'projects/nkisi.html',
        // Add other project page URLs here
      ];
  
      const projectListEl = document.getElementById('project-list');
  
      // Function to extract preview info from a project HTML page
      async function fetchProjectPreview(url) {
        try {
          const response = await fetch(url);
          const text = await response.text();
  
          // Create a DOM parser to parse the project page HTML
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, 'text/html');
  
          // Extract title, description, and an image (assumed in a specific structure)
          const title = doc.querySelector('h1')?.textContent || 'No Title';
          const desc = doc.querySelector('meta[name="description"]')?.getAttribute('content') || 'No description available.';
          const img = doc.querySelector('img')?.src || '';
  
          return { url, title, description: desc, img };
        } catch (err) {
          console.error(`Failed to fetch project preview from ${url}:`, err);
          return null;
        }
      }
  
      // Load and display project previews
      async function loadProjects() {
        for (const url of projects) {
          const preview = await fetchProjectPreview(url);
          if (preview) {
            // Create the project preview element
            const article = document.createElement('article');
            article.className = 'project-entry';
  
            if (preview.img) {
              const imgEl = document.createElement('img');
              imgEl.src = preview.img;
              imgEl.alt = preview.title + ' preview';
              article.appendChild(imgEl);
            }
  
            const titleEl = document.createElement('h2');
            titleEl.textContent = preview.title;
            article.appendChild(titleEl);
  
            const descEl = document.createElement('p');
            descEl.textContent = preview.description;
            article.appendChild(descEl);
  
            const linkEl = document.createElement('a');
            linkEl.href = url;
            linkEl.className = 'read-more';
            linkEl.textContent = 'Read more';
            article.appendChild(linkEl);
  
            projectListEl.appendChild(article);
          }
        }
      }
  
      loadProjects();