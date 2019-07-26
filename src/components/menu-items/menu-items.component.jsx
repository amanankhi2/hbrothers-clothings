import React from "react";
import {withRouter} from 'react-router-dom';
import "./menu-items.styles.scss";

const MenuItems = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div className={`${size} menu-items`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

// to get history and match methods need to import withRouter (best Method)
// however it can be done by method pooling but it will create problems
export default withRouter(MenuItems);
