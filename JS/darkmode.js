
  (function () {
    const body = document.getElementById('body');
    const sun = document.getElementById('id-sun');
    const moon = document.getElementById('id-moon');

  function setTheme(isDark) {
      body.dataset.theme = isDark ? 'dark' : 'light';
      if (isDark) {
        sun.classList.remove('active');
        moon.classList.add('active');
      } else {
        moon.classList.remove('active');
        sun.classList.add('active');
      }
  }

  sun.onclick = function () {
    setTheme(false);
  };
  moon.onclick = function () {
    setTheme(true);
  };
})();
  