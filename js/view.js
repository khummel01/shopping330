"use strict";

class View {
	constructor(model) {
		model.subscribe(this.redrawList.bind(this));
	}

	redrawList(shoppingList, msg) {
		let tbl = document.getElementById("itemlst");
		// clear table
		let rowCount = tbl.rows.length;
		for (let i = rowCount-1; i > 0; i--) {
			tbl.deleteRow(i);
		}

		// populate table
		let rowNum = 1;
		for (let i = 0; i < shoppingList.getLength(); i++) {			
			let gets = [];
			gets.push(shoppingList.getItems()[i].getItem());
			gets.push(shoppingList.getItems()[i].getSection());
			gets.push(shoppingList.getItems()[i].getQuantity());
			gets.push(shoppingList.getItems()[i].getStore());
			gets.push(shoppingList.getItems()[i].getPriority());
			gets.push(shoppingList.getItems()[i].getPrice());

			let row = tbl.insertRow(rowNum);
			row.id = "row" + rowNum;
			let chkBox = document.createElement("input");
			chkBox.id = "chkBox" + rowNum;
			chkBox.type = "checkbox";
			chkBox.checked = false;
			chkBox.className = "checkBox";
			chkBox.onclick = strikeThrough.bind(chkBox.type, chkBox.id, row.id);
			row.appendChild(chkBox);
			for (let j = 0; j < 6; j++) {
				if (j == 4 && gets[j] == "low") {
					row.className = "tableEntry table-success";
				} else if (j == 4 && gets[j] == "medium") {
					row.className = "tableEntry table-warning";
				} else if (j == 4 && gets[j] == "high") {
					row.className = "tableEntry table-danger";
				}				
				let cell = row.insertCell(j); 
				cell.innerHTML = gets[j];
			}
			rowNum += 1;
		}
		
		document.getElementById("inputForm").reset();
	}

}
