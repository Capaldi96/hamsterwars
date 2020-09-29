import React, { useState, useEffect } from 'react';
import '../scss/ShoppingCart.scss';
import Webshop from './Webshop'

const ShoppingCart = props => {
    const [webshop, setWebshop] = useState(false);
    const [buy, showBuy] = useState(false);

/*     console.log(list) */

/*     useEffect(() => {
        setList([...list, props.cartItem])
    }, [props.cartItem]) */

    let obj = props.list.map((items, i )=> {

     return  ( <div id={items.id} className="cart" key={i}>
            <img className="cart-img" src={items.image}></img>
            <h3 className="cart-properties">{items.type}</h3>
            <h3 className="cart-properties">Cost: {items.cost}</h3>
        </div>);
    
    });


    let buyMessage = 
    <div className="buyMessage">
        <div className="innerText">
            <h2 className="h2-shoppingcart">Thank you for your order!</h2>
            <h2>Your total was: {props.totalcost}$</h2>
            <a href="/Webshop" onClick={ e => { e.preventDefault(); setWebshop(true)}} >  <p className="to-shop-after-click"> Back to shop</p></a>
        </div>
    </div>


    return(
    <div>
        {webshop ? <Webshop  /> : null }
        <div id="shoppingcart">
            <div className="container">
                <div></div>
                { buy ?  buyMessage :  <div className="header-cart">
                    
                    <div className="flex">
                        <a href="/Webshop" onClick={ e => { e.preventDefault(); setWebshop(true)}} >  <p className="to-shop"> Back to shop</p></a>
                        <h2 className="shopping-header">Your Shopping Cart</h2>
                    </div>
                    
                    <div className="cart-container">
                        
                        {obj}

                    <h3 className="h3-shoppingcart">Total cost: {props.totalcost}$</h3>
                    <button className="buy" onClick={()=>{showBuy(true)}}> Finish </button>
                   
                    </div>
                </div> }
               
                <div></div>
            </div>
        </div>
    </div>
    )
}

export default ShoppingCart;