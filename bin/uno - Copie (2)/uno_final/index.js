// phase 1 , renseigner le nom des joueurs et les afficher 
let nomJoueur1 = prompt("Joueur numéro 1, entrez votre nom !"); // Demande le nom au joueur 1
let nomJoueur2 = prompt("Joueur numéro 2, entrez votre nom !"); // Demande le nom au joueur 2
let phraseBienvenue = "Bievenue à tous, cette partie oppose"+ " " + nomJoueur1 + " " + "à" + " " + nomJoueur2 + " " + "! Tous les coups sont permis !"; // Variable contenant la phrase de bienvenue
alert(phraseBienvenue); // Affiche la phrase de bienvenue 
document.getElementById("nomJoueur1").innerHTML = nomJoueur1; // Insère le nom du joueur 1 dans le document html 
document.getElementById("nomJoueur2").innerHTML = nomJoueur2; // Insère le nom du joueur 2 dans le document html 
// phase 1 , renseigner le nom des joueurs et les afficher 


//stockage des tableaux de cartes 
let TABLEAUDISTRIB = ['0 Jaune', '1 Jaune', '2 Jaune', '3 Jaune', '4 Jaune', '5 Jaune', '6 Jaune', '7 Jaune', '8 Jaune', '9 Jaune', '1 Jaune', '2 Jaune', '3 Jaune', 
'4 Jaune', '5 Jaune', '6 Jaune', '7 Jaune', '8 Jaune', '9 Jaune','bloquer Jaune','bloquer Jaune','inverser Jaune','inverser Jaune','+2 Jaune','+2 Jaune', '0 Bleu',
'1 Bleu', '2 Bleu', '3 Bleu', '4 Bleu', '5 Bleu', '6 Bleu', '7 Bleu', '8 Bleu', '9 Bleu', '1 Bleu', '2 Bleu', '3 Bleu', '4 Bleu', '5 Bleu', '6 Bleu', '7 Bleu', '8 Bleu',
'9 Bleu','bloquer Bleu','bloquer Bleu','inverser Bleu','inverser Bleu','+2 Bleu','+2 Bleu', '0 Rouge', '1 Rouge', '2 Rouge', '3 Rouge', '4 Rouge', '5 Rouge', '6 Rouge',
'7 Rouge', '8 Rouge', '9 Rouge', '1 Rouge', '2 Rouge', '3 Rouge', '4 Rouge', '5 Rouge', '6 Rouge', '7 Rouge', '8 Rouge', '9 Rouge','bloquer Rouge','bloquer Rouge',
'inverser Rouge','inverser Rouge','+2 Rouge','+2 Rouge', '0 Vert', '1 Vert', '2 Vert', '3 Vert', '4 Vert', '5 Vert', '6 Vert', '7 Vert', '8 Vert', '9 Vert', '1 Vert', '2 Vert',
'3 Vert', '4 Vert', '5 Vert', '6 Vert', '7 Vert', '8 Vert', '9 Vert','bloquer Vert','bloquer Vert','inverser Vert','inverser Vert','+2 Vert','+2 Vert','Joker Jaune', 'Joker Bleu',
'Joker Rouge', 'Joker Vert', 'Super Joker', 'Super Joker', 'Super Joker', 'Super Joker'];
    let LETALON = [];
    let J1CARTES = [];
    let J2CARTES = []; 
    
   

     let CARTE1J1 = []
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

/* --------- */

document.getElementById("NBRCARTESPIOCHE").innerHTML = TABLEAUDISTRIB.length; //inquide le nombre de cartes restantes dans la pioche
document.getElementById("LETALON").innerHTML = LETALON;



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

/** fonction principale */

      
DISTRIBUTION.onclick = function FONCTIONDISTRIB() {
    
    
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
      
        document.getElementById("NBRCARTESPIOCHE").innerHTML = TABLEAUDISTRIB.length;
        document.getElementById("LETALON").innerHTML = LETALON;
   
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

           JOUERJ1.onclick = function jouerJOUEUR1Carte() {
              /*  if (LETALON.length = 0) {
                    console.log("abababababa")
                } else {
                    
                }*/
            console.log("salut");
               
        BOUTONCARTE1J1.onclick = function JOUERUNECARTE(){
            if (LETALON.length <=0){
                 let JeuCarte = CARTE1J1.splice(0,1);
                 LETALON.push(JeuCarte);
                 document.getElementById("LETALON").innerHTML = LETALON;
                 BOUTONCARTE1J1.value = CARTE1J1;
                console.log("TU AS JOUE");
            } else {
                
            }
           
                 
         console.log("aaa");
         
           
     }
            

    
        BOUTONCARTE2J1.onclick = function JOUERUNECARTE(){
            let JeuCarte = CARTE2J1.splice(0,1);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE2J1.value = CARTE2J1;
            
        console.log("aa");
    }
      
        BOUTONCARTE3J1.onclick = function JOUERUNECARTE(){
            let JeuCarte = CARTE3J1.splice(0,1);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE3J1.value = CARTE3J1;
        console.log("aa");
    }
        BOUTONCARTE4J1.onclick = function JOUERUNECARTE(){
            let JeuCarte = CARTE4J1.splice(0,1);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE4J1.value = CARTE4J1;
        console.log("aa");
    }
        BOUTONCARTE5J1.onclick = function JOUERUNECARTE(){
            let JeuCarte = CARTE5J1.splice(0,1);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE5J1.value = CARTE5J1;
        console.log("aa");
    }
        BOUTONCARTE6J1.onclick = function JOUERUNECARTE(){
            let JeuCarte = CARTE6J1.splice(0,1);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE6J1.value = CARTE6J1;
        console.log("aa");
    }
        BOUTONCARTE7J1.onclick = function JOUERUNECARTE(){
            let JeuCarte = CARTE7J1.splice(0,1);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE7J1.value = CARTE7J1;
        console.log("aa");
    }
        
        
        
 }        
        
     JOUERJ2.onclick = function jouerJOUEUR1Carte(){
         
            console.log("cava")
           
         BOUTONCARTE1J2.onclick = function JOUERUNECARTE(){
             let JeuCarte = CARTE1J2.splice(0,1);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE1J2.value = CARTE1J2;
        console.log("aa");
    }
     
         BOUTONCARTE2J2.onclick = function JOUERUNECARTE(){
             let JeuCarte = CARTE2J2.splice(0,1);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE2J2.value = CARTE2J2;
        console.log("aa");
    }
     
         BOUTONCARTE3J2.onclick = function JOUERUNECARTE(){
             let JeuCarte = CARTE3J2.splice(0,1);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE3J2.value = CARTE3J2;
        console.log("aa");
    }
         BOUTONCARTE4J2.onclick = function JOUERUNECARTE(){
             let JeuCarte = CARTE4J2.splice(0,1);
            LETALON.push(JeuCarte);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE4J2.value = CARTE4J2;
        console.log("aa");
    }
         BOUTONCARTE5J2.onclick = function JOUERUNECARTE(){
             let JeuCarte = CARTE5J2.splice(0,1);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE5J2.value = CARTE5J2;
        console.log("aa");
    }
         BOUTONCARTE6J2.onclick = function JOUERUNECARTE(){
             let JeuCarte = CARTE6J2.splice(0,1);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE6J2.value = CARTE6J2;
        console.log("aa");
    }
         BOUTONCARTE7J2.onclick = function JOUERUNECARTE(){
             let JeuCarte = CARTE7J2.splice(0,1);
            LETALON.push(JeuCarte);
            document.getElementById("LETALON").innerHTML = LETALON;
            BOUTONCARTE7J2.value = CARTE7J2;
        console.log("aa");
    }
         
     }    
            
          
         if (TABLEAUDISTRIB.length === 94) {
            
               document.getElementById("DISTRIBUTION").style.visibility = "hidden";
                
              } else {
                  
              }
     
       
}


          
              


//je veux transferer les valeurs du tableau et tableau2 dans le tableau3 si 1 jaune est égal à 2 jaune

let BOUTONTABLEAUU1 = document.getElementById("testTABLEAU"); 
let BOUTONTABLEAUU2 = document.getElementById("testTABLEAU2"); 
let BOUTONTABLEAUU3 = document.getElementById("testTABLEAU3"); 
let TRANSFERER = document.getElementById("transfert11"); 

let testTABLEAU = ['9 rouge'];
let testTABLEAU2 = ['9 vert'];
let testTABLEAU3 = [];



BOUTONTABLEAUU1.value = testTABLEAU;
BOUTONTABLEAUU2.value = testTABLEAU2;
BOUTONTABLEAUU3.value = testTABLEAU3;

