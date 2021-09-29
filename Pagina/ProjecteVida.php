<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
  <link href=' http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
</head>
<body>

<h1>Joc de la Vida</h1>

<table>
<?php
$xGra = $_POST['GrandariaX'];
$yGra = $_POST['GrandariaY'];
if ($xGra < 3 || $xGra == null || $yGra < 3 || $yGra == null || $yGra > 40 || $xGra > 20){
echo "<p class='error'> Revisa les dades</p>";
header('Refresh: 3; Projecte1.html');
}
else{
 for ($x = 1; $x <= $xGra; $x++) {
	echo "<tr class='files'>";
	 for ($y = 1; $y <= $yGra; $y++) {
		echo "<td class='columnes'>";
			echo "<input type='checkbox' class='celules'>";
		echo "</td>";
}
}
}?>
</table>
</body>
</html>
