var bdProduit = null;
$(document).ready(function() {
	bdProduit = localStorage.getItem('bdProduitjson');
	bdProduit = JSON.parse(bdProduit);
	var descJsonObjects = bdProduit.Produits;
	var nbHP = 0;
	for (var i = 0; i < descJsonObjects.length; i++) {
		var jsonObject = null;
		jsonObject = descJsonObjects[i];
		if (jsonObject.categorieProduit == "HP") {
			nbHP++;
		}
	}
	var nb = 0;
	for (var i = 0; i < descJsonObjects.length; i++) {
		var jsonObject = null;

		jsonObject = descJsonObjects[i];
		if (jsonObject.categorieProduit == "HP") {
			nb++;
			var li = '<li>';
			li = li + jsonObject.nomProduit + "</li>";
			$("#ul_Liste_Des_Articles:first").append(li);

			// generer les sections

			var section = "<section id='sectionHP" + nb + "'>";

			var header = "<header><h1>Fabriquant du " + jsonObject.nomProduit + "</h1><a href='#sectionHP1'>Retour a la premiere section</a></header>";

			var figure = "<figure><figcaption>" + jsonObject.nomProduit + "</figcaption><img src='../../images/" + jsonObject.imageProduit + "' width='320' height='228'></figure>";
			var article = "<article><p>" + jsonObject.descriptionProduit + "</p></article>";
			var footer = "<footer><p>Prix : 500$ <a href='#sectionHP" + nbHP + "'>Aller a la derniere section</a></p></footer>";

			section = section + header + figure + article + footer + "</section>";
			$("#sectionCategories:first").append(section);
		}
	}

	$('#Liste_Des_Articles').jstree();

});
