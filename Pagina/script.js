function iniciJs(){
         alert("El Botó funciona i esta vinculat");
var lineas = document.getElementsByTagName("tr");
var columnes  = document.getElementsByTagName("td");
var tauler = [];
  var num = lineas.length;
  var num2 = columnes.length;
   for (var i = 1; i < num; i++) {
	tauler [i] = [];
		for (var j = 1; j < num2; j++) {
		tauler [i] [j] =  document.getElementsByTagName("input").checked;
     }
}
console.log(tauler);
}
