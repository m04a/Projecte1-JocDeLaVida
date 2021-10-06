function iniciJs() {
    let i;
    let j;
    alert("El Botó funciona i esta vinculat");
    var lineas = document.getElementsByTagName("tr");
    var columnes = document.getElementsByTagName("td");
    var num = lineas.length;
    var num2 = columnes.length;
    num2 = num2 / num;
    var tauler = new Array(num);
    var taulerProx = new Array(num);
    console.log(num);
    for (i = 0; i < num; i++) {
        tauler[i] = new Array(num2);
        taulerProx[i] = new Array(num2);
    }

    for (i = 0; i < num; i++) {
        for (j = 0; j < num2; j++) {
            tauler[i][j] = 0;
            taulerProx[i][j] = 0;
        }
    }
    for (i = 0; i < num; i++) {
        columnes = lineas[i].getElementsByTagName("td");
        for (j = 0; j < num2; j++) {

            if (columnes[j].getElementsByTagName("input")[0].checked) {
                tauler[i][j] = 1;
            }
            //Fer condició de si troba el id "viva" en un element convertirlo en 1 si no pasar-ho a 0
        }
    }

    console.log(tauler);

//Aqui aplicarem les normes corresponents
    for (i = 0; i < num; i++) {
        for (j = 0; j < num2; j++) {
            aplicarNormes(i, j,num,num2,tauler,taulerProx);
        }
        copiarIResetNexGen(i, j, tauler, taulerProx);
        actualitzarTempsreal(num,num2,tauler,taulerProx);

    }
}
function copiarIResetNexGen(num,num2,tauler,taulerProx){
 for (var i = 0; i < num; i++) {
          for (var j = 0; j < num2; j++) {
              tauler[i][j] = taulerProx[i][j];
              taulerProx[i][j] = 0;
          }
      }
 console.log(taulerProx);
}


function actualitzarTempsreal(num,num2,tauler,taulerProx){
for (var i = 0; i < num; i++) {
            for (var j = 0; j < num2; j++) {
                var celula = document.getElementsByName(tauler + "[" + i + "]" + "[" + j + "]");
                if (tauler[i][j] === 0) {
                    celula.setAttribute("checked", "true");
                } else {
                    celula.setAttribute("checked", "false");
                }
            }
        }
}
function aplicarNormes(num, num2,linies,columnes,tauler,taulerProx) {
//Ens farà el return de la funció que conta els veins
    var numVeins = contarVeins(num, num2,linies,columnes,tauler,taulerProx);
    if (tauler[num][num2] === 1) {
        if (numVeins < 2) {
            taulerProx[num][num2] = 0;
        } else if (numVeins === 2 || numVeins === 3) {
            taulerProx[num][num2] = 1;
        } else if (numVeins > 3) {
            taulerProx[num][num2] = 0;
        }
    } else if (tauler[num][num2] === 0) {
            if (numVeins === 3) {
                taulerProx[num][num2] = 1;
            }
        }
    }

        //Necessito el numero original de lineas i columnes per la següent condició
        function contarVeins(num, num2,linia,columna,tauler) {
    var count = 0;
    if (num-1 >= 0) {
        if (tauler[num-1][num2] === 1) count++;
    }
    if (num-1 >= 0 && num2-1 >= 0) {
        if (tauler[num-1][num2-1] === 1) count++;
    }
    if (num-1 >= 0 && num2+1 < columna) {
        if (tauler[num-1][num2+1] === 1) count++;
    }
    if (num2-1 >= 0) {
        if (tauler[num][num2-1] === 1) count++;
    }
    if (num2+1 < columna) {
        if (tauler[num][num2+1] === 1) count++;
    }
    if (num+1 < linia) {
        if (tauler[num+1][num2] === 1) count++;
    }
    if (num+1 < linia && num2-1 >= 0) {
        if (tauler[num+1][num2-1] === 1) count++;
    }
    if (num+1 < linia && num2+1 < columna) {
        if (tauler[num+1][num2+1] === 1) count++;
    }
    return count;
}




