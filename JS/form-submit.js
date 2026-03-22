
/*
Alternativa a mail.php para paginas estaticas (en este caso para GitHub pages), para volver a usar mail.php
solo cambio el action del form a mail.php
 */
(function () {
  const form = document.getElementById('formulario');
  if (!form) return;

  const nextInput = document.createElement('input');
  nextInput.type = 'hidden';
  nextInput.name = '_next';
  form.insertBefore(nextInput, form.firstChild);

  function thankYouUrl() {
    const origin = window.location.origin;
    let pathname = window.location.pathname;
    if (pathname.endsWith('/')) {
      return origin + pathname + 'index.html';
    }
    if (pathname.endsWith('.html')) {
      return origin + pathname;
    }
    return origin + pathname + '/index.html';
  }

form.addEventListener('submit', function () {
    nextInput.value = thankYouUrl();
  });
})();