/**
* @Author: Daniel Maestre Hermoso
* Start Date: 19/02/2021
* Finish Date: 19/02/2021
* School: CIFP Francesc de Borja Moll
* Curso: 1r DAW Presencial
* Version: 1.0
*
7. A la pàgina anterior, Crea un altre formulari amb un sol control de tipus "search" que permeti cerca a Google. 
Ha de mostrar per defecte a la casella del formulari el següent text: "esport". 
*/

// En aquesta activitat no ha estat necessari escriure més codi JavaScript, només he canviat la línea 31, l'index [2] per el [4]

// ACTIVITAT 6 (codi de la pàgina anterior) @Author: Daniel Maestre Hermoso / Maite Ladaria Sánchez

let inputs = document.getElementsByClassName("uno"); // Agaf tots els camps del formulari
let idesportprueba = ["futbol", "atletisme", "tenis", "basket"]; // Llistat dels id dels esports
let idesport = []; // Crear array a on guardaré tots els id dels esports

for (let i = 0; i < idesportprueba.length; i++) { // Recorrer tots els valors de idesportprueba i guardar-los a l'array "idesport"
    idesport.push(document.getElementById(idesportprueba[i]).getAttribute("id"));
}

function creaSection() { // Funció principal
    let formulario = []; // Crear array a on guardaré tots els valors del formulari
    let bool = true; // Inicialitza un booleà que servirà després per a determinar a quin if ha de ficar-se l'execució del codi
    for (let i = 0; i < inputs.length; i++) { // Recorrer tots els valors que es fiquen al formulari i guardar-los a l'array "formulario"
        formulario.push(document.getElementsByClassName("uno")[i].value);
    }
    let practica = document.getElementsByTagName("input")[4].value.toLowerCase(); // Agafar l'esport que practica i pasar-lo a minúscules
    for (let i = 0; i <= idesportprueba.length; i++) { // Es tracta d'encaixar les dades que hem ficat al formulari segons l'esport que ha introduit l'usuari
        if (practica == idesport[i]) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(formulario));
            let ul = document.getElementsByTagName("ul")[i];
            ul.appendChild(li); // Amb aquestes línies es crea cada element "li"
            bool = false;
        } else if (i == 4 && bool) { // S'executa quan el booleà es true
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(formulario));
            let ul = document.getElementsByTagName("ul")[i];
            ul.appendChild(li); // Amb aquestes línies es crea cada element "li"
        }
    }
}