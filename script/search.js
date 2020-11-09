export function search()
	{
		$('#search').on("input",function(){
			var toSearch = this.value;
			if (toSearch != ""){
				$('#catalogue div').each(function(article){
					var name = $(this).find("h3")[0].textContent;
					if (name.toLowerCase().includes(toSearch.toLowerCase()))
						$(this).show();
					else
						$(this).hide();
				});
					
			}
			
		});
	}
