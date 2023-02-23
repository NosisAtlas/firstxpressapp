const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.send('User New Form')
})

router.post('/', (req, res) => {
    res.send('create User')
})

router.get('/:id', (req, res) => {
    userId = req.params.id
    res.send(`User Get ${userId}`)
})

module.exports = router
