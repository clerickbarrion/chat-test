const express = require('express')
const socketIO = require('socket.io')

const app = express()

const io = socketIO(app.listen(3000))
app.use(express.static(__dirname))

io.on('connection', socket=>{
    console.log('user connected')
    socket.on('chat message', msg=>{
        io.emit('chat message', msg)
    })
    socket.on('disconnect',()=>{
        console.log('user disconnected')
    })
})
