"use strict";

class View {
	constructor (table, controller) {
		this.table = table;
		this.controller = controller;
	}

	eventListener(scope, msg) {
		let shoppingList = msg;

		// clear table
		let rowCount = this.table.rows.length;
		for (let i = rowCount-1; i > 0; i--) {
			this.table.deleteRow(i);
		}

		let rowNum = 1;
		for (let i = 0; i < shoppingList.getLength(); i++) {			
			let gets = [];
			gets.push(shoppingList.getItems()[i].getItem());
			gets.push(shoppingList.getItems()[i].getSection());
			gets.push(shoppingList.getItems()[i].getQuantity());
			gets.push(shoppingList.getItems()[i].getStore());
			gets.push(shoppingList.getItems()[i].getPriority());
			gets.push(shoppingList.getItems()[i].getPrice());

			let row = this.table.insertRow(rowNum);
			row.id = "row" + rowNum;
			let chkBox = document.createElement("input");
			chkBox.id = "chkBox" + rowNum;
			chkBox.type = "checkbox";
			chkBox.checked = false;
			chkBox.onclick = strikeThrough.bind(chkBox.type, chkBox.id, chkBox.checked, row.id); // ????
			row.appendChild(chkBox);
			for (let j = 0; j < 6; j++) {
				let cell = row.insertCell(j); 
				cell.innerHTML = gets[j];
			}
			rowNum += 1;
		}
		
		document.getElementById("inputForm").reset();
	}

	// register the listener function with Subject
	// pubSub.subscribe(eventListener);

	newItem() {
		let name = document.querySelector("#item").value;
		let section = document.querySelector("#sectiondd").value;
		let quantity = document.querySelector("#quantitydd").value;
		let store = document.querySelector("#storedd").value;
		let priority = document.querySelector("#prioritydd").value;
		let price = document.querySelector("#price").value;
		let spec = {"name": name, "section": section, "quantity": quantity, "store": store, "priority": priority, "price": price};
		this.controller.newItem(spec);
	}

	// needs to be finished
	strikeThrough(chkBoxId, checked, rowId, mouseEvent) { // weird occurance here
		if (checked == false) {
			tableRow = document.getElementById(rowId);
			tableRow.style.setProperty("text-decoration", "line-through");
			document.getElementById(chkBoxId).checked = true;
		}
		else {
			tableRow = document.getElementById(rowId);
			tableRow.style.setProperty("text-decoration", "none");
			document.getElementById(chkBoxId).checked = false;
		}
	}
}
