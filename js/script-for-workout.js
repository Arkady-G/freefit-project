"use strict"

let dueDateWorkout = document.querySelectorAll('[data-due-date]');

for (const todayWorkout of dueDateWorkout) {
	todayWorkout.textContent = todayWorkout.dataset.dueDate;
}


let itemsWork = document.querySelectorAll('.current');
let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

let currentItem = document.querySelectorAll('.current')

let dateNow = new Date();
let fdMonth = dateNow.getMonth();
let fdDate = dateNow.getDate();

let dateCurrent = (`${fdDate} ${month[fdMonth]}`);

for (const itemWork of itemsWork) {
	let dateWrkout = itemWork.querySelector('.date');
	let dateTable = dateWrkout.innerHTML;
	let newDate = dateTable.replace(', 10:00', '');

	if (newDate === dateCurrent) {

		itemWork.dataset.status = "today";
	}
}





