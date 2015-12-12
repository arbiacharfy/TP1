// ******************** Formulaire de Connexion *************************/

var bd = null;
//simulation base de donnees avec localStorage et json
function seDeconnecter() {
	sessionStorage.removeItem('connecte');
	$("#sub_container").hide();
	$("#connexion").show();

}

function testConnexion() {

	connecte = sessionStorage.getItem("connecte");
	if ((connecte == "undefined") || (connecte == null)) {
		$("#sub_container").eq(0).hide();
		$("#connexion").eq(0).show();

	} else {
		$("#sub_container").show();
		$("#connexion").hide();
	}

	$("#deconnecter").click(function() {
		seDeconnecter();

	});
}

function SeConnecter() {
	//récupération des info du formulaire
	login = $("#txtLogin").val();
	pwd = $("#txtPassword").val();

	if (pwd == "inf2005") {
		console.log(pwd);
		//si le mot de passe est bon
		sessionStorage.setItem("connecte", "connecte");
		$("#sub_container").show();
		$("#connexion").hide();

	} else {//mot de passe erroné
		//supprimer la variable enregistré dans sessionStorage
		sessionStorage.removeItem('connecte');
		$("#sub_container").eq(0).hide();
		$("#connexion").eq(0).show();
	}
}

// ******************** Formulaire Ajout Employe *************************/
//
// function enregistrer_Employe() {
// var nom = $('input[name="nom"]:first').val();
// var prenom = $('input[name="prenom"]:first').val();
// var email = $('input[name="email"]:first').val();
// var fonction = $('input[name="fonction"]:first').val();
// var file = $('input[name="telechargerEmp"]:first').val();
//
// if ((nom == "undefined") || (nom == null) || (email == "undefined") || (email == null) || (prenom == "undefined") || (prenom == null)) {
// alert("Merci de remplir les champs manquants");
// retourn(false);
// //on ne change rien si
// }
// //methode 1
// bd = localStorage.getItem('bdjson');
// if ((bd == "undefined") || (bd == null)) {//ici on doit initialiser la bd
// var bdjson = {
// "descriptions" : []
//
// };
//
// localStorage.setItem('bdjson', JSON.stringify(bdjson));
// bd = bdjson;
//
// } else {
// bd = JSON.parse(bd);
// //parsing de objet json
// }
// var descJsonObjects = bd.descriptions;
// var jsonObject = {//creation de json
// "nom" : nom,
// "prenom" : prenom,
// "email" : email,
// "fonction" : fonction,
// "file" : file
// };
// descJsonObjects.push(jsonObject);
// //ajout dans le tableau des description
// bd.descriptions = descJsonObjects;
// localStorage.setItem('bdjson', JSON.stringify(bd));
// return (true);
// }

// var descJsonObjects = bd.descriptions;
// var hr = "<hr>";
// $("#contenu:first").append(hr);
//
// for (var i = 0; i < descJsonObjects.length; i++) {
// var jsonObject = null;
// jsonObject = descJsonObjects[i];
// var div = '<div class="ajoutjson">';
// div = div + '<h3 class="nom">' + jsonObject.nom + '</h3>';
// div = div + '<img src=' + jsonObject.image + '>';
// div = div + '<div class="description">' + jsonObject.description + '</div>';
// div = div + '</div>';
// $("#contenu:first").append(div);
// //on ajoute à la fin de l'élément
// }
// $("#contenu:first").append(hr);
// //on ajoute une ligne hrizontale

function enregistrer_Employe() {
	var nom = $('input[name="nom"]:first').val();
	var prenom = $('input[name="prenom"]:first').val();
	var email = $('input[name="email"]:first').val();
	var fonction = $('input[name="fonction"]:first').val();
	var file = $('input[name="telechargerEmp"]:first').val();

	if ((nom == "undefined") || (nom == null) || (email == "undefined") || (email == null) || (prenom == "undefined") || (prenom == null)) {
		alert("Merci de remplir les champs manquants");
		retourn(false);
		//on ne change rien si
	}
	//methode 1
	bd = localStorage.getItem('bdjson');
	if ((bd == "undefined") || (bd == null)) {//ici on doit initialiser la bd
		var bdjson = {
			"descriptions" : []

		};

		localStorage.setItem('bdjson', JSON.stringify(bdjson));
		bd = bdjson;

	} else {
		bd = JSON.parse(bd);
		//parsing de objet json
	}
	var descJsonObjects = bd.descriptions;
	var jsonObject = {//creation de json
		"nom" : nom,
		"prenom" : prenom,
		"email" : email,
		"fonction" : fonction,
		"file" : file
	};
	descJsonObjects.push(jsonObject);
	//ajout dans le tableau des description
	bd.descriptions = descJsonObjects;
	localStorage.setItem('bdjson', JSON.stringify(bd));
	return (true);

}

// ******************** Evennements de la page connexion *************************/
$(document).ready(function() {

	testConnexion();
	$("#btSeConnecter").click(function() {

		return SeConnecter();

	});
	$("#btnEnregistrerEmploye").click(function() {

		return enregistrer_Employe();

	});

	

});
