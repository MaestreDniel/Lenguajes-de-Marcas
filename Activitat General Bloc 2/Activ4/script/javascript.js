/**
* @Author: Daniel Maestre Hermoso
* Start Date: 11/02/2021
* Finish Date: 11/02/2021
* School: CIFP Francesc de Borja Moll
* Curso: 1r DAW Presencial
* Version: 1.0
*
4. A partir de la pàgina web següent, escriure codi JavaScript per que:

Quan cliquem damunt del primer paràgraf s'oculti, i quan es torni a clicar damunt del mateix, el mostri.
Completar la resta paràgrafs de la pàgina per que el seu comportament sigui el mateix que el primer.
*/

let p = document.getElementsByTagName("p"); // S'agafen tots els parágrafs
let fragments = []; // Preparam un array buit on els guardarem tots
for (let i=0; i < p.length; i++) { // Es guarda el contingut de cadascun d'ells a l'array
    fragments.push(document.getElementsByTagName("p")[i].innerHTML);
}

function invisible(numparagraf){ // S'oculta el contingut dels paràgrafs i només es deixa "Torna a fer visible" (perquè si no, no puc tornar a clicar el paràgraf)
    document.getElementsByTagName("p")[numparagraf].innerHTML = "Torna a fer visible";
}

function visible(numparagraf){ // Es recupera el contingut original dels paràgrafs, s'accedeix a l'index de l'array segons el nº de paràgraf
    document.getElementsByTagName("p")[numparagraf].innerHTML = fragments[numparagraf];
}

function paragraf(numparagraf){ // Aquesta es la funció principal. Crida a les altres depenent de si el paràgraf s'havia ocultat o no
    if (document.getElementsByTagName("p")[numparagraf].innerHTML == "Torna a fer visible"){
        visible(numparagraf);
    }else{
        invisible(numparagraf);
    }
}