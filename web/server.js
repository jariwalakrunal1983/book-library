var express = require('express');
var fs = require('fs');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/react', function (req, res) {
    app.use('/static', express.static(__dirname + '/build/react/static'));
    app.use('/favicon.ico', express.static(__dirname + '/build/react/favicon.ico'));
    app.use('/manifest.json', express.static(__dirname + '/build/react/manifest.json'));
    res.sendFile(__dirname + '/build/react/index.html');
});

app.get('/vue', function (req, res) {
    app.use('/js', express.static(__dirname + '/build/vue/js'));
    app.use('/css', express.static(__dirname + '/build/vue/css'));
    app.use('/favicon.ico', express.static(__dirname + '/build/vue/favicon.ico'));
    res.sendFile(__dirname + '/build/vue/index.html');
});

app.get('/angular', function (req, res) {
    app.use('/runtime.js', express.static(__dirname + '/build/angular/runtime.js'));
    app.use('/polyfills.js', express.static(__dirname + '/build/angular/polyfills.js'));
    app.use('/styles.css', express.static(__dirname + '/build/angular/styles.css'));
    app.use('/es2015-polyfills.js', express.static(__dirname + '/build/angular/es2015-polyfills.js'));
    app.use('/main.js', express.static(__dirname + '/build/angular/main.js'));
    app.use('/favicon.ico', express.static(__dirname + '/build/angular/favicon.ico'));
    res.sendFile(__dirname + '/build/angular/index.html');
});

app.get('/api/data', function (req, res, next) {
    process.nextTick(function() {
        fs.readFile(__dirname + '/data/books.json', 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            res.json(JSON.parse(data));
        });
    });
});

app.post('/api/save', function (req, res) {
    fs.writeFile(__dirname + '/data/books.json', JSON.stringify(req.body), 'utf8', function (err,data) {
        res.json({message:'Data saved successfully!'});
    });
});

app.listen(3000);
console.log('server is running on http://localhost:3000');