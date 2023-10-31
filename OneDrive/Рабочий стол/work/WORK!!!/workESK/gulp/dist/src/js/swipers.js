// Пересчет rem в px
const rem = function (rem) {
	if (window.innerWidth > 768) {
		return 0.005208335 * window.innerWidth * rem;
	} else {
		// где 375 это ширина моб версии макета
		return (100 / 375) * (0.1 * window.innerWidth) * rem;
	}
};

const heroSwiper = new Swiper('.main-hero-swiper', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 800,
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: '.hero__swiper-fraction',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span><span class="custom-separator">/</span><span class="' + totalClass + '"></span>';
    },
	},
	navigation: {
		nextEl: '.hero__swiper-navigation-arrow.next',
		prevEl: '.hero__swiper-navigation-arrow.prev',
	},
});

const certificateSwiper = new Swiper('.certificate__swiper', {
	speed: 800,
	navigation: {
		nextEl: '.certificate__pagination-arrow.next',
		prevEl: '.certificate__pagination-arrow.prev',
	},
	breakpoints: {
		769: {
			slidesPerView: 4,
			slidesPerGroup: 1,
		},
		320: {
			slidesPerView: 1.3,
			slidesPerGroup: 1,
		},
	},
});

const certificateModalSwiperThumbs = new Swiper(
	'.certificate-modal-swiper-thumbs',
	{
		speed: 800,
		slidesPerView: 'auto',
		spaceBetween: rem(0.8),
	},
);

const certificateModalSwiperMain = new Swiper('.certificate-modal-swiper', {
	speed: 800,
	slidesPerView: 1,
	spaceBetween: rem(2),
	navigation: {
		nextEl: '.certificate-modal-swiper__arrow.next',
		prevEl: '.certificate-modal-swiper__arrow.prev',
	},

	thumbs: {
		swiper: certificateModalSwiperThumbs,
	},
});

const swiperPartners = new Swiper('.swiper-partners', {
	speed: 10000, //задаем скорость движения нашей бегущей строки
	spaceBetween: rem(6.4), // задаем отступы
	loop: true, //зацикливаем, что бы движание было бесконечным
	allowTouchMove: false, // можно ещё отключить свайп
	autoplay: { //задаем автоплей по умолчанию с нулевой задержкой
 		delay: 0,
		disableOnInteraction: false, // отключаем возможность отлючить анимацию при касании
	},
	breakpoints: { //стандартные настройки, котрые не так важны
		769: {
			slidesPerView: 7,
		},
		320: {
			slidesPerView: 2.25,
			spaceBetween: rem(2.4),
		},
	},
});

const swiperPartners2 = new Swiper('.swiper-partners2', {
	speed: 10000,
	spaceBetween: rem(6.4),
	loop: true,
	allowTouchMove: false, // можно ещё отключить свайп
	autoplay: {
		delay: 0,
		reverseDirection: true,
		disableOnInteraction: false, // или сделать так, чтобы восстанавливался autoplay после взаимодействия
	},
	breakpoints: {
		769: {
			slidesPerView: 7,
		},
		320: {
			slidesPerView: 2.25,
			spaceBetween: rem(2.4),
		},
	},
});

const feedbackSwiper = new Swiper('.feedback__swiper', {
	speed: 800,
	effect: 'fade',
	slidesPerView: 1,
	spaceBetween: rem(3.2),
	pagination: {
		el: '.feedback__swiper-fraction',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span><span class="custom-separator">/</span><span class="' + totalClass + '"></span>';
    },
	},
	navigation: {
		nextEl: '.feedback__pagination-arrow.next',
		prevEl: '.feedback__pagination-arrow.prev',
	},
});
