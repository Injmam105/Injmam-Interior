const menuBtn = document.querySelector('.menu'),
    nav = document.querySelector('.navlinks');
if (menuBtn && nav) menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(item => item.classList.toggle('empty', filter !== 'all' && item.dataset.category !== filter));
}));
const form = document.querySelector('#contactForm');
if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const message = `Hello Injmam Interiors!%0AName: ${encodeURIComponent(d.get('name'))}%0APhone: ${encodeURIComponent(d.get('phone'))}%0AService: ${encodeURIComponent(d.get('service'))}%0AMessage: ${encodeURIComponent(d.get('message'))}`;
    window.open(`https://wa.me/917503354996?text=${message}`, '_blank');
});