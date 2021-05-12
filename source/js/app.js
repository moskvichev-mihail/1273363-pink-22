var navMain = document.querySelector('.header');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header--closed')) {
    navMain.classList.remove('header--closed');
    navMain.classList.add('header--opened');
  } else {
    navMain.classList.add('header--closed');
    navMain.classList.remove('header--opened');
  }
});

(function () {
  let coordinate = [59.938635, 30.323118];

  let initMap = function (coordinate) {
    ymaps.ready(function () {
      let map = new ymaps.Map('map', {
        center: coordinate,
        zoom: 16,
        controls: []
      });

      let placemark = new ymaps.Placemark(coordinate);
      map.geoObjects.add(placemark);

      let zoomControl = new ymaps.control.ZoomControl({
        options: {
          position: {
            left: 10,
            bottom: 50
          }
        }
      });

      map.behaviors.disable('scrollZoom');
      map.controls.add(zoomControl);
    });
  };


  try {
    initMap(coordinate);
  } catch(e) {
    console.log(e);
  }
})();
