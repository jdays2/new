//загрузка файла
const forms = document.querySelectorAll('.form');

if (forms) {
	forms.forEach((form) => {
		const fileInput = form.querySelector('.form__file input');
		const fileName = form.querySelector('.form__file-name-text');
		const fileProccess = form.querySelector('.form__file-proccess');
		const removeFileBtn = form.querySelector('.form__file-close');

		removeFileBtn.addEventListener('click', () => {
			fileInput.disabled = false;
			fileProccess.style.display = 'none';
		});
		fileInput.addEventListener('change', (e) => {
			const file = e.target.files[0];

			if (file) {
				fileInput.disabled = true;
				fileProccess.style.display = 'flex';
				fileName.innerHTML = file.name;
			}
		});
	});
}

//валидация
const initValidation = () => {
	const validateInput = (inputElement, regex) => {
		const inputContainer = inputElement.closest('.form__input');
		const inputError = inputElement.parentNode.querySelector('.form__error');

		const inputHandler = (e) => {
			inputContainer.classList.remove('error');

			const inputClass = regex.test(e.target.value);
			if (inputClass) {
				inputContainer.classList.remove('error');
				inputError.textContent = '';
			} else {
				inputContainer.classList.add('error');
				inputError.textContent = 'Не верный формат';
			}

			if (e.target.value === '') {
				inputContainer.classList.add('error');
				inputError.textContent = 'Поле обязательно к заполнению';
			}
		};

		inputElement.addEventListener('input', inputHandler);
	};

	// Валидация имени
	const inputName = document.querySelectorAll('.input-name');
	if (inputName.length > 0) {
		const regName = /^[A-zА-яё]+$/;
		inputName.forEach((item) => {
			validateInput(item, regName);
		});
	}

	// // Валидация почты
	// const inputEmail = document.querySelectorAll('.input-email');
	// if (inputEmail.length > 0) {
	// 	const regEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
	// 	inputEmail.forEach((item) => {
	// 		validateInput(item, regEmail);
	// 	});
	// }

	// Валидация телефонного номера
	const inputPhone = document.querySelectorAll('.input-tel');
	if (inputPhone.length > 0) {
		const regPhone =
			/^\+?\d{1,4}[\s.-]?\(?\d{1,3}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}$/;
		inputPhone.forEach((item) => {
			validateInput(item, regPhone);
		});
	}
};

// Вызов функции для инициализации валидации
document.addEventListener('DOMContentLoaded', initValidation);
