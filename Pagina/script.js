function iniciJs(){
         alert("El Botó funciona i esta vinculat");
var lineas = document.getElementsByTagName("tr");
var columnes  = document.getElementsByTagName("td");
  var num = lineas.length;
  var num2 = columnes.length;
  num2 = num2/num;
var tauler = new Array(num);
var taulerProx = new Array(num);
console.log(num);
    for (var i = 0; i < num; i++) {
	tauler[i] = new Array(num2);
	taulerProx[i] = new Array(num2);
}

   for (var i = 0; i < num; i++) {
		for (var j = 0; j < num2; j++) {
		tauler[i][j] = 0;
		taulerProx[i][j] = 0;
     }
}
for (var i = 0; i < num; i++) {
                for (var j = 0; j < num2; j++) {
                //Fer condició de si troba el id "viva" en un element convertirlo en 1 si no pasar-ho a 0
     }
}
//Aqui aplicarem les normes corresponents
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num2; j++) {
            aplicarNormes(i, j);
        }
    }
console.log(tauler);
}
function aplicarNormes(num, num2) {
//Ens farà el return de la funció que conta els veins
    var numVeins = contarVeins(num, num2);
    if (tauler[num][num2] == 1) {
        if (numVeins < 2) {
            taulerProx[num][num2] = 0;
        } else if (numVeins == 2 || numVeins == 3) {
            taulerProx[num][num2] = 1;
        } else if (numVeins > 3) {
            taulerProx[num][num2] = 0;
        }
    } else if (tauler[num][num2] == 0) {
            if (numVeins == 3) {
                taulerProx[num][num2] = 1;
            }
        }
    }
	
	//Necessito el numero original de lineas i columnes per la següent condició
	function contarVeins(num, num2) {
    var count = 0;
    if (num-1 >= 0) {
        if (tauler[num-1][num2] == 1) count++;
    }
    if (num-1 >= 0 && num2-1 >= 0) {
        if (tauler[num-1][num2-1] == 1) count++;
    }
    if (num-1 >= 0 && num2+1 < *NUMERO COLUMNES*) {
        if (tauler[num-1][num2+1] == 1) count++;
    }
    if (num2-1 >= 0) {
        if (tauler[num][num2-1] == 1) count++;
    }
    if (num2+1 < *NUMERO COLUMNES*) {
        if (tauler[num][num2+1] == 1) count++;
    }
    if (num+1 < *NUMERO LINEAS*) {
        if (tauler[num+1][num2] == 1) count++;
    }
    if (num+1 < *NUMERO LINEAS* && num2-1 >= 0) {
        if (tauler[num+1][num2-1] == 1) count++;
    }
    if (num+1 < *NUMERO LINEAS* && num2+1 < *NUMERO COLUMNES*) {
        if (tauler[num+1][num2+1] == 1) count++;
    }
    return count;
}
