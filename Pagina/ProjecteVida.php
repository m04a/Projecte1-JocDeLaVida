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
<<<<<<< HEAD
if ($xGra == null || $yGra ==null){
echo "Les dades intrudides no són correctes";
}
else{
for ($x = 1; $x <= $xGra; $x++) {?>
        <tr class="files">
        <?php for ($y = 1; $y <= $yGra; $y++) {?>
                <td class="columnes">
                        <input type="checkbox">
                </td>
}
<?php }?>
<?php }?>
=======
if ($xGra < 3 || $xGra == null || $yGra < 3 || $yGra == null || $yGra > 40 || $xGra > 20){
echo "<p class='error'>Error: Si us plau, revisa les dades introduïdes. Es farà una redirecció en 3 segons...</p>";
header('Refresh: 3; Projecte1.html');
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
}?>
>>>>>>> 58272b6f2dc27aefa1dd67af603ed321bdc908c2
</table>
</body>
</html>
