import React from 'react'

class Notification extends React.Component {
  render() {
    return (
      <div className="message system">{this.props.notification.content}</div>
    )
  }
}
export default Notification
