import React from 'react'
import SHOP_DATA from './shopdata';
import CollectionsPreview from '../../components/collections-preview/collections-preview.component'

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }

render(){
    const {collections} = this.state; 
    return(
        <div className="Collection-Preview">
            {collections.map(({id,...shopPreviewData}) => (
               <CollectionsPreview key={id} {...shopPreviewData}/>
            ))}
        </div>
    )
}

}

export default ShopPage;