import React, {useState} from "react"; 
import {useCart} from "react-use-cart";

function Cart(){
    const { isEmpty, items, totalItems, totalUniqueItems } = useCart();
    if (isEmpty) 
    return <p>Empty</p>



    return(

        <>
        
        <h5>Cart({totalItems}) total unique items: ({totalUniqueItems})</h5>
        </>
    )


};


export default Cart; 