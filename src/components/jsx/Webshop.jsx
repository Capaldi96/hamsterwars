import React, { useState } from 'react';
import '../scss/Webshop.scss';
import ShoppingCart from './ShoppingCart'
import whiteTshirt from "../../assets/preview.jpg";
import purpleTshirt from "../../assets/front_large_extended.jpg"
import whiteCap from "../../assets/basebollkeps.jpg"
import golfball from "../../assets/golfball.png"
import mousepad from "../../assets/mousepad.jpg"

const Webshop = () => {
    const [count, setCount] = useState(0)
    const [shoppingcart, setShoppingcart] = useState(false)

    function onBuy() {
        setCount(count + 1);
        console.log(count)
    }

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
        }
    ];

       const products = itemList.map(items => {

           let item = 
           <div key={items.id}>
                <h2>{items.type}</h2>
                <img className="image"  src={items.image}></img>
                <p className="price">${items.cost}</p>
                <button onClick={onBuy} className="buy-btn">Buy</button>
            </div>
            return item;
        })

    return(
        <div id="webshop">
                <div className="container">

                {shoppingcart ? <ShoppingCart count={count} /> : null}

                    <div className="shop">
                    <a href="/ShoppingCart" onClick={(e)=>{e.preventDefault(); setShoppingcart(true);}} > <img className="shopping-cart" src={require('../../assets/shopping-cart.png')}></img> {count} </a> 
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