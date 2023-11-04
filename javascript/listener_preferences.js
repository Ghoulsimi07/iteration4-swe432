addEventListener("DOMContentLoaded",(Event) => {
    console.log("DOM fully loaded and prased;")
});

function updatePreferences() {
    let p4 = document.getElementById('Playlist4');
    for(var child=p4.firstChild; child!==null; child=child.nextSibling) {
        console.log('1');
        if (child.nodeName=='P') {
            console.log('A');
            child.innerText = radioPlaylist.playlist;
        }
        if (child.nodeName=='IMG') {
            console.log('B');
            child.setAttribute('alt',radioPlaylist.playlist);
        }

    }

    let g4 = document.getElementById('Genre4');
    for(var child=g4.firstChild; child!==null; child=child.nextSibling) {
        console.log(child);
        console.log('1');
        if (child.nodeName=='P') {
            console.log('A');
            child.innerText = radioGenre.genre;
        }
        if (child.nodeName=='IMG') {
            console.log('B');
            child.setAttribute('alt',radioGenre.genre);
        }
    }


    let d4 = document.getElementById('DJ4');
    for(var child=d4.firstChild; child!==null; child=child.nextSibling) {
        console.log(child);
        console.log('1');
        if (child.nodeName=='P') {
            console.log('A');
            child.innerText = radioDJ.dj;
        }
        if (child.nodeName=='IMG') {
            console.log('B');
            child.setAttribute('alt',radioDJ.dj);
        }
    }


    let s4 = document.getElementById('Language4');
    for(var child=s4.firstChild; child!==null; child=child.nextSibling) {
        console.log(child);
        console.log('1');
        if (child.nodeName=='P') {
            console.log('A');
            child.innerText = radioLanguage.language;
        }
        if (child.nodeName=='IMG') {
            console.log('B');
            child.setAttribute('alt',radioLanguage.language);
        }
    }


    window.open ('/listener_preferences_edit','_self',false)
}


let radioGenre = {
    type: "genre",
    img: "\\assets\\images\\albumArt.jpg",
    genre: 'Genre 5'
   };
let radioPlaylist = {
    type: "playlist",
    img: "\\assets\\images\\music.jpg",
    playlist: 'Playlist 5'
   };

let radioDJ = {
    type: "DJ",
    img: "\\assets\\images\\dj.jpg",
    dj: 'DJ 5'
   };

let radioLanguage = {
    type: "language",
    img: "\\assets\\images\\globe.jpg",
    language: 'Language 5'
   };