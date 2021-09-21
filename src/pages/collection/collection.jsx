import React from 'react';
import './collection.scss';
import {connect} from 'react-redux';
import CollectionItem from '../../component/collection-item/collection-item';
import {selectCollections} from '../../redux/shop/shop-selector';

function Collection({collections}){
    
console.log(collections);
    return(
        <div className="collection-page">
        <h2 className="title">{collections.title}</h2>
        <div className="items">
            {collections.items.map(item =>(
                <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
        </div>
    )
}
// const mapStateToProps =(state,ownProps) =>({
//     collections:selectCollections(ownProps.match.params.collectionId)(state)
// })
const mapStateToProps = (state, ownProps) => ({
    collections: selectCollections(ownProps.match.params.collectionId)(state)
  });
export default connect(mapStateToProps)(Collection);