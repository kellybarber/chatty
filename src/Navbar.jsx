import React from 'react'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span className="users-counter">{this.props.users} users online</span>
      </nav>
    )
  }
}
export default Navbar
