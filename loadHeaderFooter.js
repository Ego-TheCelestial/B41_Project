function loadHeaderFooter() {
  fetch('header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header').innerHTML = data;
    })
    .catch((error) => console.error('Error loading header:', error));

  fetch('footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch((error) => console.error('Error loading footer:', error));
}

// Call the function to load header and footer
loadHeaderFooter();