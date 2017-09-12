import React       from 'react'
import Navbar      from './Navbar.jsx'
import MessageList from './MessageList.jsx'
import Chatbar     from './Chatbar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: { name: "Bob" }, 
      messages: [
        {
          id      : 1,
          username: "Bob",
          content : "Has anyone seen my marbles?",
        },
        {
          id      : 2,
          username: "Anonymous",
          content : "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }

  addMessage(content) {
    const newMessage = {
      id      : Math.random(),
      username: this.state.currentUser.name,
      content : content
    }
    const messages = this.state.messages.concat(newMessage)
    this.setState(
      { messages: messages }
    )
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
