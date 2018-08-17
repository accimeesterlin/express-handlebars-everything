var express = require('express');
var app = express();
var log = console.log;
var exphbs = require('express-handlebars');

app.use(express.static('public'));

var hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: 'views/heart',
    partialsDir: 'views/pieces',

    // Create our custom helper
    helpers: {
        calculate: function(value) {
            return value * 5;
        },
        list: function(value, options) {
            var out = "<ul>";

            for (var i = 0; i < value.length; i++) {
                out = out + "<li>" + options.fn(value[i]) + "</li>";
            }

            return out + "</ul>";
        }
    }
});

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
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.render('index', {
        title: 'Home Page',
        esterling: 'about.css',
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
        esterling: 'home.css',
        isDisplayTitleEnabled: false
    });
});


app.get('/main', function(req, res) {

    res.render('home', {
        people: [
            'James',
            'Peter',
            'Sadrack',
            'Sabrina'
        ],
        user: {
            username: 'accimeesterlin',
            position: 'Software Engineer',
            location: 'Atlanta, GA',
        },
        university: [
            {
                students: ['Peter', 'Sadrack']
            },
            {
                students: ['Sabrina', 'James']
            }
        ],
        society: [
            {firstName: "Yehuda", lastName: "Katz"},
            {firstName: "Carl", lastName: "Lerche"},
            {firstName: "Alan", lastName: "Johnson"},
            {firstName: "Alan", lastName: "Johnson"},
            {firstName: "Alan", lastName: "Johnson"},
            {firstName: "Alan", lastName: "Johnson"},
            {firstName: "Alan", lastName: "Johnson"},
            
        ]
    });
});

app.listen(8080, function () {
    log('Server is starting at port ', 8080);
});