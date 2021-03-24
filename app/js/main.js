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


function openMobileGallery() {
	
	let listGallery = document.querySelector('#js-listGallery').children;
	let btnLoadMore = document.querySelector('#js-btnLoadMore');
	let arrayList = Array.from(listGallery);
	let count = 4;
	
	btnLoadMore.addEventListener('click', showImg);
	
	function showImg() {
		let newArr =  arrayList.slice(2, count);
		
		newArr.forEach( item => {
			item.style.height = '310px'
			
			if (item.id === 'lastGalleryItems') {
				btnLoadMore.removeEventListener('click', showImg);
				btnLoadMore.addEventListener('click', hideImg);
				btnLoadMore.textContent = btnLoadMore.getAttribute('data-after');
			}
		})
		count += 2;
	}
	
	function hideImg() {
		let newArr = arrayList.slice(2, arrayList.length);
		
		btnLoadMore.addEventListener('click', showImg);
		btnLoadMore.textContent = btnLoadMore.getAttribute('data-before');

		newArr.forEach( item => {
			item.style.height = 0;
		})
	}
};

if (window.innerWidth <= 480) {
	openMobileGallery();
} else {
	openMobileGallery = null;
}
