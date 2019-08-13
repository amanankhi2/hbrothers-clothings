import React from 'react';

import {SignInAndSignOutContainer} from './signin-and-signup.styles'

import SingIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SigninSignup = () => {
    
        return(
            <SignInAndSignOutContainer>
                <SingIn />
                <SignUp />
            </SignInAndSignOutContainer>
        )
    
}

export default SigninSignup;