
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', { // id блока с картой
            center: [59.968421, 30.314858],  // центр карты
            zoom: 15, // коэффицент масштаба карты (широта и долгота)
            controls: []
        });

    myMap.behaviors.disable('scrollZoom'); // отключаем масштабирование скролом

    myMap.controls.add("zoomControl", { // из элементов карты оставляем только масштабирование ползунком
        position: {top: 10, left: 10}
    });

    // добавляем метку на карту
    var myPlacemark = new ymaps.Placemark([59.968322, 30.317359], {},
    {
        iconLayout: 'default#image', // обозначаем что будет использоваться пользовательское изображение
        iconImageHref: './image/map-marker 1.png',  // указываем путь к картинке которая будет служить меткой
        iconImageSize: [231, 191], // указываем размер изображения
        iconImageOffset: [-19, -38] // обозначаем сдвиг от левого верхнего угла к точке изображения метки .
    });

    myMap.geoObjects.add(myPlacemark) // добавляем метку на карту
});