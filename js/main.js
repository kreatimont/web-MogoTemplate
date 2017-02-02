let menuButton = document.getElementById('menu-button');

menuButton.onclick = function() {
	let mobileMenu = document.getElementsByClassName('mob-menu')[0];
	mobileMenu.style.display = mobileMenu.style.display == 'inline-block' ? 'none' : 'inline-block';
}