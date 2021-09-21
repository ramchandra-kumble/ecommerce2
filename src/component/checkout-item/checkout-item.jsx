import React from 'react';
import './checkout-item.scss';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem,removeItem} from '../../redux/cart/cart-action';

function CheckoutItem(props){
    return(
    <div className='checkout-item'>
    <div className='image-container'>
        <img src={props.cartItem.imageUrl} alt='item' />
    </div>
    <span className='name'>{props.cartItem.name}</span>

    <span className='quantity'>
    <div className='arrow' onClick={() =>props.removeItem(props.cartItem)}>&#10094;</div>
    <span className='value'> 
    {props.cartItem.quantity}
    </span>
    <div className='arrow' onClick={() =>props.addItem(props.cartItem)}>&#10095;</div>
    </span>
    <span className='price'>{props.cartItem.price}</span>
    <div className='remove-button' onClick={() =>props.clearItem(props.cartItem)}
    >&#10005;</div>
    </div>)
}
const mapDispatchToProps = dispatch =>({
    clearItem: item =>dispatch(clearItemFromCart(item)),
    addItem:item =>dispatch(addItem(item)),
    removeItem:item =>dispatch(removeItem(item))
});
export default connect(null,mapDispatchToProps)(CheckoutItem);