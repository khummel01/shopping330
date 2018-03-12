
class ShoppingController {
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
		}
		else {
			document.getElementById("inputForm").reset();
		}
	}

	deleteItem(rowId) {
		this.shoppingList.remove(rowId);
		this.pubSub.publish("deleteitem", this.shoppingList);
	}
}
