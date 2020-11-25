//affiche ou cache les articles en fonction de l'input #search
export function search()
	{
		// == pour chaque changement dans #search /!\ ici "input" veut dire :si l'utilisateur ecris qqc dans #search
		$('#search').on("input",function(){
			//valeur de #search
			var toSearch = $(this).val();
			// pour chaque div dans #catalogue

			$('#catalogue .card').parent().each(function(article){
				// name = text dans le h3 de l'article
				var name = $(this).find("h5")[0].textContent;
				// La méthode includes() détermine si une chaîne de caractères est contenue dans une autre
				if (name.toLowerCase().includes(toSearch.toLowerCase()))
					$(this).show();
				else
					$(this).hide();
			});
		});
	}
