const selection = (items, currentItem) => {
	const activeClass = 'active';

	items.forEach((e) => {
		if (e.classList.contains(activeClass)) {
			e.classList.remove(activeClass);
		}
		if (e === currentItem) {
			e.classList.add(activeClass);
		}
	});
};

//селект, выбор одного активного элемета с присвоением класса 'active'
const selectWrappers = document.querySelectorAll('.select-block');

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

//показывание нужного tab с присвоением класса 'active'
const tabTitles = document.querySelectorAll('[data-tab-path]');
const tabBoxes = document.querySelectorAll('[data-tab-box]')

if(tabTitles) {
	tabTitles.forEach((title)=>{
		const path = title.getAttribute('data-tab-path')
		title.addEventListener('click', ()=> {
			const currentBox = document.querySelector(`[data-tab-box='${path}']`)
			selection(tabBoxes, currentBox)
			
		})
		
	})
}
