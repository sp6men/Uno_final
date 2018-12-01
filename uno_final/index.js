// phase 1 , renseigner le nom des joueurs et les afficher 
let nomJoueur1 = prompt("Joueur numéro 1, entrez votre nom !"); // Demande le nom au joueur 1
let nomJoueur2 = prompt("Joueur numéro 2, entrez votre nom !"); // Demande le nom au joueur 2
let phraseBienvenue = "Bievenue à tous, cette partie oppose"+ " " + nomJoueur1 + " " + "à" + " " + nomJoueur2 + " " + "! Tous les coups sont permis !"; // Variable contenant la phrase de bienvenue
alert(phraseBienvenue); // Affiche la phrase de bienvenue 
document.getElementById("nomJoueur1").innerHTML = nomJoueur1; // Insère le nom du joueur 1 dans le document html 
document.getElementById("nomJoueur2").innerHTML = nomJoueur2; // Insère le nom du joueur 2 dans le document html 
// phase 1 , renseigner le nom des joueurs et les afficher 


//stockage des tableaux de cartes 
let TABLEAUDISTRIB = ["0 jaune", "1 jaune", "2 jaune", "3 jaune", "4 jaune", "5 jaune", "6 jaune", "7 jaune", "8 jaune", "9 jaune", "1 jaune", "2 jaune", "3 jaune", 
"4 jaune", "5 jaune", "6 jaune", "7 jaune", "8 jaune", "9 jaune","bloquer jaune","bloquer jaune","inverser jaune","inverser jaune","+2 jaune","+2 jaune", "0 bleu",
"1 bleu", "2 bleu", "3 bleu", "4 bleu", "5 bleu", "6 bleu", "7 bleu", "8 bleu", "9 bleu", "1 bleu", "2 bleu", "3 bleu", "4 bleu", "5 bleu", "6 bleu", "7 bleu", "8 bleu",
"9 bleu","bloquer bleu","bloquer bleu","inverser bleu","inverser bleu","+2 bleu","+2 bleu", "0 rouge", "1 rouge", "2 rouge", "3 rouge", "4 rouge", "5 rouge", "6 rouge",
"7 rouge", "8 rouge", "9 rouge", "1 rouge", "2 rouge", "3 rouge", "4 rouge", "5 rouge", "6 rouge", "7 rouge", "8 rouge", "9 rouge","bloquer rouge","bloquer rouge",
"inverser rouge","inverser rouge","+2 rouge","+2 rouge", "0 vert", "1 vert", "2 vert", "3 vert", "4 vert", "5 vert", "6 vert", "7 vert", "8 vert", "9 vert", "1 vert", "2 vert",
"3 vert", "4 vert", "5 vert", "6 vert", "7 vert", "8 vert", "9 vert","bloquer vert","bloquer vert","inverser vert","inverser vert","+2 vert","+2 vert","joker jaune", "joker bleu",
"joker rouge", "joker vert", "super joker", "super joker", "super joker", "super joker"];




    let LETALON = []; // Tableau contenant les cartes du Talon (cartes actives)
     
     let CARTE1J1 = [] // Les 7 premières cartes de chaque joueur sont stockées dans un tableau chacun et clickables avec un bouton
     let CARTE2J1 = []
     let CARTE3J1 = []
     let CARTE4J1 = []
     let CARTE5J1 = []
     let CARTE6J1 = []
     let CARTE7J1 = []
     
     let CARTE1J2 = []
     let CARTE2J2 = []
     let CARTE3J2 = []
     let CARTE4J2 = []
     let CARTE5J2 = []
     let CARTE6J2 = []
     let CARTE7J2 = []
     
     let testTABLEAU = []; //  Chaque joueur a un testTABLEAU, lors du clique sur une carte, elle se stocke dans un testTABLEAU 
     let testTABLEAU2 = []; // Ensuite il y a une comparaison entre testTABLEAU1 & testTABLEAU2 pour savoir si la carte cliquée a le droit d'être posée
     let testTABLEAU3 = []; // Ensuite elle se stocke dans le testTABLEAU3, pour l'afficher dans le talon

        LETALON = testTABLEAU3;





          
/*------------ */
/* les boutons */
let DISTRIBUTION = document.getElementById("DISTRIBUTION");
let JOUERJ1 = document.getElementById("JOUERJ1");
let JOUERJ2 = document.getElementById("JOUERJ2");
let BOUTONCARTE1J1 = document.getElementById("BOUTONCARTE1J1"); 
let BOUTONCARTE2J1 = document.getElementById("BOUTONCARTE2J1"); 
let BOUTONCARTE3J1 = document.getElementById("BOUTONCARTE3J1");
let BOUTONCARTE4J1 = document.getElementById("BOUTONCARTE4J1");
let BOUTONCARTE5J1 = document.getElementById("BOUTONCARTE5J1");
let BOUTONCARTE6J1 = document.getElementById("BOUTONCARTE6J1");
let BOUTONCARTE7J1 = document.getElementById("BOUTONCARTE7J1");

