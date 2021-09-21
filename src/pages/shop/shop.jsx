import React from 'react';
import {Route} from 'react-router-dom';
import Collection from '../collection/collection';

import CollectionOverview from '../../component/collection-overview/collection-overview';
import collectionItem from '../../component/collection-item/collection-item';



function ShopPage(props){
    console.log(props.match);
    return(<div className='shop-page'>
        
       <Route exact path ={`${props.match.path}`} component= {CollectionOverview}/>
       <Route path={`${props.match.path}/:collectionId`} component={Collection} />
       
    </div>)
}


export default ShopPage;


