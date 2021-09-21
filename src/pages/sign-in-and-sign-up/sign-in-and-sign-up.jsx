import React from 'react';
import './sign-in-and-sign-up.scss';
import SignIn from '../../component/sign-in/sign-in';
import SignUp from '../../component/sign-up/sign-up';
function SignInAndSignUpPage(){
    return <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
}
export default SignInAndSignUpPage;