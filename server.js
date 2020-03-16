const express = require('express')
const app = express()
const cool = require('cool-ascii-faces')
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/cool', (req, res) => res.send(cool()))
app.get('/form', (req, res) => res.sendFile(path.join(__dirname+'/public/form.html')))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
