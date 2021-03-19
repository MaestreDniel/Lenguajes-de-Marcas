/**
* @Author: Daniel Maestre Hermoso
* Start Date: 11/02/2021
* Finish Date: 11/02/2021
* School: CIFP Francesc de Borja Moll
* Curso: 1r DAW Presencial
* Version: 1.0
*
3. Fer una pàgina web que mostri:

Un botó que permeti fer visible una imatge.
Un botó que permeti fer invisible una imatge.
Un botó que permeti canviar la grandària de la imatge i fer-la més grossa.
Un botó que permeti canviar la grandària de la imatge i fer-la més petita.
*/

function visible(){ // Accedeix a la imatge de l'html, es llegeix i comprova l'existencia de l'atribut "hidden". Si hi ha aquest atribut, es lleva.
    let element = document.getElementsByTagName("img")[0];
    let atr = element.getAttributeNode("hidden");
    if (element.getAttributeNode("hidden")){
        element.removeAttributeNode(atr);
    }else{
        return false; // Evita missatge d'error a la consola quan l'atribut ja s'havia llevat abans.
    }
    
}

function invisible(){ // Es crea l'atribut "hidden" per a la imatge i es coloca en cas de no tenir-lo posat. 
    let atr = document.createAttribute("hidden"); // Si està posat ja d'abans no passa res, perquè es sobreescriu i és el mateix atribut.
    document.getElementsByTagName("img")[0].setAttributeNode(atr);
}

function augment(){ // Es modifiquen els atributs "width" i "height", es sobreescriu el valor original per aquest, que és més gran.
    document.getElementsByTagName("img")[0].setAttribute("width", "35%");
    document.getElementsByTagName("img")[0].setAttribute("height", "35%");
}

function disminueix(){ // Mateix funcionament que en la funció augment()
    document.getElementsByTagName("img")[0].setAttribute("width", "15%");
    document.getElementsByTagName("img")[0].setAttribute("height", "15%");
}