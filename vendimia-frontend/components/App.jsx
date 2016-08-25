import React from 'react'
import NavBar from './NavBar/navBar.jsx'

export default React.createClass({
  render() {
    return(
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    )
  }
})
