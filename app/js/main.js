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