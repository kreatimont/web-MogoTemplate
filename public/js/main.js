let imagePopoverId = "image-popover";
let popoverBackgroundId = "popover-background";

let menuButton = document.getElementById('menu-button');

menuButton.onclick = function() {
	let mobileMenu = document.getElementsByClassName('mob-menu')[0];
	mobileMenu.style.height = mobileMenu.style.height == '0px' ? '280px' : '0px';
}

//task1: set all links in document to the unsplash.com
let links = document.getElementsByTagName("a");
for (var i = links.length - 1; i >= 0; i--) {
	links[i].href = "https://unsplash.com"
}

//task2: show img as popover if user clicked on it
Array.prototype.slice.call(document.getElementsByTagName("img")).forEach(function(imageView) {
	imageView.addEventListener("click", function() {
		showPopover(imageView.src);
	});
});

function showPopover(src) {
	var popoverBackground = document.createElement("div");
	popoverBackground.id = popoverBackgroundId;
	popoverBackground.style.position = 'fixed';
	popoverBackground.style.top = "0%";
	popoverBackground.style.left = "0%";
	popoverBackground.style.width = "100vw";
	popoverBackground.style.height = "100vh";
	popoverBackground.style.background = `url(${src}) no-repeat center center fixed`;
	popoverBackground.style.backgroundSize = "cover";
	popoverBackground.style.filter = "blur(3px) grayscale(1)";
	popoverBackground.style.opacity = "1.0";
	popoverBackground.addEventListener("click", function(item) {
		document.body.removeChild(document.getElementById(popoverBackgroundId));
		document.body.removeChild(document.getElementById(imagePopoverId));
	});
	document.body.appendChild(popoverBackground);

	var imagePopover = document.createElement("img");
	imagePopover.id = imagePopoverId;
	imagePopover.src = src;
	imagePopover.style.position = 'fixed';
	imagePopover.style.top = "50%";
	imagePopover.style.left = "50%";
	imagePopover.style.width = "400px";
	imagePopover.style.height = "400px";
	imagePopover.style.marginTop = "-" + (imagePopover.style.height.substring(0, imagePopover.style.height.length - 2) / 2) + "px";
	imagePopover.style.marginLeft = "-" + (imagePopover.style.width.substring(0, imagePopover.style.width.length - 2) / 2) + "px";

	if (imagePopover.style.height == imagePopover.style.width) {
		imagePopover.style.borderRadius = (imagePopover.style.height.substring(0, imagePopover.style.height.length - 2) / 2) + "px";
	}

	document.body.appendChild(imagePopover);

}