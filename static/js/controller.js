"use strict";

class Controller {
	constructor(pubSub, storage) {
		this.pubSub = pubSub;
		this.shoppingList = new ShoppingList();
		this.storage = storage;
	}

	newItem(itemSpec) {
		let item = new ShoppingItem(itemSpec["name"], itemSpec["section"], itemSpec["quantity"], itemSpec["store"], itemSpec["priority"], itemSpec["price"]);
		this.shoppingList.addShoppingItem(item);
		this.pubSub.publish("newitem", this.shoppingList);
	}

	deleteItem(rowId) {
		this.shoppingList.remove(rowId);
		this.storage.deleteItem(this.shoppingList);
	}
	
	clearTable(rowId) {
		this.shoppingList.clear();
		this.pubSub.publish("clear table", this.shoppingList)
	}
}
