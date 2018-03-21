"use strict";

class Controller {
	constructor(pubSub) {
		this.pubSub = pubSub;
		this.shoppingList = new ShoppingList();
	}

	newItem(itemSpec) {
		// let count = 0;
		// for (var key in itemSpec) {
			// if (itemSpec[key] != "") {
				// count += 1;
			// }
		// }
		// if (count == 6) {
			let item = new ShoppingItem(itemSpec["name"], itemSpec["section"], itemSpec["quantity"], itemSpec["store"], itemSpec["priority"], itemSpec["price"]);
			this.shoppingList.addShoppingItem(item);
			this.pubSub.publish("newitem", this.shoppingList);

			let config = {}; // object, heres the method, body, headers
			config.method = 'POST';
			config.body = JSON.stringify(this.shoppingList) // must match content type
			config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}

			// TODO: make into a listener 
			fetch(`http://localhost:5000/save`, config) 
			.then(function(response) {
				console.log(response)
			});
		// }
		// else {
			document.getElementById("inputForm").reset();
		// }
	}

	deleteItem(rowId) {
		this.shoppingList.remove(rowId);
	}
	
	clearTable() {
		// NOT WORKING
		this.shoppingList.clear();
		this.pubSub.publish("clear table", this.shoppingList);

		let config = {};
		config.method = 'POST';
		config.body = JSON.stringify(this.shoppingList)
		config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}

		fetch(`http://localhost:5000/save`, config) 
		.then(function(response) {
			console.log(response)
		})
	}

	pageLoad() {
		let config = {}; // object, here's the method, body, headers
		config.method = 'GET';
		config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'} // text/plain?

		fetch(`http://localhost:5000/retrieve`, config) // fetch is calling a server
			.then(function(response) {
				console.log(response)
				if (response.type != "cors") {
					this.shoppingList = JSON.parse(response.json);
					this.pubSub.publish("onload", this.shoppingList);
				}
			});

	}
}
