var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

var admin = require('firebase-admin')

var serviceAccount = require('./food-truck-a4956-firebase-adminsdk-xrc8j-ef2d8f59a2.json')

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://food-truck-a4956.firebaseio.com'
})

var database = firebaseAdmin.database()

var app = express()

// set up EJS
app.set('view engine', 'ejs')   //behind the scenes, requires ejs
// allows us to put css and images and stuff inside views folder
app.use(express.static('views'))
// tell app where to find views folder
app.set('views', __dirname + '/views')

app.use(logger('dev'))

app.get('/', function(request, response){
    response.render('home.ejs')
})

app.get('/about-us', function(request, response){
    response.render('about-us.ejs')
})

app.get('/menu', function(request, response){
    response.render('menu.ejs')
})

app.get('/order-online', function(request, response){
    response.render('order-online.ejs')
})

app.get('/contact-us', function(request, response){
    response.render('contact-us.ejs')
})

var port = process.env.PORT

app.listen(port, function(){
    console.log(`App running on port ${port} hamsters.`)
})