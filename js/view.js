"use strict";

class View {
	constructor(model) {
		model.subscribe(this.redrawList.bind(this));
	}

	redrawList(shoppingList, msg) {
		let tbl = document.getElementById("itemlst");
		// clear table
		tbl.innerHTML = "";
		for (let item of shoppingList.newItems) {
			this.addRow(item, tbl);
		}
		document.getElementById("inputForm").reset();
	}

	addRow(item, parent) {
		// create new row
		let row = document.createElement("tr");
		// create checkbox
		let chkBox = document.createElement("input");
		chkBox.type = "checkbox";
		// onclick function for chkBox
		chkBox.onclick = function() {
			item.purchased = true;
		}
		row.appendChild(chkBox);

		for (let val of ["name", "section", "quantity", "store", "priority", "price"]) {
			let td = document.createElement("td");
			td.innerHTML = item[val];
			row.appendChild(td);
		}
		parent.appendChild(row);
	}

}

