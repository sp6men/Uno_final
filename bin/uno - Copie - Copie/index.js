
// phase 1 , renseigner le nom des joueurs et les afficher 
let nomJoueur1 = prompt("Joueur numéro 1, entrez votre nom !"); // Demande le nom au joueur 1
let nomJoueur2 = prompt("Joueur numéro 2, entrez votre nom !"); // Demande le nom au joueur 2
let phraseBienvenue = "Bievenue à tous, cette partie oppose"+ " " + nomJoueur1 + " " + "à" + " " + nomJoueur2 + " " + "! Tous les coups sont permis !"; // Variable contenant la phrase de bienvenue
alert(phraseBienvenue); // Affiche la phrase de bienvenue 
document.getElementById("nomJoueur1").innerHTML = nomJoueur1; // Insère le nom du joueur 1 dans le document html 
document.getElementById("nomJoueur2").innerHTML = nomJoueur2; // Insère le nom du joueur 2 dans le document html 
// phase 1 , renseigner le nom des joueurs et les afficher 


//stockage des tableaux de cartes 
let cartesNormalesJaune = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9','bloquer','bloquer','inverser','inverser','+2','+2'];
let cartesNormalesBleue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9','bloquer','bloquer','inverser','inverser','+2','+2'];
let cartesNormalesRouge = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9','bloquer','bloquer','inverser','inverser','+2','+2'];
let cartesNormalesVert = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9','bloquer','bloquer','inverser','inverser','+2','+2'];
let cartesSpeciales = ['Joker', 'Joker', 'Joker', 'Joker', 'Super Joker', 'Super Joker', 'Super Joker', 'Super Joker',];
//stockage des cartes 


// phase 2, distribution des cartes 
let deckJoueur1 = []; // distribution des cartes du joueur 1 dans ce tableau
let deckJoueur2 = []; // distribution des cartes du joueur 2 dans ce tableau
let deckPioche = []; // cartes présentes dans la pioche
let deckTalon = []; // cartes présentes dans le talon (cartes posées)
let nbrCartesPioche =  cartesNormalesBleue.length+cartesNormalesJaune.length+cartesNormalesRouge.length+cartesNormalesVert.length+cartesSpeciales.length; //définie le nombre de cartes restantes dans la pioche
let nbrCartesJ1 = deckJoueur1.length; //définie le nombre de cartes restantes dans la pioche du joueur 1 en fonction du nombre d'éléments présents dans le tableau
let nbrCartesJ2 = deckJoueur2.length; //définie le nombre de cartes restantes dans la pioche du joueur 2 en fonction du nombre d'éléments présents dans le tableau
let distribuerBouton = document.getElementById("boutonDistrib"); // prend en compte le bouton distribuer 
document.getElementById("nbrCartesPioche").innerHTML = nbrCartesPioche; //affiche le nombre de cartes dans la pioche sur le document html
document.getElementById("nbrCartesJ1").innerHTML = nbrCartesJ1; //affiche le nombre de cartes dans la pioche du joueur 1 sur le document html
document.getElementById("nbrCartesJ2").innerHTML = nbrCartesJ2; //affiche le nombre de cartes dans la pioche du joueur 2 sur le document html


// phase 2, distribution des cartes 
// phase 3

//phase 3



/*








































let valeurAffiche = 1;  // valeur de base 
let boutonRajouter = document.getElementById("plusUn"); //rajoute +1
let boutonEnlever = document.getElementById("moinsUn"); // enleve 1

document.getElementById("valeurAffiche").innerHTML = valeurAffiche; //affiche la variable dans le html



boutonRajouter.onclick = function() { // fonction à exécuter au clique sur le bouton rajouter
    valeurAffiche++; // la valeur de la variable +1
    document.getElementById("valeurAffiche").innerHTML = valeurAffiche; //affiche à nouveau la variable dans le html ce qui permet d'actualiser son état
    
};


boutonEnlever.onclick = function() { // fonction à exécuter au clique sur le bouton enlever
    valeurAffiche--; // la valeur de la variable -1
    document.getElementById("valeurAffiche").innerHTML = valeurAffiche; //affiche à nouveau la variable dans le html ce qui permet d'actualiser son état
    if (valeurAffiche === 0) {  //condition qui permet d'arrêter le jeu si la valeur arrive à 0 (le joueur n'a plus de cartes )
        alert('Le jeu est terminé !'); // indique que le jeu est terminé
        window.location.reload(); // permet de recharger la page, lorsque le jeu termine, il se remet à 0 
    } else {}
};

*/

/*
let Joueur1 = {
    
    nbrCartes1: 1
};
let Joueur2 = {
    
    nbrCartes2 : 1
};




function PartieFinie() {

    if (Joueur1.NbrCartes === 0) {

        alert('Partie terminée, le joueur 1 gagne !!');

    } else if (Joueur2.NbrCartes === 0) {

        alert('Partie terminée, le joueur 2 gagne !!');
    } else {
        
    }
}

PartieFinie();
*/

/* 
function nombreCartes(nbrCartes1, nbrCartes2) {

    if (nbrCartes1 === 0) {

        alert('Partie terminée, le joueur 1 gagne !!'); 

    } else if (nbrCartes2 === 0) {

        alert('Partie terminée, le joueur 2 gagne !!');
    } else {

    }

}
*/


