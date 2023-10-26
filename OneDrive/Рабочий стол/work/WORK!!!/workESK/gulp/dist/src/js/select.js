//селект, выбор одного активного элемета с присвоением класса 'active'
const selectWrappers = document.querySelectorAll('.select-block');
console.log(selectWrappers)

const selection = (items, item) => {
	const activeClass = 'active';

	items.forEach((e) => {
		if (e.classList.contains(activeClass)) {
			e.classList.remove(activeClass);
		}
		if (e === item) {
			e.classList.add(activeClass);
		}
	});
};

if (selectWrappers) {
	selectWrappers.forEach((block) => {
		const selectItems = block.querySelectorAll('.select-block__item');

		selectItems.forEach((item) => {
			item.addEventListener('click', () => {
				selection(selectItems, item);
			});
		});
	});
}
