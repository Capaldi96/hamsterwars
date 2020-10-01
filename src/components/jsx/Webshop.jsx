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

const Webshop = () => {
    const [count, setCount] = useState(0)
    const [shoppingcart, setShoppingcart] = useState(false)
    const [cartItem, setCartItem] = useState(null);
    const [disablecart, setDisablecart] = useState(true);
    const [list, setList] = useState([])
    const [totalCost, setTotalCost] = useState(0);

    let itemList = [
        {
            type: "White T-shirt",
            id: 1,
            cost: 300,
            image: whiteTshirt,
            count: 0
        },
        {
            type: "Purple T-shirt",
            id: 2,
            cost: 350,
            image: purpleTshirt,
            count: 0
        },
        {
            type: "Baseballcap",
            id: 3,
            cost: 150,
            image: whiteCap,
            count: 0
        },
            {
            type: "Golfball",
            id: 4,
            cost: 40,
            image: golfball,
            count: 0
        },
        {
            type: "Mousepad",
            id: 5,
            cost: 200,
            image: mousepad,
            count: 0
        },
        {
            type: "Ps4 Controller",
            id: 6,
            cost: 500,
            image: controller,
            count: 0
        },
        {
            type: "Classic Ps",
            id: 7, 
            cost: 2000,
            image: classicps,
            count: 0
        },
        {
            type: "Sticker",
            id: 8,
            cost: 5,
            image: sticker,
            count: 0
        },
        {
            type: "Drone",
            id: 9,
            cost: 5000,
            image: drone,
            count: 0
        },
        {
            type: "Facemask",
            id: 10,
            cost: 15,
            image: facemask,
            count: 0
        }
    ];

        let products = itemList.map(items => {

            let item = 
                <div key={items.id}>
                    <h2>{items.type}</h2>
                    <img className="image" alt="product" src={items.image}></img>
                    <p className="price">${items.cost}</p>
                    <button onClick={() => onBuy(items.id)} className="buy-btn">Buy</button>
                </div>
            return item;
        });

        let newCost = 0;

        

        function onBuy (id) {
            setDisablecart(false);

            //Chooses the item you click
            let checkoutItem = itemList.find(item => item.id === id);

            setCartItem(checkoutItem);
            setCount(count + 1);

            // For the shoppingcart array
            let array = [...list];
            array.push(checkoutItem);
            setList(array);

            //COST
            newCost = newCost + checkoutItem.cost;
            setTotalCost(newCost);
        };


    return(
        <div id="webshop">
            {shoppingcart ? <ShoppingCart totalcost={totalCost} list={list} count={count} cartItem={cartItem} /> : null}
                <div className="container">
                    <div className="shop">
                        { disablecart ? <img alt="shopping-cart-icon" className="shopping-cart disabled" src={require('../../assets/shopping-cart.png')}></img> : <a href="/ShoppingCart" onClick={ e => {e.preventDefault(); setShoppingcart(true); }} >
                        <img alt="shopping-cart" className="shopping-cart" src={require('../../assets/shopping-cart.png')}></img> {count} </a>} 
                    </div>
                    <main>
                        {products}
                    </main>
                    <div></div>
                </div>
        </div>
    )
}

export default Webshop;