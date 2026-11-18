// Lightweight YouTube embeds: show the poster, load the player on click.
document.querySelectorAll('.yt[data-yt]').forEach(function (btn) {
  var id = btn.getAttribute('data-yt');
  if (!id) return;
  var img = btn.querySelector('img');
  if (img && !img.getAttribute('src')) img.src = 'https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg';
  if (img) img.onerror = function () { this.onerror = null; this.src = 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg'; };
  btn.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1';
    f.title = btn.getAttribute('aria-label') || 'Video';
    f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    btn.innerHTML = '';
    btn.appendChild(f);
    btn.style.cursor = 'default';
  }, { once: true });
});

// Lightbox for gallery images.
(function () {
  var shots = document.querySelectorAll('.shot');
  if (!shots.length) return;
  var d = document.createElement('dialog');
  d.className = 'lb';
  d.innerHTML = '<button type="button">Close</button><img alt=""><p></p>';
  document.body.appendChild(d);
  var im = d.querySelector('img'), cap = d.querySelector('p');
  shots.forEach(function (s) {
    s.addEventListener('click', function () {
      var i = s.querySelector('img');
      im.src = i.src; im.alt = i.alt;
      var b = s.parentElement.querySelector('figcaption b');
      cap.textContent = b ? b.textContent : '';
      if (d.showModal) d.showModal();
    });
  });
  d.querySelector('button').addEventListener('click', function () { d.close(); });
  d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
})();
