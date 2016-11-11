import React from 'react';
import MenuItem from 'material-ui/MenuItem';


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