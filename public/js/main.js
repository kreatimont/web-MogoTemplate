let menuButton = document.getElementById('menu-button');

menuButton.onclick = function() {
	let mobileMenu = document.getElementsByClassName('mob-menu')[0];
	mobileMenu.style.height = mobileMenu.style.height == '0px' ? '280px' : '0px';
}