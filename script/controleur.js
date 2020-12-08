import { catalog } from "../data/catalogue.js";
import { search } from "./search.js";
import { generateArticle } from "./generatearticle.js";
import { addToCartEvent, addToCart, removeFromCart, generatePanier } from "./panier.js";


$(function(){

	
	generateArticle(1);
	search();
	addToCartEvent();

	generatePanier();
	var panierArray = JSON.parse(localStorage.getItem("panier")) || [];
	localStorage.setItem("panier", JSON.stringify(panierArray));
	


});
