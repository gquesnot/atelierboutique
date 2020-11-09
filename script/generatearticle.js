import {catalog} from "../data/catalogue.js";

export function generateArticle(id)
		{
			if (id == 1)
				var actualCatalogue = catalog;
			else if (id == 2)
				var actualCatalogue = catalog2;
			else
				return;
			var res= "";
			actualCatalogue.forEach(function(article){
				res += "<div class=\"article\"><h3>"+article.name+"</h3><img src=\""+ article.image +"\"/></div>";
				
			});
			$('#catalogue').innerHTML = "";
			$('#catalogue').append(res);
		}
