---
layout: default
title: Gazety Piolandii (DOCX)
permalink: /gazety/
---

# Gazety Piolandii

Oficjalne publikacje i dzienniki urzędowe Piolandii w formacie DOCX (Microsoft Word). Kliknięcie linku prawdopodobnie rozpocznie pobieranie pliku.

<div class="search-container">
  <label for="gazette-search">Szukaj Gazety (po tytule):</label>
  <input type="text" id="gazette-search" placeholder="Wpisz szukaną frazę...">
</div>

<ul id="gazette-list">
  {% assign sorted_gazettes = site.gazettes | sort: 'date' | reverse %}
  {% for gazette in sorted_gazettes %}
    <li>
      <!-- ZMIANA: Link prowadzi do gazette.docx_url -->
      <a href="{{ gazette.docx_url | relative_url }}" target="_blank">
        {{ gazette.title | default: gazette.basename }} (DOCX)
      </a>
      {% if gazette.date %} - (Data publikacji: {{ gazette.date | date: "%Y-%m-%d" }}){% endif %}
    </li>
  {% else %}
    <li>Brak dodanych gazet w folderze _gazettes.</li>
  {% endfor %}
</ul>

<script>
  document.getElementById('gazette-search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const listItems = document.querySelectorAll('#gazette-list li');

    listItems.forEach(function (item) {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? '' : 'none';
    });
  });
</script>
