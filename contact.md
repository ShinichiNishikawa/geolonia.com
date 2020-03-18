---
layout: default-page
title: お問い合わせ
permalink: /contact/
---

## お問い合わせフォーム

このたびは、Geolonia のウェブサイトへお越しいただき誠にありがとうございます。

Geolonia の製品やサービスに関するお問い合わせは以下のフォームをご利用ください。


<div class="well form-group" style="margin: 30px 0;">
  <form class="contact" name="contact" method="POST" action="/thanks/index.html" data-netlify-recaptcha="true" data-netlify="true">
    <h4>お名前 <span class="label label-danger">必須入力</span></h4>

    <p><input class="form-control" type="text" name="お名前" value="" required></p>

    <h4>会社名</h4>

    <p><input class="form-control" type="text" name="会社名" value=""></p>

    <h4>部署名</h4>

    <p><input class="form-control" type="text" name="部署名" value=""></p>

    <h4>Eamil <span class="label label-danger">必須入力</span></h4>

    <p><input class="form-control" type="email" name="Email" value="" required></p>

    <h4>お問い合わせ内容 <span class="label label-danger">必須入力</span></h4>

    <p><textarea class="form-control" name="お問い合わせ内容" required></textarea></p>

    <div data-netlify-recaptcha="true" style="margin-top: 30px;"></div>

    <p style="margin-top: 30px;"><input class="btn btn-primary btn-block" type="submit" value="送信"></p>
  </form>
</div>
