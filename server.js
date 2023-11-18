// load the things we need
var express = require('express');
var app = express();
const session = require('express-session');
// set the view engine to ejs
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');

// configure session middleware
app.use(session({
    secret: 'MySecretCode',
    saveUninitialized: true,
    resave: true,
    store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/test',
    autoRemove: 'interval',
    autoRemoveInterval: 10 // In minutes. Default
  })
}));

app.set('view engine', 'ejs');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("HI");

  const songSchema = new mongoose.Schema ({
    songID: Number,
    songName: String,
    songRating: Number,
    mainArtist:String,
    featuredArtists:[String],
    listProducers:[String],
    releaseYear:Date,
    album:String,
    genre:[String]
  });

  const Song = mongoose.model('Song',songSchema);

  const song1 = new Song({
    songID: 1,
    songName: 'White Dress',
    songRating: 7,
    mainArtist: 'Lana Del Ray',
    featuredArtists:[],
    listProducres:['Jack Antoff','Daisy Jones'],
    releaseYear:2020,
    album:'Chemtrails Over the Country Club',
    genre:['indie','alt-rock','blues']
  });

  const song2 = new Song({
    songID: 2,
    songName: 'Blood Sweat and Tears',
    songRating: 18,
    mainArtist: 'BTS',
    featuredArtists:[],
    listProducres:['Big Hit'],
    releaseYear:2018,
    album:'Wings',
    genre:['k-pop','pop']
  });

  const song3 = new Song({
    songID: 3,
    songName: 'Blinding Lights',
    songRating: 32,
    mainArtist: 'The Weeknd',
    featuredArtists:['Ariana Grande'],
    listProducres:['The Weeknd','Sofia Sofia'],
    releaseYear:2023,
    album:'Blinding Lights',
    genre:['indie','rock','pop']
  });


  const song4 = new Song({
    songID: 4,
    songName: 'Dreaming Blues',
    songRating: 4,
    mainArtist: 'Bob Bob',
    featuredArtists:['Charlie Day'],
    listProducres:['Jake Hello','Patricia'],
    releaseYear:1927,
    album:'Country Roads',
    genre:['classical','country','gospel']
  });


  const song5 = new Song({
    songID: 5,
    songName: 'Golden Hour',
    songRating: 1,
    mainArtist: 'HemmingWay',
    featuredArtists:['Denison'],
    listProducres:['Homebody'],
    releaseYear:1992,
    album:'The World is our Oyster',
    genre:['latin','hip-hop','classical']
  });


  const song6 = new Song({
    songID: 6,
    songName: 'Super Gold',
    songRating: 13,
    mainArtist: 'HemmingWay',
    featuredArtists:[],
    listProducres:['Niall','Harry','Louis'],
    releaseYear:1992,
    album:'The World is our Oyster',
    genre:['dubstep','rock','electronic']
  });

  await song1.save();
  await song2.save();
  await song3.save();
  await song4.save();
  await song5.save();
  await song6.save();


  const ProgramSchema = new mongoose.Schema({
    programID: Number,
    programName: String,
    leadProducer:String,
    assistantProducer:[String],
    time:[Date],
    playlistID:Number,
    assignedDJ:String,
    metrics:[Number] //likes first
  });

  const Program = mongoose.model('Program',ProgramSchema);

  const program1 = new Program({
    programID: 1,
    programName: 'JazzyHands',
    leadProducer:'Jazz',
    assistantProducer:['Jake',"Jeff","Jessie"],
    time:[new Date(2023, 11, 18, 23, 11,30)],
    assignedDJ:"Happy Feet",
    playlistID:1,
    metrics:[20]
  });

  await program1.save();
  const program2 = new Program({
    programID: 2,
    programName: 'Hi',
    leadProducer:'Mondie',
    assistantProducer:['Cool'],
    time:[new Date(2023, 11, 18, 11, 1,40)],
    assignedDJ:"Sunshine",
    playlistID:2,
    metrics:[10]
  });
  await program2.save();

  const program3 = new Program({
    programID: 3,
    programName: 'Treble',
    leadProducer:'Tira',
    assistantProducer:['Dwight'],
    time:[new Date(2023, 11, 19, 7, 5,28)],
    assignedDJ:"Misery",
    playlistID:3,
    metrics:[180]
  });
  await program3.save();

  const program4 = new Program({
    programID: 4,
    programName: 'International Beats',
    leadProducer:'Loki',
    assistantProducer:['Sylvie','Mobius'],
    time:[new Date(2023, 11, 20, 2, 5, 18)],
    assignedDJ:"TVA",
    playlistID:4,
    metrics:[18]
  });
  await program4.save();

  const program5 = new Program({
    programID: 5,
    programName: 'Realtor Rizz',
    leadProducer:'Stacy',
    assistantProducer:['Noli','Polly'],
    time:[new Date(2023, 11, 17, 4, 20,40)],
    playlistID:5,
    assignedDJ:"20Vision",
    playlistID:5,
    metrics:[1]
  });

  await program5.save();

  const ProducerSchema = new mongoose.Schema({
    userID:Number,
    username:String,
    password:String,
    avatarID:Number,
    playlists:[Number],
    programs:[Number],
    ongoingChat:[Number]
  });

  const Producer = mongoose.model('Producer',ProducerSchema);

  const producer1 = new Producer({
    userID:1,
    username:'prod1',
    password:'prod1P',
    avatarID:123,
    playlists:[1],
    programs:[1],
    ongoingChat:[1]
  });

  const producer2 = new Producer({
    userID:2,
    username:'prod2',
    password:'prod2P',
    avatarID:123,
    playlists:[2],
    programs:[2],
    ongoingChat:[2]
  });

  const producer3 = new Producer({
    userID:3,
    username:'prod3',
    password:'prod3P',
    avatarID:123,
    playlists:[3],
    programs:[3],
    ongoingChat:[3]
  });

  const producer4 = new Producer({
    userID:4,
    username:'prod4',
    password:'prod4P',
    avatarID:123,
    playlists:[4],
    programs:[4],
    ongoingChat:[4]
  });
  
  const producer5 = new Producer({
    userID:5,
    username:'prod5',
    password:'prod5P',
    avatarID:123,
    playlists:[5],
    programs:[5],
    ongoingChat:[5]
  });

  await producer1.save();
  await producer2.save();
  await producer3.save();
  await producer4.save();
  await producer5.save();

  const DJSchema = new mongoose.Schema({
    userID:Number,
    username:String,
    password:String,
    avatarID:Number,
    playlists:[Number],
    programs:[Number],
    ongoingChat:[Number],
  });

  const DJ = mongoose.model('DJ',DJSchema);

  const DJ1 = new DJ({
    userID:6,
    username:'DJ1',
    password:'DJ1P',
    avatarID:123,
    playlists:[1],
    programs:[1],
    ongoingChat:[1],
  });

  const DJ2 = new DJ({
    userID:7,
    username:'DJ2',
    password:'DJ2P',
    avatarID:123,
    playlists:[2],
    programs:[2],
    ongoingChat:[2],
  });

  const DJ3 = new DJ({
    userID:8,
    username:'DJ3',
    password:'DJ3P',
    avatarID:123,
    playlists:[3],
    programs:[3],
    ongoingChat:[3],
  });

  const DJ4 = new DJ({
    userID:9,
    username:'DJ4',
    password:'DJ4P',
    avatarID:123,
    playlists:[4],
    programs:[4],
    ongoingChat:[4],
  });

  const DJ5 = new DJ({
    userID:10,
    username:'DJ5',
    password:'DJ5P',
    avatarID:123,
    playlists:[5],
    programs:[5],
    ongoingChat:[5],
  });

  await DJ1.save();
  await DJ2.save();
  await DJ3.save();
  await DJ4.save();
  await DJ5.save();

  const SongAlbumSchema = new mongoose.Schema({
    albumID:Number,
    songs:[Number],
    artist:[String],
    description:String,
    releaseYear:Date,
    genre:[Number]
  });

  const SongAlbum = mongoose.model('SongAlbum',SongAlbumSchema);

  const SongAlbum1 = new SongAlbum({
    albumID:1,
    songs:[5,6],
    artist:["Hemmingway"],
    description:'The coolest song ever',
    releaseYear:1992,
    genre:['dubstep','rock','electronic','latin','hip-hop','classical']
  });

  const SongAlbum2 = new SongAlbum({
    albumID:2,
    songs:[1],
    artist:["Hemmingway"],
    description:'The coolest song ever',
    releaseYear:2020,
    genre:['dubstep','rock','electronic','latin','hip-hop','classical']
  });

  const SongAlbum3 = new SongAlbum({
    albumID:3,
    songs:[2],
    artist:["Hemmingway"],
    description:'The coolest song ever',
    releaseYear:2018,
    genre:['dubstep','rock','electronic','latin','hip-hop','classical']
  });

  const SongAlbum4 = new SongAlbum({
    albumID:4,
    songs:[3],
    artist:["Hemmingway"],
    description:'The coolest song ever',
    releaseYear:2023,
    genre:['dubstep','rock','electronic','latin','hip-hop','classical']
  });

  const SongAlbum5 = new SongAlbum({
    albumID:5,
    songs:[4],
    artist:["Hemmingway"],
    description:'The coolest song ever',
    releaseYear:1927,
    genre:['dubstep','rock','electronic','latin','hip-hop','classical']
  });

  const SongGenreSchema = new mongoose.Schema({
    genreID:Number,
    songs:[Number],
    description:String
  });

  const SongGenre = mongoose.model('SongGenre',SongGenreSchema);

  const PlaylistSchema = new mongoose.Schema({
    playlistID:Number,
    name:String,
    songs:[Number],
    programs:[Number]
  });

  const Playlist = mongoose.model('Playlist',PlaylistSchema);

  const Lyric = mongoose.model('Chat',LyricSchema);
}

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
