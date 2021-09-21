import React from 'react';
import './collection-overview.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection_preview/collection_preview';
import { selectCollectionForPreview } from '../../redux/shop/shop-selector';
function CollectionOverview (props)  {
  return(
    <div className='collections-overview'>
    {/* <h1>CollectionOverview</h1> */}
    
      {props.collection.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
    
    
      }
  
  const mapStateToProps = createStructuredSelector({
    collection: selectCollectionForPreview
  });
export default connect(mapStateToProps)(CollectionOverview);


// {  
    //         props.collection.map(({id,...otherCollectionProps}) =>(
    //             <CollectionPreview key={id} {...otherCollectionProps} />
    //         ))
    //     }

    // const mapStateToProps =createStructuredSelector({
        //     collection:selectCollections
        // })
        // export default connect(mapStateToProps)(ShopPage);