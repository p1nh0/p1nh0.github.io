function initSlideshow(containerId, config = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    const slides = container.querySelectorAll('.slide');
    const dotsContainer = container.querySelector('.dots-container');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
  
    let current = 0;
    let timer;
    const delay = config.delay || 5000;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
        if (dotsContainer.children[i]) {
          dotsContainer.children[i].classList.toggle('active', i === index);
        }
      });
      current = index;
    }
  
    function nextSlide() {
      showSlide((current + 1) % slides.length);
    }
  
    function prevSlide() {
      showSlide((current - 1 + slides.length) % slides.length);
    }
  
    function startAuto() {
      stopAuto();
      timer = setInterval(nextSlide, delay);
    }
  
    function stopAuto() {
      if (timer) clearInterval(timer);
    }
  
    // Create dots
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.addEventListener('click', () => {
        showSlide(i);
        startAuto();
      });
      dotsContainer.appendChild(dot);
    });
  
    // Button actions
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAuto();
    });
  
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAuto();
    });
  
    container.addEventListener('mouseenter', stopAuto);
    container.addEventListener('mouseleave', startAuto);
  
    showSlide(current);
    startAuto();
  }
  
  window.initSlideshow = initSlideshow;
  