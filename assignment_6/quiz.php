<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Quiz Results</title>
	<link rel="stylesheet" href="quiz-style.css">
	<link href="https://fonts.googleapis.com/css?family=Heebo&display=swap" rel="stylesheet">
</head>

<body>
	<h1 id="heading"><span>Results</span></h1>
	<?php
		$first = $_POST['first'];
		$last = $_POST['last'];
		$questions = array ("question-one", "question-two", "question-three","question-four");
		$answers = array ("2", "3", "1","0");
		$results = 0;
		$user_responses = array();
	
		for ($i = 0; $i < count($questions); $i++){
			$user_input = $_POST[$questions[$i]];
			array_push($user_responses, intval($user_input));
			if ($user_input == $answers[$i]){
				$results += 25;
			}
		}
		print("<div id = 'results-content'>");
		print ("<p>Hey <b>$first $last</b>, you got a $results%</p>");	
	
		$q1 = array("&lt;header&gt;","&lt;head&gt;","&lt;h1&gt;","&lt;h6&gt;");
		$q2 = array("?","&","#","$");
		$q3 = array("In-line Styling","JS file","<style> in head","External Style Sheet");
		$q4 = array("&lt;?php ... ?&gt;","&lt;script&gt;","&lt;? ... ?&gt;","&lt;php&gt;... &lt;/php&gt;");

		print("<h3 class = 'sub-head'><span>Correct Answers</span></h3>");
		print ("<p>Q1. $q1[2]</p>");
		print ("<p>Q2. $q2[3]</p>");
		print ("<p>Q3. $q3[1]</p>");
		print ("<p>Q4. $q4[0]</p>");

		print("<h3 class = 'sub-head'><span>Your Answers</span></h3>");
		$q1Index = $user_responses[0];
		print ("<p>Q1. $q1[$q1Index]</p>");
		$q2Index = $user_responses[1];
		print ("<p>Q2. $q2[$q2Index]</p>");
		$q3Index = $user_responses[2];
		print ("<p>Q3. $q3[$q3Index]</p>");
		$q4Index = $user_responses[3];
		print ("<p>Q4. $q4[$q4Index]</p>");
		print("</div>");
	?>
</body>
</html>