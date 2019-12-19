//appcontroller

import { List } from './model/List.js';
import { Store } from './model/Store.js';
import { getValue, uniqueid, addList, clearValue, getErrorMessage } from './view/addView.js';
import { deleteList } from './view/deleteView.js';
import { getValueFromList, getId } from './view/editView.js';





const state = {};

state.store = new Store();
let isEdit = false;

const AddContoller = () => {
	if(getValue() === '' || !isNaN(getValue()) || getValue().length > 80){
		getErrorMessage();
	}else if (isEdit){
		const id = state.id;
		if(id) { 
			state.store.remveList(id)
			document.getElementById(`${id}`).parentElement.remove();
			state.list = new List(getValue(), id);
			state.store.addList(state.list);
			addList(state.list.getDescription(), id);
			clearValue();
			isEdit = false;
		}
	}else{
		const id = uniqueid();
		state.list = new List(getValue(), id);
		state.store.addList(state.list);
		addList(state.list.getDescription(), id);
		clearValue()
	}
}


const button = document.querySelector('.button');
button.addEventListener('click', (e) => {
	e.preventDefault();
	AddContoller();
})


window.addEventListener('load', () =>  {
	const lists = state.store.getLists();
	
	if(lists){
		lists.forEach((list) => addList(list.description, list.id))
	}
})

const section = document.querySelector('.section');
section.addEventListener('click', e => {
	if(e.target.parentElement.classList.contains('delete')){
		state.store.remveList(e.target.parentElement.id);
		deleteList(e.target);
		isEdit = false;
	}
})

section.addEventListener('click', e => {
	if(e.target.parentElement.classList.contains('edit')){
		getValueFromList(e.target);
		isEdit = true;
		state.id = getId(e.target);
	}
})

