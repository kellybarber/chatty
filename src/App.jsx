import React       from 'react'
import Navbar      from './Navbar.jsx'
import MessageList from './MessageList.jsx'
import Chatbar     from './Chatbar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: { name: "Bob" },
      messages: []
    }
  }

  componentDidMount() {
    const ws = new WebSocket('ws://localhost:3001')
    this.ws  = ws

    ws.onopen = (event) => {
      console.log('Connection Created')
    }

    ws.onmessage = (message) => {
      this.setState(
        { messages: this.state.messages.concat(JSON.parse(message.data)) }
      )
    }
  }

  addMessage(content) {
    const newMessage = {
      username: this.state.currentUser.name,
      content : content
    }
    this.ws.send(JSON.stringify(newMessage))
  }

  render() {
    return (
      <div>
        <Navbar />
        <MessageList
          messages={ this.state.messages }
        />
        <Chatbar
          name={ this.state.currentUser.name }
          addMessage={ this.addMessage.bind(this) }
        />
      </div>
    )
  }
}
export default App
