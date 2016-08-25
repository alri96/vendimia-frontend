import React from 'react'
import NavLink from './navlin.jsx'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() { this.setState({open: !this.state.open}); }
  handleClose() { this.setState({open: false}); }



  render() {

    return(
      <div>
        <AppBar
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
          open={true}
          children={console.log(this.children)}
          zDepth={2}

          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }
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
    )
  }
}
