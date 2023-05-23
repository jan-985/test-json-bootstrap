var params = {
  container: document.getElementById('icon'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'icon.json'
};

var anim;

anim = lottie.loadAnimation(params);