// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use("/css", express.static(__dirname + "/css"));
app.use("/assets", express.static(__dirname + "/assets"));

// index page 
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/listener_about', function(req, res) {
    res.render('pages/listener_about.ejs');
});

app.get('/listenerMain', function(req, res) {
    res.render('pages/listenerMain.ejs');
});

app.use("/cssListener", express.static(__dirname + "pages/css"));
app.use("/jsListener", express.static(__dirname + "pages/javascript"));

app.listen(8080);
console.log('8080 is the magic port');
