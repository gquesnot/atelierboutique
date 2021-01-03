
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

});
