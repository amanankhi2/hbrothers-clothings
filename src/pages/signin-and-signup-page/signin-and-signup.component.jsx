import React from 'react';
import './signin-and-signup.styles.scss';
import SingIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SigninSignup = () => {
    
        return(
            <div className='signIn-signUp'>
                <SingIn />
                <SignUp />
            </div>
        )
    
}

export default SigninSignup;