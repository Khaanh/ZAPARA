$(function () {
	//= include/default
	//= include/sliders
});

let animate = document.querySelector('#js-textAnimate');
let target;

animate.onmouseenter = function (e) {
	target = e;
	target.toElement.children[0].classList.add('is-scale')
}

animate.onmouseleave = function (e) {
	target.toElement.children[0].classList.remove('is-scale')
}

