"use strict"
class LocalStorageSaver {
	constructor(model, lsname) {
		this.lsname = lsname;
		let self = thils
		model.subscribe(function(slist, msg) {
			self.saveAll(slist)
		})
		// now restore from localstorage
		let restore_lst = JSON.parse(localStorage.get....
		for(let vals of restore_list) {
			let it = new Item(vals.name, vals.quantity....
			model.addItem(it)
		}
	}
	
	saveAll(slist) {
			let ls_lst = JSON.stringify(slist.newItems)
			localStorage.setItem(this.lsname, ls_list
		}
}