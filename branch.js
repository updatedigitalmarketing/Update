document.querySelector('#branch-form').addEventListener('submit', event => {
 event.preventDefault();
 const data = new FormData(event.currentTarget);
 const body = `Hello Update team,\n\nI'm interested in Your Second Branch.\n\nName: ${data.get('name')}\nBusiness: ${data.get('business')}\nLocation: ${data.get('location')}\nWebsite / Instagram: ${data.get('link') || 'Not provided'}\n\nProducts and goals:\n${data.get('goals')}\n\nPlease share more information when the package is ready.`;
 window.location.href = `https://wa.me/96179076095?text=${encodeURIComponent(body)}`;
 document.querySelector('#branch-status').textContent = 'Your enquiry is ready in WhatsApp. Review it and press Send there. If WhatsApp does not open, message +961 79 076 095 directly.';
});
