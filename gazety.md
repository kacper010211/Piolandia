---
layout: default
title: Gazety Piolandii (DOCX)
permalink: /gazety/
---

# Gazety Piolandii

Tutaj znajdziesz wszystkie oficjalne publikacje i dzienniki urzędowe Piolandii w formacie DOCX (Microsoft Word). Kliknięcie linku prawdopodobnie rozpocznie pobieranie pliku.

<div class="search-container">
  <label for="gazette-search">Szukaj Gazety (po tytule/słowach kluczowych):</label>
  <input type="text" id="gazette-search" placeholder="Wpisz szukaną frazę...">
</div>

<ul id="gazette-list">
  {% assign sorted_gazettes = site.gazettes | sort: 'title' %}
  {% for gazette in sorted_gazettes %}
    <li data-keywords="{{ gazette.keywords | downcase }}">
      <a href="/assets/docs/gazettes/{{ gazette.docx_url }}" download>
        {{ gazette.title | default: gazette.basename }} (DOCX)
      </a>
      {% if gazette.date %} - (Data publikacji: {{ gazette.date | date: "%Y-%m-%d" }}){% endif %}
    </li>
  {% else %}
    <li>Brak dodanych gazet w folderze _gazettes.</li>
  {% endfor %}
</ul>

<script>
  const searchInput = document.getElementById('gazette-search');
  const gazetteList = document.getElementById('gazette-list');
  const listItems = gazetteList.getElementsByTagName('li');

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
