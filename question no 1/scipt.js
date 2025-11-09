document.getElementById('registerBtn').addEventListener('click', () => {
  document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('eventForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const event = e.target.event.value;
  alert(`✅ ${name}, you are registered for ${event}!`);
  e.target.reset();
});
