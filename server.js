// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use("/css", express.static(__dirname + "/css"));
app.use("/assets", express.static(__dirname + "/assets"));
app.use("/javascript", express.static(__dirname + "/javascript"));


// index page 
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/listenerMain.ejs', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/listener_about', function(req, res) {
    res.render('pages/listener_about.ejs');
});

// main page
app.get('/listenerMain', function(req, res) {
    res.render('pages/listenerMain.ejs');
});

//explore page
app.get('/listener_explore', function(req, res) {
    res.render('pages/listener_explore.ejs');
});

//favorite pages
app.get('/listener_favorites', function(req, res) {
    res.render('pages/listener_favorites.ejs');
});

// help page
app.get('/listener_help', function(req, res) {
    res.render('pages/listener_help.ejs');
});

//library
app.get('/listener_library', function(req, res) {
    res.render('pages/listener_library.ejs');
});

//preferences
app.get('/listener_preferences', function(req, res) {
    res.render('pages/listener_preferences.ejs');
});

//preferences_edit
app.get('/listener_preferences_edit', function(req, res) {
    res.render('pages/listener_preferences_edit.ejs');
});

//profile
app.get('/listener_profile', function(req, res) {
    res.render('pages/listener_profile.ejs');
});

//timelines
app.get('/listener_timelines', function(req, res) {
    res.render('pages/listener_timelines.ejs');
});

//timelines
app.get('/listener_news', function(req, res) {
    res.render('pages/listener_news.ejs');
});

app.listen(8080);
console.log('8080 is the magic port');
