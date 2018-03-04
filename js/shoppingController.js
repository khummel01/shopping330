
class ShoppingController {
	constructor(pubSub) {
		this.pubSub = pubSub;
		this.shoppingList = new ShoppingList();
	}

	newItem(itemSpec) {
		// check if item is emtpy
		let item = new ShoppingItem(itemSpec["name"], itemSpec["section"], itemSpec["quantity"], itemSpec["store"], itemSpec["priority"], itemSpec["price"]);
		this.shoppingList.addShoppingItem(item);
		this.pubSub.publish(this.shoppingList);
	}

	// delete item from shoppping list
}
