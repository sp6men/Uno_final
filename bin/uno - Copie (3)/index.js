
// phase 1 , renseigner le nom des joueurs et les afficher 
let nomJoueur1 = prompt("Joueur numéro 1, entrez votre nom !"); // Demande le nom au joueur 1
let nomJoueur2 = prompt("Joueur numéro 2, entrez votre nom !"); // Demande le nom au joueur 2
let phraseBienvenue = "Bievenue à tous, cette partie oppose"+ " " + nomJoueur1 + " " + "à" + " " + nomJoueur2 + " " + "! Tous les coups sont permis !"; // Variable contenant la phrase de bienvenue
alert(phraseBienvenue); // Affiche la phrase de bienvenue 
document.getElementById("nomJoueur1").innerHTML = nomJoueur1; // Insère le nom du joueur 1 dans le document html 
document.getElementById("nomJoueur2").innerHTML = nomJoueur2; // Insère le nom du joueur 2 dans le document html 
// phase 1 , renseigner le nom des joueurs et les afficher 


//stockage des tableaux de cartes 
/*let cartesNormalesJaune = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9','bloquer','bloquer','inverser','inverser','+2','+2'];
let cartesNormalesBleue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9','bloquer','bloquer','inverser','inverser','+2','+2'];
let cartesNormalesRouge = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9','bloquer','bloquer','inverser','inverser','+2','+2'];
let cartesNormalesVert = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9','bloquer','bloquer','inverser','inverser','+2','+2'];
let cartesSpeciales = ['Joker', 'Joker', 'Joker', 'Joker', 'Super Joker', 'Super Joker', 'Super Joker', 'Super Joker',]; */
let deckComplet = 
['0 Jaune', '1 Jaune', '2 Jaune', '3 Jaune', '4 Jaune', '5 Jaune', '6 Jaune', '7 Jaune', '8 Jaune', '9 Jaune', '1 Jaune', '2 Jaune', '3 Jaune', 
'4 Jaune', '5 Jaune', '6 Jaune', '7 Jaune', '8 Jaune', '9 Jaune','bloquer Jaune','bloquer Jaune','inverser Jaune','inverser Jaune','+2 Jaune','+2 Jaune', '0 Bleu',
'1 Bleu', '2 Bleu', '3 Bleu', '4 Bleu', '5 Bleu', '6 Bleu', '7 Bleu', '8 Bleu', '9 Bleu', '1 Bleu', '2 Bleu', '3 Bleu', '4 Bleu', '5 Bleu', '6 Bleu', '7 Bleu', '8 Bleu',
'9 Bleu','bloquer Bleu','bloquer Bleu','inverser Bleu','inverser Bleu','+2 Bleu','+2 Bleu', '0 Rouge', '1 Rouge', '2 Rouge', '3 Rouge', '4 Rouge', '5 Rouge', '6 Rouge',
'7 Rouge', '8 Rouge', '9 Rouge', '1 Rouge', '2 Rouge', '3 Rouge', '4 Rouge', '5 Rouge', '6 Rouge', '7 Rouge', '8 Rouge', '9 Rouge','bloquer Rouge','bloquer Rouge',
'inverser Rouge','inverser Rouge','+2 Rouge','+2 Rouge', '0 Vert', '1 Vert', '2 Vert', '3 Vert', '4 Vert', '5 Vert', '6 Vert', '7 Vert', '8 Vert', '9 Vert', '1 Vert', '2 Vert',
'3 Vert', '4 Vert', '5 Vert', '6 Vert', '7 Vert', '8 Vert', '9 Vert','bloquer Vert','bloquer Vert','inverser Vert','inverser Vert','+2 Vert','+2 Vert','Joker Jaune', 'Joker Bleu',
'Joker Rouge', 'Joker Vert', 'Super Joker', 'Super Joker', 'Super Joker', 'Super Joker'];

let deckJoueur1 = []; // distribution des cartes du joueur 1 dans ce tableau
let deckJoueur2 = []; // distribution des cartes du joueur 2 dans ce tableau
let deckPioche = []; // cartes présentes dans la pioche
let deckTalon = []; // cartes présentes dans le talon (cartes posées)
//stockage des cartes 


