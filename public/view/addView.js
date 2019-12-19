
export const uniqueid = () => {
	let ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ID_LENGTH = 8;
    let rtn = '';
    for (let i = 0; i < ID_LENGTH; i++) {
      rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
	return rtn;
}

export const addList = (description, id) => {
	const murkup = 
	`
		<div class="mb-2 flex h-8 w-full bg-white border rounded border-blue-500 items-center">
			<div class=" flex-1 ">${description}</div>
			<span id="${id}" class="cursor-pointer edit flex-2  px-4 mr-2 text-blue-500"><i  class="   fas fa-pencil-alt"></i></span>
			<span id="${id}" class="cursor-pointer flex-2  px-4 text-blue-500 delete "><i   class="  fas fa-trash"></i></span>
		</div>
	`

	document.querySelector('.section').insertAdjacentHTML('beforeend', murkup);
}

export const getValue = () => {
	return document.querySelector('.input').value;
}

export const clearValue = () => {
	document.querySelector('.input').value = '';
	if(document.querySelector('.message')){
		document.querySelector('.message').remove();
	}
}

export const getErrorMessage = () => {
	const murkup = 
	`
		<div class="message w-1/2 py-2 p-2 mt-2 bg-red-300 rounded uppercase">dryshoj të dhënat që i ke vendosur</div>
	`
	document.querySelector('.form').insertAdjacentHTML('beforeend', murkup)
	setTimeout(() => {
		if(document.querySelector('.message')){
			document.querySelector('.message').remove();
		}
	}, 3000)
}