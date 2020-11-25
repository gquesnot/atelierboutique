import { catalog } from "../data/catalogue.js";
import { search } from "./search.js";
import { generateArticle } from "./generatearticle.js";
import { addToCartEvent, addToCart, removeFromCart } from "./panier.js";


$(function(){

	
	generateArticle(1);
	search();
	addToCartEvent();
	var panierArray = JSON.parse(localStorage.getItem("panier")) || [];
	localStorage.setItem("panier", JSON.stringify(panierArray));
	


});
