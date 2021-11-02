import React, {useState} from "react";


function Order({addOrder}){

// const[date, setDate] = useState("");
const[name, setName] = useState("");
const[desc, setDesc] = useState("");
const[price, setPrice] = useState("");
const[volatility, setVolatility] = useState("");
const [formInfo, setFormInfo] = useState({
    name: "",
    desc: "",
    price: "",
    volatility: ""
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
        <label>potion name </label>
            <input type="text" name="name" onChange={handleChange} value={formInfo.name}/>
            <br/>
        <label>what do you want it to do</label>
        <input type="text" name="desc" onChange={handleChange} value={formInfo.desc}/>
            <br/>
         {/* <label>when you need it by</label>
         <input type="date" onChange={(event)=> setDate(event.target.value)} value={formInfo["date"]}/> */}
        <label>Proposed Price</label>
        <br/>
        <input type="integer" name="price" onChange={handleChange} value={formInfo.price}/>
        <br/>
        <label>Volatility Level (1-3)</label>
        <br/>
        <input type="integer" name="volatility" maxLength="3" onChange={handleChange} value={formInfo.volatility}/>
        <br/>
         <button className="button2">Submit</button>
        </form>

    
        </>
    )
};


export default Order;