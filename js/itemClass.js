"use strict";

class Item {
	constructor(item, section, quantity, store, priority, price) {
		this._item = item;
		this._section = section;
		this._quantity = quantity;
		this._store = store;
		this._priority = priority;
		this._price = price;
	}

	getItem() {
		return this._item;
	}

	getSection() {
		return this._section;
	}

	getQuantity() {
		return this._quantity;
	}

	getStore() {
		return this._store;
	}

	getPriority() {
		return this._priority;
	}

	getPrice() {
		return this._price;
	}

	setItem(newItem) {
		this._item = newItem;
	}

	setSection(newSection) {
		this._section = newSection;
	}

	setQuantity(newQuantity) {
		this._quantity = newQuantity;
	}

	setStore(newStore) {
		this._store = newStore;
	}

	setPriority(newPriority) {
		this._priority = newPriority;
	}

	setPrice(newPrice) {
		this._price = newPrice;
	}

	toString() {
		return this._item + ", " + this._section + ", " + this._store + ", " + this._priority + ", " + this._price;
	}

}

