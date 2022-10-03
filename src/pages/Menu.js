import React from "react";
import { MenuList } from "../savers/MenuList";
import MenuItem from "../component/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">OUR MENU</h1>
      <div
        className="menuList"
        styles={{
          height: "35px",
          display: "grid",
        }}
      >
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

