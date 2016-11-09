import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default class RenderedMenuItems extends React.Component{
  constructor(props) {
    super(props)
  }

  
  render(){
    return(
      <div>
        {this.props.Collections.map((collections) => {
          return <MenuItem key={collections._id}>{collections.name}</MenuItem>
        })}
      </div>
    )
  }
}