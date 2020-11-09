"use strict";

$(function(){
	export function search()
	{
		$('#search').change(function(){
			var toSearch = this.val()
			if (this.value() != ""){
				$('#catalogue li').each(function(article){
					if (article.data("name").toLowerCase().includes(toSearch.toLowerCase()))
						article.show();
					else
						article.hide();
				});
					
			}
			
		});
	}
	
});