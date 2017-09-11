import React       from 'react'
import Navbar      from './Navbar.jsx'
import MessageList from './MessageList.jsx'
import Chatbar     from './Chatbar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: { name: "Bob" }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <MessageList />
        <Chatbar />
      </div>
    )
  }
}
export default App
