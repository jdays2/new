ymaps.ready(function () {
	var map = new ymaps.Map('map', {
		center: [55.807749, 37.570141],
		zoom: 14,
		controls: [],
	});

	const placemark = new ymaps.Placemark(
		[55.807749, 37.570141],
		{
			hintContent: 'Информация о месте',
		},
		{
			iconLayout: 'default#image',
			iconImageHref: './src/images/svg/map-marker.svg',
			iconImageSize: [56, 56],
			iconImageOffset: [-15, -30],
		},
	);
  map.balloon.open([55.807749, 37.570141], "Содержимое балуна", {
    // Опция: не показываем кнопку закрытия.
    closeButton: false
});
	map.geoObjects.add(placemark);
});
