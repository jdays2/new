//селект, выбор одного активного элемета с присвоением класса 'active'
const selectWrappers = document.querySelectorAll('.select-block');

const selection = (block, item) => {
	const activeClass = 'active';

	block.forEach((children) => {
		if (children.classList.contains(activeClass)) {
			children.classList.remove(activeClass);
		}
		if (children === item) {
			children.classList.add(activeClass);
		}
	});
};

if (selectWrappers) {
	selectWrappers.forEach((block) => {
		const selectItems = block.querySelectorAll('.select-block__item');

		selectItems.forEach((item) => {
			item.addEventListener('click', () => {
				selection(block, item);
			});
		});
	});
}
