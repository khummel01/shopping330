"use strict";

var rowCount = 1;

function addItem() {
	let newItemLst = [];
	newItemLst.push(document.querySelector("#item").value);
	newItemLst.push(document.querySelector("#sectiondd").value);
	newItemLst.push(document.querySelector("#quantitydd").value);
	newItemLst.push(document.querySelector("#storedd").value);
	newItemLst.push(document.querySelector("#prioritydd").value);
	newItemLst.push(document.querySelector("#price").value);

	let valCount = 0;
	for (let val of newItemLst) {
		if (val != "") {
			valCount += 1;
		}
	}

	if (valCount == 6) {
		let myTable = document.getElementById("itemlst")
		let row = myTable.insertRow(rowCount);
		for (let i = 0; i < 6; i++) {
			let cell = row.insertCell(i);
			cell.innerHTML = newItemLst[i];
		}
		rowCount += 1;
	}
	document.getElementById("inputForm").reset();
}
