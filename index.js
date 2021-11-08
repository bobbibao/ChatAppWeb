const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')

var port = Number(process.env.PORT || parner-chat.herokuapp.com);

        const io = new Server(server)


        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
        }) io.on('connection', (socket) => {
            console.log('user connected')
            socket.on('message-client-send', data => {
                console.log(data)
                io.emit('message-server-send', data)
            })

        }) server.listen(port, () => {
            console.log('connect finished')
        })