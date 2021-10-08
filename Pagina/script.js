function iniciJs() {
    /***********************
     *  Joc fet per Mohamed Bourarach DAW 2
     ───────────────▄▄───▐█
     ───▄▄▄───▄██▄──█▀───█─▄
     ─▄██▀█▌─██▄▄──▐█▀▄─▐█▀
     ▐█▀▀▌───▄▀▌─▌─█─▌──▌─▌
     ▌▀▄─▐──▀▄─▐▄─▐▄▐▄─▐▄─▐▄
     *
     * INS CENDRASSSOS
     * Professors -> Dani prados i Xavi Vallejo
     * *****************************/
    let i;
    let j;
    //Obtenim els tr i els td en un array. Les columnes es trobaràn amb una formula inversa del àrea.
    const lineas = document.getElementsByTagName("tr");
    let columnes = document.getElementsByTagName("td");
    const num = lineas.length;
    let num2 = columnes.length;
    //Si dividim el area del quadrat
    num2 = num2 / num;
    //Creem el array simple i fem la següent generació. S'ha asignat el valor de les lineas.
    const tauler = new Array(num);
    const taulerProx = new Array(num);
    console.log(num);
    //Asignem el numero de columnes per cada fila. Basicament creem un array bidimensional
    for (i = 0; i < num; i++) {
        tauler[i] = new Array(num2);
        taulerProx[i] = new Array(num2);
    }
    //Inicialitzem el els dos arrays
    for (i = 0; i < num; i++) {
        for (j = 0; j < num2; j++) {
            tauler[i][j] = 0;
            taulerProx[i][j] = 0;
        }
    }
    //A partir de la linia seleccionada tornem tots els td al array de les columnes. Després recorrem totes les posicions,
    //revisant els inputs de cada columna mirem si esta marcada. Si aquesta està marcada el valor del tauler[i][j] canviara a 1;
    for (i = 0; i < num; i++) {
        columnes = lineas[i].getElementsByTagName("td");
        for (j = 0; j < num2; j++) {
            if (columnes[j].getElementsByTagName("input")[0].checked) {
                tauler[i][j] = 1;
            }
        }
    }

    /**
     * SIGNIFICAT DE FUNCIONS $RESUMIT
     * aplicarNormes-> Contem els veins i depenent dels veins en la següent generació desapareixen
     * copiarIResetNexGen -> Copiem el array pare al fill o viceversa. I fem un reset.
     * actualitzarTempsreal -> A partir si la posició es 1. Canviem el estat del checkbox
     Li pasarem les parametres següents
     (i,j - Posicions actuals)
     (num,num2 - files i columnes )
     (tauler taulerProx -> Array Pare i Array Fill)
     La funció serà repetida el fins acabar totes les files i columnes
     * */
    for (i = 0; i < num; i++) {
        for (j = 0; j < num2; j++) {
            aplicarNormes(i, j,num,num2,tauler,taulerProx);
        }
        actualitzarTempsreal(num,num2,tauler,taulerProx,columnes,lineas);
        console.log(tauler)
        console.log(taulerProx);
    }
}
/*Amb aquesta funció basicament agafem totes les files i comprovem en la nostra taula nova quienes d'aquestes en la següent
Generació s'han de activar el checkbox corresponent*/
function actualitzarTempsreal(num,num2,tauler,taulerProx,columnes,lineas){
    for (let i = 0; i < num; i++) {
        columnes = lineas[i].getElementsByTagName("td");
        for (let j = 0; j < num2; j++) {
            columnes[j].getElementsByTagName("input")[0].checked = taulerProx[i][j] === 1;
        }
    }
}


function aplicarNormes(num, num2,linies,columnes,tauler,taulerProx) {
//Ens farà el return de la funció que conta els veins
    const numVeins = countVeins(num, num2, linies, columnes, tauler, taulerProx);
    //Si la cel·lula esta viva, i te menys de 2 o 3 veins aquesta mor i si té exactament 3 o 2 cel·lules és manté en vida
    if (tauler[num][num2] === 1) {
        if (numVeins < 2 || numVeins > 3) {
            taulerProx[num][num2] = 0;
        } else if (numVeins === 2 || numVeins === 3) {
            taulerProx[num][num2] = 1;
        }
        //Si la cel·lula està morta, i té un numero de veins exacte a 3. Llavors aquesta reviu.
    } else if (tauler[num][num2] === 0) {
        // if (countVecinasMuertasDeCeldaViva(num, num2,linies,columnes,tauler,taulerProx) === 3) {
        if (numVeins ===3) {
            taulerProx[num][num2] = 1;
        }
    }
    //  }
}
//Funció per poder carregar la nostre funció automaticament-

/*** Funció de Velocitat i Parar Joc*/
let velocitat =500;
let interval;
//Asignem al interval la velocitat predefinida i l'arrenquem
function auto(){
    interval = setInterval(iniciJs, velocitat);
}
//Netejem el interval, és a dir para de executar el codi
function autoStop(){
    clearInterval(interval);
}
//Fem una neteja del interval i pujem la velocitat
function pujarVelocitat(){
    clearInterval(interval);
    velocitat= velocitat-50;
    interval = setInterval(iniciJs, velocitat);
}
//Fem una neteja del interval i baixem la velocitat

function baixarVelocitat(){
    clearInterval(interval);
    velocitat= velocitat+50;
    interval = setInterval(iniciJs, velocitat);

}

/*Aqui el que fem es bàsicament agafant la totes les posicions que estan al voltant de la ce·la sel·leccionada
. Ara cada una de les coincidencies, ens sumarà 1 al nostre contador.
*/
function countVeins(num, num2,linia,columna,tauler) {
    let count = 0;
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

/* Proves
function countVecinasMuertasDeCeldaViva(num, num2,linia,columna,tauler) {
    var count = 0;
    if (num-1 >= 0) {
        if (tauler[num-1][num2] === 0) count++;
    }
    if (num-1 >= 0 && num2-1 >= 0) {
        if (tauler[num-1][num2-1] === 0) count++;
    }
    if (num-1 >= 0 && num2+1 < columna) {
        if (tauler[num-1][num2+1] === 0) count++;
    }
    if (num2-1 >= 0) {
        if (tauler[num][num2-1] === 0) count++;
    }
    if (num2+1 < columna) {
        if (tauler[num][num2+1] === 0) count++;
    }
    if (num+1 < linia) {
        if (tauler[num+1][num2] === 0) count++;
    }
    if (num+1 < linia && num2-1 >= 0) {
        if (tauler[num+1][num2-1] === 0) count++;
    }
    if (num+1 < linia && num2+1 < columna) {
        if (tauler[num+1][num2+1] === 0) count++;
    }
    return count;
}
*/
