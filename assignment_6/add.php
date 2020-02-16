<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Calculator</title>
	<link rel="stylesheet" href="calc-style.css">
	<link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
</head>

<body>
	<h1 id = "heading"><span>Calculator</span></h1>
<?php
	$num1 = floatval($_POST['num1']);
	$num2 = floatval($_POST['num2']);
	$operator = $_POST['operator'];
	
	if ($operator == "add"){
		$result = $num1 + $num2 ;
		print ("<p class = 'result'><span>$num1 + $num2 = $result</span></p>");
	}
	else if ($operator == "sub"){
		$result = $num1-$num2;
		print ("<p class = 'result'><span>$num1 - $num2 = $result</span></p>");
	}
	else if ($operator == "mult"){
		$result = $num1 * $num2;
		print ("<p class = 'result'> <span>$num1 * $num2 = $result</span></p>");
	}
	else {
		if ($num2 != 0){
			$result = $num1 / $num2;
			print ("<p class = 'result'><span>$num1 / $num2 = $result</span></p>");
		}
		else {
			print ("<div id = 'divide'><p class = 'zero'><span>$num1 / $num2 = NAN</span></p>");
			print ("<p>CANNOT DIVIDE BY 0!</p></div>");
		}
	}
	
?>
</body>
</html>