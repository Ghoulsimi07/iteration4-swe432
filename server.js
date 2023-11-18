// load the things we need
var express = require('express');
var app = express();
const session = require('express-session');
// set the view engine to ejs
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');

// configure session middleware
app.use(session({
    secret:'MySecretCode',
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
    name:String,
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
    name:"A",
    username:'DJ1',
    password:'DJ1P',
    avatarID:123,
    playlists:[1],
    programs:[1],
    ongoingChat:[1],
  });

  const DJ2 = new DJ({
    userID:7,
    name:"B",
    username:'DJ2',
    password:'DJ2P',
    avatarID:123,
    playlists:[2],
    programs:[2],
    ongoingChat:[2],
  });

  const DJ3 = new DJ({
    userID:8,
    name:"C",
    username:'DJ3',
    password:'DJ3P',
    avatarID:123,
    playlists:[3],
    programs:[3],
    ongoingChat:[3],
  });

  const DJ4 = new DJ({
    userID:9,
    name:"D",
    username:'DJ4',
    password:'DJ4P',
    avatarID:123,
    playlists:[4],
    programs:[4],
    ongoingChat:[4],
  });

  const DJ5 = new DJ({
    userID:10,
    name:'E',
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
    genre:[String]
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
    artist:["Chemtrails Over the Country Club"],
    description:'The pandemic idol',
    releaseYear:2020,
    genre:['indie','alt-rock','blues']
  });

  const SongAlbum3 = new SongAlbum({
    albumID:3,
    songs:[2],
    artist:["BTS"],
    description:'The artistic rendezvous',
    releaseYear:2018,
    genre:['k-pop','pop']
  });

  const SongAlbum4 = new SongAlbum({
    albumID:4,
    songs:[4],
    artist:["Bob Bob"],
    description:'An old tune',
    releaseYear:1927,
    genre:['classical','country','gospel']
  });

  const SongAlbum5 = new SongAlbum({
    albumID:5,
    songs:[3],
    artist:["The Weeknd"],
    description:'A R&B Hit',
    releaseYear:2023,
    genre:['indie','rock','pop']
  });

  await SongAlbum1.save();
  await SongAlbum2.save();
  await SongAlbum3.save();
  await SongAlbum4.save();
  await SongAlbum5.save();


  const GenreSchema = new mongoose.Schema({
    genreID:Number,
    description:String
  });

  const Genre = mongoose.model('Genre',GenreSchema);
  
  const genre7 = new Genre({
    genreID: 7, 
    description:'dubstep'
  });

  const genre9 = new Genre({
    genreID: 9, 
    description:'electronic'
  });

  const genre10 = new Genre({
    genreID: 10, 
    description:'latin'
  });

  const genre8 = new Genre({
    genreID: 8, 
    description:'hip-hop'
  });

  const genre1 = new Genre({
    genreID: 1, 
    description:'indie'
  });

  const genre2 = new Genre({
    genreID: 2, 
    description:'rock'
  });

  const genre3 = new Genre({
    genreID: 3, 
    description:'pop'
  });

  const genre4 = new Genre({
    genreID: 4, 
    description:'classical'
  });

  const genre5 = new Genre({
    genreID: 5, 
    description:'country'
  });

  const genre6 = new Genre({
    genreID: 6, 
    description:'gospel'
  });

  await genre1.save();
  await genre2.save();
  await genre3.save();
  await genre4.save();
  await genre5.save();
  await genre6.save();
  await genre7.save();
  await genre8.save();
  await genre9.save();
  await genre10.save();

  const SongGenreSchema = new mongoose.Schema({
    genreID:Number,
    songs:[Number]
  });

  const SongGenre = mongoose.model('SongGenre',SongGenreSchema);

  const SongGenre1 = new Genre({
    genreID: 1, 
    songs: [1,3]
  });

  const SongGenre2 = new Genre({
    genreID: 2, 
    songs: [3,6]
  });

  const SongGenre3 = new Genre({
    genreID: 3, 
    songs: [2,3]
  });

  const SongGenre4 = new Genre({
    genreID: 4, 
    songs: [4,5]
  });

  const SongGenre5 = new Genre({
    genreID: 5, 
    songs: [4]
  });

  const SongGenre6 = new Genre({
    genreID: 6, 
    songs: [4]
  });

  const SongGenre7 = new Genre({
    genreID: 7, 
    songs: [5]
  });

  const SongGenre8 = new Genre({
    genreID: 8, 
    songs: [5]
  });

  const SongGenre9 = new Genre({
    genreID: 9, 
    songs: [5]
  });

  const SongGenre10 = new Genre({
    genreID: 10, 
    songs: [5]
  });

  await SongGenre1.save();
  await SongGenre2.save();
  await SongGenre3.save();
  await SongGenre4.save();
  await SongGenre5.save();
  await SongGenre6.save();
  await SongGenre7.save();
  await SongGenre8.save();
  await SongGenre9.save();
  await SongGenre10.save();

  const PlaylistSchema = new mongoose.Schema({
    playlistID:Number,
    name:String,
    songs:[Number],
    programs:[Number]
  });

  const Playlist = mongoose.model('Playlist',PlaylistSchema);

  const Playlist1 = new Playlist({
    playlistID:1,
    name:"Jam Session",
    songs:[1,2,3,6],
    programs:[1,2]
  });

  const Playlist2 = new Playlist({
    playlistID:2,
    name:"Mixed Bag",
    songs:[4,2,6,1],
    programs:[2,3]
  });

  const Playlist3 = new Playlist({
    playlistID:3,
    name:'Tossed Plays',
    songs:[5,3,1,6],
    programs:[3,4]
  });

  const Playlist4 = new Playlist({
    playlistID:4,
    name:"Golden Age",
    songs:[3,4,5,2],
    programs:[5,4]});

    await Playlist1.save();
    await Playlist2.save();
    await Playlist3.save();
    await Playlist4.save();

    const LyricSchema = new mongoose.Schema({
        lyrics:[],
        songID:Number
    });

    const Lyric = mongoose.model('Lyric',LyricSchema);
    
    const Lyric1 = new Lyric({
        lyrics:['If there was a day that was near','I would be there too','Hold my memories in a sphere','Like I loved you'],
        songID:1
    });

    const Lyric2 = new Lyric({
        lyrics:['I eat think therefore I am','A tender soul','With chicken for wings'],
        songID:2
    });

    const Lyric3 = new Lyric({
        lyrics:[
            'I love my deepest memories','The other heart of my brain','does not know them at all'
        ],
        songID:3
    });

    const Lyric4 = new Lyric({
        lyrics:['I was watching youuuu','And you left me alone','Take me by the hand'],
        songID:4
    });

    const Lyric5 = new Lyric({
        lyrics:['Confess the lyrics of your heart','Do not lie to the angels','We watch in shadows'],
        songID:5
    });

    const Lyric6 = new Lyric({
        lyrics:['You can stand under my umbrella','Ella, ella, ella eh ey'],
        songID:6
    });

    await Lyric1.save();
    await Lyric2.save();
    await Lyric3.save();
    await Lyric4.save();
    await Lyric5.save();
    await Lyric6.save();

    const LanguageSchema = new mongoose.Schema({
        languageID:Number,
        language:String
    });
    const Language = mongoose.model('Language',LanguageSchema);

    const Language1 = new Language({
        langaugeID:1,
        language:'English'
    });

    const Language2 = new Language({
        langaugeID:2,
        language:'French'
    });

    const Language3 = new Language({
        langaugeID:3,
        language:'Spanish'
    });

    const Language4 = new Language({
        langaugeID:4,
        language:'Mandarin'
    });

    const Language5 = new Language({
        langaugeID:5,
        language:'Korean'
    });

    const Language6 = new Language({
        langaugeID:6,
        language:'Arabic'
    });

    const Language7 = new Language({
        langaugeID:7,
        language:'Tamil'
    });

    const Language8 = new Language({
        langaugeID:8,
        language:'Telegu'
    });

    await Language1.save();
    await Language2.save();
    await Language3.save();
    await Language4.save();
    await Language5.save();
    await Language6.save();
    await Language7.save();
    await Language8.save();

    const UserSchema = new mongoose.Schema({
        userID:Number,
        username:String,
        password:String,
        location:String,
        djPreference:[
            {djName:String,id:String,checked:Boolean}
        ],
        languagePreference:[
            {languageName:String,id:String,checked:Boolean}
        ],
        playlistPreference:[
            {playlistName:String,id:String,checked:Boolean}
        ],
        genrePreference:[   
            {genreName:String,id:String,checked:Boolean}
        ]
    });
    const User = mongoose.model('User',UserSchema);

    const user1 = new User({
        userID:11,
        username:'listener1',
        password:'listener1P',
        location:'VA',
        djPreference:[
            {djName:'A',id:"DJ_A",checked:true},
            {djName:'B',id:"DJ_B",checked:false},
            {djName:'C',id:"DJ_C",checked:false},
            {djName:'D',id:"DJ_D",checked:true},
            {djName:'E',id:"DJ_E",checked:true}
        ],
        languagePreference:[
            {languageName:"English",id:"L1",checked:true},
            {languageName:"French",id:"L2",checked:true},
            {languageName:"Spanish",id:"L3",checked:true},
            {languageName:"Mandarin",id:"L4",checked:true},
            {languageName:"Korean",id:"L5",checked:false},
            {languageName:"Arabic",id:"L6",checked:false},
            {languageName:"Tamil",id:"L7",checked:false},
            {languageName:"Telugu",id:"L8",checked:false}
        ],
        playlistPreference:[
            {playlistName:"Jam Session",id:"P1",checked:false},
            {playlistName:"Mixed Bag",id:"P2",checked:true},
            {playlistName:"Tossed Plays",id:"P3",checked:false},
            {playlistName:"Golden Age",id:"P4",checked:false}
        ],
        genrePreference:[   
            {genreName:'indie',id:"g1",checked:true},
            {genreName:"rock",id:"g2",checked:false},
            {genreName:"pop",id:"g3",checked:true},
            {genreName:"classical",id:"g4",checked:false},
            {genreName:"country",id:"g5",checked:true},
            {genreName:'gospel',id:"g6",checked:true},
            {genreName:'dubstep',id:"g7",checked:false},
            {genreName:'hip-hop',id:"g8",checked:false},
            {genreName:"electronic",id:"g9",checked:true},
            {genreName:"latin",id:"g10",checked:false}
        ]
    });

    await user1.save();

}

////////////////////////////////////////////////////////////////////////////////////////////////////
//Server Files

// use res.render to load up an ejs view file
app.use("/css", express.static(__dirname + "/css"));
app.use("/assets", express.static(__dirname + "/assets"));
app.use("/javascript", express.static(__dirname + "/javascript"));

// index page 
app.get('/', function(req, res) {
    req.session.userID=11;
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
