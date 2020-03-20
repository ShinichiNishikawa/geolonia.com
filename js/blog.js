(function($) {
  $.ajax({
    url: "https://blog.geolonia.com/feed.json"
  }).done(function(data) {
    var posts = data.items
    var elements = $('#blog .post')

    for (var i = 0; i < elements.length; i++) {
      var img = $('<img />')
      img.attr('src', posts[i].thumbnail)
      $('.post-thumbnail', elements[i]).append(img)
      $('.post-title', elements[i]).text(posts[i].title)
      $('.post-date', elements[i]).text(posts[i].date_published)
      $('a', elements[i]).attr('href', posts[i].url)
    }
  });
})(jQuery)
