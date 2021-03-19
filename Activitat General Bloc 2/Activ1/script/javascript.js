/**
* @Author: Daniel Maestre Hermoso
* Start Date: 10/02/2021
* Finish Date: 10/02/2021
* School: CIFP Francesc de Borja Moll
* Curso: 1r DAW Presencial
* Version: 1.0
*
1. Crea un script que utilitzant l'accés als nodes del DOM, mostri el text que contenen els nodes paràgrafs i títols (<h2>) d'una pàgina web.
*/

function recuperaContingut(){
    let p = document.getElementsByTagName("p") // S'agafen tots els parágrafs
    for (let i=0; i < p.length; i++) { // I es recupera el contingut de cadascun d'ells, finalment els alerts van mostrant cadascun dels paràgrafs.
        let fragments = document.getElementsByTagName("p")[i].innerHTML
        alert("Paràgraf " + [i+1] + " " + fragments)
    }
    let h2 = document.getElementsByTagName("h2") // El mateix funcionament que abans, però amb h2
    for (let i=0; i < h2.length; i++) {
        let fragments = document.getElementsByTagName("h2")[i].innerHTML
        alert("Títol " + [i+1] + " " + fragments)
    }
    
}