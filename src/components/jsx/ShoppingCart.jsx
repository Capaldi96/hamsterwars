import React, { useState, useEffect} from 'react';
import '../scss/ShoppingCart.scss';
import Webshop from './Webshop'

const ShoppingCart = props => {
    const [webshop, setWebshop] = useState(false);
    const [buy, showBuy] = useState(false);
    const [newlist, setNewlist] = useState(props.list)
    const [emptyMessage, setEmptyMessage] = useState(false);
    const [finishBtn, setFinishBtn] = useState(true);
    const [total, setTotal] = useState(null)

    // KÖRS DIREKT.
    useEffect(() => {
        reducer(props.list)

        // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   // DELETE FUNKTION FÖR PRODUKTERNA.
    function deleteItem(id){
        const filteredList = newlist.filter( item => item.id !== id);
        setNewlist(filteredList)
        reducer(filteredList)
        if(filteredList.length === 0){
            setEmptyMessage(true)
            setFinishBtn(false)
        }
    }

    // FINISH BTN OCH TOTAL COST TAS BORT OM DET INTE FINNS PRODUKTER.
    let finishMsg =  <div className="finishdiv" ><h3 className="h3-shoppingcart">Total cost: {total}$</h3>
    <button className="buy" onClick={()=>{showBuy(true)}}> Finish </button> </div>

    // MAPPAR IGENOM LISTAN AV OBJEKT SOM MAN KÖPT FRÅN WEBSHOP KOMPONENTEN.
    let newList = newlist.map((items, i )=> {

        return  ( <div id={items.id} className="cart" key={i}>
               <img className="cart-img" alt="product" src={items.image}></img>
               <h3 className="cart-properties">{items.type}</h3>
               <h3 className="cart-properties">Cost: {items.cost}</h3>
               <button className="deleteBtn" onClick={() => deleteItem(items.id)} >X</button>
           </div>);
       
    });

    // NY LISTA FÖR NYTT VÄRDE AV TOTALA PRISET.
    let newCostList = [];


    function reducer(list){

        if(list.length === 0){
            return
        }

        list.map(item => {
           let newTotalCost = newCostList.push(item.cost)
           return newTotalCost;
        })

        let total = newCostList.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue
            })
        setTotal(total)   
    }

    
    // MEDDELANDE NÄR MAN CHECKAR UT UR SHOPPEN.
    let buyMessage = 
    <div className="buyMessage">
        <div className="innerText">
            <img  className="hamster-dancing" src={require('../../assets/hamster_dancing.png')} alt="Hamster Icon"/>
            <h2 className="h2-shoppingcart">Thank you for your order!</h2>
            <h2>Your total was: <strong>{total}</strong>$</h2>
            <button className="to-shop-after-click" href="/Webshop" onClick={ e => { e.preventDefault(); setWebshop(true)}} > Back to shop</button>
        </div>
    </div>

    return(
    <div>
        { webshop ? <Webshop  /> : null }
        <div id="shoppingcart">
            <div className="container">
                <div></div>
                { buy ?  buyMessage :  <div className="header-cart">
                    
                    <div className="flex">
                        <a href="/Webshop" onClick={ e => { e.preventDefault(); setWebshop(true)}} >  <p className="to-shop"> Back to shop</p></a>
                        <h2 className="shopping-header">Your Shopping Cart</h2>
                    </div>
                    
                    <div className="cart-container">

                        { emptyMessage ? <h3 className="emptycart">Shopping cart is empty! Go fill it up... <img className="happy" alt="happy-icon" src={require('../../assets/happy.png')} /></h3> : null}
                        { newList}
                        { finishBtn ?  finishMsg : null}
                   
                    </div>
                </div> }
                <div></div>
            </div>
        </div>
    </div>
    )
}

export default ShoppingCart;