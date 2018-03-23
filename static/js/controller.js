"use strict";

class Controller {
	constructor(pubSub) {
		this.pubSub = pubSub;
		this.shoppingList = new ShoppingList();
	}

	newItem(itemSpec) {
			let count = 0;
			for (var key in itemSpec) {
				if (itemSpec[key] != "") {
					count += 1;
				}
			}
			if (count == 6) {
				let item = new ShoppingItem(itemSpec["name"], itemSpec["section"], itemSpec["quantity"], itemSpec["store"], itemSpec["priority"], itemSpec["price"]);
				this.shoppingList.addShoppingItem(item);
				this.pubSub.publish("newitem", this.shoppingList);

				let config = {}; // object, heres the method, body, headers
				config.method = 'POST';
				config.body = JSON.stringify(this.shoppingList.getItems()) // must match content type
				config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}

				// TODO: make into a listener 
				fetch(`/cart`, config) 
				.then(function(response) {
					console.log("shopping list save (coming from newItem() function)")
				});
			} else {
				document.getElementById("inputForm").reset();
			}
	}

	deleteItem(rowId) {
		this.shoppingList.remove(rowId);
	}
	
	clearTable() {
		this.shoppingList.clear();
		this.pubSub.publish("clear table", this.shoppingList);

		let config = {};
		config.method = 'POST';
		config.body = JSON.stringify(this.shoppingList)
		config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}

		fetch(`/cart`, config) 
		.then(function(response) {
			console.log(response)
		})
	}

	pageLoad() {
		let config = {}; // object, here's the method, body, headers
		config.method = 'GET';
		config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}

		let that = this;

		fetch(`/cart`, config) // fetch is calling a server, http://localhost:5000/cart
			.then(function(response) {
				return response.json();
			})
			.then(function(cart) { // what is seen in cart.txt as an array
				that.shoppingList = new ShoppingList();
				for (let i = 0; i<cart.length; i++) {
					if (cart[i].item !== undefined) {
						let item = new ShoppingItem(cart[i].item, cart[i].section, cart[i].quantity, cart[i].store, cart[i].priority, cart[i].price);
						that.shoppingList.addShoppingItem(item);

					}
				}
				that.pubSub.publish("onload", that.shoppingList);
				console.log(cart);
			});
	}
}
