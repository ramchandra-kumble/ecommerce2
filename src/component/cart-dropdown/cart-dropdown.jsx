import React from 'react';
import CustomButton from '../Custom-button/custom-button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart-action';
import {selectCartItems} from '../../redux/cart/cart-selector';
function CartDropdown(props){
    return <div className='cart-dropdown'>
        <div className='cart-items' >
            {  props.cartItems.length ? ( props.cartItems.map(cartItem =>(
                    <CartItem key={cartItem.id} item={cartItem} />
                )))
                : (<span className='empty-message'>
                    Your Cart is Empty
                </span>)
               
            }
        </div>
        <CustomButton onClick={() =>{props.history.push('/checkout'); props.dispatch(toggleCartHidden());}}>GO TO CHECKOUT</CustomButton>
    </div>
}
const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));