"use strict";

class ShoppingItem {
	constructor(item, section, quantity, store, priority, price) {
		this.item = item;
		this.section = section;
		this.quantity = quantity;
		this.store = store;
		this.priority = priority;
		this.price = price;
	}

	getItem() {
		return this.item;
	} 

	getSection() {
		return this.section;
	}

	getQuantity() {
		return this.quantity;
	}

	getStore() {
		return this.store;
	}

	getPriority() {
		return this.priority;
	}

	getPrice() {
		return this.price;
	}
}

class ShoppingList {
	constructor() {
		this.cart = [];
	}

	addShoppingItem(item) {
		this.cart.push(item);
		// calls publish?
	}

	getItems() {
		return this.cart;
	}

	remove(rowId) {
		let index = parseInt(rowId[3]) - 1;
		if (index > -1) {
			this.cart.splice(index, 1);
		}
	}

	getLength() {
		let count = 0;
		for (let i of this.cart) {
			count += 1;
		}
		return count;
	}
}
