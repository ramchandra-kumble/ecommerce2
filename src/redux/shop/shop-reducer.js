 import shopData from './shopData';
import ShopData from './shopData';
const INITIAL_STATE ={
    collection : ShopData
};
const shopReducer =(state =INITIAL_STATE,action) =>{
    switch(action.type){
        default:return state;
    }
}
export default shopReducer