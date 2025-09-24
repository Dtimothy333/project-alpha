// Wait until the HTML is ready
document.addEventListener('DOMContentLoaded', function () {
  console.log('Project Alpha loaded'); // tiny dev log (rubric)

  // Theme toggle: add/remove .theme-dark on <body> and remember the choice
  var btn = document.getElementById('theme-toggle');
  var saved = localStorage.getItem('theme');           // W3Schools: localStorage
  if (saved === 'dark') {
    document.body.classList.add('theme-dark');
  }

  if (btn) {
    btn.addEventListener('click', function () {
      document.body.classList.toggle('theme-dark');   // W3Schools: classList.toggle
      var isDark = document.body.classList.contains('theme-dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});

