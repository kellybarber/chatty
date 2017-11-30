import React        from 'react'
import Message      from './Message.jsx'
import Notification from './Notification.jsx'


class MessageList extends React.Component {
  render() {
    const messages = this.props.messages.map(( message ) => {
      if (message.type === 'incomingMessage') {
        return <Message key={message.id} messages={message} />
      }
      if (message.type === 'incomingNotification') {
        return <Notification notification={message} />
      }
    })

    return (
      <div>
        {messages}
      </div>
    )
  }
}
export default MessageList
