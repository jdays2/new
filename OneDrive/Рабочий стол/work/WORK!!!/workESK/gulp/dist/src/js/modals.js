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
	const activeClass = 'active';
	sertificateBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			sertificateModal.classList.add(activeClass);
		});
	});
}

const feedbackImageBtn = document.querySelectorAll('.feedback__btn');
const feedbackImageModal = document.querySelector('.feedback-image');

if (feedbackImageBtn) {
	const activeClass = 'active';
	feedbackImageBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			feedbackImageModal.classList.add(activeClass);
		});
	});
}
