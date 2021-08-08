"use strict"

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
	console.log(newDate);

	if (newDate === dateCurrent) {
		console.log(true);
		itemWork.style.background = "linear-gradient(180deg, #FBF138 0%, rgba(253, 249, 182, 0.45) 100%";
		// itemWork.style.shadow = "0px 13px 30px rgba(186, 180, 69, 0.2)";
		itemWork.style.opacity = "0.7";
	}
}





