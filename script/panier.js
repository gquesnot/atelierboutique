
export const addToCartEvent = () => {

    //on sélectionne les boutons d'ajout aux paniers (html collection)
    const btnAddToCartElts = document.getElementsByClassName("btn-add-to-cart");

    //on transforme en array exploitable avec le spread operator >>> ... <<<
    const btnAddToCartEltsArray = [...btnAddToCartElts];

    //on ajoute sur chacun des boutons un écouteurs d'événements (ici on surveille le click du bouton)
    btnAddToCartEltsArray.forEach( element => {
        element.addEventListener("click", addToCart);
    });
    
};

export const addToCart = () => {

};