let BOUTONCARTE1J2 = document.getElementById("BOUTONCARTE1J2"); 
let BOUTONCARTE2J2 = document.getElementById("BOUTONCARTE2J2"); 
let BOUTONCARTE3J2 = document.getElementById("BOUTONCARTE3J2"); 
let BOUTONCARTE4J2 = document.getElementById("BOUTONCARTE4J2"); 
let BOUTONCARTE5J2 = document.getElementById("BOUTONCARTE5J2"); 
let BOUTONCARTE6J2 = document.getElementById("BOUTONCARTE6J2"); 
let BOUTONCARTE7J2 = document.getElementById("BOUTONCARTE7J2"); 

// On set l'emplacement des cartes

/* --------- */

document.getElementById("NBRCARTESPIOCHE").innerHTML = TABLEAUDISTRIB.length; //inquide le nombre de cartes restantes dans la pioche
// document.getElementById("LETALON").innerHTML = LETALON; // indique la carte présente dans le talon



BOUTONCARTE1J1.value = CARTE1J1;
BOUTONCARTE2J1.value = CARTE2J1;
BOUTONCARTE3J1.value = CARTE3J1;
BOUTONCARTE4J1.value = CARTE4J1;
BOUTONCARTE5J1.value = CARTE5J1;
BOUTONCARTE6J1.value = CARTE6J1;
BOUTONCARTE7J1.value = CARTE7J1;

BOUTONCARTE1J2.value = CARTE1J2;
BOUTONCARTE2J2.value = CARTE2J2;
BOUTONCARTE3J2.value = CARTE3J2;
BOUTONCARTE4J2.value = CARTE4J2;
BOUTONCARTE5J2.value = CARTE5J2;
BOUTONCARTE6J2.value = CARTE6J2;
BOUTONCARTE7J2.value = CARTE7J2;

// permet d'afficher la valeur des cartes

/** fonction principale */
 

      
DISTRIBUTION.onclick = function FONCTIONDISTRIB() {
      
     
//     LETALON = [testTABLEAU + testTABLEAU2]
 /*    document.getElementById("TALONJ1").innerHTML = testTABLEAU;
     document.getElementById("TALONJ2").innerHTML = testTABLEAU2;*/
     document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
   
    
     let selectionRandomCARTE1J1 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
     let selectionRandomCARTE1J2 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
     let selectionRandomCARTE1J3 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
     let selectionRandomCARTE1J4 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
     let selectionRandomCARTE1J5 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
     let selectionRandomCARTE1J6 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
     let selectionRandomCARTE1J7 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
     let selectionRandomCARTE2J1 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1);
     let selectionRandomCARTE2J2 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
     let selectionRandomCARTE2J3 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
     let selectionRandomCARTE2J4 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
     let selectionRandomCARTE2J5 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
     let selectionRandomCARTE2J6 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
     let selectionRandomCARTE2J7 = TABLEAUDISTRIB.splice(Math.floor(Math.random()*TABLEAUDISTRIB.length), 1); 
    //récupère une carte de la pioche dans un index random 
      CARTE1J1.push(selectionRandomCARTE1J1);
      CARTE2J1.push(selectionRandomCARTE1J2);
      CARTE3J1.push(selectionRandomCARTE1J3);
      CARTE4J1.push(selectionRandomCARTE1J4);
      CARTE5J1.push(selectionRandomCARTE1J5);
      CARTE6J1.push(selectionRandomCARTE1J6);
      CARTE7J1.push(selectionRandomCARTE1J7);
    
      CARTE1J2.push(selectionRandomCARTE2J1);
      CARTE2J2.push(selectionRandomCARTE2J2);
      CARTE3J2.push(selectionRandomCARTE2J3);
      CARTE4J2.push(selectionRandomCARTE2J4);
      CARTE5J2.push(selectionRandomCARTE2J5);
      CARTE6J2.push(selectionRandomCARTE2J6);
      CARTE7J2.push(selectionRandomCARTE2J7);
      // push des cartes séléctionées aléatoirement 
        document.getElementById("NBRCARTESPIOCHE").innerHTML = TABLEAUDISTRIB.length; // affiche le nombre de cartes restantes dans la pioche 
       // document.getElementById("LETALON").innerHTML = LETALON;
   
        BOUTONCARTE1J1.value = CARTE1J1;
        BOUTONCARTE2J1.value = CARTE2J1;
        BOUTONCARTE3J1.value = CARTE3J1;
        BOUTONCARTE4J1.value = CARTE4J1;
        BOUTONCARTE5J1.value = CARTE5J1;
        BOUTONCARTE6J1.value = CARTE6J1;
        BOUTONCARTE7J1.value = CARTE7J1;
    
        BOUTONCARTE1J2.value = CARTE1J2;
        BOUTONCARTE2J2.value = CARTE2J2;
        BOUTONCARTE3J2.value = CARTE3J2;
        BOUTONCARTE4J2.value = CARTE4J2;
        BOUTONCARTE5J2.value = CARTE5J2;
        BOUTONCARTE6J2.value = CARTE6J2;
        BOUTONCARTE7J2.value = CARTE7J2;