TRANSFERER.onclick = function testransfert() {
    if(testTABLEAU == '0 jaune' && testTABLEAU2 == '0 jaune'
    || testTABLEAU == '0 jaune' && testTABLEAU2 == '1 jaune'
    || testTABLEAU == '0 jaune' && testTABLEAU2 == '2 jaune' || testTABLEAU == '0 jaune' && testTABLEAU2 == '3 jaune' || testTABLEAU == '0 jaune' && testTABLEAU2 == '4 jaune' || testTABLEAU == '0 jaune' && testTABLEAU2 == '5 jaune' || testTABLEAU == '0 jaune' && testTABLEAU2 == '6 jaune' || testTABLEAU == '0 jaune' && testTABLEAU2 == '7 jaune' || testTABLEAU == '0 jaune' && testTABLEAU2 == '8 jaune'
    || testTABLEAU == '0 jaune' && testTABLEAU2 == '9 jaune'   
    || testTABLEAU == '0 jaune' && testTABLEAU2 == 'bloquer jaune' || testTABLEAU == '0 jaune' && testTABLEAU2 == 'inverser jaune' || testTABLEAU == '0 jaune' && testTABLEAU2 == 'bloquer jaune'|| testTABLEAU == '0 jaune' && testTABLEAU2 == '+2 jaune') {
        console.log("okok");
        return;
    } else if(testTABLEAU == '1 jaune' && testTABLEAU2 == '0 jaune' ||  testTABLEAU == '1 jaune' && testTABLEAU2 == '1 jaune' || testTABLEAU == '1 jaune' && testTABLEAU2 == '2 jaune' || testTABLEAU == '1 jaune' && testTABLEAU2 == '3 jaune' || testTABLEAU == '1 jaune' && testTABLEAU2 == '4 jaune' || testTABLEAU == '1 jaune' && testTABLEAU2 == '5 jaune' || testTABLEAU == '1 jaune' && testTABLEAU2 == '6 jaune' || testTABLEAU == '1 jaune' && testTABLEAU2 == '7 jaune' || testTABLEAU == '1 jaune' && testTABLEAU2 == '8 jaune' || testTABLEAU == '1 jaune' && testTABLEAU2 == '9 jaune' || testTABLEAU == '1 jaune' && testTABLEAU2 == 'bloquer jaune' || testTABLEAU == '1 jaune' && testTABLEAU2 == 'inverser jaune' || testTABLEAU == '1 jaune' && testTABLEAU2 == '+2 jaune'){
        console.log("okok");
    } else if (testTABLEAU == '2 jaune' && testTABLEAU2 == '0 jaune' || testTABLEAU == '2 jaune' && testTABLEAU2 == '1 jaune' || testTABLEAU == '2 jaune' && testTABLEAU2 == '2 jaune' || testTABLEAU == '2 jaune' && testTABLEAU2 == '3 jaune' || testTABLEAU == '2 jaune' && testTABLEAU2 == '4 jaune' || testTABLEAU == '2 jaune' && testTABLEAU2 == '5 jaune' || testTABLEAU == '2 jaune' && testTABLEAU2 == '6 jaune' || testTABLEAU == '2 jaune' && testTABLEAU2 == '7 jaune' || testTABLEAU == '2 jaune' && testTABLEAU2 == '8 jaune' || testTABLEAU == '2 jaune' && testTABLEAU2 == '9 jaune' || testTABLEAU == '2 jaune' && testTABLEAU2 == 'bloquer jaune' || testTABLEAU == '2 jaune' && testTABLEAU2 == 'inverser jaune' || testTABLEAU == '2 jaune' && testTABLEAU2 == '+2 jaune') {
        console.log(okok);
    } else if (testTABLEAU == '3 jaune' && testTABLEAU2 == '0 jaune' || testTABLEAU == '3 jaune' && testTABLEAU2 == '1 jaune' || testTABLEAU == '3 jaune' && testTABLEAU2 == '2 jaune' || testTABLEAU == '3 jaune' && testTABLEAU2 == '3 jaune' || testTABLEAU == '3 jaune' && testTABLEAU2 == '4 jaune' || testTABLEAU == '3 jaune' && testTABLEAU2 == '5 jaune' || testTABLEAU == '3 jaune' && testTABLEAU2 == '6 jaune' || testTABLEAU == '3 jaune' && testTABLEAU2 == '7 jaune' || testTABLEAU == '3 jaune' && testTABLEAU2 == '8 jaune' || testTABLEAU == '3 jaune' && testTABLEAU2 == '9 jaune' || testTABLEAU == '3 jaune' && testTABLEAU2 == 'inverser jaune' || testTABLEAU == '3 jaune' && testTABLEAU2 == 'bloquer jaune'|| testTABLEAU == '3 jaune' && testTABLEAU2 == '+2 jaune') {
        console.log(okok);
    } else if (testTABLEAU == '4 jaune' && testTABLEAU2 == '0 jaune' || testTABLEAU == '4 jaune' && testTABLEAU2 == '1 jaune' || testTABLEAU == '4 jaune' && testTABLEAU2 == '2 jaune' || testTABLEAU == '4 jaune' && testTABLEAU2 == '3 jaune' || testTABLEAU == '4 jaune' && testTABLEAU2 == '4 jaune' || testTABLEAU == '4 jaune' && testTABLEAU2 == '5 jaune' || testTABLEAU == '4 jaune' && testTABLEAU2 == '6 jaune' || testTABLEAU == '4 jaune' && testTABLEAU2 == '7 jaune' || testTABLEAU == '4 jaune' && testTABLEAU2 == '8 jaune' || testTABLEAU == '4 jaune' && testTABLEAU2 == '9 jaune' || testTABLEAU == '4 jaune' && testTABLEAU2 == 'inverser jaune' || testTABLEAU == '4 jaune' && testTABLEAU2 == 'bloquer jaune'|| testTABLEAU == '4 jaune' && testTABLEAU2 == '+2 jaune') {
        console.log(okok);
    } else if (testTABLEAU == '5 jaune' && testTABLEAU2 == '0 jaune' || testTABLEAU == '5 jaune' && testTABLEAU2 == '1 jaune' || testTABLEAU == '5 jaune' && testTABLEAU2 == '2 jaune' || testTABLEAU == '5 jaune' && testTABLEAU2 == '3 jaune' || testTABLEAU == '5 jaune' && testTABLEAU2 == '4 jaune' || testTABLEAU == '5 jaune' && testTABLEAU2 == '5 jaune' || testTABLEAU == '5 jaune' && testTABLEAU2 == '6 jaune' || testTABLEAU == '5 jaune' && testTABLEAU2 == '7 jaune' || testTABLEAU == '5 jaune' && testTABLEAU2 == '8 jaune' || testTABLEAU == '5 jaune' && testTABLEAU2 == '9 jaune' || testTABLEAU == '5 jaune' && testTABLEAU2 == 'inverser jaune' || testTABLEAU == '5 jaune' && testTABLEAU2 == 'bloquer jaune'|| testTABLEAU == '5 jaune' && testTABLEAU2 == '+2 jaune') {
        console.log(okok);
    } else if (testTABLEAU == '6 jaune' && testTABLEAU2 == '0 jaune' || testTABLEAU == '6 jaune' && testTABLEAU2 == '1 jaune' || testTABLEAU == '6 jaune' && testTABLEAU2 == '2 jaune' || testTABLEAU == '6 jaune' && testTABLEAU2 == '3 jaune' || testTABLEAU == '6 jaune' && testTABLEAU2 == '4 jaune' || testTABLEAU == '6 jaune' && testTABLEAU2 == '5 jaune' || testTABLEAU == '6 jaune' && testTABLEAU2 == '6 jaune' || testTABLEAU == '6 jaune' && testTABLEAU2 == '7 jaune' || testTABLEAU == '6 jaune' && testTABLEAU2 == '8 jaune' || testTABLEAU == '6 jaune' && testTABLEAU2 == '9 jaune' || testTABLEAU == '6 jaune' && testTABLEAU2 == 'inverser jaune' || testTABLEAU == '6 jaune' && testTABLEAU2 == 'bloquer jaune'|| testTABLEAU == '6 jaune' && testTABLEAU2 == '+2 jaune') {
        console.log(okok);
    } else if (testTABLEAU == '7 jaune' && testTABLEAU2 == '0 jaune' || testTABLEAU == '7 jaune' && testTABLEAU2 == '1 jaune' || testTABLEAU == '7 jaune' && testTABLEAU2 == '2 jaune' || testTABLEAU == '7 jaune' && testTABLEAU2 == '3 jaune' || testTABLEAU == '7 jaune' && testTABLEAU2 == '4 jaune' || testTABLEAU == '7 jaune' && testTABLEAU2 == '5 jaune' || testTABLEAU == '7 jaune' && testTABLEAU2 == '6 jaune' || testTABLEAU == '7 jaune' && testTABLEAU2 == '7 jaune' || testTABLEAU == '7 jaune' && testTABLEAU2 == '8 jaune' || testTABLEAU == '7 jaune' && testTABLEAU2 == '9 jaune' || testTABLEAU == '7 jaune' && testTABLEAU2 == 'inverser jaune' || testTABLEAU == '7 jaune' && testTABLEAU2 == 'bloquer jaune'|| testTABLEAU == '7 jaune' && testTABLEAU2 == '+2 jaune') {
        console.log(okok);
    } else if (testTABLEAU == '8 jaune' && testTABLEAU2 == '0 jaune' || testTABLEAU == '8 jaune' && testTABLEAU2 == '1 jaune' || testTABLEAU == '8 jaune' && testTABLEAU2 == '2 jaune' || testTABLEAU == '8 jaune' && testTABLEAU2 == '3 jaune' || testTABLEAU == '8 jaune' && testTABLEAU2 == '4 jaune' || testTABLEAU == '8 jaune' && testTABLEAU2 == '5 jaune' || testTABLEAU == '8 jaune' && testTABLEAU2 == '6 jaune' || testTABLEAU == '8 jaune' && testTABLEAU2 == '7 jaune' || testTABLEAU == '8 jaune' && testTABLEAU2 == '8 jaune' || testTABLEAU == '8 jaune' && testTABLEAU2 == '9 jaune' || testTABLEAU == '8 jaune' && testTABLEAU2 == 'inverser jaune' || testTABLEAU == '8 jaune' && testTABLEAU2 == 'bloquer jaune'|| testTABLEAU == '8 jaune' && testTABLEAU2 == '+2 jaune') {
        console.log(okok);
    } else if (testTABLEAU == '9 jaune' && testTABLEAU2 == '0 jaune' || testTABLEAU == '9 jaune' && testTABLEAU2 == '1 jaune' || testTABLEAU == '9 jaune' && testTABLEAU2 == '2 jaune' || testTABLEAU == '9 jaune' && testTABLEAU2 == '3 jaune' || testTABLEAU == '9 jaune' && testTABLEAU2 == '4 jaune' || testTABLEAU == '9 jaune' && testTABLEAU2 == '5 jaune' || testTABLEAU == '9 jaune' && testTABLEAU2 == '6 jaune' || testTABLEAU == '9 jaune' && testTABLEAU2 == '7 jaune' || testTABLEAU == '9 jaune' && testTABLEAU2 == '8 jaune' || testTABLEAU == '9 jaune' && testTABLEAU2 == '9 jaune' || testTABLEAU == '9 jaune' && testTABLEAU2 == 'bloquer jaune' || testTABLEAU == '9 jaune' && testTABLEAU2 == 'inverser jaune' || testTABLEAU == '9 jaune' && testTABLEAU2 == '+2 jaune') {
        console.log(okok);
    } else if(testTABLEAU == '0 bleu' && testTABLEAU2 == '0 bleu'
    || testTABLEAU == '0 bleu' && testTABLEAU2 == '1 bleu'
    || testTABLEAU == '0 bleu' && testTABLEAU2 == '2 bleu' || testTABLEAU == '0 bleu' && testTABLEAU2 == '3 bleu' || testTABLEAU == '0 bleu' && testTABLEAU2 == '4 bleu' || testTABLEAU == '0 bleu' && testTABLEAU2 == '5 bleu' || testTABLEAU == '0 bleu' && testTABLEAU2 == '6 bleu' || testTABLEAU == '0 bleu' && testTABLEAU2 == '7 bleu' || testTABLEAU == '0 bleu' && testTABLEAU2 == '8 bleu'
    || testTABLEAU == '0 bleu' && testTABLEAU2 == '9 bleu'   
    || testTABLEAU == '0 bleu' && testTABLEAU2 == 'bloquer bleu' || testTABLEAU == '0 bleu' && testTABLEAU2 == 'inverser bleu' || testTABLEAU == '0 bleu' && testTABLEAU2 == 'bloquer bleu'|| testTABLEAU == '0 bleu' && testTABLEAU2 == '+2 bleu') {
        console.log("okok");
    } else if(testTABLEAU == '1 bleu' && testTABLEAU2 == '0 bleu' || 
    testTABLEAU == '1 bleu' && testTABLEAU2 == '1 bleu' ||          
    testTABLEAU == '1 bleu' && testTABLEAU2 == '2 bleu' || testTABLEAU == '1 bleu' && testTABLEAU2 == '3 bleu' || testTABLEAU == '1 bleu' && testTABLEAU2 == '4 bleu' || testTABLEAU == '1 bleu' && testTABLEAU2 == '5 bleu' || testTABLEAU == '1 bleu' && testTABLEAU2 == '6 bleu' || testTABLEAU == '1 bleu' && testTABLEAU2 == '7 bleu' || testTABLEAU == '1 bleu' && testTABLEAU2 == '8 bleu' || testTABLEAU == '1 bleu' && testTABLEAU2 == '9 bleu' || testTABLEAU == '1 bleu' && testTABLEAU2 == 'bloquer bleu' || testTABLEAU == '1 bleu' && testTABLEAU2 == 'inverser bleu' || testTABLEAU == '1 bleu' && testTABLEAU2 == '+2 bleu'){
        console.log("okok");
    } else if (testTABLEAU == '2 bleu' && testTABLEAU2 == '0 bleu' || testTABLEAU == '2 bleu' && testTABLEAU2 == '1 bleu' || testTABLEAU == '2 bleu' && testTABLEAU2 == '2 bleu' || testTABLEAU == '2 bleu' && testTABLEAU2 == '3 bleu' || testTABLEAU == '2 bleu' && testTABLEAU2 == '4 bleu' || testTABLEAU == '2 bleu' && testTABLEAU2 == '5 bleu' || testTABLEAU == '2 bleu' && testTABLEAU2 == '6 bleu' || testTABLEAU == '2 bleu' && testTABLEAU2 == '7 bleu' || testTABLEAU == '2 bleu' && testTABLEAU2 == '8 bleu' || testTABLEAU == '2 bleu' && testTABLEAU2 == '9 bleu' || testTABLEAU == '2 bleu' && testTABLEAU2 == 'bloquer bleu' || testTABLEAU == '2 bleu' && testTABLEAU2 == 'inverser bleu' || testTABLEAU == '2 bleu' && testTABLEAU2 == '+2 bleu') {
        console.log("okok");
    } else if (testTABLEAU == '3 bleu' && testTABLEAU2 == '0 bleu' || testTABLEAU == '3 bleu' && testTABLEAU2 == '1 bleu' || testTABLEAU == '3 bleu' && testTABLEAU2 == '2 bleu' || testTABLEAU == '3 bleu' && testTABLEAU2 == '3 bleu' || testTABLEAU == '3 bleu' && testTABLEAU2 == '4 bleu' || testTABLEAU == '3 bleu' && testTABLEAU2 == '5 bleu' || testTABLEAU == '3 bleu' && testTABLEAU2 == '6 bleu' || testTABLEAU == '3 bleu' && testTABLEAU2 == '7 bleu' || testTABLEAU == '3 bleu' && testTABLEAU2 == '8 bleu' || testTABLEAU == '3 bleu' && testTABLEAU2 == '9 bleu' || testTABLEAU == '3 bleu' && testTABLEAU2 == 'inverser bleu' || testTABLEAU == '3 bleu' && testTABLEAU2 == 'bloquer bleu'|| testTABLEAU == '3 bleu' && testTABLEAU2 == '+2 bleu') {
        console.log("okok");
    } else if (testTABLEAU == '4 bleu' && testTABLEAU2 == '0 bleu' || testTABLEAU == '4 bleu' && testTABLEAU2 == '1 bleu' || testTABLEAU == '4 bleu' && testTABLEAU2 == '2 bleu' || testTABLEAU == '4 bleu' && testTABLEAU2 == '3 bleu' || testTABLEAU == '4 bleu' && testTABLEAU2 == '4 bleu' || testTABLEAU == '4 bleu' && testTABLEAU2 == '5 bleu' || testTABLEAU == '4 bleu' && testTABLEAU2 == '6 bleu' || testTABLEAU == '4 bleu' && testTABLEAU2 == '7 bleu' || testTABLEAU == '4 bleu' && testTABLEAU2 == '8 bleu' || testTABLEAU == '4 bleu' && testTABLEAU2 == '9 bleu' || testTABLEAU == '4 bleu' && testTABLEAU2 == 'inverser bleu' || testTABLEAU == '4 bleu' && testTABLEAU2 == 'bloquer bleu'|| testTABLEAU == '4 bleu' && testTABLEAU2 == '+2 bleu') {
        console.log("okok");
    } else if (testTABLEAU == '5 bleu' && testTABLEAU2 == '0 bleu' || testTABLEAU == '5 bleu' && testTABLEAU2 == '1 bleu' || testTABLEAU == '5 bleu' && testTABLEAU2 == '2 bleu' || testTABLEAU == '5 bleu' && testTABLEAU2 == '3 bleu' || testTABLEAU == '5 bleu' && testTABLEAU2 == '4 bleu' || testTABLEAU == '5 bleu' && testTABLEAU2 == '5 bleu' || testTABLEAU == '5 bleu' && testTABLEAU2 == '6 bleu' || testTABLEAU == '5 bleu' && testTABLEAU2 == '7 bleu' || testTABLEAU == '5 bleu' && testTABLEAU2 == '8 bleu' || testTABLEAU == '5 bleu' && testTABLEAU2 == '9 bleu' || testTABLEAU == '5 bleu' && testTABLEAU2 == 'inverser bleu' || testTABLEAU == '5 bleu' && testTABLEAU2 == 'bloquer bleu'|| testTABLEAU == '5 bleu' && testTABLEAU2 == '+2 bleu') {
        console.log("okok");
    } else if (testTABLEAU == '6 bleu' && testTABLEAU2 == '0 bleu' || testTABLEAU == '6 bleu' && testTABLEAU2 == '1 bleu' || testTABLEAU == '6 bleu' && testTABLEAU2 == '2 bleu' || testTABLEAU == '6 bleu' && testTABLEAU2 == '3 bleu' || testTABLEAU == '6 bleu' && testTABLEAU2 == '4 bleu' || testTABLEAU == '6 bleu' && testTABLEAU2 == '5 bleu' || testTABLEAU == '6 bleu' && testTABLEAU2 == '6 bleu' || testTABLEAU == '6 bleu' && testTABLEAU2 == '7 bleu' || testTABLEAU == '6 bleu' && testTABLEAU2 == '8 bleu' || testTABLEAU == '6 bleu' && testTABLEAU2 == '9 bleu' || testTABLEAU == '6 bleu' && testTABLEAU2 == 'inverser bleu' || testTABLEAU == '6 bleu' && testTABLEAU2 == 'bloquer bleu'|| testTABLEAU == '6 bleu' && testTABLEAU2 == '+2 bleu') {
        console.log("okok");
    } else if (testTABLEAU == '7 bleu' && testTABLEAU2 == '0 bleu' || testTABLEAU == '7 bleu' && testTABLEAU2 == '1 bleu' || testTABLEAU == '7 bleu' && testTABLEAU2 == '2 bleu' || testTABLEAU == '7 bleu' && testTABLEAU2 == '3 bleu' || testTABLEAU == '7 bleu' && testTABLEAU2 == '4 bleu' || testTABLEAU == '7 bleu' && testTABLEAU2 == '5 bleu' || testTABLEAU == '7 bleu' && testTABLEAU2 == '6 bleu' || testTABLEAU == '7 bleu' && testTABLEAU2 == '7 bleu' || testTABLEAU == '7 bleu' && testTABLEAU2 == '8 bleu' || testTABLEAU == '7 bleu' && testTABLEAU2 == '9 bleu' || testTABLEAU == '7 bleu' && testTABLEAU2 == 'inverser bleu' || testTABLEAU == '7 bleu' && testTABLEAU2 == 'bloquer bleu'|| testTABLEAU == '7 bleu' && testTABLEAU2 == '+2 bleu') {
        console.log("okok");
    } else if (testTABLEAU == '8 bleu' && testTABLEAU2 == '0 bleu' || testTABLEAU == '8 bleu' && testTABLEAU2 == '1 bleu' || testTABLEAU == '8 bleu' && testTABLEAU2 == '2 bleu' || testTABLEAU == '8 bleu' && testTABLEAU2 == '3 bleu' || testTABLEAU == '8 bleu' && testTABLEAU2 == '4 bleu' || testTABLEAU == '8 bleu' && testTABLEAU2 == '5 bleu' || testTABLEAU == '8 bleu' && testTABLEAU2 == '6 bleu' || testTABLEAU == '8 bleu' && testTABLEAU2 == '7 bleu' || testTABLEAU == '8 bleu' && testTABLEAU2 == '8 bleu' || testTABLEAU == '8 bleu' && testTABLEAU2 == '9 bleu' || testTABLEAU == '8 bleu' && testTABLEAU2 == 'inverser bleu' || testTABLEAU == '8 bleu' && testTABLEAU2 == 'bloquer bleu'|| testTABLEAU == '8 bleu' && testTABLEAU2 == '+2 bleu') {
        console.log("okok");
    } else if (testTABLEAU == '9 bleu' && testTABLEAU2 == '0 bleu' || testTABLEAU == '9 bleu' && testTABLEAU2 == '1 bleu' || testTABLEAU == '9 bleu' && testTABLEAU2 == '2 bleu' || testTABLEAU == '9 bleu' && testTABLEAU2 == '3 bleu' || testTABLEAU == '9 bleu' && testTABLEAU2 == '4 bleu' || testTABLEAU == '9 bleu' && testTABLEAU2 == '5 bleu' || testTABLEAU == '9 bleu' && testTABLEAU2 == '6 bleu' || testTABLEAU == '9 bleu' && testTABLEAU2 == '7 bleu' || testTABLEAU == '9 bleu' && testTABLEAU2 == '8 bleu' || testTABLEAU == '9 bleu' && testTABLEAU2 == '9 bleu' || testTABLEAU == '9 bleu' && testTABLEAU2 == 'bloquer bleu' || testTABLEAU == '9 bleu' && testTABLEAU2 == 'inverser bleu' || testTABLEAU == '9 bleu' && testTABLEAU2 == '+2 bleu') {
        console.log("okok");
    } else if(testTABLEAU == '0 rouge' && testTABLEAU2 == '0 rouge'
    || testTABLEAU == '0 rouge' && testTABLEAU2 == '1 rouge'
    || testTABLEAU == '0 rouge' && testTABLEAU2 == '2 rouge' || testTABLEAU == '0 rouge' && testTABLEAU2 == '3 rouge' || testTABLEAU == '0 rouge' && testTABLEAU2 == '4 rouge' || testTABLEAU == '0 rouge' && testTABLEAU2 == '5 rouge' || testTABLEAU == '0 rouge' && testTABLEAU2 == '6 rouge' || testTABLEAU == '0 rouge' && testTABLEAU2 == '7 rouge' || testTABLEAU == '0 rouge' && testTABLEAU2 == '8 rouge'
    || testTABLEAU == '0 rouge' && testTABLEAU2 == '9 rouge'   
    || testTABLEAU == '0 rouge' && testTABLEAU2 == 'bloquer rouge' || testTABLEAU == '0 rouge' && testTABLEAU2 == 'inverser rouge' || testTABLEAU == '0 rouge' && testTABLEAU2 == 'bloquer rouge'|| testTABLEAU == '0 rouge' && testTABLEAU2 == '+2 rouge') {
        console.log("okok");
    } else if(testTABLEAU == '1 rouge' && testTABLEAU2 == '0 rouge' || 
    testTABLEAU == '1 rouge' && testTABLEAU2 == '1 rouge' ||          
    testTABLEAU == '1 rouge' && testTABLEAU2 == '2 rouge' || testTABLEAU == '1 rouge' && testTABLEAU2 == '3 rouge' || testTABLEAU == '1 rouge' && testTABLEAU2 == '4 rouge' || testTABLEAU == '1 rouge' && testTABLEAU2 == '5 rouge' || testTABLEAU == '1 rouge' && testTABLEAU2 == '6 rouge' || testTABLEAU == '1 rouge' && testTABLEAU2 == '7 rouge' || testTABLEAU == '1 rouge' && testTABLEAU2 == '8 rouge' || testTABLEAU == '1 rouge' && testTABLEAU2 == '9 rouge' || testTABLEAU == '1 rouge' && testTABLEAU2 == 'bloquer rouge' || testTABLEAU == '1 rouge' && testTABLEAU2 == 'inverser rouge' || testTABLEAU == '1 rouge' && testTABLEAU2 == '+2 rouge') {
        console.log("okok");
    } else if (testTABLEAU == '2 rouge' && testTABLEAU2 == '0 rouge' || testTABLEAU == '2 rouge' && testTABLEAU2 == '1 rouge' || testTABLEAU == '2 rouge' && testTABLEAU2 == '2 rouge' || testTABLEAU == '2 rouge' && testTABLEAU2 == '3 rouge' || testTABLEAU == '2 rouge' && testTABLEAU2 == '4 rouge' || testTABLEAU == '2 rouge' && testTABLEAU2 == '5 rouge' || testTABLEAU == '2 rouge' && testTABLEAU2 == '6 rouge' || testTABLEAU == '2 rouge' && testTABLEAU2 == '7 rouge' || testTABLEAU == '2 rouge' && testTABLEAU2 == '8 rouge' || testTABLEAU == '2 rouge' && testTABLEAU2 == '9 rouge' || testTABLEAU == '2 rouge' && testTABLEAU2 == 'bloquer rouge' || testTABLEAU == '2 rouge' && testTABLEAU2 == 'inverser rouge' || testTABLEAU == '2 rouge' && testTABLEAU2 == '+2 rouge') {
        console.log("okok");
    } else if (testTABLEAU == '3 rouge' && testTABLEAU2 == '0 rouge' || testTABLEAU == '3 rouge' && testTABLEAU2 == '1 rouge' || testTABLEAU == '3 rouge' && testTABLEAU2 == '2 rouge' || testTABLEAU == '3 rouge' && testTABLEAU2 == '3 rouge' || testTABLEAU == '3 rouge' && testTABLEAU2 == '4 rouge' || testTABLEAU == '3 rouge' && testTABLEAU2 == '5 rouge' || testTABLEAU == '3 rouge' && testTABLEAU2 == '6 rouge' || testTABLEAU == '3 rouge' && testTABLEAU2 == '7 rouge' || testTABLEAU == '3 rouge' && testTABLEAU2 == '8 rouge' || testTABLEAU == '3 rouge' && testTABLEAU2 == '9 rouge' || testTABLEAU == '3 rouge' && testTABLEAU2 == 'inverser rouge' || testTABLEAU == '3 rouge' && testTABLEAU2 == 'bloquer rouge'|| testTABLEAU == '3 rouge' && testTABLEAU2 == '+2 rouge') {
        console.log("okok");
    } else if (testTABLEAU == '4 rouge' && testTABLEAU2 == '0 rouge' || testTABLEAU == '4 rouge' && testTABLEAU2 == '1 rouge' || testTABLEAU == '4 rouge' && testTABLEAU2 == '2 rouge' || testTABLEAU == '4 rouge' && testTABLEAU2 == '3 rouge' || testTABLEAU == '4 rouge' && testTABLEAU2 == '4 rouge' || testTABLEAU == '4 rouge' && testTABLEAU2 == '5 rouge' || testTABLEAU == '4 rouge' && testTABLEAU2 == '6 rouge' || testTABLEAU == '4 rouge' && testTABLEAU2 == '7 rouge' || testTABLEAU == '4 rouge' && testTABLEAU2 == '8 rouge' || testTABLEAU == '4 rouge' && testTABLEAU2 == '9 rouge' || testTABLEAU == '4 rouge' && testTABLEAU2 == 'inverser rouge' || testTABLEAU == '4 rouge' && testTABLEAU2 == 'bloquer rouge'|| testTABLEAU == '4 rouge' && testTABLEAU2 == '+2 rouge') {
        console.log("okok");
    } else if (testTABLEAU == '5 rouge' && testTABLEAU2 == '0 rouge' || testTABLEAU == '5 rouge' && testTABLEAU2 == '1 rouge' || testTABLEAU == '5 rouge' && testTABLEAU2 == '2 rouge' || testTABLEAU == '5 rouge' && testTABLEAU2 == '3 rouge' || testTABLEAU == '5 rouge' && testTABLEAU2 == '4 rouge' || testTABLEAU == '5 rouge' && testTABLEAU2 == '5 rouge' || testTABLEAU == '5 rouge' && testTABLEAU2 == '6 rouge' || testTABLEAU == '5 rouge' && testTABLEAU2 == '7 rouge' || testTABLEAU == '5 rouge' && testTABLEAU2 == '8 rouge' || testTABLEAU == '5 rouge' && testTABLEAU2 == '9 rouge' || testTABLEAU == '5 rouge' && testTABLEAU2 == 'inverser rouge' || testTABLEAU == '5 rouge' && testTABLEAU2 == 'bloquer rouge'|| testTABLEAU == '5 rouge' && testTABLEAU2 == '+2 rouge') {
        console.log("okok");
    } else if (testTABLEAU == '6 rouge' && testTABLEAU2 == '0 rouge' || testTABLEAU == '6 rouge' && testTABLEAU2 == '1 rouge' || testTABLEAU == '6 rouge' && testTABLEAU2 == '2 rouge' || testTABLEAU == '6 rouge' && testTABLEAU2 == '3 rouge' || testTABLEAU == '6 rouge' && testTABLEAU2 == '4 rouge' || testTABLEAU == '6 rouge' && testTABLEAU2 == '5 rouge' || testTABLEAU == '6 rouge' && testTABLEAU2 == '6 rouge' || testTABLEAU == '6 rouge' && testTABLEAU2 == '7 rouge' || testTABLEAU == '6 rouge' && testTABLEAU2 == '8 rouge' || testTABLEAU == '6 rouge' && testTABLEAU2 == '9 rouge' || testTABLEAU == '6 rouge' && testTABLEAU2 == 'inverser rouge' || testTABLEAU == '6 rouge' && testTABLEAU2 == 'bloquer rouge'|| testTABLEAU == '6 rouge' && testTABLEAU2 == '+2 rouge') {
        console.log("okok");
    } else if (testTABLEAU == '7 rouge' && testTABLEAU2 == '0 rouge' || testTABLEAU == '7 rouge' && testTABLEAU2 == '1 rouge' || testTABLEAU == '7 rouge' && testTABLEAU2 == '2 rouge' || testTABLEAU == '7 rouge' && testTABLEAU2 == '3 rouge' || testTABLEAU == '7 rouge' && testTABLEAU2 == '4 rouge' || testTABLEAU == '7 rouge' && testTABLEAU2 == '5 rouge' || testTABLEAU == '7 rouge' && testTABLEAU2 == '6 rouge' || testTABLEAU == '7 rouge' && testTABLEAU2 == '7 rouge' || testTABLEAU == '7 rouge' && testTABLEAU2 == '8 rouge' || testTABLEAU == '7 rouge' && testTABLEAU2 == '9 rouge' || testTABLEAU == '7 rouge' && testTABLEAU2 == 'inverser rouge' || testTABLEAU == '7 rouge' && testTABLEAU2 == 'bloquer rouge'|| testTABLEAU == '7 rouge' && testTABLEAU2 == '+2 rouge') {
        console.log("okok");
    } else if (testTABLEAU == '8 rouge' && testTABLEAU2 == '0 rouge' || testTABLEAU == '8 rouge' && testTABLEAU2 == '1 rouge' || testTABLEAU == '8 rouge' && testTABLEAU2 == '2 rouge' || testTABLEAU == '8 rouge' && testTABLEAU2 == '3 rouge' || testTABLEAU == '8 rouge' && testTABLEAU2 == '4 rouge' || testTABLEAU == '8 rouge' && testTABLEAU2 == '5 rouge' || testTABLEAU == '8 rouge' && testTABLEAU2 == '6 rouge' || testTABLEAU == '8 rouge' && testTABLEAU2 == '7 rouge' || testTABLEAU == '8 rouge' && testTABLEAU2 == '8 rouge' || testTABLEAU == '8 rouge' && testTABLEAU2 == '9 rouge' || testTABLEAU == '8 rouge' && testTABLEAU2 == 'inverser rouge' || testTABLEAU == '8 rouge' && testTABLEAU2 == 'bloquer rouge'|| testTABLEAU == '8 rouge' && testTABLEAU2 == '+2 rouge') {
        console.log("okok");
    } else if (testTABLEAU == '9 rouge' && testTABLEAU2 == '0 rouge' || testTABLEAU == '9 rouge' && testTABLEAU2 == '1 rouge' || testTABLEAU == '9 rouge' && testTABLEAU2 == '2 rouge' || testTABLEAU == '9 rouge' && testTABLEAU2 == '3 rouge' || testTABLEAU == '9 rouge' && testTABLEAU2 == '4 rouge' || testTABLEAU == '9 rouge' && testTABLEAU2 == '5 rouge' || testTABLEAU == '9 rouge' && testTABLEAU2 == '6 rouge' || testTABLEAU == '9 rouge' && testTABLEAU2 == '7 rouge' || testTABLEAU == '9 rouge' && testTABLEAU2 == '8 rouge' || testTABLEAU == '9 rouge' && testTABLEAU2 == '9 rouge' || testTABLEAU == '9 rouge' && testTABLEAU2 == 'bloquer rouge' || testTABLEAU == '9 rouge' && testTABLEAU2 == 'inverser rouge' || testTABLEAU == '9 rouge' && testTABLEAU2 == '+2 rouge') {
        console.log("okok");
    } else if(testTABLEAU == '0 vert' && testTABLEAU2 == '0 vert'
    || testTABLEAU == '0 vert' && testTABLEAU2 == '1 vert'
    || testTABLEAU == '0 vert' && testTABLEAU2 == '2 vert' || testTABLEAU == '0 vert' && testTABLEAU2 == '3 vert' || testTABLEAU == '0 vert' && testTABLEAU2 == '4 vert' || testTABLEAU == '0 vert' && testTABLEAU2 == '5 vert' || testTABLEAU == '0 vert' && testTABLEAU2 == '6 vert' || testTABLEAU == '0 vert' && testTABLEAU2 == '7 vert' || testTABLEAU == '0 vert' && testTABLEAU2 == '8 vert'
    || testTABLEAU == '0 vert' && testTABLEAU2 == '9 vert'   
    || testTABLEAU == '0 vert' && testTABLEAU2 == 'bloquer vert' || testTABLEAU == '0 vert' && testTABLEAU2 == 'inverser vert' || testTABLEAU == '0 vert' && testTABLEAU2 == 'bloquer vert'|| testTABLEAU == '0 vert' && testTABLEAU2 == '+2 vert') {
        console.log("okok");
    } else if(testTABLEAU == '1 vert' && testTABLEAU2 == '0 vert' || 
    testTABLEAU == '1 vert' && testTABLEAU2 == '1 vert' ||          
    testTABLEAU == '1 vert' && testTABLEAU2 == '2 vert' || testTABLEAU == '1 vert' && testTABLEAU2 == '3 vert' || testTABLEAU == '1 vert' && testTABLEAU2 == '4 vert' || testTABLEAU == '1 vert' && testTABLEAU2 == '5 vert' || testTABLEAU == '1 vert' && testTABLEAU2 == '6 vert' || testTABLEAU == '1 vert' && testTABLEAU2 == '7 vert' || testTABLEAU == '1 vert' && testTABLEAU2 == '8 vert' || testTABLEAU == '1 vert' && testTABLEAU2 == '9 vert' || testTABLEAU == '1 vert' && testTABLEAU2 == 'bloquer vert' || testTABLEAU == '1 vert' && testTABLEAU2 == 'inverser vert' || testTABLEAU == '1 vert' && testTABLEAU2 == '+2 vert') {
        console.log("okok");
    } else if (testTABLEAU == '2 vert' && testTABLEAU2 == '0 vert' || testTABLEAU == '2 vert' && testTABLEAU2 == '1 vert' || testTABLEAU == '2 vert' && testTABLEAU2 == '2 vert' || testTABLEAU == '2 vert' && testTABLEAU2 == '3 vert' || testTABLEAU == '2 vert' && testTABLEAU2 == '4 vert' || testTABLEAU == '2 vert' && testTABLEAU2 == '5 vert' || testTABLEAU == '2 vert' && testTABLEAU2 == '6 vert' || testTABLEAU == '2 vert' && testTABLEAU2 == '7 vert' || testTABLEAU == '2 vert' && testTABLEAU2 == '8 vert' || testTABLEAU == '2 vert' && testTABLEAU2 == '9 vert' || testTABLEAU == '2 vert' && testTABLEAU2 == 'bloquer vert' || testTABLEAU == '2 vert' && testTABLEAU2 == 'inverser vert' || testTABLEAU == '2 vert' && testTABLEAU2 == '+2 vert') {
        console.log("okok");
    } else if (testTABLEAU == '3 vert' && testTABLEAU2 == '0 vert' || testTABLEAU == '3 vert' && testTABLEAU2 == '1 vert' || testTABLEAU == '3 vert' && testTABLEAU2 == '2 vert' || testTABLEAU == '3 vert' && testTABLEAU2 == '3 vert' || testTABLEAU == '3 vert' && testTABLEAU2 == '4 vert' || testTABLEAU == '3 vert' && testTABLEAU2 == '5 vert' || testTABLEAU == '3 vert' && testTABLEAU2 == '6 vert' || testTABLEAU == '3 vert' && testTABLEAU2 == '7 vert' || testTABLEAU == '3 vert' && testTABLEAU2 == '8 vert' || testTABLEAU == '3 vert' && testTABLEAU2 == '9 vert' || testTABLEAU == '3 vert' && testTABLEAU2 == 'inverser vert' || testTABLEAU == '3 vert' && testTABLEAU2 == 'bloquer vert'|| testTABLEAU == '3 vert' && testTABLEAU2 == '+2 vert') {
        console.log("okok");
    } else if (testTABLEAU == '4 vert' && testTABLEAU2 == '0 vert' || testTABLEAU == '4 vert' && testTABLEAU2 == '1 vert' || testTABLEAU == '4 vert' && testTABLEAU2 == '2 vert' || testTABLEAU == '4 vert' && testTABLEAU2 == '3 vert' || testTABLEAU == '4 vert' && testTABLEAU2 == '4 vert' || testTABLEAU == '4 vert' && testTABLEAU2 == '5 vert' || testTABLEAU == '4 vert' && testTABLEAU2 == '6 vert' || testTABLEAU == '4 vert' && testTABLEAU2 == '7 vert' || testTABLEAU == '4 vert' && testTABLEAU2 == '8 vert' || testTABLEAU == '4 vert' && testTABLEAU2 == '9 vert' || testTABLEAU == '4 vert' && testTABLEAU2 == 'inverser vert' || testTABLEAU == '4 vert' && testTABLEAU2 == 'bloquer vert'|| testTABLEAU == '4 vert' && testTABLEAU2 == '+2 vert') {
        console.log("okok");
    } else if (testTABLEAU == '5 vert' && testTABLEAU2 == '0 vert' || testTABLEAU == '5 vert' && testTABLEAU2 == '1 vert' || testTABLEAU == '5 vert' && testTABLEAU2 == '2 vert' || testTABLEAU == '5 vert' && testTABLEAU2 == '3 vert' || testTABLEAU == '5 vert' && testTABLEAU2 == '4 vert' || testTABLEAU == '5 vert' && testTABLEAU2 == '5 vert' || testTABLEAU == '5 vert' && testTABLEAU2 == '6 vert' || testTABLEAU == '5 vert' && testTABLEAU2 == '7 vert' || testTABLEAU == '5 vert' && testTABLEAU2 == '8 vert' || testTABLEAU == '5 vert' && testTABLEAU2 == '9 vert' || testTABLEAU == '5 vert' && testTABLEAU2 == 'inverser vert' || testTABLEAU == '5 vert' && testTABLEAU2 == 'bloquer vert'|| testTABLEAU == '5 vert' && testTABLEAU2 == '+2 vert') {
        console.log("okok");
    } else if (testTABLEAU == '6 vert' && testTABLEAU2 == '0 vert' || testTABLEAU == '6 vert' && testTABLEAU2 == '1 vert' || testTABLEAU == '6 vert' && testTABLEAU2 == '2 vert' || testTABLEAU == '6 vert' && testTABLEAU2 == '3 vert' || testTABLEAU == '6 vert' && testTABLEAU2 == '4 vert' || testTABLEAU == '6 vert' && testTABLEAU2 == '5 vert' || testTABLEAU == '6 vert' && testTABLEAU2 == '6 vert' || testTABLEAU == '6 vert' && testTABLEAU2 == '7 vert' || testTABLEAU == '6 vert' && testTABLEAU2 == '8 vert' || testTABLEAU == '6 vert' && testTABLEAU2 == '9 vert' || testTABLEAU == '6 vert' && testTABLEAU2 == 'inverser vert' || testTABLEAU == '6 vert' && testTABLEAU2 == 'bloquer vert'|| testTABLEAU == '6 vert' && testTABLEAU2 == '+2 vert') {
        console.log("okok");
    } else if (testTABLEAU == '7 vert' && testTABLEAU2 == '0 vert' || testTABLEAU == '7 vert' && testTABLEAU2 == '1 vert' || testTABLEAU == '7 vert' && testTABLEAU2 == '2 vert' || testTABLEAU == '7 vert' && testTABLEAU2 == '3 vert' || testTABLEAU == '7 vert' && testTABLEAU2 == '4 vert' || testTABLEAU == '7 vert' && testTABLEAU2 == '5 vert' || testTABLEAU == '7 vert' && testTABLEAU2 == '6 vert' || testTABLEAU == '7 vert' && testTABLEAU2 == '7 vert' || testTABLEAU == '7 vert' && testTABLEAU2 == '8 vert' || testTABLEAU == '7 vert' && testTABLEAU2 == '9 vert' || testTABLEAU == '7 vert' && testTABLEAU2 == 'inverser vert' || testTABLEAU == '7 vert' && testTABLEAU2 == 'bloquer vert'|| testTABLEAU == '7 vert' && testTABLEAU2 == '+2 vert') {
        console.log("okok");
    } else if (testTABLEAU == '8 vert' && testTABLEAU2 == '0 vert' || testTABLEAU == '8 vert' && testTABLEAU2 == '1 vert' || testTABLEAU == '8 vert' && testTABLEAU2 == '2 vert' || testTABLEAU == '8 vert' && testTABLEAU2 == '3 vert' || testTABLEAU == '8 vert' && testTABLEAU2 == '4 vert' || testTABLEAU == '8 vert' && testTABLEAU2 == '5 vert' || testTABLEAU == '8 vert' && testTABLEAU2 == '6 vert' || testTABLEAU == '8 vert' && testTABLEAU2 == '7 vert' || testTABLEAU == '8 vert' && testTABLEAU2 == '8 vert' || testTABLEAU == '8 vert' && testTABLEAU2 == '9 vert' || testTABLEAU == '8 vert' && testTABLEAU2 == 'inverser vert' || testTABLEAU == '8 vert' && testTABLEAU2 == 'bloquer vert'|| testTABLEAU == '8 vert' && testTABLEAU2 == '+2 vert') {
        console.log("okok");
        
    } else if (testTABLEAU == '9 vert' && testTABLEAU2 == '0 vert' || testTABLEAU == '9 vert' && testTABLEAU2 == '1 vert' || testTABLEAU == '9 vert' && testTABLEAU2 == '2 vert' || testTABLEAU == '9 vert' && testTABLEAU2 == '3 vert' || testTABLEAU == '9 vert' && testTABLEAU2 == '4 vert' || testTABLEAU == '9 vert' && testTABLEAU2 == '5 vert' || testTABLEAU == '9 vert' && testTABLEAU2 == '6 vert' || testTABLEAU == '9 vert' && testTABLEAU2 == '7 vert' || testTABLEAU == '9 vert' && testTABLEAU2 == '8 vert' || testTABLEAU == '9 vert' && testTABLEAU2 == '9 vert' || testTABLEAU == '9 vert' && testTABLEAU2 == 'bloquer vert' || testTABLEAU == '9 vert' && testTABLEAU2 == 'inverser vert' || testTABLEAU == '9 vert' && testTABLEAU2 == '+2 vert') {
        console.log("okok");
    } 
    else if (testTABLEAU == '0 jaune' && testTABLEAU2 == '0 bleu' || testTABLEAU == '0 jaune' && testTABLEAU2 == '0 rouge' || testTABLEAU == '0 jaune' && testTABLEAU2 == '0 vert' || testTABLEAU == '1 jaune' && testTABLEAU2 == '1 bleu' || testTABLEAU == '1 jaune' && testTABLEAU2 == '1 rouge' || testTABLEAU == '1 jaune' && testTABLEAU2 == '1 vert' || testTABLEAU == '2 jaune' && testTABLEAU2 == '2 bleu' || testTABLEAU == '2 jaune' && testTABLEAU2 == '2 rouge' || testTABLEAU == '2 jaune' && testTABLEAU2 == '2 vert' || testTABLEAU == '3 jaune' && testTABLEAU2 == '3 bleu' || testTABLEAU == '3 jaune' && testTABLEAU2 == '3 rouge' || testTABLEAU == '3 jaune' && testTABLEAU2 == '3 vert' || testTABLEAU == '4 jaune' && testTABLEAU2 == '4 bleu' || testTABLEAU == '4 jaune' && testTABLEAU2 == '4 rouge'|| testTABLEAU == '4 jaune' && testTABLEAU2 == '4 vert'|| testTABLEAU == '5 jaune' && testTABLEAU2 == '5 bleu'|| testTABLEAU == '5 jaune' && testTABLEAU2 == '5 rouge'|| testTABLEAU == '5 jaune' && testTABLEAU2 == '5 vert'|| testTABLEAU == '6 jaune' && testTABLEAU2 == '6 bleu'|| testTABLEAU == '6 jaune' && testTABLEAU2 == '6 rouge'|| testTABLEAU == '6 jaune' && testTABLEAU2 == '6 vert'|| testTABLEAU == '7 jaune' && testTABLEAU2 == '7 bleu'|| testTABLEAU == '7 jaune' && testTABLEAU2 == '7 rouge'|| testTABLEAU == '7 jaune' && testTABLEAU2 == '7 vert'|| testTABLEAU == '8 jaune' && testTABLEAU2 == '8 bleu'|| testTABLEAU == '8 jaune' && testTABLEAU2 == '8 rouge'|| testTABLEAU == '8 jaune' && testTABLEAU2 == '8 vert'|| testTABLEAU == '9 jaune' && testTABLEAU2 == '9 bleu'|| testTABLEAU == '9 jaune' && testTABLEAU2 == '9 rouge'|| testTABLEAU == '9 jaune' && testTABLEAU2 == '9 vert'|| testTABLEAU == 'inverser jaune' && testTABLEAU2 == 'inverser bleu'|| testTABLEAU == 'inverser jaune' && testTABLEAU2 == 'inverser rouge'|| testTABLEAU == 'inverser jaune' && testTABLEAU2 == 'inverser vert'|| testTABLEAU == 'bloquer jaune' && testTABLEAU2 == 'bloquer bleu' || testTABLEAU == 'bloquer jaune' && testTABLEAU2 == 'bloquer rouge' || testTABLEAU == 'bloquer jaune' && testTABLEAU2 == 'bloquer vert' || testTABLEAU == '+2 jaune' && testTABLEAU2 == '+2 bleu' || testTABLEAU == '+2 jaune' && testTABLEAU2 == '+2 rouge' || testTABLEAU == '+2 jaune' && testTABLEAU2 == '+2 vert'){
        console.log("okok");
    } 
    else if (testTABLEAU == '0 bleu' && testTABLEAU2 == '0 jaune' || testTABLEAU == '0 bleu' && testTABLEAU2 == '0 rouge' || testTABLEAU == '0 bleu' && testTABLEAU2 == '0 vert' || testTABLEAU == '1 bleu' && testTABLEAU2 == '1 jaune' || testTABLEAU == '1 bleu' && testTABLEAU2 == '1 rouge' || testTABLEAU == '1 bleu' && testTABLEAU2 == '1 vert' || testTABLEAU == '2 bleu' && testTABLEAU2 == '2 jaune' || testTABLEAU == '2 bleu' && testTABLEAU2 == '2 rouge' || testTABLEAU == '2 bleu' && testTABLEAU2 == '2 vert' || testTABLEAU == '3 bleu' && testTABLEAU2 == '3 jaune' || testTABLEAU == '3 bleu' && testTABLEAU2 == '3 rouge' || testTABLEAU == '3 bleu' && testTABLEAU2 == '3 vert' || testTABLEAU == '4 bleu' && testTABLEAU2 == '4 jaune' || testTABLEAU == '4 bleu' && testTABLEAU2 == '4 rouge'|| testTABLEAU == '4 bleu' && testTABLEAU2 == '4 vert'|| testTABLEAU == '5 bleu' && testTABLEAU2 == '5 jaune'|| testTABLEAU == '5 bleu' && testTABLEAU2 == '5 rouge'|| testTABLEAU == '5 bleu' && testTABLEAU2 == '5 vert'|| testTABLEAU == '6 bleu' && testTABLEAU2 == '6 jaune'|| testTABLEAU == '6 bleu' && testTABLEAU2 == '6 rouge'|| testTABLEAU == '6 bleu' && testTABLEAU2 == '6 vert'|| testTABLEAU == '7 bleu' && testTABLEAU2 == '7 jaune'|| testTABLEAU == '7 bleu' && testTABLEAU2 == '7 rouge'|| testTABLEAU == '7 bleu' && testTABLEAU2 == '7 vert'|| testTABLEAU == '8 bleu' && testTABLEAU2 == '8 jaune'|| testTABLEAU == '8 bleu' && testTABLEAU2 == '8 rouge'|| testTABLEAU == '8 bleu' && testTABLEAU2 == '8 vert'|| testTABLEAU == '9 bleu' && testTABLEAU2 == '9 jaune'|| testTABLEAU == '9 bleu' && testTABLEAU2 == '9 rouge'|| testTABLEAU == '9 bleu' && testTABLEAU2 == '9 vert'|| testTABLEAU == 'inverser bleu' && testTABLEAU2 == 'inverser jaune'|| testTABLEAU == 'inverser bleu' && testTABLEAU2 == 'inverser rouge'|| testTABLEAU == 'inverser bleu' && testTABLEAU2 == 'inverser vert'|| testTABLEAU == 'bloquer bleu' && testTABLEAU2 == 'bloquer jaune' || testTABLEAU == 'bloquer bleu' && testTABLEAU2 == 'bloquer rouge' || testTABLEAU == 'bloquer bleu' && testTABLEAU2 == 'bloquer vert' || testTABLEAU == '+2 bleu' && testTABLEAU2 == '+2 jaune' || testTABLEAU == '+2 bleu' && testTABLEAU2 == '+2 rouge' || testTABLEAU == '+2 bleu' && testTABLEAU2 == '+2 vert'){
        console.log("okok");
    } 
     else if (testTABLEAU == '0 rouge' && testTABLEAU2 == '0 bleu' || testTABLEAU == '0 rouge' && testTABLEAU2 == '0 jaune' || testTABLEAU == '0 rouge' && testTABLEAU2 == '0 vert' || testTABLEAU == '1 rouge' && testTABLEAU2 == '1 bleu' || testTABLEAU == '1 rouge' && testTABLEAU2 == '1 jaune' || testTABLEAU == '1 rouge' && testTABLEAU2 == '1 vert' || testTABLEAU == '2 rouge' && testTABLEAU2 == '2 bleu' || testTABLEAU == '2 rouge' && testTABLEAU2 == '2 jaune' || testTABLEAU == '2 rouge' && testTABLEAU2 == '2 vert' || testTABLEAU == '3 rouge' && testTABLEAU2 == '3 bleu' || testTABLEAU == '3 rouge' && testTABLEAU2 == '3 jaune' || testTABLEAU == '3 rouge' && testTABLEAU2 == '3 vert' || testTABLEAU == '4 rouge' && testTABLEAU2 == '4 bleu' || testTABLEAU == '4 rouge' && testTABLEAU2 == '4 jaune'|| testTABLEAU == '4 rouge' && testTABLEAU2 == '4 vert'|| testTABLEAU == '5 rouge' && testTABLEAU2 == '5 bleu'|| testTABLEAU == '5 rouge' && testTABLEAU2 == '5 jaune'|| testTABLEAU == '5 rouge' && testTABLEAU2 == '5 vert'|| testTABLEAU == '6 rouge' && testTABLEAU2 == '6 bleu'|| testTABLEAU == '6 rouge' && testTABLEAU2 == '6 jaune'|| testTABLEAU == '6 rouge' && testTABLEAU2 == '6 vert'|| testTABLEAU == '7 rouge' && testTABLEAU2 == '7 bleu'|| testTABLEAU == '7 rouge' && testTABLEAU2 == '7 jaune'|| testTABLEAU == '7 rouge' && testTABLEAU2 == '7 vert'|| testTABLEAU == '8 rouge' && testTABLEAU2 == '8 bleu'|| testTABLEAU == '8 rouge' && testTABLEAU2 == '8 jaune'|| testTABLEAU == '8 rouge' && testTABLEAU2 == '8 vert'|| testTABLEAU == '9 rouge' && testTABLEAU2 == '9 bleu'|| testTABLEAU == '9 rouge' && testTABLEAU2 == '9 jaune'|| testTABLEAU == '9 rouge' && testTABLEAU2 == '9 vert'|| testTABLEAU == 'inverser rouge' && testTABLEAU2 == 'inverser bleu'|| testTABLEAU == 'inverser rouge' && testTABLEAU2 == 'inverser jaune'|| testTABLEAU == 'inverser rouge' && testTABLEAU2 == 'inverser vert'|| testTABLEAU == 'bloquer rouge' && testTABLEAU2 == 'bloquer bleu' || testTABLEAU == 'bloquer rouge' && testTABLEAU2 == 'bloquer jaune' || testTABLEAU == 'bloquer rouge' && testTABLEAU2 == 'bloquer vert' || testTABLEAU == '+2 rouge' && testTABLEAU2 == '+2 bleu' || testTABLEAU == '+2 rouge' && testTABLEAU2 == '+2 jaune' || testTABLEAU == '+2 rouge' && testTABLEAU2 == '+2 vert'){
        console.log("okok");
    } 
     else if (testTABLEAU == '0 vert' && testTABLEAU2 == '0 bleu' || testTABLEAU == '0 vert' && testTABLEAU2 == '0 rouge' || testTABLEAU == '0 vert' && testTABLEAU2 == '0 jaune' || testTABLEAU == '1 vert' && testTABLEAU2 == '1 bleu' || testTABLEAU == '1 vert' && testTABLEAU2 == '1 rouge' || testTABLEAU == '1 vert' && testTABLEAU2 == '1 jaune' || testTABLEAU == '2 vert' && testTABLEAU2 == '2 bleu' || testTABLEAU == '2 vert' && testTABLEAU2 == '2 rouge' || testTABLEAU == '2 vert' && testTABLEAU2 == '2 jaune' || testTABLEAU == '3 vert' && testTABLEAU2 == '3 bleu' || testTABLEAU == '3 vert' && testTABLEAU2 == '3 rouge' || testTABLEAU == '3 vert' && testTABLEAU2 == '3 jaune' || testTABLEAU == '4 vert' && testTABLEAU2 == '4 bleu' || testTABLEAU == '4 vert' && testTABLEAU2 == '4 rouge'|| testTABLEAU == '4 vert' && testTABLEAU2 == '4 jaune'|| testTABLEAU == '5 vert' && testTABLEAU2 == '5 bleu'|| testTABLEAU == '5 vert' && testTABLEAU2 == '5 rouge'|| testTABLEAU == '5 vert' && testTABLEAU2 == '5 jaune'|| testTABLEAU == '6 vert' && testTABLEAU2 == '6 bleu'|| testTABLEAU == '6 vert' && testTABLEAU2 == '6 rouge'|| testTABLEAU == '6 vert' && testTABLEAU2 == '6 jaune'|| testTABLEAU == '7 vert' && testTABLEAU2 == '7 bleu'|| testTABLEAU == '7 vert' && testTABLEAU2 == '7 rouge'|| testTABLEAU == '7 vert' && testTABLEAU2 == '7 jaune'|| testTABLEAU == '8 vert' && testTABLEAU2 == '8 bleu'|| testTABLEAU == '8 vert' && testTABLEAU2 == '8 rouge'|| testTABLEAU == '8 vert' && testTABLEAU2 == '8 jaune'|| testTABLEAU == '9 vert' && testTABLEAU2 == '9 bleu'|| testTABLEAU == '9 vert' && testTABLEAU2 == '9 rouge'|| testTABLEAU == '9 vert' && testTABLEAU2 == '9 jaune'|| testTABLEAU == 'inverser vert' && testTABLEAU2 == 'inverser bleu'|| testTABLEAU == 'inverser vert' && testTABLEAU2 == 'inverser rouge'|| testTABLEAU == 'inverser vert' && testTABLEAU2 == 'inverser jaune'|| testTABLEAU == 'bloquer vert' && testTABLEAU2 == 'bloquer bleu' || testTABLEAU == 'bloquer vert' && testTABLEAU2 == 'bloquer rouge' || testTABLEAU == 'bloquer vert' && testTABLEAU2 == 'bloquer jaune' || testTABLEAU == '+2 vert' && testTABLEAU2 == '+2 bleu' || testTABLEAU == '+2 vert' && testTABLEAU2 == '+2 rouge' || testTABLEAU == '+2 vert' && testTABLEAU2 == '+2 jaune'){
        console.log("okok");
    } 
}