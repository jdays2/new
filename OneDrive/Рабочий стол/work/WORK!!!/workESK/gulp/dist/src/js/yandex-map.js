ymaps.ready(function () {
	var map = new ymaps.Map('map', {
		center: [55.807749, 37.570141],
		zoom: 13,
		controls: [],
	});

	const customBalloonLayout = ymaps.templateLayoutFactory
		.createClass(`<div class="map__baloon">
	<div class="map__baloon-content">
		<p class="map__baloon-title text3">Центральный офис</p>
		<div class="map__baloon-box">
			<a
				class="map__baloon-link"
				href="tel:+7(821)4960014">
				<div class="map__baloon-icon">
					<img
						src="./src/images/svg/tel.svg"
						alt="" />
				</div>
				<span class="text2">+ 7 (821) 496 00-14</span>
			</a>
			<a
				class="map__baloon-link"
				href="mailto:info@esccom.ru">
				<div class="map__baloon-icon">
					<img
						src="./src/images/svg/mail.svg"
						alt="" />
				</div>
				<span class="text2">info@esccom.ru</span>
			</a>
			<a
				class="map__baloon-link"
				href="#">
				<div class="map__baloon-icon">
					<img
						src="./src/images/svg/geo.svg"
						alt="" />
				</div>
				<p class="text2">
					123610, г. Москва, Краснопресненская набережная, дом 12, офис 1903
				</p>
			</a>
		</div>
	</div>
	<div class="map__baloon-img">
		<img
			src="./src/images/webp/baloon.webp"
			alt="" />
	</div>
		</div>`);

	const placemark = new ymaps.Placemark(
		[55.80999, 37.541841],
		{
			balloonContentHeader: 'Заголовок вашего кастомного балуна',
			balloonContentBody: 'Содержимое вашего кастомного балуна',
			hintContent: '',
			closeButton: false,
		},
		{
			balloonLayout: customBalloonLayout,
			balloonPanelMaxMapArea: 0, // Убираем кнопку закрытия
			hideIconOnBalloonOpen: false,
			iconLayout: 'default#image',
			iconImageHref: './src/images/svg/map-marker.svg',
			iconImageSize: [56, 56],
			iconImageOffset: [-15, -30],
		},
	);

	map.geoObjects.add(placemark);

	const checkScreenWidth = () => {
		if (window.innerWidth < 768) {
			placemark.balloon.close();
		}
	};

	// Вызываем функцию при загрузке страницы и изменении размера окна
	checkScreenWidth();
	window.addEventListener('resize', checkScreenWidth);
});
