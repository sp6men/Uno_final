 
 let tableau1 = ["12","24","48","32","20","10"]; //tableau contenant des valeurs à expédier
 let tableau2 = []; // tableau recevant les valeurs



document.getElementById("tableau1").innerHTML = tableau1; //affichage du premier tableau
document.getElementById("tableau2").innerHTML = tableau2; // affichage du second tableau

boutonDistribuer.onclick = function() { // fonction à exécuter au clique sur le bouton distribuer
    let itemRandom = tableau1.splice(Math.floor(Math.random()*tableau1.length), 1);   /* cette variable permet de selectionner aléatoirement un élément dans le tableau1, le premier paramètre
    (Math.floor(Math.random()*tableau1.length) permet de séléctionner aléatoirement l'index choisi en fonction de la taille du tableau (si le tableau a 5 éléments, il définie une valeur aléatoire
    entre 0 et 5 et se positionne sur un index, le deuxième paramètre indique combien de valeurs sont supprimées, ici 1*/         
    tableau2.push(itemRandom) // prend la valeur séléctionée aléatoirement par itemRandom et l'insère dans le tableau2 
    document.getElementById("tableau1").innerHTML = tableau1; //affichage des nouvelles données
    document.getElementById("tableau2").innerHTML = tableau2;  //affichage des nouvelles données
    

    
};
