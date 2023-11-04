const disableScroll = () => {
	document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
	document.body.style.overflow = 'auto';
};

// показ буреп меню
const burgerMenu = document.querySelector('.burger');
const burgerBtn = document.querySelectorAll('.burger__btn');
const burgerCloseBtn = document.querySelectorAll('.burger__close-btn');

if (burgerBtn && burgerMenu && burgerCloseBtn) {
	const activeClass = 'active';

	burgerBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			burgerMenu.classList.add(activeClass);
			disableScroll();
			console.log('hello btn')
		});
	});

	//скрытие бурер меню
	burgerCloseBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			burgerMenu.classList.remove(activeClass);
			enableScroll();
			console.log('hello')
		});
	});
}
