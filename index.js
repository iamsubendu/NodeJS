const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://root:somu7chotu8@cluster0.lhhzi.mongodb.net/test'

const app = express()

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true }).then(...)
const con = mongoose.connection
    con.on('open', () => {
    console.log('connected...')
    })

app.use(express.json())

const studentRouter = require('./routes/student')
app.use('/student',studentRouter)

app.listen(32, () => {
    console.log('Server started')
})