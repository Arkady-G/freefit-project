document.addEventListener('DOMContentLoaded', function () {
	const popupform_marathon = document.getElementById('popup-form-endurance-marathon');
	// const popupform_coach = document.getElementById('popup-how-become-coach');
	// const popupform_yoga = document.getElementById('popup-yoga-lifestyle');

	popupform_marathon.addEventListener('submit', formSend);
	// popupform_coach.addEventListener('submit', formSend);
	// popupform_yoga.addEventListener('submit', formSend);


	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(popupform_marathon);

	}

	function formValidate(popup__form) {
		let error = 0;
		let formReq = document.querySelectorAll('._popup_req');

		for (let index = 0; index < formReq.length; index++) {
			const input_ = formReq[index];
			formRemoveErrorEmail(input);

			if (input.classList.contains('_popup_email')){
				if (emailTest(input)){
					formAddErrorEmail(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddErrorEmail(input);
					error++;
				}
			}
		}
	}


	function formAddErrorEmail(input) {
		input.parentElement.classList.add('_error_email');
		input.classList.add('_error_email');
	}
	
	function formRemoveErrorEmail(input) {
		input.parentElement.classList.remove('_erorr_email');
		input_popup_email.classList.remove('_error_email');
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});