/**
 * @author arbia
 */
var bd = null;
$(document).ready(function() {
	bd = localStorage.getItem('bdjson');
	bd = JSON.parse(bd);
	var descJsonObjects = bd.descriptions;

	for (var i = 0; i < descJsonObjects.length; i++) {
		var jsonObject = null;
		jsonObject = descJsonObjects[i];

		var tbody = '<tr>';
		tbody = tbody + "<td>" + jsonObject.nom + "</td>";
		tbody = tbody + "<td>" + jsonObject.prenom + "</td>";
		tbody = tbody + "<td>" + jsonObject.email + "</td>";
		tbody = tbody + "<td>" + jsonObject.fonction + "</td>";
		tbody = tbody + "<td>" + jsonObject.file + "</td></tr>";

		$("#tbody:first").append(tbody);
		//on ajoute à la fin de l'élément
	}

	$("#univtab").DataTable({

	});

}); 