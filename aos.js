AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    AOS.init();
    console.log('AOS initialized');
    window.addEventListener('scroll', function() {
      console.log('Scroll event triggered');
      var scrollPosition = window.scrollY;
      var disappearText = document.getElementById('disappear-text');
      if (scrollPosition > 200) {
        disappearText.style.opacity = 0;
      } else {
        disappearText.style.opacity = 1;
      }
    });
  });