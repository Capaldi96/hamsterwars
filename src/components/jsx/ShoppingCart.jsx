import React, { useState } from 'react';
import '../scss/ShoppingCart.scss';
import Webshop from './Webshop'

const ShoppingCart = props => {
    const [webshop, setWebshop] = useState(false);
    /* const [list, setList] = useState([]) */


    let newList = [];

    console.log("cart item is: ", props.cartItem)

    let obj = 
    <div className="cart" key={props.cartItem.id}>
        <img className="cart-img" src={props.cartItem.image}></img>
        <p>{props.cartItem.type}</p>
        <p>Quantity: {props.count}</p>
        <p>Total cost: {props.cost}</p>
    </div>

    /* setList() */

    newList.push(obj)

    console.log("List with object: ", newList)

    return(
    <div>
        {webshop ? <Webshop  /> : null }
        <div id="shoppingcart">
            <div className="container">
                <div></div>
                <div className="header-cart">
                    <div className="flex">
                        <a href="/Webshop" onClick={ e => { e.preventDefault(); setWebshop(true)}} >  <p className="to-shop"> Back to shop</p></a>
                        <h2 className="shopping-header">Your Shopping Cart</h2>
                    </div>
                    <div className="cart-container">
                        
                        {newList}

                    </div>
                </div>
                <div></div>
            </div>
        </div>
        </div>
        )
}

export default ShoppingCart;