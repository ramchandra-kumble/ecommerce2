import React, { useState } from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';
import Data from './directory.data';
import {createStructuredSelector} from 'reselect';
import  {selectDirectorySections} from '../../redux/directory/directory-selector';
function Directory({sections}){
    // const[section,setSection]=useState(Data)
    return <div className='directory-menu'> 
        {sections.map(({id,...otherSectionProps}) =>(<MenuItem key={id} {...otherSectionProps} />))}
    </div>
}
const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
});
export default connect(mapStateToProps)(Directory);

