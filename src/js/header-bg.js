window.addEventListener('scroll', function() {
  var element = document.querySelector('.header');
  if (window.scrollY > 5) {
      if (!element.classList.contains('show-header-bg')) {
          element.classList.remove('hide-header-bg');
          element.classList.add('show-header-bg');
      }
  } else {
      if (!element.classList.contains('hide-header-bg')) {
          element.classList.remove('show-header-bg');
          element.classList.add('hide-header-bg');
      }
  }
});