"use strict";

class Shop {
	constructor() {
		this._cart = {};
		this._id = 0;
	}

	add(item) {
		this._cart[this._id] = item;
		count += 1;
	}

	remove(id) {
		delete this._cart[id];
	}

	getSize() {
		let count = 0;
		for (let in this._cart) {
			count += 1;
		}
		return count;
	}

	toString() {
		return this._cart;
	}

}