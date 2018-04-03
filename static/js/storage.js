"use strict";

class Storage {
	constructor(pubSub) {
		this.pubSub = pubSub;
		this.shoppingList = new ShoppingList();
		this.pubSub.subscribe(this.newItem.bind(this));
	}

	// PART OF PUBSUB
	newItem(shoppingList, msg) {
		let config = {}; // object, heres the method, body, headers
		config.method = 'POST';
		config.body = JSON.stringify(shoppingList.getItems()) // must match content type
		config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}

		fetch("http://localhost:5000/cart", config) 
		.then(function(response) {
			console.log("shopping list create new item")
		});
	}

	deleteItem(shoppingList) {
		let config = {};
		config.method = 'POST';
		config.body = JSON.stringify(shoppingList.getItems())
		config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}

		fetch("http://localhost:5000/cart", config) 
		.then(function(response) {
			console.log("shopping list remove row")
		});
	}
	
	clearTable(shoppingList) {
		let config = {}; 
		config.method = 'POST';
		config.body = JSON.stringify(shoppingList.getItems())
		config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}

		fetch("http://localhost:5000/cart", config) 
		.then(function(response) {
			console.log("shopping list clear table")
		});
	}

	pageLoad() {
		let config = {}; // object, here's the method, body, headers
		config.method = 'GET';
		config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}

		let that = this;

		fetch("http://localhost:5000/cart", config) // fetch is calling a server, http://localhost:5000/cart
			.then(function(response) {
				return response.json();
			})
			.then(function(cart) { // what is seen in cart.txt as an array
				let shoppingList = new ShoppingList();
				for (let i = 0; i<cart.length; i++) {
					if (cart[i].item !== undefined) {
						let item = new ShoppingItem(cart[i].item, cart[i].section, cart[i].quantity, cart[i].store, cart[i].priority, cart[i].price);
						shoppingList.addShoppingItem(item);

					}
				}
				that.pubSub.publish("onload", shoppingList);
				console.log(cart);
			});

	}
}