import { catalog } from "../data/catalogue.js";
import { search } from "./search.js";
import { generateArticle } from "./generatearticle.js";
import { addToCartEvent, addToCart } from "./panier.js";


$(function(){

	
	generateArticle(1);
	search();
	addToCartEvent();

	


});
