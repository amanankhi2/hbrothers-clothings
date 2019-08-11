import React from 'react'
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripePaymentButton = ({price})=> {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_vBTwJ7aVmuZ7PFMHNdDGd4O600Sh9uFAPY';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='HBrothers Clothings Ltd'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description= {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}


export default StripePaymentButton;