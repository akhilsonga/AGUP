const toggleButton = document.getElementById('theme-toggle');
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('universal-chat');
const chatClose = document.getElementById('chat-close');
const zenMode = document.getElementById('zen-mode');
const zenClose = document.getElementById('zen-close');

// Theme toggle
toggleButton.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  document.body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

// Universal chat toggle
chatToggle.addEventListener('click', () => {
  chatWindow.classList.toggle('hidden');
});
chatClose.addEventListener('click', () => {
  chatWindow.classList.add('hidden');
});

// Zen mode open/close
const stocks = document.querySelectorAll('#stock-list li');
stocks.forEach(li => {
  li.addEventListener('click', () => {
    document.getElementById('company-name').innerText = li.innerText;
    zenMode.classList.remove('hidden');
  });
});
zenClose.addEventListener('click', () => {
  zenMode.classList.add('hidden');
});
