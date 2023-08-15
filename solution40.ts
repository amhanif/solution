interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional parameter
}

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

const album1 = make_album("Artist1", "Album Title 1");
const album2 = make_album("Artist2", "Album Title 2", 10); // With tracks count
const album3 = make_album("Artist3", "Album Title 3");

console.log(album1);
console.log(album2);
console.log(album3);
