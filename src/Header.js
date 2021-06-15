import React from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ cart }, dispatch] = useStateValue();
  console.log(cart);

  return (
    <nav className="header">
      <h4>My Ecommerce App</h4>
      <div className="header__nav">
        <Link to="/signOut" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Roshan</span>
            <span className="header__optionLineTwo">Sign Out</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
