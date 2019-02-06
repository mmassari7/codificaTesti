window.onload = gestoreLoad;

//immagini per la visualizzazione delle cartoline
var links = [];
//main container
var container;
//tasti fronte e retro
var inputFronte;
var inputRetro;
//tasto ruota immagine
var inputRuota;
//container cartoline
var containerCartoline = [];
//immagini(fronte e retro) delle 3 cartoline
var imgCartoline = {};
//testi(fronte e retro) delle 3 cartoline
var textCartoline = {};
//aree retro cartoline
var aree = [];
var righe = [];

var i;

function gestoreLoad(){
    // main container
    container = document.getElementById("mainContainer");
    //tasti fronte e retro
    inputFronte = document.getElementById("fronteR");
    inputRetro = document.getElementById("Fretro");
    //tasto ruota immagine
    inputRuota = document.getElementById("ruota");
    // container cartoline
    containerCartoline[0] = document.getElementById("206");
    containerCartoline[1] = document.getElementById("215");
    containerCartoline[2]  = document.getElementById("223");
    //immagini(fronte e retro) delle 3 cartoline
    imgCartoline["F206"] = document.getElementById("imgF206");
    imgCartoline["R206"] = document.getElementById("imgR206");
    imgCartoline["F215"] = document.getElementById("imgF215");
    imgCartoline["R215"] = document.getElementById("imgR215");
    imgCartoline["F223"] = document.getElementById("imgF223");
    imgCartoline["R223"] = document.getElementById("imgR223");
    //testi(fronte e retro) delle 3 cartoline
    textCartoline["textF206"] = document.getElementById("divF206");
    textCartoline["textR206"] = document.getElementById("divR206");
    textCartoline["textF215"] = document.getElementById("divF215");
    textCartoline["textR215"] = document.getElementById("divR215");
    textCartoline["textF223"] = document.getElementById("divF223");
    textCartoline["textR223"] = document.getElementById("divR223");
    //aree retro cartoline
    aree = document.getElementsByTagName("area");
    righe = document.getElementsByTagName("span");
    //chiamata funzioni visualizzazione cartoline
    for (i=0; i<3; i++) {
        links[i] = document.getElementById(i);
        links[i].onclick = gestoreCartolina;
    }
    //chiamata funzioni tasti
    inputFronte.onclick = gestoreFronte;
    inputRetro.onclick = gestoreRetro;
    inputRuota.onclick = gestoreRuota;
    for (i=0; i<aree.length; i++) {
        aree[i].onmouseover = gestoreEvidenza;
        aree[i].onmouseout = ritorna;
    }

}

function gestoreEvidenza() {
    var identificatore = this.getAttribute("class");
    var selezionati = document.getElementsByClassName(identificatore);
    selezionati[0].setAttribute("style", "fill:red; bac")
    for (i=1; i <selezionati.length; i++){
        selezionati[i].setAttribute("style", "background-color: rgb(253, 233, 196)");
    }

}
function ritorna() {
    var identificatore = this.getAttribute("class");
    var selezionati = document.getElementsByClassName(identificatore);
    for (i=0; i <selezionati.length; i++){
        selezionati[i].removeAttribute("style");
    }
    
}
// funzione per la visualizzazione delle cartoline
function gestoreCartolina() {
    if(container.hasAttribute("style")) {
        container.removeAttribute("style");
    }
    for (i=0; i<containerCartoline.length; i++) {
        containerCartoline[i].setAttribute("class", "invisible");
    }
    var indice = this.getAttribute("id");
    containerCartoline[indice].removeAttribute("class");
}


