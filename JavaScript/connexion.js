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

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

function enregistrer_Employe() {
	var nom = $('input[name="nom"]:first').val();
	var prenom = $('input[name="prenom"]:first').val();
	var email = $('input[name="email"]:first').val();
	var fonction = $('input[name="fonction"]:first').val();
	var file = $('input[name="telechargerEmp"]:first').val();
	var nomInter = nom.trim();
	TestNom = ((nom == "undefined") || (nom == null) || (nom.trim().length === 0));
	Testprenom = ((prenom == "undefined") || (prenom == null) || (prenom.trim().length === 0));
	TestEmail = ((email == "undefined") || (email == null) || (email.trim().length === 0)) && (validateEmail(email));

	if (TestNom || Testprenom || TestEmail) {
		alert("Merci de remplir les champs manquants");
		return (false);
		//on ne change rien si
	} else {

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
	//methode 1

}

// Ajouter un produit
function enregistrer_Produit() {

	var nomProduit = $('input[name="nomProduit"]:first').val();
	var descriptionProduit = $('textarea[name="descriptionProduit"]:first').val();
	var imageProduit = $('#imageProduit').find(":selected").text();
	var categorieProduit = $('#categorieProduit').find(":selected").text();

	TestNom = ((nomProduit == "undefined") || (nomProduit == null) || (nomProduit.trim().length === 0));
	TestdescriptionProduit = ((descriptionProduit == "undefined") || (descriptionProduit == null) || (descriptionProduit.trim().length === 0));
	TestcategorieProduit = (((categorieProduit.trim()) === ("selectionner une Categorie".trim())));
	test = (TestNom || TestdescriptionProduit || TestcategorieProduit);
	console.log(TestNom);
	console.log(TestdescriptionProduit);
	console.log(TestcategorieProduit);

	if (test) {
		alert("Merci de remplir les champs manquants");
		retourn(false);
		//on ne change rien si
	} else {
		//methode 1
		bdProduit = localStorage.getItem('bdProduitjson');
		if ((bdProduit == "undefined") || (bdProduit == null)) {//ici on doit initialiser la bd
			var bdProduitjson = {
				"Produits" : []
			};

			localStorage.setItem('bdProduitjson', JSON.stringify(bdProduitjson));
			bdProduit = bdProduitjson;

		} else {
			bdProduit = JSON.parse(bdProduit);
			//parsing de objet json
		}
		var descJsonObjects = bdProduit.Produits;
		var jsonObject = {//creation de json
			"nomProduit" : nomProduit,
			"descriptionProduit" : descriptionProduit,
			"imageProduit" : imageProduit,
			"categorieProduit" : categorieProduit
		};
		descJsonObjects.push(jsonObject);
		//ajout dans le tableau des description
		bdProduit.Produits = descJsonObjects;
		localStorage.setItem('bdProduitjson', JSON.stringify(bdProduit));

		//$( "form:first" ).trigger( "reset" );
		return (true);
	}

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
	$("#enregistrerProduit").click(function() {

		return enregistrer_Produit();

	});

});
