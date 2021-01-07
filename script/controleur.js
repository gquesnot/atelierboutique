
import { search } from "./search.js";
import { generateArticle } from "./generatearticle.js";
import { addToCartEvent, generatePanier, ifEmptyCart } from "./panier.js";


$(function(){

	generateArticle(1);
	search();
	addToCartEvent();

	ifEmptyCart();
	generatePanier();
	var panierArray = JSON.parse(localStorage.getItem("panier")) || [];
	localStorage.setItem("panier", JSON.stringify(panierArray));

	//if input number reach 0 then disable it
	$(":input").bind('keyup mouseup', function () {
    if ($(this).val() == 0){
			$(this.nextElementSibling).prop("disabled", true).css("opacity","0.25");
		} else {
			$(this.nextElementSibling).prop("disabled", false).css("opacity","1");
		}
	});

});
