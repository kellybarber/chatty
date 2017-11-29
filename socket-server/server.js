// server.js
const express      = require('express')
const WebSocket    = require('ws')
const uuid         = require('uuid/v4')
const id           = uuid()

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

  ws.on('message', (message) => {
    let receivedMessage = JSON.parse(message)
    receivedMessage.id  = id

    wss.broadcast(JSON.stringify(receivedMessage))
  })

  ws.on('close', () => console.log('Client disconnected'))
})
