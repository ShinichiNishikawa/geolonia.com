---
layout: default-page
title: プレスリリース
permalink: /pressrelease/
---

## プレスリリース

<div id="archives">
  <ul class="post-list">
    {% for post in site.categories.pressrelease limit:3 %}
      <li><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a><br /><span class="date">{{post.date | date: "%Y/%m/%d"}}</span></li>
    {% endfor %}
  </ul>
</div>
