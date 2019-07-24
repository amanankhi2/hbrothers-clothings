import React from "react";
import MenuItems from "./menu-items.component";
import "./directory.styles.scss";

const Directory = props => {
  return (
    <div className="directory-menu">
      {props.menuItems.map(item => (
        <MenuItems title={item.title} subtitle={item.subtitle}/>
      ))}
    </div>
  );
};

export default Directory;
