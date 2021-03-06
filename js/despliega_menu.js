var btnMenu = document.getElementById('btn_menu');
var nav = document.getElementById('nav');
var btnCat = document.getElementById('btn_catego');
var listcat = document.getElementById('listcat');

btnMenu.addEventListener('click', function () {
	nav.classList.toggle('mostrar');
})

btnCat.addEventListener('click', function () {
	listcat.classList.toggle('revelacat');
})