// actualise les valeurs 
         if (TABLEAUDISTRIB.length === 94) {
            
               document.getElementById("DISTRIBUTION").style.visibility = "hidden";
                
              } else {
                  
              }
              // fait disparaître le bouton de distribution quand la distribution est effectuée
    
}
    
    
      /*  
     JOUERJ1.onclick = function JouerJ() {
        console.log("okokokok")
          
            
 BOUTONCARTE1J1.onclick = function RESTRICTIONS(){     
             let a = CARTE1J1.splice(0,1)
             testTABLEAU.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE1J1.value = CARTE1J1;
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE1J1.value = CARTE1J1;
        } 
      
    }
   
 
 
 BOUTONCARTE2J1.onclick = function RESTRICTIONS(){     
             let a = CARTE2J1.splice(0,1)
             testTABLEAU.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE2J1.value = CARTE2J1;
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE2J1.value = CARTE2J1;
        } 
      
    }
 
  
 BOUTONCARTE3J1.onclick = function RESTRICTIONS(){     
             let a = CARTE3J1.splice(0,1)
             testTABLEAU.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE3J1.value = CARTE3J1;
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE3J1.value = CARTE3J1;
        } 
      
    }
 
  BOUTONCARTE4J1.onclick = function RESTRICTIONS(){     
             let a = CARTE4J1.splice(0,1)
             testTABLEAU.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE4J1.value = CARTE4J1;
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE4J1.value = CARTE4J1;
        } 
      
    }
  
   BOUTONCARTE5J1.onclick = function RESTRICTIONS(){     
             let a = CARTE5J1.splice(0,1)
             testTABLEAU.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE5J1.value = CARTE5J1;
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE5J1.value = CARTE5J1;
        } 
      
    }
   BOUTONCARTE6J1.onclick = function RESTRICTIONS(){     
             let a = CARTE6J1.splice(0,1)
             testTABLEAU.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE6J1.value = CARTE6J1;
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE6J1.value = CARTE6J1;
        } 
      
    }
   
    BOUTONCARTE7J1.onclick = function RESTRICTIONS(){     
             let a = CARTE7J1.splice(0,1)
             testTABLEAU.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE7J1.value = CARTE7J1;
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE7J1.value = CARTE7J1;
        } 
      
    }
 
}
     

    
    
    
    
    
   JOUERJ2.onclick = function JouerJ2() {
        console.log("okokokok")
          
            
 BOUTONCARTE1J2.onclick = function RESTRICTIONS(){     
             let a = CARTE1J2.splice(0,1)
             testTABLEAU2.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE1J2.value = CARTE1J2;
            console.log("passe")    
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE1J2.value = CARTE1J2;
        } 
      
    }
   
 
 
 BOUTONCARTE2J2.onclick = function RESTRICTIONS(){     
             let a = CARTE2J2.splice(0,1)
             testTABLEAU2.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE2J2.value = CARTE2J2;
            console.log("passe")
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE2J2.value = CARTE2J2;
        } 
      
    }
 
 
 
 BOUTONCARTE3J2.onclick = function RESTRICTIONS(){     
             let a = CARTE3J2.splice(0,1)
             testTABLEAU2.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE3J2.value = CARTE3J2;
            console.log("passe")
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE3J2.value = CARTE3J2;
        } 
      
    }
 
 BOUTONCARTE4J2.onclick = function RESTRICTIONS(){     
             let a = CARTE4J2.splice(0,1)
             testTABLEAU2.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE4J2.value = CARTE4J2;
            console.log("passe")
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE4J2.value = CARTE4J2;
        } 
      
    }

 
 BOUTONCARTE5J2.onclick = function RESTRICTIONS(){     
             let a = CARTE5J2.splice(0,1)
             testTABLEAU2.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE5J2.value = CARTE5J2;
            console.log("passe")
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE5J2.value = CARTE5J2;
        } 
      
    }
 
 
 BOUTONCARTE6J2.onclick = function RESTRICTIONS(){     
             let a = CARTE6J2.splice(0,1)
             testTABLEAU2.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE6J2.value = CARTE6J2;
            console.log("passe")
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE6J2.value = CARTE6J2;
        } 
      
    }
 
 
 
 BOUTONCARTE7J2.onclick = function RESTRICTIONS(){     
             let a = CARTE7J2.splice(0,1)
             testTABLEAU2.push(a)
            console.log("transferé")
        if (testTABLEAU3.length == 0){
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE7J2.value = CARTE7J2;
            console.log("passe")
             
            }    
       else if (possibilites){ 
             console.log("okdak")
          
             testTABLEAU3.push(testTABLEAU2)
             document.getElementById("TABLEAU3").innerHTML = testTABLEAU3;
             BOUTONCARTE7J2.value = CARTE7J2;
        } 
      
    }
 
 }
     */
    
 