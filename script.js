const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); } });
document.addEventListener('click', event => { if (!event.target.closest('header')) closeMenu(); });
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');
filters.forEach(button => button.addEventListener('click', () => {
 filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
 let count = 0;
 projects.forEach(project => { project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; if (!project.hidden) count++; });
 document.querySelector('#filter-status').textContent = `${count} projects shown.`;
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#project-form').addEventListener('submit', event => {
 event.preventDefault();
 const data = new FormData(event.currentTarget);
 const subject = `New project enquiry: ${data.get('service')}`;
 const body = `Hello Update team,\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('message')}\n\nLet's build something that performs.`;
 window.location.href = `mailto:info@updatedigitalmarketing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 document.querySelector('#form-status').textContent = 'Your email draft is ready to open. If your email app does not open, email info@updatedigitalmarketing.com directly. Your enquiry has not been sent yet.';
});

// Optional motion, respecting system preferences and the visitor's choice.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.querySelector('.motion-toggle');
let motionPaused = motionPreference.matches;
let visitorChoice = false;
const counters = document.querySelectorAll('[data-count]');
const activeCounters = new Map();
function finishCounters() {
 activeCounters.forEach((frame, element) => { cancelAnimationFrame(frame); element.textContent = Number(element.dataset.count).toFixed(Number(element.dataset.decimals || 0)); });
 activeCounters.clear();
}
function setMotion(paused) {
 motionPaused = paused;
 document.body.classList.toggle('motion-on', !paused);
 document.body.classList.toggle('motion-paused', paused);
 motionButton.setAttribute('aria-pressed', String(paused));
 motionButton.textContent = paused ? 'Enable motion ↻' : 'Pause motion Ⅱ';
 if (paused) finishCounters();
}
motionButton.hidden = false;
setMotion(motionPaused);
motionButton.addEventListener('click', () => { visitorChoice = true; setMotion(!motionPaused); });
motionPreference.addEventListener('change', event => { if (!visitorChoice) setMotion(event.matches); });
function countUp(element) {
 if (motionPaused || element.dataset.counted) return;
 element.dataset.counted = 'true';
 const target = Number(element.dataset.count), decimals = Number(element.dataset.decimals || 0);
 const start = performance.now();
 function frame(now) {
  const progress = Math.min((now - start) / 1400, 1);
  element.textContent = (target * (1 - Math.pow(1 - progress, 3))).toFixed(decimals);
  if (progress < 1) activeCounters.set(element, requestAnimationFrame(frame));
  else activeCounters.delete(element);
 }
 activeCounters.set(element, requestAnimationFrame(frame));
}
if ('IntersectionObserver' in window) {
 const reveals = document.querySelectorAll('.about>div, .section-heading, .service-grid article, .project, .result-feature, .result-card, .impact-heading, .impact-grid article, .approach-grid>*, .contact-grid>*');
 const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.remove('pending'); revealObserver.unobserve(entry.target); } });
 }, { threshold: 0.08 });
 reveals.forEach((element, index) => { element.classList.add('reveal', 'pending'); element.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`); revealObserver.observe(element); });
 const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { countUp(entry.target); counterObserver.unobserve(entry.target); } });
 }, { threshold: 0.6 });
 counters.forEach(element => counterObserver.observe(element));
}
// Reports remain accessible through a direct image link in older browsers.
const evidenceDialog = document.querySelector('#evidence-dialog');
const evidenceImage = document.querySelector('#evidence-image');
const evidenceCaption = document.querySelector('#evidence-caption');
document.querySelectorAll('[data-evidence]').forEach(button => {
 button.addEventListener('click', () => {
  if (typeof evidenceDialog.showModal !== 'function') { window.location.href = button.dataset.evidence; return; }
  evidenceImage.src = button.dataset.evidence;
  evidenceImage.alt = button.querySelector('img').alt;
  evidenceCaption.textContent = button.dataset.caption;
  evidenceDialog.showModal();
  document.body.classList.add('dialog-open');
 });
});
document.querySelector('#close-evidence').addEventListener('click', () => evidenceDialog.close());
evidenceDialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); });
evidenceDialog.addEventListener('click', event => {
 if (event.target === evidenceDialog) {
  const box = evidenceDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) evidenceDialog.close();
 }
});
