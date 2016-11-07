import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default class RenderedMenuItems extends React.Component{
  constructor(props) {
    super(props)
  }
  
  RenderAway = () => {
    console.log(this.props.Collections)
    this.props.Collections.map((collections) => {
      return <MenuItem>{collections.name}</MenuItem>
    })
  }
  
  MakeLink = (name) =>{
    link = name.replace(/\s+/g, '-')
    FlowRouter.go('/'+link)
  }
  
  render(){
    return(
      <div>
        {this.props.Collections.map((collections) => {
          return <MenuItem key={collections._id} onTouchTap={()=>{this.MakeLink(collections.name)}}>{collections.name}</MenuItem>
        })}
      </div>
    )
  }
}