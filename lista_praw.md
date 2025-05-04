---
title: Lista Praw Piolandii
permalink: /lista_praw/ # Stały adres URL tej strony
---

# Lista Praw Piolandii

Tutaj znajdziesz wszystkie obowiązujące akty prawne w formacie PDF.

<div class="search-container">
  <label for="law-search">Szukaj Prawa (po tytule/słowach kluczowych):</label>
  <input type="text" id="law-search" placeholder="Wpisz szukaną frazę...">
</div>

<ul id="law-list">
  {% assign sorted_laws = site.laws | sort: 'title' %}
  {% for law in sorted_laws %}
    <li data-keywords="{{ law.keywords | downcase }}"> <!-- Dodajemy słowa kluczowe do danych -->
      <a href="{{ law.pdf_url | relative_url }}" target="_blank">
        {{ law.title }}
      </a>
      {% if law.date %} - (Data: {{ law.date | date: "%Y-%m-%d" }}){% endif %}
    </li>
  {% else %}
    <li>Brak dodanych ustaw.</li>
  {% endfor %}
</ul>

<script>
  const searchInput = document.getElementById('law-search');
  const lawList = document.getElementById('law-list');
  const listItems = lawList.getElementsByTagName('li');

  searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase().trim();
    for (let i = 0; i < listItems.length; i++) {
      const item = listItems[i];
      const link = item.getElementsByTagName('a')[0];
      const keywords = item.getAttribute('data-keywords') || ''; // Pobieramy słowa kluczowe
      if (link) {
        const title = link.textContent || link.innerText;
        // Sprawdzamy czy fraza pasuje do tytułu LUB słów kluczowych
        if (title.toLowerCase().indexOf(filter) > -1 || keywords.indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      }
    }
  });
</script>