// phase 2, distribution des cartes 
let nbrCartesPioche = deckComplet.length //cartesNormalesBleue.length+cartesNormalesJaune.length+cartesNormalesRouge.length+cartesNormalesVert.length+cartesSpeciales.length; //définie le nombre de cartes restantes dans la pioche
let nbrCartesJ1 = deckJoueur1 //définie le nombre de cartes restantes dans la pioche du joueur 1 en fonction du nombre d'éléments présents dans le tableau
let nbrCartesJ2 = deckJoueur2; //définie le nombre de cartes restantes dans la pioche du joueur 2 en fonction du nombre d'éléments présents dans le tableau
let boutonJouerJoueur1 = document.getElementById("boutonJouerJoueur1"); // set le bouton en variable
let boutonJouerJoueur2 = document.getElementById("boutonJouerJoueur2"); // set le bouton en variable
// let boutonTEST = document.getElementById("boutonJouerJoueur1"); // set le bouton en variable
document.getElementById("nbrCartesPioche").innerHTML = nbrCartesPioche; //affiche le nombre de cartes dans la pioche sur le document html
document.getElementById("nbrCartesJ1").innerHTML = nbrCartesJ1; //affiche le nombre de cartes dans la pioche du joueur 1 sur le document html
document.getElementById("nbrCartesJ2").innerHTML = nbrCartesJ2; //affiche le nombre (si paramètre .length est entré)de cartes dans la pioche du joueur 2 sur le document html
document.getElementById("carteTalon").innerHTML = deckTalon; // affiche la carte dans le talon


   
    boutonDistrib.onclick = function disribution() { // fonction à exécuter au clique sur le bouton distribuer
    
    let selectionRandomJ1 = deckComplet.splice(Math.floor(Math.random()*deckComplet.length), 1); 
    let selectionRandomJ2 = deckComplet.splice(Math.floor(Math.random()*deckComplet.length), 1);   
    /* cette variable permet de selectionner aléatoirement un élément dans le tableau1, le premier paramètre
    (Math.floor(Math.random()*tableau1.length) permet de séléctionner aléatoirement l'index choisi en fonction de la taille du tableau
     (si le tableau a 5 éléments, il définie une valeur aléatoire
    entre 0 et 5 et se positionne sur un index, le deuxième paramètre indique combien de valeurs sont supprimées, ici 7 correspondant au nombre de cartes par joueur distribuées 
    au début d'une partie */   
              deckJoueur2.push(selectionRandomJ1) // prend la valeur séléctionée aléatoirement par itemRandom et l'insère dans le tableau
              deckJoueur1.push(selectionRandomJ2) // prend la valeur séléctionée aléatoirement par itemRandom et l'insère dans le tableau 
              document.getElementById("nbrCartesPioche").innerHTML = deckComplet.length; //affichage des nouvelles données
              document.getElementById("nbrCartesJ1").innerHTML = deckJoueur1;
              document.getElementById("nbrCartesJ2").innerHTML = deckJoueur2;
            
              if (deckJoueur1.length === 7) {
            
               document.getElementById("boutonDistrib").style.visibility = "hidden";
                return false
              }
              
    }
    
    

    boutonJouerJoueur1.onclick = function testJouer(){

      let jouerLaCarte = deckJoueur1.splice(0, 1); 
      deckTalon.push(jouerLaCarte);
      document.getElementById("carteTalon").innerHTML = deckTalon;
      document.getElementById("nbrCartesJ1").innerHTML = deckJoueur1;
      document.getElementById("nbrCartesJ2").innerHTML = deckJoueur2;
      console.log('ok')
    }
    
    boutonJouerJoueur2.onclick = function testJouer(){

        let jouerLaCarte = deckJoueur2.splice(0, 1); 
        deckTalon.push(jouerLaCarte);
        document.getElementById("carteTalon").innerHTML = deckTalon;
        document.getElementById("nbrCartesJ1").innerHTML = deckJoueur1;
        document.getElementById("nbrCartesJ2").innerHTML = deckJoueur2;
        console.log('ok')
      }
      



    /* function test() {

    if (deckJoueur1.length === 7) {
        console.log('aa') /*
     //  deckJoueur2.push(selectionRandom) // prend la valeur séléctionée aléatoirement par itemRandom et l'insère dans le tableau2 


      // document.getElementById("nbrCartesPioche").innerHTML = deckComplet.length; //affichage des nouvelles données
      // document.getElementById("nbrCartesJ2").innerHTML = deckJoueur1.length;
  }
}    

     
   

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


