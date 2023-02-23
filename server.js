const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('here')
    res.render('index', {text : 'world'})
    // res.download("server.js")
    // res.status(500).json({message:'error'})
})

const userRouter = require('./routes/users')

app.use('users', userRouter)

app.listen(3000)