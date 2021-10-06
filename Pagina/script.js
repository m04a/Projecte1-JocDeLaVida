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
<<<<<<< HEAD
                for (var j = 0; j < num2; j++) {
					/*var celula = document.getElementsByName(tauler + "[" + i + "]" + "[" + j + "]");*/
					if (columnes[j].getElementsByTagName("checkbox").checked = true;){
=======
	
                for (var j = 0; j < num2; j++) {
					/*var celula = document.getElementsByName(tauler + "[" + i + "]" + "[" + j + "]");*/
					if (columnes[j].getElementsByTagName("checkbox").checked = true){
>>>>>>> 959de87 (Millora js)
						tauler[i][j] = 1;
					}
                //Fer condició de si troba el id "viva" en un element convertirlo en 1 si no pasar-ho a 0
	
     }
}

//Aqui aplicarem les normes corresponents
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num2; j++) {
            aplicarNormes(i, j,num,num2,tauler);
        }
<<<<<<< HEAD

<<<<<<< HEAD
copiarIResetNexGen(num,num2,tauler,taulerProx);

actualitzarTempsreal(num,num2,tauler,taulerProx);
=======
<<<<<<< HEAD
=======
>>>>>>> 959de87 (Millora js)
copiarIResetNexGen(num,num2);
actualitzarTempsreal(num,num2);
>>>>>>> 3286e6c (Millora js)
    }
console.log(tauler);
}
function copiarIResetNexGen(num,num2,tauler,taulerProx){
 for (var i = 0; i < num; i++) {
          for (var j = 0; j < num2; j++) {
              tauler[i][j] = taulerProx[i][j];
              taulerProx[i][j] = 0;
          }
      }
}
function actualitzarTempsreal(num,num2,tauler,taulerProx){
for (var i = 0; i < num; i++) {
            for (var j = 0; j < num2; j++) {
                var celula = document.getElementsByName(tauler + "[" + i + "]" + "[" + j + "]");
                if (tauler[i][j] == 0) {
                    celula.setAttribute("checked", "true");
                } else {
                    celula.setAttribute("checked", "false");
                }
            }
        }
}
function aplicarNormes(num, num2,linies,columnes,tauler,taulerProx) {
//Ens farà el return de la funció que conta els veins
	var linia = linies;
	var columna = columnes;
    var numVeins = contarVeins(num, num2,linia,columna,tauler,taulerProx);
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
        function contarVeins(num, num2,linia,columna,tauler,taulerProx) {
    var count = 0;
    if (num-1 >= 0) {
        if (tauler[num-1][num2] == 1) count++;
    }
    if (num-1 >= 0 && num2-1 >= 0) {
        if (tauler[num-1][num2-1] == 1) count++;
    }
    if (num-1 >= 0 && num2+1 < columna) {
        if (tauler[num-1][num2+1] == 1) count++;
    }
    if (num2-1 >= 0) {
        if (tauler[num][num2-1] == 1) count++;
    }
    if (num2+1 < columna) {
        if (tauler[num][num2+1] == 1) count++;
    }
    if (num+1 < linia) {
        if (tauler[num+1][num2] == 1) count++;
    }
    if (num+1 < linia && num2-1 >= 0) {
        if (tauler[num+1][num2-1] == 1) count++;
    }
    if (num+1 < linia && num2+1 < columna) {
        if (tauler[num+1][num2+1] == 1) count++;
    }
    return count;
}



