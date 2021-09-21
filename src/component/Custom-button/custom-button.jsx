import React from 'react';
import './custom-button.scss';
function CustomButton(props){
    return <button
    className={`${props.inverted ? 'inverted' : ''} ${
      props.isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
     {...props}>
    {props.children}
    </button>
}
export default CustomButton;
// return <button className={`${props.isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...props}></button>