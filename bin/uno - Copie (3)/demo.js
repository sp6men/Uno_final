
2 joueurs manuels | Définir toutes les règles du uno | Bien penser au cycle de la pioche quand t'arrives à la fin. Pas de carte en double. 
 | Déterminer le but du jeu |  Génère le lot de cartes du début | COMMENTAIRES | Penser au carte bonus et leurs effet : +4 etc...
 Utilise JSON pour modéliser les cartes, les joueurs.



le jeu du UNO : 

108 cartes  réparties en :

19 cartes numérotés de 0 à 9 par couleur (bleues, vertes, rouges et jaunes)
2 cartes +2 de chaque couleur
2 cartes Inversion par couleur
2 cartes Passer par couleur
1 Joker par couleur
1 Super Joker par couleur

BUT DU JEU : 

Pour gagner au Uno, vous devez être le 1er à vous débarrasser de toutes vos cartes.

Le donneur (ordinateur) mélange les cartes et en distribue 7 par joueur.
Les autres cartes sont placées faces cachées et forment la PIOCHE.
une première carte est posée (le TALON).

Le joueur 1 commence.

Le principe : les joueurs doivent recouvrir la carte visible du TALON par une carte :
de même couleur,
ou portant le même numéro

ou le même symbole que celle-ci (carte spéciale)

Si le joueur ne possède pas de carte lui permettant de jouer,
–>il PIOCHE une carte

Les joueurs peuvent choisir de NE PAS jouer une carte.
—> Ils doivent alors PIOCHER une carte. 


CARTES ACTION 

Carte +2 : Lorsque cette carte est jouée, le joueur suivant doit piocher 2 cartes et passer son tour. Cette carte ne peut être jouée que sur une carte de la même couleur ou sur une autre carte +2.
Carte Inversion : Lorsque cette carte est jouée, le sens du jeu change (si le jeu évoluait vers la gauche, il doit désormais évoluer vers la droite et vice  versa). Cette carte ne  peut être jouée que sur une carte de la même couleur ou sur une autre carte Inversion.
Carte Passer : Lorsque cette carte est jouée, le joueur suivant doit passer son tour. Cette carte ne peut être jouée que sur une carte de même couleur ou sur une autre carte Passer.
Carte Joker : Celui qui joue cette carte peut choisir de changer la couleur (il annonce son choix en posant la carte) ou de continuer dans la couleur demandée. 
Carte Super Joker : Celui qui joue cette carte peut choisir de changer la couleur ET oblige le joueur suivant à piocher 4 cartes et à passer son tour.


Fin d’une manche

Lorsqu’un joueur pose son avant-dernière carte, il doit immédiatement annoncer à voix haute « UNO » 
S’il oublie et que l’un de ses adversaires le lui fait remarquer (en criant CONTRE-UNO) avant que le joueur suivant n’ait joué, il doit piocher deux cartes de pénalité.
La manche est finie lorsqu’un joueur a posé sa dernière carte.
!!!!!!Si la PIOCHE est épuisée avant la fin d’une manche, le TALON est mélangé et le jeu continue. !!!


PLAN DE DEVELOPPEMENT :


actions physiques possibles dans le jeu :

Le joueur 1 renseigne son nom
Le joueur 2 renseigne son nom


Le joueur 1 pose une carte sur le TALON
Le joueur 2 pose une carte sur le TALON

Le joueur 1 pioche une carte dans la PIOCHE
Le joueur 1 pioche 2 cartes dans la PIOCHE
Le joueur 1 pioche 4 cartes dans la PIOCHE

Le joueur 2 pioche une carte dans la PIOCHE
Le joueur 2 pioche 2 cartes dans la PIOCHE
Le joueur 2 pioche 4 cartes dans la PIOCHE

Le joueur 1 dit UNO
Le joueur 1 dit CONTRE-UNO

Le joueur 2 dit UNO
Le joueur 2 dit CONTRE-UNO

Le joueur 1 passe son tour
Le joueur 2 passe son tour

Le joueur 1 choisit la couleur rouge
Le joueur 1 choisit la couleur verte
Le joueur 1 choisit la couleur bleue
Le joueur 1 choisit la couleur jaune

Le joueur 2 choisit la couleur rouge
Le joueur 2 choisit la couleur verte
Le joueur 2 choisit la couleur bleue
Le joueur 2 choisit la couleur jaune

actions automatiques possibles dans le jeu :

L'ordinateur démarre la manche

L'ordinateur affiche le nom du joueur 1
L'ordinateur affiche le nom du joueur 2

L'ordinateur assigne (distribution) 7 cartes au joueur 1
L'ordinateur assigne 7 (distribution) cartes au joueur 2

L'ordinateur affiche les cartes du joueur 1
L'ordinateur affiche les cartes du joueur 2

L'ordinateur pose la première carte sur le TALON 

L'ordinateur affiche la carte active 

L'ordinateur distribue 1 carte au joueur 1
L'ordinateur distribue 1 carte au joueur 2

