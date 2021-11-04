import React from "react";
import {AiTwotoneFire } from "react-icons/ai";



function PotionsCard({potion, handleDelete, setPotions, potions}){


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
   
    <div style={{fontSize: 25, color: "#d42019"}}> Volatility Level: {potion.volatility}
    { potion.volatility === 3 ?  <button disabled >{<AiTwotoneFire/>}</button> :  <button className="button3" onClick={(e)=> handleVolat(potion) }>{<AiTwotoneFire/>}</button>}
    </div>

    <br/>
    <div className="Affect-display">
    {potion.affect.element}
    </div>
  </div>
  <button onClick={(e)=> handleDelete(potion.id)}className="button2">Delete</button>
</div>
</div>
    </>
)
};

export default PotionsCard;