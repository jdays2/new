const disableScroll = () => {
	document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
	document.body.style.overflow = 'auto';
};

// показ буреп меню
const burgerMenu = document.querySelector('.burger');
const burgerBtn = document.querySelector('.burger__btn');
const burgerCloseBtn = document.querySelector('.burger__close-btn');

if (burgerBtn && burgerMenu && burgerCloseBtn) {
	const activeClass = 'active';

	burgerBtn.addEventListener('click', () => {
		burgerMenu.classList.add(activeClass);
		disableScroll()
	});
	//скрытие бурер меню
	burgerCloseBtn.addEventListener('click', () => {
		burgerMenu.classList.remove(activeClass);
		enableScroll()
	});
}