L'ordinateur distribue 2 cartes au joueur 1
L'ordinateur distribue 2 cartes au joueur 2

L'ordinateur distribue 4 cartes au joueur 1
L'ordinateur distribue 4 cartes au joueur 2

L'ordinateur mélange le talon pour reformer la pioche

L'ordinateur instaure une nouvelle couleur 

L'ordinateur termine la manche

L'ordinateur affiche le nom du gagnant



déroulé d'une partie :

Le joueur 1 renseigne son nom

Le joueur 2 renseigne son nom

CONFIRMATION DU nom

L'ordinateur démarre la manche

L'ordinateur affiche le nom du joueur 1

L'ordinateur affiche le nom du joueur 2

L'ordinateur assigne (distribution) 7 cartes au joueur 1

L'ordinateur assigne (distribution)  7 cartes au joueur 2

L'ordinateur affiche les cartes du joueur 1

L'ordinateur affiche les cartes du joueur 2

L'ordinateur pose la première carte sur le TALON : [carte 8 verte]

Le joueur 1 pose une carte [carte 6 verte] sur le TALON

Le joueur 2 pose une carte [carte 6 rouge] sur le TALON

Le joueur 1 pose une carte [carte +2 rouge] sur le TALON

Le joueur 2 pioche 2 cartes dans la PIOCHE

L'ordinateur distribue 2 cartes au joueur 2

Le joueur 2 passe son tour

Le joueur 1 pose une carte [carte super joker] sur le TALON

Le joueur 1 choisit la couleur bleue

L'ordinateur instaure une nouvelle couleur (bleue)

Le joueur 2 pioche 4 cartes dans la PIOCHE

L'ordinateur distribue 4 cartes au joueur 2

Le joueur 2 passe son tour

Le joueur 1 pose une carte [carte inversion bleue] sur le TALON

Le joueur 2 passe son tour

Le joueur 1 pose une carte [carte passer bleue] sur le TALON

Le joueur 2 passe son tour

[...]
Le joueur 1 pose une carte sur le TALON

Le joueur 1 dit UNO

Le joueur 2 pose une carte sur le TALON

Le joueur 1 pose une carte sur le TALON

L'ordinateur termine la manche

L'ordinateur affiche le nom du gagnant











-> Créer joueur 1 et joueur 2
  ->définir le nom de chaque joueur à l'avance 
  ->
-> Créer la pioche
  -> Générer les cartes normales 
    -> 19 cartes de 0 à 9 (0,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9)
    -> Cartes action : +2, inversion, carte passer, carte joker, carte super joker
  -> Mettre en place 
  ->   
-> Créer le talon
  -> une entité au milieu






------------
13/11/18
------------
https://plnkr.co/edit/mBhA60aUCEGSs0t0MDGu?p=preview
Ce qu'il reste à créer : 
Pouvoir séléctionner une carte souhaitée 
Le fait de pouvoir ou non poser une carte en fonction de la couleur ou du chiffre/ spécialité
Gérer les cartes spéciales
Travailler sur le Design

----------------





var cardInPiocheUsed = 0;
var cards = [];
var colors = ["red", "green", "yellow", "blue"];

generateCardsAtTheBeginning();

function generateCardsAtTheBeginning(){
	
	//Toutes mes cartes normales
	for each (color in colors){
		for (var i=1; i <= 9; i++){
			cards.push({
				color: color,
				number: i
			});
		}

		cards.push({
				color: color,
				inverse: true
			});

		cards.push({
				color: color,
				inverse: true
			});

		cards.push({
				color: color,
				blocked: true
			});

		cards.push({
				color: color,
				blocked: true
			});

			cards.push({
				color: color,
				+2: true
			});

		cards.push({
				color: color,
				+2: true
			});
	}

	//Cartes speciales
	for (var i=0; i <= 4; i++){
		cards.push({
					special: "joker"
				});
	}

	for (var i=0; i <= 4; i++){
		cards.push({
					special: "+4"
				});
	}
		
	//Mixer random la liste des cards

	mixPileOfCards();

	//Attribuer les cartes aux utilisateurs
	attributeCardstoPlayers();

	//Setter le nombre de cartes en pioche

	cardInPiocheUsed = cards.length - 2*7;

}

function attributeCardstoPlayers(){
	for (var i=0; i <= 14; i++){
		//si pair , je donne au joueur 1

		//si impair, je donne au joueur 2
	}
}

function checkkCompatibleCard(){
	
}

function putCardOnTable(card){
	
	//vérifier que la carte est compatible
	if (checkkCompatibleCard()){
		cardInPiocheUsed++;

		if (cardInPocheUsed >= 108){
			resetPioche();
		}else{


		}
	}else{
		return false;
	}	
}

function resetPioche(){
	//On va resetter les état des cartes
	for (var i=0; i < cards.length; i++){
		delete cards[i].used;
	}

	//On reset le counter de carte utilisée
	cardInPiocheUsed = 0;
}
