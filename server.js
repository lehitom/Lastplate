const express = require('express')
const app = express()
const cool = require('cool-ascii-faces')
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/cool', (req, res) => res.send(cool()))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
