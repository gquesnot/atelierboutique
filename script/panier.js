import { catalog } from "../data/catalogue.js";

export const addToCartEvent = () => {

    $(".btn-add-to-cart").each((index, value) => {
        value.dataset.id =  index;
    });

    $(".btn-add-to-cart").click(addToCart);
    
};

export const addToCart = (elem) => {
    var id  = elem.currentTarget.dataset.id;
    var panierArray = JSON.parse(localStorage.getItem("panier"));
    var panierItem;
    var idx;
    
    panierArray.forEach((value, index)=>{
        if (value.id == id)
        {
            idx= index;
            panierItem = value;
        }
    });
    

    //check if max is reached even by manually entering a number
    const isInputMax = elem.currentTarget.previousElementSibling.checkValidity();

    
    if (isInputMax) {
        $(elem.currentTarget.previousElementSibling).attr('max' ,  $(elem.currentTarget.previousElementSibling).attr('max') - elem.currentTarget.previousElementSibling.valueAsNumber);
    } else {
        //if true (so > max) then value = max
        $(elem.currentTarget.previousElementSibling).val(9);
    }

    $('#total')[0].textContent = parseInt($('#total')[0].textContent) + (elem.currentTarget.previousElementSibling.valueAsNumber * catalog[id].price);

    if (panierItem == undefined)
    {   
        panierItem = {id: id, quantity: elem.currentTarget.previousElementSibling.valueAsNumber};
        panierArray.push(panierItem);
        $('#panier').append(`
            <li  class="container d-flex justify-content-between lh-condensed align-items-center text-center">
                <div class="w-25">
                    <img src="${catalog[id].image}" alt="${catalog[id].name}" class="img-fluid rounded">
                </div>
                <div class="text-decoration-none text-body">
                    <div>${catalog[id].name}</div>
                    <div class="price">Prix: ${catalog[id].price * panierItem.quantity} €</div>
                    <div class="quantity">Quantité: ${panierItem.quantity} </div>
                </div>
                <div>
                    <button data-id="${id}" class="btn btn-sm btn-danger"><i class="fas fa-times"></i></button>
                </div>
            </li>
            <div id="divider${id}" class="dropdown-divider mt-3 mb-3"></div>
        `);
        $('#panier li button').click(removeFromCart);

    }
    else if (panierItem.quantity + parseInt($(elem.target.previousElementSibling).val()) <= 9){
        panierItem.quantity  += parseInt($(elem.target.previousElementSibling).val());
        panierArray[idx] =  panierItem;
        $('#panier li button').each((index, value) =>{
            if (value.dataset.id == id)
            {
                $(value).parent().parent().find('.price')[0].textContent = 'Prix: ' + catalog[id].price * panierItem.quantity + ' €';
                $(value).parent().parent().find('.quantity')[0].textContent = 'Quantité: ' + panierItem.quantity;

            }
        });
    }
    if (panierItem.quantity >= 9)
    {
        $(elem.currentTarget).prop("disabled",true);
        $(elem.currentTarget).css("opacity", "0.25");
    }
    $(elem.target.previousElementSibling).val(0);
    $(elem.target).prop("disabled", true).css("opacity","0.25");
    localStorage.setItem("panier", JSON.stringify(panierArray));

    cartCounter();
    ifEmptyCart();
};



export const removeFromCart = (elem) => {
    var id = elem.currentTarget.dataset.id;
    var panierArray=  JSON.parse(localStorage.getItem("panier"));

    $(elem.currentTarget).parent().parent().remove();

    $('#divider' + id).remove();

    panierArray.forEach((value, index) => {
        if (value.id == id)
        {
            panierArray.splice(index, 1);
            $($('.btn-add-to-cart').get(value.id)).prop("disabled", false);
            $($('.btn-add-to-cart').get(value.id)).css("opacity","1");
            $($($('.btn-add-to-cart').get(id))[0].previousElementSibling).attr('max', 9);
            $('#total')[0].textContent = parseInt($('#total')[0].textContent) - (value.quantity * catalog[id].price);

        }
    });

    localStorage.setItem("panier", JSON.stringify(panierArray));
    cartCounter();
    ifEmptyCart();
};



export const generatePanier =  () => {
    
    var panierArray = JSON.parse(localStorage.getItem("panier")) || [];
    var total = 0;
    if (panierArray != [])
    {
        panierArray.forEach((value, index) =>{
            $('#panier').append(`
                <li  class="container d-flex justify-content-between lh-condensed align-items-center">
                    <div class="w-25">
                        <img src="${catalog[value.id].image}" alt="${catalog[value.id].name}" class="img-fluid rounded">
                    </div>
                    <div class="text-decoration-none text-body">
                        <div>${catalog[value.id].name}</div>
                        <div class="price">Prix: ${catalog[value.id].price * value.quantity} €</div>
                        <div class="quantity">Quantité: ${value.quantity}</div>
                    </div>
                    <div>
                        <button data-id="${value.id}" class="btn btn-sm btn-danger"><i class="fas fa-times"></i></button>
                    </div>
                </li>
                <div class="dropdown-divider mt-3 mb-3"></div>
            `);
            total += catalog[value.id].price * value.quantity;
            $('#panier li button').click(removeFromCart);
            if (value.quantity >= 9)
            {
                $($('.btn-add-to-cart').get(value.id)).prop("disabled", true);
                $($('.btn-add-to-cart').get(value.id)).css("opacity","0.25");
            }
            $($($('.btn-add-to-cart').get(value.id))[0].previousElementSibling).attr('max', 9 - value.quantity);
        });
    }
    $('#total')[0].textContent = total;
    localStorage.setItem("panier", JSON.stringify(panierArray));
    cartCounter();
    ifEmptyCart();
};

export const ifEmptyCart = () => {
    const panierArray = JSON.parse(localStorage.getItem("panier")) || [];

    if (!panierArray || panierArray.length < 1) {
        $("#sidebar-wrapper").hide();
        $("#sidebarCollapse").hide();
    } else {
        $("#sidebar-wrapper").show();
        $("#sidebarCollapse").show();
    }
};

const cartCounter = () => {
    const panierArray = JSON.parse(localStorage.getItem("panier")) || [];
    const cartCounterElt = document.getElementById("cartCounter");

    let totalCart = 0;
    console.log(panierArray);
    if (panierArray && panierArray.length > 0) {
        panierArray.forEach(element => {
            console.log(Number(element.quantity));
            totalCart += Number(element.quantity);
        })
        cartCounterElt.innerHTML = totalCart;
    }
};
