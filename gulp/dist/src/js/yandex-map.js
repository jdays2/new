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
			iconImageHref: `data:image/svg+xml,${encodeURIComponent(
				`<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="56" height="56" rx="28" fill="#FFD953"/>
				<path d="M28 27.5C27.337 27.5 26.7011 27.2366 26.2322 26.7678C25.7634 26.2989 25.5 25.663 25.5 25C25.5 24.337 25.7634 23.7011 26.2322 23.2322C26.7011 22.7634 27.337 22.5 28 22.5C28.663 22.5 29.2989 22.7634 29.7678 23.2322C30.2366 23.7011 30.5 24.337 30.5 25C30.5 25.3283 30.4353 25.6534 30.3097 25.9567C30.1841 26.26 29.9999 26.5356 29.7678 26.7678C29.5356 26.9999 29.26 27.1841 28.9567 27.3097C28.6534 27.4353 28.3283 27.5 28 27.5ZM28 18C26.1435 18 24.363 18.7375 23.0503 20.0503C21.7375 21.363 21 23.1435 21 25C21 30.25 28 38 28 38C28 38 35 30.25 35 25C35 23.1435 34.2625 21.363 32.9497 20.0503C31.637 18.7375 29.8565 18 28 18Z" fill="#343333"/>
				</svg>
				`,
			)}`,

			iconImageSize: [56, 56],
			iconImageOffset: [-15, -30],
		},
	);

	map.geoObjects.add(placemark);

	placemark.events.add('click', (e) => {
		//обработчик для иконки
		const baloonModal = document.querySelector('.map-modal-baloon');
		const activeClass = 'active';

		const width = window.innerWidth < 768;
		if (width) {
			baloonModal.classList.add(activeClass);
		}
	});
});
