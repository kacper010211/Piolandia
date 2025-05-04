---
layout: default
title: Lista Praw Piolandii (DOCX)
permalink: /lista_praw/
---

# Lista Praw Piolandii

Tutaj znajdziesz wszystkie obowiązujące akty prawne Piolandii w formacie DOCX (Microsoft Word). Kliknięcie linku prawdopodobnie rozpocznie pobieranie pliku.

<div class="search-container">
  <label for="law-search">Szukaj Prawa (po tytule/słowach kluczowych):</label>
  <input type="text" id="law-search" placeholder="Wpisz szukaną frazę...">
</div>

<ul id="law-list">
  {% assign sorted_laws = site.laws | sort: 'title' %}
  {% for law in sorted_laws %}
    <li data-keywords="{{ law.keywords | downcase }}">
      <!-- ZMIANA: Link prowadzi do law.docx_url -->
      <a href="{{ law.docx_url | relative_url }}" target="_blank">
        {{ law.title | default: law.basename }} (DOCX) <!-- Dodano "(DOCX)" dla jasności -->
      </a>
      {% if law.date %} - (Data: {{ law.date | date: "%Y-%m-%d" }}){% endif %}
    </li>
  {% else %}
    <li>Brak dodanych ustaw w folderze _laws.</li>
  {% endfor %}
</ul>

<!-- Skrypt wyszukiwarki (pozostaje bez zmian, szuka w danych z .md) -->
<script>
  const searchInput = document.getElementById('law-search');
  const lawList = document.getElementById('law-list');
  const listItems = lawList.getElementsByTagName('li');

  searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase().trim();
    for (let i = 0; i < listItems.length; i++) {
      const item = listItems[i];
      const link = item.getElementsByTagName('a')[0];
      const keywords = item.getAttribute('data-keywords') || '';

      if (link) {
        const title = link.textContent || link.innerText;
        if (title.toLowerCase().indexOf(filter) > -1 || keywords.indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      }
    }
  });
</script>