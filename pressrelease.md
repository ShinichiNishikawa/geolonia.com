---
layout: default-page
title: プレスリリース
permalink: /pressrelease/
---

## プレスリリース

<div id="archives">
    {% for post in site.categories.pressrelease %}
      <article class="archive-item">
        <h3><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h3>
      </article>
    {% endfor %}
</div>
