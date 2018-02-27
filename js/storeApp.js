"use strict";

function addItem() {
	let node = document.createElement("p");
	let item = document.querySelector("#item").value;
	let cat = document.querySelector("#categorydd").value;
	let quant = document.querySelector("#quantitydd").value;
	let store = document.querySelector("#storedd").value;
	let priority = document.querySelector("#prioritydd").value;
	let price = document.querySelector("#price").value;
 
	let sp = "\xa0\xa0\xa0\xa0\xa0"; 
	let textNode = document.createTextNode(item + sp + cat + sp + quant + sp + price + sp + store + sp + priority);
	node.appendChild(textNode);
	document.getElementById("outputbox").appendChild(node);
	document.getElementById("#item").innerHTML = "hello";


	// let nump = document.querySelector("#numprimes").value;
	// let plist = firstN(nump);
	// let mytable = document.querySelector("#primetab")
	// mytable.innerHTML = "";
	// for (let p of plist) {
	// 	let row = document.createElement("tr");
	// 	let cell = document.createElement("td");
	// 	cell.innerHTML = p
	// 	row.appendChild(cell)
	// 	mytable.appendChild(row)
	// }

}
// wrap data entry in a panel: div type=panel
// make it a form
// put entry in table
// nav bar, can copy and paste it to have different tabs