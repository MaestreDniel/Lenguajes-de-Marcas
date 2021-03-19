/**
* @Author: Daniel Maestre Hermoso
* Start Date: 11/02/2021
* Finish Date: 11/02/2021
* School: CIFP Francesc de Borja Moll
* Curso: 1r DAW Presencial
* Version: 1.0
*
2. Fer un script que mitjançant finestres, ens demani confirmació per accedir a una url concreta, per exemple a la web del Borja Moll. 
Ens ha d'oferir anar-hi o cancel·lar l'acció. La pàgina web ha de llançar l'script mitjançant un esdeveniment d'HTML 
(onclick, ondblclick, ...). Aquesta pàgina web ha de tenir un color de fons.
*/

function confirmacio(){
    if (confirm("Vols accedir a la URL del CIFP Francesc de Borja Moll?")){ // Si es confirma, es substituirá el botó per aquest enllaç
        document.getElementsByTagName("body")[0].innerHTML = '<a href="https://www.cifpfbmoll.eu/">Web institut Francesc de Borja Moll</a>'
    } else {
        alert("Acció cancelada")
    }
}