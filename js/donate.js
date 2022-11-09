//donate
document.addEventListener("DOMContentLoaded", () => {
	donateInput.value = '100'
	giveDonate();

	if (window.innerWidth <= 969) {
		addActiveBall();
	}
});

// добавление класса active элементу
const ballsAll = document.querySelectorAll('.friend-donate__amount-ball');

function giveDonate() {
	ballsAll.forEach(item => {
		item.addEventListener('click', function () {
			ballsAll.forEach(item => {
				item.classList.remove('friend-donate__amount-circle-active');
			});
			item.classList.add('friend-donate__amount-circle-active');
		});
	});
};


// изменение класса active у элемента при изменении ширины экрана
const ballActiveNew = document.querySelector('.friend-donate__amount-ball-new');

let lastScreen = getCurrentScreen();

function getCurrentScreen() {
	let currentScreen;

	if (window.innerWidth <= 969) {
		currentScreen = 0;
	} else {
		currentScreen = 1;
	}
	return currentScreen;
}

const addActiveBall = () => {
	ballActiveNew.classList.remove('friend-donate__amount-circle-block');
	ballActiveNew.classList.add('friend-donate__amount-circle-active');
};

const deleteActiveBall = () => {
	ballActiveNew.classList.remove('friend-donate__amount-circle-active');
	ballActiveNew.classList.add('friend-donate__amount-circle-block');
};

function handlerPageResize() {
	let currentScreen = getCurrentScreen();
	if (currentScreen === lastScreen) return;
	switch (currentScreen) {
		case 0:
			addActiveBall();
			break;
		case 1:
			deleteActiveBall();
			break;
		default:
			break;
	}
	lastScreen = currentScreen;
}

window.addEventListener('resize', handlerPageResize);

// добавление выбранного значения в поле input
let donateInput = document.querySelector(".friend-donate__input-input");

[...document.getElementsByClassName("friend-donate__amount-ball")].forEach((item) => {
	item.addEventListener('click', event => {
		const value = event.target.classList.contains('friend-donate__price') ? event.target.parentNode.closest('.friend-donate__amount-ball') : event.target;
		const listItem = [...document.getElementsByClassName("friend-donate__amount-ball")].indexOf(value);

		if (listItem == 0) {
			donateInput.value = 5000;
		} else if (listItem == 1) {
			donateInput.value = 2000;
		} else if (listItem == 2) {
			donateInput.value = 1000;
		} else if (listItem == 3) {
			donateInput.value = 500;
		} else if (listItem == 4) {
			donateInput.value = 250;
		} else if (listItem == 5) {
			donateInput.value = 100;
		} else if (listItem == 6) {
			donateInput.value = 50;
		} else if (listItem == 7) {
			donateInput.value = 25;
		}
	})
})


// ограничение поля input до четырех знаков
donateInput.oninput = function () {
	this.value = this.value.slice(0, 4);
};

// сравнивание значения введенного в input со значением на шкале
const priceActive = document.querySelectorAll('.friend-donate__price');
let priceAll = document.querySelectorAll('.friend-donate__price');
donateInput.oninput = function () {
	this.value = this.value.slice(0, 4);
	// console.log(this.value);
	priceAll.forEach(item => {
		let price = item.innerHTML;
		if (this.value == price.slice(1)) {
			ballsAll.forEach(item => {
				item.classList.remove('friend-donate__amount-circle-active');
			})
			item.closest(".friend-donate__amount-ball").classList.add('friend-donate__amount-circle-active');
		}
		else {
			item.closest(".friend-donate__amount-ball").classList.remove('friend-donate__amount-circle-active');
		}
	})	
};

// удаление класса active у элемента при очистке поля input 
donateInput.onkeydown = function (event) {
	var key = event.keyCode || event.charCode;
	if (key == 8 || key == 46)
		// event.target.forEach(item => {
		// 	item.classList.remove('friend-donate__amount-circle-active');					
		// })
		ballsAll.forEach(item => {
			item.classList.remove('friend-donate__amount-circle-active');
		})
};


// очистка поля input при нажатии  на кнопку
let donateBtn = document.querySelector('.friend-donate__info-btn');

donateBtn.addEventListener('click', function () {
	donateInput.value = '';
	ballsAll.forEach(item => {
		item.classList.remove('friend-donate__amount-circle-active');
	})
});

// donateInput.addEventListener('input', function (event) {
// 	console.log(event.target.value)
// 	if (event.target.value == '25' || event.target.value == '50' || event.target.value == '100' || event.target.value == '250' || event.target.value == '500' || event.target.value == '1000' || event.target.value == '2000' || event.target.value == '5000') {
// 		ballsAll.forEach(item => {
// 				item.classList.add('friend-donate__amount-circle-active');
// 			})
// 		}
// 		else {
// 			ballsAll.forEach(item => {
// 				item.classList.remove('friend-donate__amount-circle-active');
// 			})
// 		}
// });

// if(donateInput.value !== '25' || donateInput.value !== '50' || donateInput.value !== '100' || donateInput.value !== '250' || donateInput.value !== '500' || donateInput.value !== '1000' || donateInput.value !== '2000' || donateInput.value !== '5000') {
// 	console.log(donateInput.value)
// 	ballsAll.forEach(item => {
// 		item.classList.remove('friend-donate__amount-circle-active')
// 	})			
// }
// else {
// 	item.classList.add('friend-donate__amount-circle-active');