//funzione di visualizzazione del fronte delle cartoline
function gestoreFronte() {
    if ((imgCartoline["F206"].hasAttribute("style")) && (!(containerCartoline[0].hasAttribute("class")))) {
        imgCartoline["F206"].removeAttribute("style");
        imgCartoline["R206"].setAttribute("style", "display:none;");
        textCartoline["textF206"].removeAttribute("class");
        textCartoline["textR206"].setAttribute("class", "invisible");
    }
    if ((imgCartoline["F215"].hasAttribute("style")) && (!(containerCartoline[1].hasAttribute("class")))) {
        imgCartoline["F215"].removeAttribute("style");
        imgCartoline["R215"].setAttribute("style", "display:none;");
        textCartoline["textF215"].removeAttribute("class");
        textCartoline["textR215"].setAttribute("class", "invisible");
    }
    if ((imgCartoline["F223"].hasAttribute("style")) && (!(containerCartoline[2].hasAttribute("class")))) {
        imgCartoline["F223"].removeAttribute("style");
        imgCartoline["R223"].setAttribute("style", "display:none;");
        textCartoline["textF223"].removeAttribute("class");
        textCartoline["textR223"].setAttribute("class", "invisible");
    }
}

//funzione di visualizzazione del retro delle cartoline
function gestoreRetro() {
    if ((imgCartoline["R206"].hasAttribute("style")) && (!(containerCartoline[0].hasAttribute("class")))) {
        imgCartoline["R206"].removeAttribute("style");
        imgCartoline["F206"].setAttribute("style", "display:none;");
        textCartoline["textR206"].removeAttribute("class");
        textCartoline["textF206"].setAttribute("class", "invisible");
    }
    if ((imgCartoline["R215"].hasAttribute("style")) && (!(containerCartoline[1].hasAttribute("class")))) {
        imgCartoline["R215"].removeAttribute("style");
        imgCartoline["F215"].setAttribute("style", "display:none;");
        textCartoline["textR215"].removeAttribute("class");
        textCartoline["textF215"].setAttribute("class", "invisible");
    }
    if ((imgCartoline["R223"].hasAttribute("style")) && (!(containerCartoline[2].hasAttribute("class")))) {
        imgCartoline["R223"].removeAttribute("style");
        imgCartoline["F223"].setAttribute("style", "display:none;");
        textCartoline["textR223"].removeAttribute("class");
        textCartoline["textF223"].setAttribute("class", "invisible");
    }
}

        
function gestoreRuota() {
    if ((!(containerCartoline[0].hasAttribute("class")))  && (imgCartoline["F206"].hasAttribute("style")) ) {
        if (!imgCartoline["R206"].hasAttribute("class")) {
            imgCartoline["R206"].setAttribute("class", "rotate270");
        }
        else {
            imgCartoline["R206"].removeAttribute("class");
        }
    }
    if ((!(containerCartoline[0].hasAttribute("class")))  && (imgCartoline["R206"].hasAttribute("style")) ) {
        if (!imgCartoline["F206"].hasAttribute("class")) {
            imgCartoline["F206"].setAttribute("class", "rotate270");
        }
        else {
            imgCartoline["F206"].removeAttribute("class");
        }
    }
    if ((!(containerCartoline[1].hasAttribute("class")))  && (imgCartoline["F215"].hasAttribute("style")) ) {
        if (!imgCartoline["R215"].hasAttribute("class")) {
            imgCartoline["R215"].setAttribute("class", "rotate270");
        }
        else {
            imgCartoline["R215"].removeAttribute("class");
        }
    }
    if ((!(containerCartoline[2].hasAttribute("class")))  && (imgCartoline["F223"].hasAttribute("style")) ) {
        if (!imgCartoline["R223"].hasAttribute("class")) {
            imgCartoline["R223"].setAttribute("class", "rotate270");
        }
        else {
            imgCartoline["R223"].removeAttribute("class");
        }
    }
    if ((!(containerCartoline[2].hasAttribute("class")))  && (imgCartoline["R223"].hasAttribute("style")) ) {
        if (!imgCartoline["F223"].hasAttribute("class")) {
            imgCartoline["F223"].setAttribute("class", "rotate270");
        }
        else {
            imgCartoline["F223"].removeAttribute("class");
        }
    }
}
