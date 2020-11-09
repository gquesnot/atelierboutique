import {catalog} from "../data/catalogue.js";

//genere ou regenere les articles dans la div #catalogue
export function generateArticle(id)
		{
			//select catalog
			if (id == 1)
				var actualCatalogue = catalog;
			else if (id == 2)
				var actualCatalogue = catalog2;
			else
				return;
			var res= "";
			//concatene "" avec chaque article le \ permet les sauts de ligne mais en  realité c'est une string
			actualCatalogue.forEach(function(article){
				res += "<div class=\"article\">\
							<h3>"+article.name+"</h3>\
							<img src=\""+ article.image +"\"/>\
						</div>";
				
			});
			//vide #catalogue 
			$('#catalogue').empty();
			//rempli #catalogue  avec les nouveaux articles
			$('#catalogue').append(res);
		}
