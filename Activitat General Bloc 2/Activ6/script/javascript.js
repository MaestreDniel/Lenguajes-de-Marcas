/**
* @Author: Daniel Maestre Hermoso / Maite Ladaria Sánchez
* En aquest exercici, na Maite i jo varem treballar junts en aquest codi ja que varem tenir dificultats per aconseguir
* el que es demanava a l'enunciat. Al final, varem aconseguir aquest resultat.
* Start Date: 12/02/2021
* Finish Date: 13/02/2021
* School: CIFP Francesc de Borja Moll
* Curso: 1r DAW Presencial
* Version: 1.0
*
6. Crea una pàgina que contengui un formulari que demani:

Nom de l'usuari, edat, esport que practica l'usuari (com per exemple basquet, futbol, atletisme, etc.), 
color de la camiseta del seu club esportiu, des de quan practica l'esport.

La pàgina ha de tenir:

-Un Header amb el títol: "Els nostres usuaris són esportistes"
-Seccions que s'aniran creant a mida que els usuaris emplenin el formulari, per exemple, podria quedar:

Els nostres usuaris són esportistes

Futbol:

Pep, 24 anys, color camiseta vermell
Aina, 20 anys, color camiseta blanc, ....
Basquet:

Pere, 19 anys, color camiseta verda i blanca,...
*/


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
    let practica = document.getElementsByTagName("input")[2].value.toLowerCase(); // Agafar l'esport que practica i pasar-lo a minúscules
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