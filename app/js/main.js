$(function () {
	//= include/default
	//= include/sliders
});

function openMenu() {
	let mobileMenu = document.querySelector('#js-mobileMenu');
	let navigation = document.querySelector('#js-navigation');
	let body = document.querySelector('body');

	mobileMenu.onclick = function () {
		this.classList.toggle('is-open');
		navigation.classList.toggle('is-show');
		body.classList.toggle('js-no-scroll')
	}
}
openMenu();


let listGallery = document.querySelector('#js-listGallery').children;
let btnLoadMore = document.querySelector('#js-btnLoadMore');

let count = 1;
btnLoadMore.addEventListener('click', showImg);

function showImg() {
	listGallery[count].nextElementSibling.style.height = '310px';
	count++;
	listGallery[count].nextElementSibling.style.height = '310px'
	count++;
}