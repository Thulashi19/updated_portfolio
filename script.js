function toggleDarkMode() {
  const body = document.body;
  const container = document.querySelector('.container');
  const button = document.getElementById('toggle-mode');

  body.classList.toggle('dark-mode');
  container.classList.toggle('dark-mode');
  button.classList.toggle('dark-mode');

  // Optionally, change the button text
  if (body.classList.contains('dark-mode')) {
    button.textContent = "Switch to Light Mode";
  } else {
    button.textContent = "Switch to Dark Mode";
  }
}
