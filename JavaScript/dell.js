var bdProduit = null;
$(document).ready(function() {
	bdProduit = localStorage.getItem('bdProduitjson');
	bdProduit = JSON.parse(bdProduit);
	var descJsonObjects = bdProduit.Produits;
	var nbDell = 0;
	for (var i = 0; i < descJsonObjects.length; i++) {
		var jsonObject = null;
		jsonObject = descJsonObjects[i];
		if (jsonObject.categorieProduit == "Dell") {
			nbDell++;
		}
	}
	var nb = 0;
	for (var i = 0; i < descJsonObjects.length; i++) {
		var jsonObject = null;

		jsonObject = descJsonObjects[i];
		if (jsonObject.categorieProduit == "Dell") {
			nb++;
			var li = '<li>';
			li = li + jsonObject.nomProduit + "</li>";
			$("#ul_Liste_Des_Articles:first").append(li);

			// generer les sections

			var section = "<section id='sectionDell" + nb + "'>";

			var header = "<header><h1>Fabriquant du " + jsonObject.nomProduit + "</h1><a href='#sectionDell1'>Retour a la premiere section</a></header>";

			var figure = "<figure><figcaption>" + jsonObject.nomProduit + "</figcaption><img src='../../images/" + jsonObject.imageProduit + "' width='320' height='228'></figure>";
			var article = "<article><p>" + jsonObject.descriptionProduit + "</p></article>";
			var footer = "<footer><p>Prix : 500$ <a href='#sectionDell" + nbDell + "'>Aller a la derniere section</a></p></footer>";

			section = section + header + figure + article + footer + "</section>";
			$("#sectionCategories:first").append(section);
		}
	}

	$('#Liste_Des_Articles').jstree();



$('#jstree').on("select_node.jstree", function (e, data) { //open google in browser 
	
	document.location = data.instance.get_node(data.node, true).children('a').attr('href');
	});




});
