let colorMode = localStorage.getItem('colorMode');
const colorModeToggle = document.querySelector('#color-mode-toggle');

const enableColorMode = () => {
	document.body.classList.add('colormode');
	localStorage.setItem('colorMode', 'enabled');
}

const disableColorMode = () => {
	document.body.classList.remove('colormode');
	localStorage.setItem('colorMode', null);
}

if (colorMode === 'enabled') {
	enableColorMode();
}

colorModeToggle.addEventListener('click', () => {
	colorMode = localStorage.getItem('colorMode');
	if (colorMode !== 'enabled') {
		enableColorMode();
		console.log(colorMode);
	} else {
		disableColorMode();
		console.log(colorMode);
	}
});