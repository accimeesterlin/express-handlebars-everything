var express = require('express');
var app = express();
var log = console.log;
var exphbs = require('express-handlebars');

/*
    Built Helper
    - each
    - with
    - log
    - lookup
    - unless
    - if

    @index
    @key
*/

// Partials

// Handlebars Configuration
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/heart',
    partialsDir: 'views/pieces'
}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.render('index', {
        title: 'Home Page',
        age: 5,
        address: {
            street: '8890 Navigate Roswell, GA',
            zipcode: 30076,
            city: 'Roswell'
        }
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        title: 'About Me',
        isDisplayTitleEnabled: false
    });
});

app.listen(8080, function () {
    log('Server is starting at port ', 8080);
});