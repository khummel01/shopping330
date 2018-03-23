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
		} else {
			document.getElementById("inputForm").reset();
		}
	}

	deleteItem(rowId) {
		// let that = this		
		// function statement1() { 
		//     that.shoppingList.remove(rowId);
		// } 
		// function statement2() { 
		//     that.pubSub.publish("remove table entry", that.shoppingList);
		// } 
		// statement1(); 
		// setTimeout(statement2(), 3000); 
		this.shoppingList.remove(rowId);
		// this.pubSub.publish("remove table entry", this.shoppingList);
	}
	
	clearTable() {
		this.shoppingList.clear();
		this.pubSub.publish("clear table", this.shoppingList);
	}

}