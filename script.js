const themeSwitch = document.querySelectorAll('.theme-switch-section');
const themeSwitchIcon = document.querySelector('.theme-switch-icon');
const htmlElement = document.documentElement;
const calcScreen = document.querySelector('.calc-screen');
const calcKeys = document.querySelectorAll('.calc-keys');


themeSwitch.forEach((item)=> {
	item.addEventListener('click', (e)=> {
		dataset = e.target.dataset;
		pl = +dataset.pl;
		theme = dataset.theme;
		themeSwitchIcon.style.marginLeft = `${pl}px`;
		htmlElement.setAttribute('data-theme', theme);
	});
});

calcKeys.forEach((key) => {
	key.addEventListener('click', () => {
		val = key.dataset.key;
		screenText = calcScreen.value
		if (val == '=') {
			calcScreen.value = eval(screenText);
		} else if (val == 'reset') {
			calcScreen.value = '';
		} else if (val == 'del') {
			calcScreen.value = screenText.substring(0, screenText.length-1);
		} else {
			calcScreen.value += val;
		};
	});
});