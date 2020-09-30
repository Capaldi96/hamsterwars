import React, { useState, useEffect } from 'react';
import '../scss/ShoppingCart.scss';
import Webshop from './Webshop'

const ShoppingCart = props => {
    const [webshop, setWebshop] = useState(false);
    const [buy, showBuy] = useState(false);
    const [newlist, setNewlist] = useState(props.list)
    const [emptyMessage, setEmptyMessage] = useState(false);
    const [finishBtn, setFinishBtn] = useState(true);

/*     console.log(list) */

/*     useEffect(() => {
        setList([...list, props.cartItem])
    }, [props.cartItem]) */


    function deleteItem(id){
        const newList2 = newlist.filter( item => item.id !== id);
        console.log("The new list after delete click: ", newList2)
        setNewlist(newList2)
        if(newlist.length <= 1){
            setEmptyMessage(true)
            setFinishBtn(false)
        }
    }

    

    let asd =  <div className="finishdiv" ><h3 className="h3-shoppingcart">Total cost: {props.totalcost}$</h3>
    <button className="buy" onClick={()=>{showBuy(true)}}> Finish </button> </div>
            
    

    let newList = newlist.map((items, i )=> {

        return  ( <div id={items.id} className="cart" key={i}>
               <img className="cart-img" src={items.image}></img>
               <h3 className="cart-properties">{items.type}</h3>
               <h3 className="cart-properties">Cost: {items.cost}</h3>
               <button className="deleteBtn" onClick={() => deleteItem(items.id)} >X</button>
           </div>);
       
       });


    let buyMessage = 
    <div className="buyMessage">
        <div className="innerText">
            <h2 className="h2-shoppingcart">Thank you for your order!</h2>
            <h2>Your total was: <strong>{props.totalcost}</strong>$</h2>
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
                        {emptyMessage ? <h3 className="emptycart">Shopping cart is empty! Go fill it up... <img className="sad" src={require('../../assets/sad.png')} /></h3> : null}
                        {newList}
                        {finishBtn ?  asd
                        : null}
                   
                    </div>
                </div> }
               
                <div></div>
            </div>
        </div>
    </div>
    )
}

export default ShoppingCart;