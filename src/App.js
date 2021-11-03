
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Potions from "./components/Potions";
import Order from "./components/Order";
import Cart from './components/Cart';
import {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { CartProvider } from 'react-use-cart';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {

  const [potions, setPotions] = useState([])
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:9393/potions")
    .then(response => response.json())
    .then(potionsData => {
      setPotions([...potionsData])
      
    })
  }, [])

  const addOrder = (potionsData) => {
    let params = {
      ...potionsData, 
      affect_id:1
    }
    fetch("http://localhost:9393/potions", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(potionsData => {
      setPotions([...potions, potionsData])
    })
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:9393/potions/${id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    // .then(() => {
    //   history.push("/Potions")
  // })
  };
  

  return (
    <div className="App">
      <CartProvider>
      <Router>
      <NavBar />

      <Route exact path="/">
      <Home />
      </Route>

      <Route exact path="/Potions">
      <Potions potions={potions} setPotions={setPotions} handleDelete={handleDelete}/>
      </Route>


      <Route exact path="/Order">
      <Order addOrder={addOrder} />
      </Route>

      <Route exact path="/Cart">
      <Cart potions={potions} />
      </Route>
      </Router>
      </CartProvider>
      
    </div>
  );
}

export default App;
