<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
  <script type="text/javascript" src="script.js"></script>
  <link href=' http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
</head>
<body>

<h1>Marca les cel·lules vives</h1>

<table id="pot">
<?php

$xGra = $_POST['GrandariaX'];
$yGra = $_POST['GrandariaY'];
echo '<form id="myForm" action="taula.php" method="post">';
echo '<input type="hidden" name="xGra" value="'.$xGra.'">';
echo '<input type="hidden" name="yGra" value="'.$yGra.'">';

if ($xGra < 3 || $xGra == null || $yGra < 3 || $yGra == null || $yGra > 40 || $xGra > 20){
echo "<p class='error'>Error: Si us plau, revisa les dades introduïdes recorda que la X (No pot ser més gran de 20 ni més petita que 4) i la Y (No pot ser més gran de 40 ni més petita que 4). Es farà una redirecció en 10 segons... O clic a en 'Tornar al formulari'</p>";
echo "<a id='myLink' href='Projecte1.html' >Tornar al formulari</a>";
header('Refresh: 10; Projecte1.html');
}
else{
 for ($x = 1; $x <= $xGra; $x++) {
	echo "<tr class='files'>";
	 for ($y = 1; $y <= $yGra; $y++) {
		echo "<td class='columnes'>";
			echo "<input type='checkbox' name='tauler[$y][$x]'  class='celules'>";
		echo "</td>";
}
}
echo '<input type="submit" value="submit" />';
echo '</form>';
}

?>
</table>
</body>
</html>
