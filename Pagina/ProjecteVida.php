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
</table>
</body>
</html>