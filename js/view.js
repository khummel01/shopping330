let eventListener = function(scope, msg) {
	let shoppingList = msg;
	// adding HTML to the page
	let myTable = document.getElementById("itemlst");
	// clear table
	let rowCount = myTable.rows.length;
	for (let i = rowCount-1; i > 0; i--) {
		myTable.deleteRow(i);
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

		let row = myTable.insertRow(rowNum);
		row.id = "row" + rowNum;
		let chkBox = document.createElement("input");
		chkBox.id = "chkBox" + rowNum;
		chkBox.type = "checkbox";
		chkBox.checked = false;
		chkBox.onclick = strikeThrough.bind(chkBox.type, chkBox.id, row.id);
		row.appendChild(chkBox);
		for (let j = 0; j < 6; j++) {
			let cell = row.insertCell(j); 
			cell.innerHTML = gets[j];
		}
		rowNum += 1;
	}
	
	document.getElementById("inputForm").reset();
}


