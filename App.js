import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
  - Logo
  - Nav Items
Body
  - Search
  - RestaurantCOntainer
    - RestaurantCard
     - image
     - name 
     - star rating , cuisine , delivery time 
Footer
  - Copyright
  - Links
  - Address
  - Contact
*/

const styleCard = {
  backgroundColor: "#ccc",
};

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        alt="Logo design"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://eastindianrecipes.net/wp-content/uploads/2022/09/How-to-Make-North-Indian-Thali-Vegetarian-7-500x500.jpg"
        alt="food-image"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard resName="Meghana Foods" cuisine="North Indian ,Asian" />
        <RestaurantCard resName="Khana khajana" cuisine="Burger" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
