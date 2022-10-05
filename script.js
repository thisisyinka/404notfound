const yearSpan = document.querySelector('.year');
const now = new Date();
const currentYear = now.getFullYear();

yearSpan.textContent = currentYear;
