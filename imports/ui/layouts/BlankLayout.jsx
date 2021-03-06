import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class BlankLayout extends React.Component {
  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}