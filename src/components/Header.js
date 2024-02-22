import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const handleClick = () => {
    setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
    // btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  return (
    <div className="flex justify-between items-center shadow-lg mb-4">
      <div className="logo-container bg-none">
        <img className="w-[100px]" src={LOGO_URL} alt="Logo design" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 gap-4 ">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Us
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/grocery"
              style={{ textDecoration: "none", color: "black" }}
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              Cart - {cartItems.length}
            </Link>
          </li>
          <button className="login-btn" onClick={handleClick}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
