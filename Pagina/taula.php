<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
  <script type="text/javascript" src="script.js"></script>
  <link href=' http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
</head>
<body>
<h1>El joc de la vida</h1>
<?php 
   $xGra = $_POST['xGra'];
   $yGra = $_POST['yGra'];
   $Array= $_POST['tauler'];
?>
<?php 
//Imprimim la taula corresponents
echo "<table>";
for ($x = 1; $x <= $xGra; $x++) {
       echo  "<tr class='files'>";
         for ($y = 1; $y <= $yGra; $y++) {
              echo "<td class='columnes'>";
			if (isset($Array[$y][$x])) {
                        echo "<input type='checkbox' name='tauler[".$y."][".$x."]'  class='celules' id='viva' checked>" ;
                	}
			else{
		        echo "<input type='checkbox' name='tauler[".$y."][".$x."]'  class='celules' id='morta'>" ;
			}
  			echo "</td>";
}
echo "</tr>";
}
echo "</table>";
/*Fem els botons que cridarán les funcions del joc*/
echo '<input type="submit" value="Jugar" onclick="iniciJs();" />';
echo '<input type="submit" value="Auto" onclick="auto();" />';
echo '<input type="submit" value="Pausar" onclick="autoStop();" />';
echo '<input type="submit" value="Velocitat+" onclick="pujarVelocitat();" />';
echo '<input type="submit" value="Velocitat-" onclick="baixarVelocitat();" />';

?>
</body>
</html>

