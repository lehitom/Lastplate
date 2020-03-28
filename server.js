const express = require('express')
const app = express()
const cool = require('cool-ascii-faces')
const PORT = process.env.PORT || 5000
const path = require('path')
const bodyParser = require("body-parser")
const session = require("express-session")

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: "secret word" }));
app.use(logRequest);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/public/test.html')))


//app.get('/', (req, res) => res.send('Hello World!'))
//app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/public/form2.html')))
//app.get('/form', (req, res) => res.sendFile(path.join(__dirname+'/public/form.html')))
//app.get('/getRestaurants', (req, res) => res.sendFile(path.join(__dirname+'/public/getRestaurants.php')))
//app.get('/find', findDeals)
//app.get('/find2', findDeals2)


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
