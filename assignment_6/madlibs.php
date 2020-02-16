<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Mad Libs</title>
	<link href="https://fonts.googleapis.com/css?family=Orbitron&display=swap" rel="stylesheet">

</head>
<style>
	body{
		font-family: 'Orbitron', sans-serif;
		background-color: #ffe4bd;
		text-align: center;
	}	
	
	#heading {
		margin-bottom: 50px;
	}
	
	#heading span {
		color: #50463a ;
		background-color:#79594d91;
		padding: 20px;
	}
	
	#text {
		width: 350px;
		background-color: white;
		color: #615b53;
		padding: 20px;
	}
	#mad-button{
		font-family: 'Orbitron', sans-serif;
		padding: 10px;
		background-color: #7b6e60;
		color: white;
		border-radius: 5px;
		margin: 50px 0;
		font-size: 15px;
		border: none;
	}

	#mad-button:hover {
		cursor: pointer;
	}
	
</style>

<body>
<h2 id = "heading"><span >Here is your <i>Mad Libs</i> Output:</span></h2>

<?php

$adj1 = $_POST['adj1'];
$adj2 = $_POST['adj2'];
$noun1 = $_POST['noun1'];
$verb1 = $_POST['verb1'];
$noun2 = $_POST['noun2'];
$num = $_POST['num']; 
$verb2 = $_POST['verb2']; 
$noun3 = $_POST['noun3'];

print ("<div align = 'center'><p id = 'text'>The $adj1 $noun1 $verb1 the $adj2 house. There she saw a $noun2 $verb2 with $num $noun3</p></div>");

print("<a href = 'madlibs.html'><button id = 'mad-button'>Try Again</button></a>")

?>

</body>
</html>