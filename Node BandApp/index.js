const express = require('express')
var session = require('express-session');

const app = express();


app.set("view engine", "hbs");
app.use(session({ secret: 'Rohit', saveUninitialized: true, resave: false }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes').route)

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), function () {
    console.log('server started at http://localhost:4000/');

})