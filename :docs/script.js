window.addEventListener('scroll', () => {
    const titleSection = document.getElementById('title-section');
    const titleTop = titleSection.offsetTop;
    const titleHeight = titleSection.offsetHeight;
    
    const scrollY = window.scrollY;
    
    const offset = 250; 
    
    if (scrollY >= titleTop - offset && scrollY <= titleTop + titleHeight) {
      const progress = 2* (scrollY - (titleTop - offset)) / (titleHeight + offset);
      document.getElementById('cover-bar').style.width = Math.min(progress * 100, 100) + '%';
    } else if (scrollY < titleTop - offset) {
      document.getElementById('cover-bar').style.width = '0%';
    } else if (scrollY > titleTop + titleHeight) {
      document.getElementById('cover-bar').style.width = '100%';
    }
  });