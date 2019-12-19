export class Store {
	getLists(){
		let lists;
		
		if(localStorage.getItem('lists') === null){
			lists = [];

		}else{
			lists = JSON.parse(localStorage.getItem('lists'));
		}

		return lists;
	}

	addList(list){
		const lists = this.getLists();
		lists.push(list);
		localStorage.setItem('lists', JSON.stringify(lists));
	}
	remveList(id){
		const lists = this.getLists();
		lists.forEach((list, index) => {
			if(list.id === id){
				lists.splice(index, 1);
			}
		});
		localStorage.setItem('lists', JSON.stringify(lists));
	}
}

