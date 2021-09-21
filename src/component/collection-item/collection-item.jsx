import React from 'react';
import './collection-item.scss';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-action';
import CustomButton from '../Custom-button/custom-button';
function CollectionItem(props){
    return <div className='collection-item'>
        <div className='image'
        style={{backgroundImage:`url(${props.item.imageUrl})`}}
         />
         <div className='collection-footer'>
             <span className='name'>{props.item.name}</span>
             <span className='price'>{props.item.price}</span>
         </div>
        <CustomButton onClick={() =>props.addItem(props.item)} inverted>ADD TO CART</CustomButton>
    </div>
}

const mapDispatchToProps=dispatch =>({
    addItem: item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);