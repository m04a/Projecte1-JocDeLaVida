function iniciJs(){
         alert("El Botó funciona i esta vinculat");
var lineas = document.getElementsByTagName("tr");
var columnes  = document.getElementsByTagName("td");
var tauler = [];

  var num = lineas.length;
  var num2 = columnes.length;
   for (let i = 1; i < num; i++) {
	tauler [i] = [];
		for (let j = 1; j < num; j++) {
		array [i] [j] =  document.getElementsByTagName("input").checked;
     }
}

}
