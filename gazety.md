---
title: Gazety Piolandii
permalink: /gazety/
---

# Gazety Piolandii

Oficjalne publikacje i dzienniki urzędowe w formacie PDF.

<!-- Można dodać wyszukiwarkę analogiczną jak dla praw, jeśli potrzebna -->

<ul id="gazette-list">
  {% assign sorted_gazettes = site.gazettes | sort: 'date' | reverse %}
  {% for gazette in sorted_gazettes %}
    <li>
      <a href="{{ gazette.pdf_url | relative_url }}" target="_blank">
        {{ gazette.title }}
      </a>
      {% if gazette.date %} - (Data publikacji: {{ gazette.date | date: "%Y-%m-%d" }}){% endif %}
    </li>
  {% else %}
    <li>Brak dodanych gazet.</li>
  {% endfor %}
</ul>