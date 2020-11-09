import { catalog } from "../data/catalogue.js";

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

				//l'usage des backticks >>> ` <<< permet d'utiliser des chaînes de caractères multi-lignes + fonctionnalité d'interpolation ${ exemple }
				res += `
				<div class="col-md-6 col-lg-4">
					<div class="card mb-3">
						<img src="${ article.image }" class="card-img-top" alt="${ article.name }">
						<div class="card-body">
							<h5 class="card-title">${ article.name }</h5>
							<p class="card-text">${ article.description }</p>
						</div>
						<div class="card-footer d-flex justify-content-between">
							<div class="text-muted align-self-center">${ article.price } €</div>
							<button type="button" class="btn btn-primary btn-add-to-cart" >Ajouter <i class="fas fa-cart-plus"></i></button>
						</div>
					</div>
				</div>
			`;

					
				
			});
			//vide #catalogue 
			$('#catalogue').empty();
			//rempli #catalogue  avec les nouveaux articles
			$('#catalogue').append(res);
		}
