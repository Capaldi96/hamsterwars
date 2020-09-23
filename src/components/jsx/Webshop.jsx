import React, { useState } from 'react';
import '../scss/Webshop.scss';

const Webshop = () => {

    return(
        <div id="webshop">
                <div className="container">
                    <div className="shop">
                        <img className="shopping-cart"  src={require('../../assets/shopping-cart.png')}></img>
                    </div>
                    <main>

                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button className="buy-btn">Buy</button>
                        </div>
                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button className="buy-btn">Buy</button>
                        </div>
                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button className="buy-btn">Buy</button>
                        </div>
                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button className="buy-btn">Buy</button>
                        </div>
                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button className="buy-btn">Buy</button>
                        </div>
                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button className="buy-btn">Buy</button>
                        </div>
                        <div>
                            <h2>Hamster T-shirt</h2>
                            <img className="image"  src={require('../../assets/preview.jpg')}></img>
                            <button className="buy-btn">Buy</button>
                        </div>

                    </main>
                    <div></div>
                </div>
        </div>
    )
}

export default Webshop;