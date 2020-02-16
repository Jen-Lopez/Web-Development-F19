<!doctype html>
<html>
<head>
<meta charset="UTF-8">
	<title>Receipt</title>
	<link rel="stylesheet" href="online-style.css">
	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
</head>

<body id = "reciept-body">
	<h1 id= "heading"><span>Receipt</span></h1>
	<h2 id = "shopping">Thank you for shopping with us!</h2>
	<?php
		$cookieprice = 3.99;
		$barprice = 2.99;
		$name = $_POST['name'];
		$email = $_POST['email'];
		$item = $_POST['items'];
		$quantity = $_POST['quantity'] ;
	
	print ("<p>Customer: $name</p>");
	print ("<p>Email: $email</p>");
	
	if ($item == "cookies"){
		$total = floatval($quantity * $cookieprice);
		print("<p>$quantity Cookies</p>");
		print("<p>Total: $total</p>");
	}
	else {
		$total = floatval($quantity * $barprice);
		print("<p>$quantity Chocolate Bars</p>");
		print("<p>Total: $$total</p>");
	}
	
	?>
</body>
</html>