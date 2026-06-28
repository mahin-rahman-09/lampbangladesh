/* ── NAV ACTIVE STATE ── */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (
      (page === 'index.html' || page === '' || page === '/') && href === 'index.html'
      || href === page
    ) {
      link.classList.add('active');
    }
  });
})();

/* ── HAMBURGER MENU ── */
var hamBtn = document.getElementById('ham-btn');
var mobileMenu = document.getElementById('mobile-menu');

if (hamBtn && mobileMenu) {
  hamBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (
      mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(e.target) &&
      !hamBtn.contains(e.target)
    ) {
      mobileMenu.classList.remove('open');
    }
  });
}

/* ── CONTACT FORM SUBMIT (contact.html only) ── */
var formSubmit = document.getElementById('form-submit-btn');
if (formSubmit) {
  formSubmit.addEventListener('click', function () {
    var name  = document.getElementById('f-name')  ? document.getElementById('f-name').value.trim()  : '';
    var email = document.getElementById('f-email') ? document.getElementById('f-email').value.trim() : '';
    if (!name || !email) {
      alert('Please fill in your name and email address.');
      return;
    }
    var successMsg = document.getElementById('success-msg');
    if (successMsg) {
      successMsg.style.display = 'block';
    }
    formSubmit.disabled = true;
    formSubmit.textContent = 'Sent ✓';
    formSubmit.style.background = '#059669';
  });
}
