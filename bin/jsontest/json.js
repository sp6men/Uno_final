//        var header = document.querySelector('header');
//        var section = document.querySelector('section');
//
//        var requestURL = 'https://api.myjson.com/bins/o2t4i';
//        var request = new XMLHttpRequest();
//        request.open('GET', requestURL);
//        request.responseType = 'json';
//        request.send();
//
//request.onload = function() {
//  var cartes = request.response;
//       
//    
//    
//    function CardsHeader(jsonObj) {
//  var myH1 = document.createElement('h1');
//  myH1.textContent = jsonObj['titre'];
//  header.appendChild(myH1);
//
//  var myPara = document.createElement('p');
//  myPara.textContent = jsonObj['cartes'].valeur;
//  header.appendChild(myPara);
//}
//}
//
//function AfficherCartes(jsonObj){
//    
//    var carte = jsonObj['cartes'];
//    var myH2 = document.createElement('h2');
//    
//    myH2.textContent = cartes["cartes"].valeur
//    
//}

/*function AfficherCartes(jsonObj){
    var cartes = jsonObj['cartes'];
    
//     for (var i = 0; i < cartes.length; i++) { 
     var myArticle = document.createElement('article');
     var myPara1 = document.createElement('p');
     var myPara2 = document.createElement('p');
         
         myPara1.textContent = cartes.valeur;
         myPara2.textContent = cartes.couleur;
//     }
    
   
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    
    section.appendChild(myArticle);
}*/


let deckJson = [{
    "valeur": "1",
    "couleur": "bleu"
}, {
    "valeur": "2",
    "couleur": "rouge"
}
                
]

let output = document.getElementById('output');

output.innerHTML = deckJson.couleur;
