import React, { useEffect, useState ,useRef} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop';
import Header from './component/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action'
import {selectCurrentUser} from './redux/user/user-selector'
import {createStructuredSelector} from 'reselect'; 
import CheckoutPage from './pages/checkout/checkout';




function App(props) {
  
const unsubscribeFromAuth = useRef(null); 
const { setCurrentUser } = props;
useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth => {
        // setUser(user);
        // console.log(user);
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
  
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
                ...snapShot.data()
            });
            // setUser({
            //   currentUser: {
            //     id: snapShot.id,
            //     ...snapShot.data()
            //   }
            // });
  
            
          });
        }
       setCurrentUser(userAuth); 
    });
   
    return () => {
        unsubscribeFromAuth();
    }
}, []);    
  return (
   <div>
   <Header />
     <Switch>
     <Route exact path='/' component={Homepage}/>
     <Route  path='/shop' component={ShopPage} />
     <Route exact path='/signin' render={() => props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
    <Route exact path='/checkout' component={CheckoutPage}/>
     </Switch>
    
   </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
