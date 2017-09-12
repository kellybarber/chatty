import React from 'react'

class Message extends React.Component {
  render() {
    return (
      <main className="messages">
        <div className="message">
          <span className="message-username">{this.props.messages.username}</span>
          <span className="message-content">{this.props.messages.content}</span>
        </div>
        <div className="message system">
        </div>
      </main>
    )
  }
}
export default Message
