// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },

    { title: "War of the Gods", artist: "Amon Amarth", genre: "Metal" },
    { title: "Feuer Frei!", artist: "Rammstein", genre: "Metal" },
    { title: "Black Fire Upon Us", artist: "Dethklok", genre: "Metal" },
    { title: "Dragula", artist: "Rob Zombie", genre: "Metal" },
    { title: "Let There Be Rock", artist: "AC/DC", genre: "Metal" },

    { title: "You Don't Know", artist: "Eminem", genre: "Rap" },
    { title: "In Da Club", artist: "50 Cent", genre: "Rap" },
    { title: "Thinkin of a Drive By", artist: "DVRST", genre: "Rap" },
    { title: "Kush ft. Snoop Dogg, Akon", artist: "Dr. Dre", genre: "Rap" },
    { title: "X Gon' Give It To Ya", artist: "DMX", genre: "Rap" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Metal",
    "Groot": "Rap",
    // Add preferences for Drax, Rocket, and Groot
};

const playlistDisplay = document.getElementById("playlists");

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {

    // Sort song list based on genre
    // and immediately create partial HTML
    // (Benefit of passing over song array ONCE)
    const genrePlaylists = {};
    songs.forEach( 
        (song) => {
            if (!genrePlaylists.hasOwnProperty(song.genre)){
                genrePlaylists[song.genre] = "";
            }
            genrePlaylists[song.genre] = 
                genrePlaylists[song.genre].concat(`<p class="song"><span class="song-title">${song.title}</span> by ${song.artist}</p>`);
        }
    );
    
    const songlistHTML = Object.entries(guardians).map(
        ([name, genre]) => {
            return `
            <div class="playlist">
                <h3>${name}'s Playlist</h3>
                ${ genrePlaylists[genre] }
            </div>`;
        }
    ).reduce((accumulator, currentValue) => accumulator + currentValue, "");

    playlistDisplay.innerHTML = songlistHTML;
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


