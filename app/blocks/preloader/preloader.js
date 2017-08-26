// Весь этот код можно найти в конце файла script.js

function freezePage() {
  var window = $(window);
  var h = $('html');

  if (h.css('position') !== 'fixed') {
    var top = h.scrollTop() ? h.scrollTop() : $('body').scrollTop();

    if (window.innerWidth > h.width()) {
      h.css('overflow-y', 'scroll');
    }

    h.css({ width: '100%', height: '100%', position: 'fixed', top: -top });
  }
}

// Отключаем фиксацию страницы
function unfreezePage() {
  var window = $(window);
  var h = $('html');

  if (h.css('position') === 'fixed') {
    h.css('position', 'static');
    $('html, body').scrollTop(-parseInt(h.css('top'), 10));
    h.css({ position: '', width: '', height: '', top: '', 'overflow-y': '' });
  }
}

// Запуск прелоадера
function preloaderOn() {
  var preloader = '<div class="preloader"><img class="preloader__image" src="assets/images/preloader.gif"></div>',
      container = $('body');

  container.append(preloader);

  setTimeout(function(){
    freezePage();
    container.find('.preloader').fadeIn('321');
  }, 1);
}

// Отключение прелоадера
function preloaderOff() {
  var preloader = '<div class="preloader"><img src="assets/images/preloader.gif"></div>',
      container = $('body');

  unfreezePage();
  container.find('.preloader').fadeOut('321');

  setTimeout(function(){
    container.find('.preloader').remove();
  }, 322);
}
