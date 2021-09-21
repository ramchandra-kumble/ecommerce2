import React, { useState } from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../Custom-button/custom-button';
import {signInWithGoogle,auth} from '../../firebase/firebase.utils'
function SignIn(props){
    const [state , setState] = useState({
        email : "",
        password : ""
    })
   async function handleSubmit(event){
        event.preventDefault(); 
        
        try{
            await auth.signInWithEmailAndPassword(state.email,state.password);
            setState(prevState => ({
                ...prevState,
                email : "",
                password:""
            }))
        }
        catch(error){
            console.log(error);
        }
        
       
        
    }
    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
        console.log("hellow")
    }
    return <div className='sign-in'>
        <h2>I already have an Account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput name="email" type="email" handleChange={handleChange} value={state.email} label='Email' />
            
            <FormInput name="password" type="password" handleChange={handleChange} value={state.password} label='password'/>
            <div className='buttons'>
            <CustomButton type="submit" >SignIn</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SignInWithGoogle</CustomButton>
            </div>
            
           

        </form>
    </div>
}
export default SignIn;
// class SignIn extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         email: '',
//         password: ''
//       };
//     }
  
//     handleSubmit = event => {
//       event.preventDefault();
  
//       this.setState({ email: '', password: '' });
//     };
  
//     handleChange = event => {
//       const { value, name } = event.target;
  
//       this.setState({ [name]: value });
//     };
  
//     render() {
//       return (
//         <div className='sign-in'>
//           <h2>I already have an account</h2>
//           <span>Sign in with your email and password</span>
  
//           <form onSubmit={this.handleSubmit}>
//             <FormInput
//               name='email'
//               type='email'
//               handleChange={this.handleChange}
//               value={this.state.email}
//               label='email'
//               required
//             />
//             <FormInput
//               name='password'
//               type='password'
//               value={this.state.password}
//               handleChange={this.handleChange}
//               label='password'
//               required
//             />
//             <div className='buttons'>
//               <CustomButton type='submit'> Sign in </CustomButton>
//               <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
//                 Sign in with Google
//               </CustomButton>
//             </div>
//           </form>
//         </div>
//       );
//     }
//   }