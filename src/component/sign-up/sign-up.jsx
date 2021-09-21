import React, { useState } from 'react';
import './sign-up.scss';
import FormInput  from '../form-input/form-input';
import CustomButton from '../Custom-button/custom-button';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
function SignUp(props){
    const [state , setState] = useState({
        displayName:"",
        email : "",
        password : "",
        confirmPassword:""
    })

    async function handleSubmit (event){
        event.preventDefault();
        const{displayName}=state;
        if(state.password !== state.confirmPassword){
            alert("password don't match");
            return;
        }
        try{
            const{user} =await auth.createUserWithEmailAndPassword(state.email,state.password);
            await createUserProfileDocument(user,{displayName});
            setState(prevState => ({
                ...prevState,
                email : "",
                password:"",
                confirmPassword:"",
                displayName:""
            }));
        }catch(error){
            console.log(error);
        }
    };
    function handleChange(event){
        const{name,value}=event.target;
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }




    return<div className='sign-up'>
            <h2 className='title'>I do not have an account </h2>
            <span>Sign up with your Email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={state.displayName}
                onChange={handleChange}
                label='Display Name'
                required
                ></FormInput>
                 <FormInput
                type='email'
                name='email'
                value={state.email}
                onChange={handleChange}
                label='Email'
                required
                ></FormInput>
                 <FormInput
                type='password'
                name='password'
                value={state.password}
                onChange={handleChange}
                label='Password'
                required
                ></FormInput>
                 <FormInput
                type='password'
                name='confirmPassword'
                value={state.confirmPassword}
                onChange={handleChange}
                label='Confirm password'
                required
                ></FormInput>
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
    </div>
}
export default SignUp;