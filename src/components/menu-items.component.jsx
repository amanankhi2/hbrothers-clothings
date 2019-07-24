import React from 'react';
import './menu-items.styles.scss';


const MenuItems = (props) => {
    return(
        <div className="menu-items">
            
                <div className='content'>
                <h1 className= 'title'>{props.title}</h1>
                <span className='subtitle'>{props.subtitle}</span>
                </div>
          
        </div>
    )
    
}
    

export default MenuItems;
