import React from 'react';
import {Link} from 'react-router'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class FunctionDrawer extends React.Component{
  constructor(props) {
  super(props);
  this.state = {open: false};
  this.handleToggle = this.handleToggle.bind(this);
  this.handleClose = this.handleClose.bind(this);
}

handleToggle = () => this.setState({open: !this.state.open});

handleClose = () => this.setState({open: false});

render() {
  return (
    <div>
      <RaisedButton
        label="Open Drawer"
        onTouchTap={this.handleToggle}
      />
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
      >
        <MenuItem onTouchTap={this.handleClose}>Ventas</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Clientes</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Articulos</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Configuracion</MenuItem>
      </Drawer>
    </div>
  );
}
}
