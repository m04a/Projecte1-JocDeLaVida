<!DOCTYPE html>
<html>
<body>

<h1>La meva pagina php</h1>

<table>
<?php
$x = $_POST['GrandariaX'];
$y = $_POST['GrandariaY'];
for ($x = 0; $x <= GrandariaX; $x++) {?>
	<tr class="files">
	<?php for ($y = 0; $y <= GrandariaY; $y++) {?>
		<td class="columnes">
			<input type="checkbox">
		</td>
<?php}}?>
</table>
</body>
</html>