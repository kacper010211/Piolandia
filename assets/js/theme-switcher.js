(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Funkcja do ustawiania motywu
  function setTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      // Można zmienić tekst przycisku, jeśli chcesz
      // themeToggle.textContent = 'Jasny Motyw';
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      // themeToggle.textContent = 'Ciemny Motyw';
    }
  }

  // Sprawdź zapisany motyw lub preferencje systemowe przy ładowaniu strony
  if (currentTheme) {
    setTheme(currentTheme);
  } else if (prefersDarkScheme.matches) {
    // Jeśli nie ma zapisanego motywu, ale system preferuje ciemny
    setTheme('dark');
  } else {
    // Domyślnie jasny
     setTheme('light');
  }

  // Nasłuchuj kliknięcia przycisku
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      // Przełącz motyw
      if (document.body.classList.contains('dark-mode')) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    });
  }

  // (Opcjonalnie) Nasłuchuj zmiany preferencji systemowych
  prefersDarkScheme.addEventListener('change', (e) => {
      // Zastosuj motyw systemowy TYLKO jeśli użytkownik nie wybrał go ręcznie
      if (!localStorage.getItem('theme')) {
          setTheme(e.matches ? 'dark' : 'light');
      }
  });

})(); // Samowywołująca się funkcja, aby nie zaśmiecać globalnego scope