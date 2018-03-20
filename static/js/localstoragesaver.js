"use strict";

class LocalStorageSaver {
	constructor(model) {
		model.subscribe(this.saveData.bind(this));
	}
	
	saveData(shoppingList, msg) {
		let shoppingCart = [];
		let nextDict = {};
		let namesDict = {1: "name", 2: "section", 3: "quantity", 4: "store", 5: "priority", 6: "price"};
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
}