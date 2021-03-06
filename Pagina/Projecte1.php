<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Joc de La Vida</title>
  <meta name="description" content="Joc de la Vida.">
  <meta name="author" content="Mohamed Bourarach">

  <meta property="og:title" content="Joc de la Vida">
  <meta property="og:type" content="website">

  <link rel="icon" href="./imatges/favicon.ico">
  <link rel="stylesheet" href="style.css">
  <link href=' http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 
 <script type="text/javascript" src="script.js"></script>

</head>

<body>
<h1>JOC DE LA VIDA</h1>
<h3>Normes: </h3>
<p>Consisteix en un univers de ple de cel·lules diferents represtades en cel·les diferents.
<p/>
<p>Una cel·lula revivirà si té 3 cel·lules veines vives, també si té 2 o 3 cel·lules vives de veines,<br>
 la cel·lula és mantindra viva. Si té  menys de dos "0 o 1" aquesta morirà,<br>
 en canvi si té 4 o més veins morirà de sobre població. <br>
Per jugar simplement has posar les dimensions del univers.
La X maxima és 20 i la Y és 40. El minim és 4. 
 <p/>
 <!-- Aqui arrenquem el formulari amb el metode post que ens enviarà les dades del usuari -->
<form action="ProjecteVida.php" method="post">
 <div id=dimension>
  <h2>DIMENSIONS</h2>
 <div class="inline">
 <p>X: <input type="text" name="GrandariaX" size="2" pattern ="[0-9]+" value="<?php echo $_COOKIE['GrandariaX'];?>"></p>
 </div>
  <div class="inline">
 <p>Y: <input type="text" name="GrandariaY" size="2" pattern ="[0-9]+" value="<?php echo $_COOKIE['GrandariaY'];?>"></p>
</div>
	
<!-- <h2>NªCEL·LULES</h2>
 <div class="inline" id="Ncelules">
 <p>X: <input type="text" name="GrandariaX" size="2" pattern ="[0-9]+"></p>
 </div>
 onclick="window.location.href='paginaJoc.html';
  -->
</div>
<img src="./imatges/celula.png" alt="Celula">
 <!-- I li fem un submit-->
<div class="button2">
<button class="button" type="submit">

  <h3 id="Next"><i class="fa fa-play"></i> INICI</h3> 

</button>
</div>
</form>

</body>
</html>