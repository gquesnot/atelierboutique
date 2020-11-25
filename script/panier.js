
export const addToCartEvent = () => {

/*     //on sélectionne les boutons d'ajout aux paniers (html collection)
    const btnAddToCartElts = document.getElementsByClassName("btn-add-to-cart");

    //on transforme en array exploitable avec le spread operator >>> ... <<<
    const btnAddToCartEltsArray = [...btnAddToCartElts];

    //on ajoute sur chacun des boutons un écouteurs d'événements (ici on surveille le click du bouton)
    btnAddToCartEltsArray.forEach( element => {
        element.addEventListener("click", addToCart);
    }); */

    $(".btn-add-to-cart").each((index, value) => {
        value.dataset.id =  index;
    });

    $(".btn-add-to-cart").click(addToCart);
    
};

export const addToCart = (elem) => {
    var id  = elem.currentTarget.dataset.id;
    var panierArray=  JSON.parse(localStorage.getItem("panier"));
    var panierItem;
    var idx;
    panierArray.forEach((value, index)=>{
    	if (value.id == id)
    	{
    		idx= index;
    		panierItem = value;
    	}
    });
    
    if (panierItem == undefined)
    {
    	panierItem = {id: id, quantity: 1};
    	panierArray.push(panierItem);
    }
    else if (panierItem.quantity >= 9)
    {
    	console.log("already 9 items");
    	console.log(elem);
    	$(elem.currentTarget).prop("disabled",true);
    	$(elem.currentTarget).css("opacity", "0.25");
    }
    else{
    	panierItem.quantity += 1;
    	panierArray[idx]=  panierItem;
    }
    
    localStorage.setItem("panier", JSON.stringify(panierArray));
};



export const removeFromCart = (elem) => {
	var id = elem.currentTarget.dataset.id;
	var panierArray=  JSON.parse(localStorage.getItem("panier"));
	panierArray.forEach((value, index) => {
		if (value.id == id)
		{
			panierArray.splice(index, 1);
			//break;
		}
	});
	localStorage.setItem("panier", JSON.stringify(panierArray));
};