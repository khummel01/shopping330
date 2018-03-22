"use strict";

class LocalStorageSaver {
	constructor(model) {
		model.subscribe(this.saveData.bind(this));
	}
	
	saveData(shoppingList, msg) {
		let shoppingCart = [];
		let nextDict = {};
		for (let i = 0; i < shoppingList.getLength(); i++) {
			let item = shoppingList.getItems()[i];
			nextDict["name"] = item.getItem();
			nextDict["section"] = item.getSection();
			nextDict["quantity"] = item.getQuantity();
			nextDict["store"] = item.getStore();
			nextDict["priority"] = item.getPriority();
			nextDict["price"] = item.getPrice();
			shoppingCart.push(nextDict);
			nextDict = {};
		}
		localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
	}

	getData() {
		return shoppingCart;
	}
}