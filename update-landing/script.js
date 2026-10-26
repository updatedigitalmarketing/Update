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
