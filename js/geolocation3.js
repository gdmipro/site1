ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.908554, 27.548599],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Агенство недвижимости',
        balloonContentHeader: 'Путешествия',
        balloonContentBody: 'Бесплатный Wi-Fi',
        balloonContentFooter: 'Минск, пр. Победителей, 9'
        }, {
            // Опции.
            iconImageHref: 'images/trvl.png',
          // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
             // Размеры метки.
            iconImageSize: [104, 139],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -80]
        });

    myMap.geoObjects
        .add(myPlacemark)
        // .add(myPlacemarkWithContent);
});