// JavaScript Document
var add = document.getElementById("addNode");
var item_name = document.getElementById("itemName");
var choice = document.getElementsByName("insertion");
var nav = document.getElementById("list");
var nav_items = nav.getElementsByTagName("li");

add.addEventListener('click',function(){
	addItem(item_name);
});

function addItem(i){
	if (i.value == "" || i.value == null){
		i.focus();
		i.select();
	}
	else if (!(choice[0].checked || choice[1].checked)){
		alert("Choose an insertion method");
	}
	else {
		var newItem = document.createElement("li");
		var upperText =  capitalize(item_name.value);
		var newText = document.createTextNode(upperText);
		newItem.appendChild(newText);
		if (choice[0].checked){ // append node to the start
			nav.insertBefore(newItem,nav.firstChild);
		}
		else if (choice[1].checked){ // append node to the end
			nav.appendChild(newItem);
		}
		document.getElementById("form").reset();
		color();
		quantity();
	}
}

function color(){
	for (var i = 0; i < nav_items.length;i++){
		if (i%2 == 0){nav_items[i].className = "even-child";}
		else {nav_items[i].className = "odd-child";}
	}
}

function capitalize (word){
	return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}

function quantity(){
	var q = document.getElementById ("num"); 
	q.value = nav_items.length;
}
