document.addEventListener("DOMContentLoaded", () => {
	range();
	renderPetsContainer(petsListShuffle);
});


const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
const headerLinks = document.querySelectorAll(".header__link");
const headerOverlay = document.querySelector('.header__overlay');
const burgerClose = document.querySelector('.burger_closed');

headerBurger.addEventListener("click", () => {
	headerBurger.classList.toggle("burger_closed");
	headerNav.classList.toggle("header__nav_active");
	headerOverlay.classList.toggle("header__overlay_active");
});

headerLinks.forEach(link => link.addEventListener("click", () => {
	headerNav.classList.remove("header__nav_active");
	headerBurger.classList.remove("burger_closed");
}));

headerOverlay.addEventListener("click", () => {
	headerNav.classList.remove("header__nav_active");
	headerBurger.classList.remove("burger_closed");
	headerOverlay.classList.remove("header__overlay_active");
});



//панель навигации, подсветка активного пункта меню
let pageIdHeader = document.querySelector("[data-id-page-header]").getAttribute("data-id-page-header"),
	navItemHeader = document.querySelector(`[data-id-nav-header=${pageIdHeader}]`);
if (pageIdHeader == navItemHeader.getAttribute("data-id-nav-header")) {
	navItemHeader.classList.add("active");
}

let pageIdFooter = document.querySelector("[data-id-page-footer]").getAttribute("data-id-page-footer"),
	navItemFooter = document.querySelector(`[data-id-nav-footer=${pageIdFooter}]`);
if (pageIdFooter == navItemFooter.getAttribute("data-id-nav-footer")) {
	navItemFooter.classList.add("active");
}
