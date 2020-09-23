import React, { useState } from 'react';
import '../scss/ShoppingCart.scss';

const ShoppingCart = props => {

    return(
        <div id="shoppingcart">
            <div className="container">
                <div></div>
                <div className="header-cart">
                        <div className="flex">
                            <a href="/Webshop" >  <p className="to-shop"> Back to shop</p></a>
                            <h2 className="shopping-header">Your Shopping Cart</h2>
                        </div>
                    <div className="cart-container">
                    
                        <div className="cart">
                            <img className="cart-img" src={require('../../assets/preview.jpg')}></img>
                            <p>White Hamster T-shirt</p>
                            <p>Quantity: {props.count}</p>
                            <p>Total cost: 50$</p>
                        </div>

                        <div className="cart">
                            <img className="cart-img" src={require('../../assets/preview.jpg')}></img>
                            <p>T-SHIRT</p>
                            <p>Quantity: 1</p>
                            <p>Total cost: 50$</p>
                        </div>

                        <div className="cart">
                            <img className="cart-img" src={require('../../assets/preview.jpg')}></img>
                            <p>T-SHIRT</p>
                            <p>Quantity: 1</p>
                            <p>Total cost: 50$</p>
                        </div>

                    </div>
                </div>
                <div></div>
            </div>
        </div>
        )
}

export default ShoppingCart;