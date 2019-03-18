const express = require('express');
const bodyParser =require('body-parser')
const mc = require('./server/controllers/messages_controller')

const app = express()

app.use(bodyParser.json())
app.use(express.static( __dirname + '/../public/build'))

app.post('/api/messages', mc.create)
app.get('/api/messages', mc.get)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.message)


const port = 3001
app.listen(port, () => console.log(`${port} runners on the line`))