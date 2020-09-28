import React, { useState } from 'react';
import '../scss/Webshop.scss';
import ShoppingCart from './ShoppingCart'
import whiteTshirt from "../../assets/preview.jpg";
import purpleTshirt from "../../assets/front_large_extended.jpg"
import whiteCap from "../../assets/basebollkeps.jpg"
import golfball from "../../assets/golfball.png"
import mousepad from "../../assets/mousepad.jpg"
import controller from "../../assets/controller.png"
import sticker from "../../assets/sticker.png"
import classicps from "../../assets/classicps.png"
import drone from "../../assets/drone2.png"
import facemask from "../../assets/facemask.png"

const Webshop = props => {
    const [count, setCount] = useState(0)
    const [shoppingcart, setShoppingcart] = useState(false)
    const [cost, setCost] = useState(0)
    const [cartItem, setCartItem] = useState(null);
    const [disablecart, setDisablecart] = useState(true);

   
    let itemList = [
        {
            type: "White T-shirt",
            id: 1,
            cost: 300,
            image: whiteTshirt
        },
        {
            type: "Purple T-shirt",
            id: 2,
            cost: 350,
            image: purpleTshirt
        },
        {
            type: "Baseballcap",
            id: 3,
            cost: 150,
            image: whiteCap
        },
            {
            type: "Vice Golfball",
            id: 4,
            cost: 40,
            image: golfball
        },
        {
            type: "Mousepad",
            id: 5,
            cost: 200,
            image: mousepad
        },
        {
            type: "Ps4 Controller",
            id: 6,
            cost: 500,
            image: controller
        },
        {
            type: "Classic Ps",
            id: 7,
            cost: 2000,
            image: classicps
        },
        {
            type: "Sticker",
            id: 8,
            cost: 5,
            image: sticker
        },
        {
            type: "Drone",
            id: 9,
            cost: 5000,
            image: drone
        },
        {
            type: "Facemask",
            id: 10,
            cost: 15,
            image: facemask
        }
    ];

       let products = itemList.map(items => {

           let item = 
                <div key={items.id}>
                    <h2>{items.type}</h2>
                    <img className="image"  src={items.image}></img>
                    <p className="price">${items.cost}</p>
                    <button onClick={() => onBuy(items.id)} className="buy-btn">Buy</button>
                </div>
            return item;
        });

        

        function onBuy (id) {
            setCount(count + 1);
            let checkoutItem = itemList.find(item => item.id === id);
            setCartItem(checkoutItem);
            setCost(checkoutItem.cost * count);
            console.log(checkoutItem.cost * count);
            setDisablecart(false);
        }
    
    return(
        <div id="webshop">
            {shoppingcart ? <ShoppingCart cost={cost} count={count} cartItem={cartItem} /> : null}
                <div className="container">
                    <div className="shop">
                        { disablecart ? <img className="shopping-cart disabled" src={require('../../assets/shopping-cart.png')}></img> : <a href="/ShoppingCart" onClick={ e => {e.preventDefault(); setShoppingcart(true);}} > <img className="shopping-cart" src={require('../../assets/shopping-cart.png')}></img> {count} </a>} 
                    </div>
                    <main>
                        {products}
                    </main>
                    <div></div> // Just for the grid to work.
                </div>
        </div>
    )
}

export default Webshop;