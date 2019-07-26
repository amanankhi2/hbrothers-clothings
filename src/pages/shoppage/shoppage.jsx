import React from 'react'
import Shop_Data from './shopdata';
import ShopItemsComponent from '../../components/shop-items/shop-items.component'

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = Shop_Data;
    }

render(){
    return(
        <div className="Collection-Preview">
            {this.state.map(({id,...shopPreviewData}) => (
               <ShopItemsComponent key={id} {...shopPreviewData}/>
            ))}
        </div>
    )
}

}

export default ShopPage;