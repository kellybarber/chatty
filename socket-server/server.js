const express      = require('express')
const WebSocket    = require('ws')
const uuid         = require('uuid/v4')

const PORT   = 3001
const server = express()
               .use(express.static('public'))
               .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`))

const wss = new WebSocket.Server({ server })

wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data)
    }
  })
}


wss.on('connection', (ws) => {
  console.log('Client connected')
  let users = {
    userCount: ws._socket.server._connections,
    type: 'counter'
  }
  wss.broadcast(JSON.stringify(users))

  ws.on('message', (message) => {
    let newMessage = JSON.parse(message)

    if (newMessage.type === 'postMessage') {
      newMessage.id   = uuid()
      newMessage.type = 'incomingMessage'
      wss.broadcast(JSON.stringify(newMessage))
    }

    if (newMessage.type === 'postNotification') {
      newMessage.id   = uuid()
      newMessage.type = 'incomingNotification'
      wss.broadcast(JSON.stringify(newMessage))
    }
  })

  ws.on('close', () => {
    console.log('Client disconnected')
    users.userCount -= 1
    wss.broadcast(JSON.stringify(users))
  })
})
