import React, {useState} from "react";
import { useCart } from "react-use-cart";
import {AiTwotoneFire } from "react-icons/ai";



function PotionsCard({potion, handleDelete, setPotions, potions}){
const { addItem} = useCart();
// const [volatility, setVolatility] = useState("0");
  // const [cart, setCart] = useState([]);

  // const addToCart = (potion) => {
  //     console.log("added to cart")
  //     setCart([...cart, potion]);
  // };

  function handleVolat(potion){
    let updatedPotions = potions.map(p => {
      if (p.id === potion.id) {
        p.volatility += 1
        return p
      }else{
        return p 
      }
    })
    setPotions(updatedPotions)
    let params = {
      volatility: potion.volatility 
    }
    fetch(`http://localhost:9393/potions/${potion.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
    })
    .then((response) => response.json())
  }

return (
    <>
  <div className="cards">
 <div class="card">
  <div class="card-body">
    <h5 class="card-title" style={{fontSize:40}}>{potion.name}</h5>
    <p class="card-text" style={{fontSize: 30, color: "#947b79"}}>
    <br/>
    {potion.desc}
    <br/>
    price: ${potion.price}
    </p>
    Volatility Level: {potion.volatility}
   { potion.volatility === 3 ?  <button disabled >{<AiTwotoneFire/>}</button> :  <button onClick={(e)=> handleVolat(potion)}>{<AiTwotoneFire/>}</button>}
    {/* FIX ME  {potion.img_url} */}
    {/* <button className="button2" 
    onClick={addItem(potion)}>Add</button> */}
    <br/>
    {potion.affect.element}
  </div>
  <button onClick={(e)=> handleDelete(potion.id)}className="button2">Delete</button>
</div>
</div>
    </>
)
};

export default PotionsCard;