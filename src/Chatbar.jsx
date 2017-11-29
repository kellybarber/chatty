import React from 'react'

class Chatbar extends React.Component {
  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          defaultValue={ this.props.name }
          onBlur={ (event) => {
            this.props.addName(event.target.value)
          }}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={ (event) => {
            if (event.key === 'Enter') {
              this.props.addMessage(event.target.value)
              event.target.value = ''
            }
          }}
        />
      </footer>
    )
  }
}
export default Chatbar
