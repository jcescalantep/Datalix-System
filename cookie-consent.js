(function () {
  try {
    if (localStorage.getItem('bidata_cookie_consent') === 'accepted') return;
  } catch (e) { /* localStorage no disponible, mostramos igual */ }

  var isServicePage = /\/servicios\//.test(window.location.pathname);
  var prefix = isServicePage ? '../' : '';

  var bar = document.createElement('div');
  bar.setAttribute('id', 'cookie-consent-bar');
  bar.style.cssText = [
    'position:fixed', 'left:0', 'right:0', 'bottom:0', 'z-index:9999',
    'background:#0A1628', 'color:#F5F7FB', 'padding:16px 20px',
    'display:flex', 'flex-wrap:wrap', 'align-items:center', 'justify-content:center',
    'gap:14px', 'font-family:Inter,sans-serif', 'font-size:13.5px', 'line-height:1.5',
    'box-shadow:0 -12px 30px -10px rgba(10,22,40,0.45)'
  ].join(';');

  var text = document.createElement('span');
  text.style.cssText = 'max-width:640px; color:#E7EBF5;';
  text.innerHTML = 'Usamos cookies propias y de terceros (incluyendo Google) para mejorar tu experiencia y mostrar anuncios personalizados. Puedes ver más en nuestra <a href="' + prefix + 'cookies.html" style="color:#6E8CFF; text-decoration:underline;">Política de Cookies</a>.';

  var btn = document.createElement('button');
  btn.textContent = 'Aceptar';
  btn.style.cssText = [
    'background:#FF5A36', 'color:#fff', 'border:none', 'padding:10px 22px',
    'border-radius:999px', 'font-weight:700', 'font-size:13.5px', 'cursor:pointer',
    'white-space:nowrap'
  ].join(';');
  btn.addEventListener('click', function () {
    try { localStorage.setItem('bidata_cookie_consent', 'accepted'); } catch (e) {}
    bar.remove();
  });

  bar.appendChild(text);
  bar.appendChild(btn);

  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(bar);
  });
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    document.body.appendChild(bar);
  }
})();
