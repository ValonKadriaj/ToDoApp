export const getValueFromList = (target) => {
	const value = target.parentElement.parentElement.textContent.trim();
	document.querySelector('.input').value = value;
}

export const getId = (target) => {
	return target.parentElement.id;
}

