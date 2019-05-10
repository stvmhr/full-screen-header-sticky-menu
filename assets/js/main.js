(function() {
  const headerContainer = document.querySelector('.header__container');

  window.addEventListener('scroll', () => {
    document.documentElement.scrollTop > 0
      ? headerContainer.classList.add('header__container--scrolled')
      : headerContainer.classList.remove('header__container--scrolled');
  });
})();
