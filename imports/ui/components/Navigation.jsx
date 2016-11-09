import React from 'react';
import { Meteor } from 'meteor/meteor';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme.js';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RenderedMenuItemsContainer from '/imports/api/containers/RenderedMenuItemsContainer.jsx';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class Navigation extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {open: false, openModal: false, renderedText: "", blogInfo: {name: "null",description: "null",author: "null"}};
    Meteor.call('getBlogInfo', (err,res) => {
      this.setState({blogInfo: res})
      
    })
  }
  
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false})
  
  CreateNewCollection = () => {
    console.log(document.getElementById("description").value)
    name = document.getElementById("name").value
    urlRaw = document.getElemenyById("url").value
    description = document.getElementById("description").value
    
    url = urlRaw.replace(/\s+/g, "-").toLowerCase();
    Meteor.call('createNewCollection',name,description,url)
    this.setState({openModal:false})
  }
  
  GenerateText = () => {
    str = document.getElementById("url").value
    generated = str.replace(/\s+/g, "-").toLowerCase();
    this.setState({renderedText: generated})
  }
  
  render(){
    const navBannerStyles = {
      backgroundColor: lightBaseTheme.palette.primary2Color,
      padding: "5px",
      color: "#e0e0e0"
    }
    const fabBannerStyles = {
      position: "relative",
      float: "right",
      top: "-15px",
      zIndex: "2",
    }
    const actions = [
      <FlatButton label="Submit" primary={true} onTouchTap={this.CreateNewCollection}/>,
      <FlatButton label="Cancel" primary={false} onTouchTap={() => {this.setState({openModal:false})}}/>,
    ];
    return (
      <div>
        <AppBar
          title={this.state.blogInfo.name}
          onLeftIconButtonTouchTap={this.handleToggle}/>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <div className="navBanner" style={navBannerStyles}>
            <h2>{this.state.blogInfo.author}</h2>
            <p>{this.state.blogInfo.description}</p>
            <FloatingActionButton mini={true} style={fabBannerStyles} backgroundColor={lightBaseTheme.palette.accent1Color} onTouchTap={() => {this.setState({openModal: true})}}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
          <div>
            <RenderedMenuItemsContainer/>
          </div>
          <Dialog
            title="Create A New Collection"
            actions={actions}
            modal={true}
            open={this.state.openModal}>
              <TextField hintText="Name" id="name"/>
              <TextField hintText="/url" id="url" onKeyUp={this.GenerateText}/><p>{this.state.renderedText}</p>
              <TextField hintText="Description" multiLine={true} rows={2} rowsMax={2} id="description"/>
          </Dialog>
        </Drawer>
      </div>
    );
  }
}