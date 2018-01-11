// Partie centrale avec le logo, la barre de recherche, les boutons et le choix des langues que l'on cache
document.getElementById('secret').style.display = 'none';

// Au click, le bouton central et unique disparait et retour de la page d'accueil classique
function clickBouton() {
document.getElementById('secret').style.display = 'block';
document.getElementById('bouton').style.display = 'none';
}

// Elements de recherche de l'utilisateur
let recherche = document.getElementById('texte').value;
// Definie l'url rechercher par l'utilisateur
let urlRecherche = "https://www.google.fr/#q=" + recherche;

// Renvoi de l'utilisateur sur l'url de sa recherche
function resultatR()
{
	window.location.href=urlRecherche;
}

setTimeout(function(){
	alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
}, 10000);