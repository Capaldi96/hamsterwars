import React, { useState } from 'react';
import '../scss/Webshop.scss';
import ShoppingCart from './ShoppingCart'

const Webshop = () => {
    const [count, setCount] = useState(0)
    const [shoppingcart, setShoppingcart] = useState(false)

    function onBuy() {
        setCount(count + 1);
        console.log(count)
    }

    let itemList = [{
        type: "White T'shirt",
        id: 1},
        {type: "Blue T-shirt",
        id: 2}]

    return(
        <div id="webshop">
                <div className="container">

                {shoppingcart ? <ShoppingCart count={count} /> : null}

                    <div className="shop">
                    <a href="/ShoppingCart" onClick={()=>{setShoppingcart(true);}} > <img className="shopping-cart" src={require('../../assets/shopping-cart.png')}></img> {count} </a> 
                    </div>
                    <main>

                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button onClick={onBuy} className="buy-btn">Buy</button>
                        </div>

                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button onClick={onBuy} className="buy-btn">Buy</button>
                        </div>

                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button onClick={onBuy} className="buy-btn">Buy</button>
                        </div>

                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button onClick={onBuy} className="buy-btn">Buy</button>
                        </div>

                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button onClick={onBuy} className="buy-btn">Buy</button>
                        </div>

                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button onClick={onBuy} className="buy-btn">Buy</button>
                        </div>

                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button onClick={onBuy} className="buy-btn">Buy</button>
                        </div>

                    </main>
                    <div></div>
                </div>
        </div>
    )
}

export default Webshop;