import React   from 'react'
import Message from './Message.jsx'

class MessageList extends React.Component {
  render() {
    const messages = this.props.messages.map(( message ) => {
      return <Message key={message.id} messages={message} />
    })
    return (
      <div>
        {messages}
      </div>
    )
  }
}
export default MessageList
