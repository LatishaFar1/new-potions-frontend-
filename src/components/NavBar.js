import React from "react";
import {Link} from "react-router-dom";
import { GiPotionBall, GiCauldron, GiQuillInk, GiShoppingCart } from "react-icons/gi";

function NavBar(){

    return(
        <>
       <nav className="nav">
       <div>
       <GiCauldron />
       <Link to="/" className="nav-link">Home </Link>
       <GiPotionBall />
       <Link to="/Potions" className="nav-link">Potions </Link>
       <GiQuillInk />
       <Link to="/Order" className="nav-link">Place an Order </Link>
       <GiShoppingCart />
       <Link to="/Cart" className="nav-link">Cart </Link>
        </div>
       </nav>

        </>
    )


};


export default NavBar;