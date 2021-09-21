import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton(props){
    const priceForStripe = props.price*100;
    const publishableKey ='pk_test_51HnJYdKUqqI7iXcneSzmdk92i6L52bnH2K1arJil73alCF24W5jDrG7cnILW522aCbkmGG9IpGUHZdpDWmhcBghJ00KSJ0RcEu';
    function onToken(token){
        console.log(token);
        alert('Payment Succesful');
    }
    return(
        <StripeCheckout 
        label='Pay Now'
        name='Crown Clothing ltd.'
        billingAddress
        shippingAddress
        // image='http:/svgshare.com/i/cuz.svg'
        description={`Your total is $${props.price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />
    )
}
export default StripeCheckoutButton;
