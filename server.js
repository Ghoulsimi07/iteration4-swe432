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
    
    var songs = [
        {artist:'TSwift',album:'Midnight',song:'Lavendar Haze'},
        {artist:'BTS',album:'Wings',song:'Blood, Sweat, and Tears'},
        {artist:'The Weeknd',album:'Blinding Lights',song:'Blinding Lights'},
        {artist:'Aurora',album:'Secret',song:'Runaway'}
    ];

    var lyrics = [
        {lyric:'I\'m on the run with you, my sweet love'},
        {lyric:'There\'s nothing wrong contemplating God'},
        {lyric:'Under the chemtrails over the country club'},
        {lyric:'Wearing our jewels in the swimming pool'},
        {lyric:'Me and my sister just playing it cool'},
        {lyric:'Under the chemtrails over the country club'},
        {lyric:'Take out your turquoise and all of your jewels'},
        {lyric:'Go to the market, the kids\' swimming pools'},
        {lyric:'Baby, what\'s your sign?'}
    ];

    var currentPlaying = [
        {album: "Chemtrails over the Country Club", song:'White Dress',artist:'Lana Del Rey'}
    ];
    
    var pastPlaylist1 = [{dj:'Hhi',producer:'Adele',genre1:'Rock',genre2:'Metal',genre3:'R&B',like:7}];
    var pastPlaylist2 = [{dj:'Bad',producer:'Rockstar',genre1:'Pop',genre2:'Electro',genre3:'Indie',like:3}];
    var pastPlaylist3 = [{dj:'Cake',producer:'Cup',genre1:'Gospel',genre2:'Country',genre3:'Classical',like:10}];
    var pastPlaylist4 = [{dj:'Jeremry',producer:'Jug',genre1:'Korean-Rock',genre2:"Latin-Mix",genre3:'Bollywood Hungama',like:15}];
    var pastPlaylist5 = [{dj:'Joe',producer:'Mama',genre1:'FrenchPop',genre2:"Lofi",genre3:'Movie Instrumentals',like:20}];
    

    res.render('pages/listenerMain.ejs', {
        songs:songs,
        currentPlaying:currentPlaying,
        lyrics:lyrics,
        pastPlaylist1:pastPlaylist1,
        pastPlaylist2:pastPlaylist2,
        pastPlaylist3:pastPlaylist3,
        pastPlaylist4:pastPlaylist4,
        pastPlaylist5:pastPlaylist5
    });

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
    var djs = [
        {djName: 'JD'},
        {djName: 'Lil Reep'},
        {djName: 'TA the Rizz'},
        {djName: 'Mason George'}
    ];

    var genre = [
        {genreName:'Gospel'},
        {genreName:'Country'},
        {genreName: 'Rap'},
        {genreName: 'Indie Pop'},
        {genreName: 'Alt Techno House'}
    ];

    var language = [
        {languageName:'English'},
        {languageName:'Korean'},
        {languageName:'Tamil'}
    ];

    var playlist = [
        {playlistName:'Something Cool'},
        {playlistName:'Ice Ice Fire'},
        {playlistName:'International Lofi'}
    ];


    res.render('pages/listener_preferences.ejs', {
        djs: djs,
        genre: genre,
        language: language,
        playlist:playlist
    });
});

//preferences_edit
app.get('/listener_preferences_edit', function(req, res) {
    var djs = [
        {djName: 'JD',checked:true,id:'dj1checkbox'},
        {djName: 'Lil Reep',checked:true,id:'dj2checkbox'},
        {djName: 'TA the Rizz',checked:true,id:'dj3checkbox'},
        {djName: 'Mason George',checked:true,id:'dj4checkbox'},
        {djName: 'Jimmy Woo',checked:false,id:'dj5checkbox'},
        {djName: 'Senorita Mendes',checked:false,id:'dj6checkbox'},
        {djName: 'T Swift',checked:false,id:'dj7checkbox'},
    ];
    
    var genre = [
        {genreName:'Gospel',checked:true,id:'genre1checkbox'},
        {genreName: 'CLassical',checked:false,id:'genre2checkbox'},
        {genreName:'Country',checked:true,id:'genre3checkbox'},
        {genreName: 'Rap',checked:true,id:'genre4checkbox'},
        {genreName: 'Indie Pop',checked:true,id:'genre5checkbox'},
        {genreName: 'CLassical',checked:false,id:'genre6checkbox'},
        {genreName: 'Rock',checked:false,id:'genre7checkbox'},
        {genreName: 'KPop',checked:false,id:'genre8checkbox'},
        {genreName: 'Dubstep',checked:false,id:'genre9checkbox'},
        {genreName: 'Lofi',checked:false,id:'genre10checkbox'},
        {genreName: 'Meditation Music',checked:false,id:'genre11checkbox'},
        {genreName: 'Heavy Metal',checked:false,id:'genre12checkbox'},
        {genreName: 'Pop',checked:false,id:'genre13checkbox'}

    ];

    var language = [
        {languageName:'English',checked:true,id:'language1checkbox'},
        {languageName:'Spanish',checked:false,id:'language2checkbox'},
        {languageName:'French',checked:false,id:'language3checkbox'},
        {languageName:'Chinese',checked:false,id:'language4checkbox'},
        {languageName:'Telegu',checked:false,id:'language5checkbox'},
        {languageName:'Korean',checked:true,id:'language6checkbox'},
        {languageName:'Tamil',checked:true,id:'language7checkbox'}
    ];

    var playlist = [
        {playlistName:'Something Cool',checked:true,id:'playlist1checkbox'},
        {playlistName:'House Vibes',checked:false,id:'playlist2checkbox'},
        {playlistName:'Monday Afternoon Playground',checked:false,id:'playlist3checkbox'},
        {playlistName:'Holy Moly',checked:false,id:'playlist4checkbox'},
        {playlistName:'Ice Ice Fire',checked:true,id:'playlist5checkbox'},
        {playlistName:'Anger Issues',checked:false,id:'playlist6checkbox'},
        {playlistName:'International Lofi',checked:true,id:'playlist7checkbox'}
    ];


    res.render('pages/listener_preferences_edit.ejs', {
        djs:djs,
        genre: genre,
        language: language,
        playlist:playlist
    });
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
