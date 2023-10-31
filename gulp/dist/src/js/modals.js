//функция для добавления активного класса к модалке
const setModal = (btns, modal) => {
	const activeClass = 'active';

	btns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			modal.classList.add(activeClass);
		});
	});
};

//закрытие модалки
const modalCloseBtns = document.querySelectorAll('.modal__close');
const modals = document.querySelectorAll('.modal');

if (modalCloseBtns) {
	modalCloseBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			const modal = btn.closest('.modal');
			modal.classList.remove('active');
		});
	});
}

//обработка клика вне модалки, для закрытия
if (modals) {
	modals.forEach((item) => {
		item.addEventListener('click', (e) => {
			if (e.target === item) {
				item.classList.remove('active');
			}
		});
	});
}

//показать модалку сертификатов
const sertificateBtns = document.querySelectorAll('.certificate__show-btn');
const sertificateModal = document.querySelector('.certificate-modal');

if (sertificateBtns) {
	setModal(sertificateBtns, sertificateModal);
}

const feedbackImageBtns = document.querySelectorAll('.feedback__btn');
const feedbackImageModal = document.querySelector('.feedback-image');

if (feedbackImageBtns) {
	setModal(feedbackImageBtns, feedbackImageModal);
}

//показать модалку при отправке заявки
const requestBtns = document.querySelectorAll('.send-request-btn');
const requestModal = document.querySelector('.request-sended');

if (requestBtns) {
	setModal(requestBtns, requestModal);
}
