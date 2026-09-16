const button = document.getElementById('theme-toggle');
const body = document.body;
let isDarkTheme = false;

button.addEventListener('click', () => {
  isDarkTheme = !isDarkTheme;
  body.classList.toggle('dark-theme', isDarkTheme);
  button.textContent = isDarkTheme ? 'Світла тема' : 'Темна тема';
});
