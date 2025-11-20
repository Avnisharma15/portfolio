// TypedJS
new Typed('.typed', {
  strings: ['Frontend Developer', 'UI/UX Enthusiast'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1100,
  loop: true
});



// Active link on scroll + small offset for sticky header
const links = [...document.querySelectorAll('.nav-links a'), ...document.querySelectorAll('#mobileNav a')];
const sections = [...document.querySelectorAll('main section')];
const setActive = () => {
  const pos = window.scrollY + 140;
  sections.forEach(sec => {
    const top = sec.offsetTop; const bottom = top + sec.offsetHeight; const id = sec.id;
    if (pos >= top && pos < bottom) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  })
};
window.addEventListener('scroll', setActive);




// Mobile menu
const menuBtn = document.getElementById('menu');
const mobile = document.getElementById('mobileNav');
const hamburgerIcon = menuBtn.querySelector('i');
menuBtn?.addEventListener('click', () => {
  mobile.classList.toggle('open'); // toggle menu

  // Change icon
  if (mobile.classList.contains('open')) {
    hamburgerIcon.classList.remove('fa-bars');
    hamburgerIcon.classList.add('fa-xmark'); // X icon
  } else {
    hamburgerIcon.classList.remove('fa-xmark');
    hamburgerIcon.classList.add('fa-bars'); // hamburger icon
  }
});

// Close menu when clicking a link
links.forEach(a => a.addEventListener('click', () => {
  mobile.classList.remove('open');
  hamburgerIcon.classList.remove('fa-xmark');
  hamburgerIcon.classList.add('fa-bars');
}));






// Read more
const readMoreBtn = document.getElementById('readMoreBtn');
const more = document.getElementById('moreAbout');
readMoreBtn.addEventListener('click', () => {
  const isHidden = more.hasAttribute('hidden');
  if (isHidden) { more.removeAttribute('hidden'); readMoreBtn.textContent = 'Read Less'; }
  else { more.setAttribute('hidden', ''); readMoreBtn.textContent = 'Read More'; }
});





// EmailJS form
const toast = document.getElementById('toast');
const showToast = (msg = 'Your message has been sent successfully!') => {
  toast.textContent = msg; toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3800);
};
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm('service_1r79yak', 'template_cndm9zo', this)
    .then(() => { this.reset(); showToast(); })
    .catch((err) => { console.error(err); showToast('Something went wrong. Please try again.'); });
});





// Footer year
document.getElementById('year').textContent = new Date().getFullYear();