import React       from 'react'
import Navbar      from './Navbar.jsx'
import MessageList from './MessageList.jsx'
import Chatbar     from './Chatbar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser : "Anonymous",
      messages    : [],
    }
  }

  componentDidMount() {
    const ws = new WebSocket('ws://localhost:3001')
    this.ws  = ws

    ws.onopen = (event) => {
      console.log('Connection Created')
    }

    ws.onmessage = (message) => {
      const newMessage = JSON.parse(message.data)

      this.setState(
        { messages: this.state.messages.concat(newMessage) }
      )
    }
  }

  addName(username) {
    if (this.state.currentUser !== username) {
      const newNotification = {
        content: `${this.state.currentUser} has changed their name to ${username}`,
        type   : 'postNotification'
      }
      this.ws.send(JSON.stringify(newNotification))
      this.setState(
        { currentUser: username }
      )
    }
  }

  addMessage(content) {
    const newMessage = {
      username: this.state.currentUser,
      content : content,
      type    : 'postMessage'
    }
    this.ws.send(JSON.stringify(newMessage))
  }

  render() {
    return (
      <div>
        <Navbar />
        <MessageList
          messages={ this.state.messages }
          notification={ this.state.notification }
        />
        <Chatbar
          name={ this.state.currentUser }
          addMessage={ this.addMessage.bind(this) }
          addName={ this.addName.bind(this) }
        />
      </div>
    )
  }
}
export default App
