import React, {useState} from "react";


function Order({addOrder}){



const [formInfo, setFormInfo] = useState({
    name: "",
    desc: "",
    price: "",
    volatility: "",
    affect_id: ""
})
 
    const handleChange = (event) => {
        setFormInfo((prev) => {
            return{
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    

    function handleSubmit(event){
    event.preventDefault()
    addOrder(formInfo)
    };

    return (
        <>
        <h2>Need something out of stock? </h2>
        <h3>order below:</h3>
        <form className="order-form" onSubmit={handleSubmit} >
        <label className="orderLabels">potion name </label>
            <input type="text" name="name" onChange={handleChange} value={formInfo.name}/>
            <br/>

        <label className="orderLabels">what do you want it to do</label>
        <input type="text" name="desc" onChange={handleChange} value={formInfo.desc}/>
            <br/>
        
        <label className="orderLabels">Proposed Price</label>
        <br/>
        <input type="integer" name="price" onChange={handleChange} value={formInfo.price}/>
        <br/>

        <label className="orderLabels">Volatility Level (1-3)</label>
        <br/>
        <input type="integer" name="volatility" maxLength="3" onChange={handleChange} value={formInfo.volatility}/>
        <br/>
        <br/>
        <label className="orderLabels">Affects: (1) Mind, (2) Body, (3) Environment </label>
        <br/>
        <input type="integer" name="affect_id" onChange={handleChange} value={formInfo.affect_id}/>

        <br/>
         <button className="button2">Submit</button>
        </form>

    
        </>
    )
};


export default Order;