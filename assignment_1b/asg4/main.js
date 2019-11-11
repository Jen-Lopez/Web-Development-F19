// JavaScript Document

var plus = document.getElementsByClassName("plus");
var minus = document.getElementsByClassName("minus");
var quant_inputs = document.getElementsByName("quant");
var sub_outputs = document.getElementsByName("subtotal");
var items = ['Exclusive Movie Watcher Shirt','Movie Watcher Baseball Cap','Movie Watcher Tote Bag','Movie Watcher Water Bottle'];
var prices = [30,20,15,10];

document.getElementById("check-button").addEventListener("click", newForm);

// increment quantity and change subtotal
function add (e,index){
	var value = e.value;
	value++;
	e.value = value;
	subTotal(value,index);
}

// decrement quantity and change subtotal
function sub (e,index){
	var value = e.value;
	if (value > 0){
		value--; 
		e.value = value;
		subTotal(value,index);
	}
}

// calculate total 
function total(){
	var sum = 0; 
	for (var i = 0; i < sub_outputs.length; i++){
		var num = Number (sub_outputs[i].value);
		sum += num;
	}
	document.getElementById("total").value = sum+".00";
}

// calculate subtotal and change total
function subTotal (q,i){
	var sub = sub_outputs[i];
	var newSub = prices[i] * q;
	sub.value = newSub + ".00";
	total();
}

// add event listeners for buttons
for (var i = 0; i < plus.length; i++) {
	let box = quant_inputs[i];
	let index = i;
	plus[i].addEventListener('click', function(){add(box,index);});
	minus[i].addEventListener('click', function(){sub(box,index);});
}
// opens checkout form
function newForm(){
	if (document.getElementById("total").value > 0){
		document.getElementById("customer-info").style.display = "block";
		document.getElementById("check-button").style.display = "none";
	} 
}

var shipping = document.getElementsByName("shipping");
for (var i = 0; i < shipping.length;i++){
	shipping[i].addEventListener('change',shipIt);
}

function shipIt(event) {
	var t = document.getElementById("total");
	var tv = Number (t.value);

	if ( this.value == 'home' ) {
		t.value = tv + 4.99;
	} else if ( this.value == 'store') {
		if (tv > 0){t.value = tv - 4.99;}
	}  
}

//validates email address
function isEmail(e){
	var re = /\S+@\S+\.\S+/;
	return re.test(e);
}
// validates zip code
function isZip(z){
	var isNum = isNaN(z);
	return (isNum != true && z.length == 5);
}

// validates that all fields are filled
function validate(){
	var infoForm = document.forms[1].elements;
	var valid = true;
	for (var i = 1; i < infoForm.length-2; i++){
		var curr_input = infoForm[i];
		if (curr_input.value == "" || curr_input.value == null){
			curr_input.focus();
			curr_input.select();
			curr_input.style.borderColor = "#71a5ca";
			valid = false;
			break;
		}
		
		if (i == 3){
			var validEmail = isEmail(curr_input.value);
			if (!(validEmail)){
				valid = false;
				curr_input.focus();
				curr_input.select();
				curr_input.style.borderColor = "#71a5ca";
				break;
			}
		}
		
		if (i == 6){
			var validZip = isZip(curr_input.value);
			if (!(validZip)){
				valid = false;
				curr_input.focus();
				curr_input.select();
				curr_input.style.borderColor = "#71a5ca";
				break;
			}
		}
		if (i == 7){
			var state = curr_input.value;
			if (state == "default"){
				valid = false;
				curr_input.focus();
				break;
			}
		}
	}
	
 	if (valid){receipt();}
}

// open new document with order summary 
function receipt(){
	var total = document.getElementById('total').value;
	var firstForm = document.forms[0].elements;	
	var quantity = firstForm["quant"];
	var subtotal = firstForm["subtotal"];
	
	var d = new Date();
	
	document.open();
	document.write("<link rel = 'stylesheet' href = 'styles.css'>")
	document.write("<link rel = 'stylesheet' href = '../style.css'>")
	document.write('<link href="https://fonts.googleapis.com/css?family=Livvic&display=swap" rel = "stylesheet">');
	

	document.write("<header><h1 class = 'head doc-font' align = 'center'> Moviewatchers</h1></header>");
	
	document.write("<div class = 'center' style = 'margin-top:100px;'>");
	document.write("<p>" + (d.getMonth()+1) + "/" + d.getUTCDate() + "/"+ d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":"+ d.getSeconds()+ "</p>");
	document.write("<h1><span style = 'border-bottom:black 2px solid;'>Order Summary</span></h1>");
	for (var i = 0; i < quantity.length; i++){
		if (!(quantity[i].value == 0 || quantity[i].value == '')){
			document.write("<p>" +  quantity[i].value + "X "+ items[i] + " $" + subtotal[i].value + "</p>");
		}
	}
	document.write("<h2> Total: $" + total + "</h2>");

	document.write("<a href = 'products.html'><button type = 'button' class = 'keep-shopping'> Keep Shopping</button></a>")
	document.write("</div>");
}
