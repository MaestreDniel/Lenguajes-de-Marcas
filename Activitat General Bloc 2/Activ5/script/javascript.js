/**
* @Author: Daniel Maestre Hermoso
* Start Date: 11/02/2021
* Finish Date: 11/02/2021
* School: CIFP Francesc de Borja Moll
* Curso: 1r DAW Presencial
* Version: 1.0
*
5. Crea una pàgina web que contengui un formulari amb els següents camps d'informació:

Nom, que sigui obligatori, atribut autofocus.
Correu electrònic, que sigui obligatori. 
Telèfon, amb un control de tipus tel. El telèfon ha  de tenir 9 dígits.
Una contrasenya, obligatòria, que tengui una longitud mínima de 6 caràcters i màxima de 10. Ha de començar per una lletra majúscula o minúscula i ha d'acabar amb dos números
Un botó d'enviament.
i valida el formulari
*/

function validacio() { // Comprova la validesa de la direcció de correu, es comprova directament el valor introduit al formulari
    let campun = document.getElementById("mail").value;
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(campun))) {
        alert("Error, l'adreça de correu està buida o té un format incorrecte.");
        return false;
    }else{
        return true;
    }
}