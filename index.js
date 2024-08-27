// Array of song objects.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop", youtubeID: "bCHvzQnL8kQ" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock", youtubeID: "RPUAldgS7Sg" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop", youtubeID: "iiGY7zX7VqQ" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock", youtubeID: "W2msh0jut2Y" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock", youtubeID: "_EBvXpjudf8" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop", youtubeID: "FXG_I_tf_i4" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B", youtubeID: "ABfQuZqq8wg" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock", youtubeID: "BA4rSO-h9Io" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop", youtubeID: "STugQ0X1NoI" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock", youtubeID: "JmKfP6DzzuU" },

    { title: "War of the Gods", artist: "Amon Amarth", genre: "Metal", youtubeID: "FVAQQujgSxQ" },
    { title: "Feuer Frei!", artist: "Rammstein", genre: "Metal", youtubeID: "ZkW-K5RQdzo" },
    { title: "Black Fire Upon Us", artist: "Dethklok", genre: "Metal", youtubeID: "hANbfPkwJm8" },
    { title: "Dragula", artist: "Rob Zombie", genre: "Metal", youtubeID: "EqQuihD0hoI" },
    { title: "Let There Be Rock", artist: "AC/DC", genre: "Metal", youtubeID: "3f2g4RMfhS0" },

    { title: "You Don't Know", artist: "Eminem", genre: "Rap", youtubeID: "ngH0fkiNo-g" },
    { title: "In Da Club", artist: "50 Cent", genre: "Rap", youtubeID: "5qm8PH4xAss" },
    { title: "Thinkin of a Drive By", artist: "DVRST", genre: "Rap", youtubeID: "LiovUkBWOos" },
    { title: "Kush ft. Snoop Dogg, Akon", artist: "Dr. Dre", genre: "Rap", youtubeID: "BuJDaOVz2qY" },
    { title: "X Gon' Give It To Ya", artist: "DMX", genre: "Rap", youtubeID: "vkOJ9uNj9EY" },

    { title: "Pony", artist: "Ginuwine", genre: "R&B", youtubeID: "lbnoG2dsUk0" },
    { title: "My Girl", artist: "The Temptations", genre: "R&B", youtubeID: "y3KJ7d2qBoA" },
    { title: "Fantasy", artist: "Mariah Carey", genre: "R&B", youtubeID: "qq09UkPRdFY" },
    { title: "Stand By Me", artist: "Ben E. King", genre: "R&B", youtubeID: "eJ4i-QbXG54" },

    { title: "I'm a Believer", artist: "The Monkees", genre: "Pop", youtubeID: "4PQAqprjOuA" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Metal",
    "Groot": "Rap",
};

// Get reference to container
const playlistDisplay = document.getElementById("playlists");

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {

    // Sort song list based on genre
    // and immediately create partial HTML
    // (Benefit of passing over song array ONCE)
    const playlist = {};
    songs.forEach( 
        (song) => {
            if (!playlist.hasOwnProperty(song.genre)){
                playlist[song.genre] = { playlistHTML:"", songIDS:"" };
            }
            playlist[song.genre].playlistHTML = 
                playlist[song.genre].playlistHTML.concat(`<p class="song"><span class="song-title"><a target=”_blank” href="https://www.youtube.com/watch?v=${song.youtubeID}" >${song.title}</a></span> by ${song.artist}</p>`);
            
            playlist[song.genre].songIDS = playlist[song.genre].songIDS.concat(song.youtubeID, ",");
        }
    );
    
    // From "guardian" entries, match up genre to HTMLPlaylist, and inject values.
    // Create a single string of valid HTML from array returned by map().
    const songlistHTML = Object.entries(guardians).map(
        ([name, genre]) => {
            return `<div class="playlist">
                        <h3><a target=”_blank” href="https://www.youtube.com/watch_videos?video_ids=${ playlist[genre].songIDS }" >
                            ${name}'s Playlist
                        </a></h3>
                        ${ playlist[genre].playlistHTML }
                    </div>`;
        }
    ).reduce((accumulator, currentValue) => accumulator.concat(currentValue), "");    // Being fancy. Does the same thing as Array.join("") method in this case

    // Update Display
    playlistDisplay.innerHTML = songlistHTML;
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
