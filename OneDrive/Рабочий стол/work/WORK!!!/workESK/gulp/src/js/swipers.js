// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

const heroSwiper = new Swiper('.main-hero-swiper', {
	slidesPerView: 1,
	slidesPerGroup: 1,
  speed: 800,
	autoplay: {
		delay: 5000,
	},
  pagination: {
    el: ".hero__swiper-fraction",
    type: "fraction",
  },
  navigation: {
    nextEl: ".hero__swiper-navigation-arrow.next",
    prevEl: ".hero__swiper-navigation-arrow.prev",
  },

});
