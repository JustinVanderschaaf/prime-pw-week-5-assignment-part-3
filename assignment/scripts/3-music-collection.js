//function that makes an album_object and adds it to the collection array
//and returns the album_object
console.log('***** Music Collection *****')
let collection = []
function addToCollection(title, artist, year) {
    let album={
        title:title,
        artist:artist,
        year:year
    }
    collection.push(album)
    return album
}
console.log(addToCollection("born again", "artist1", 1999));
console.log(addToCollection("forever", "artist2", 1987));
console.log(addToCollection("space jump", "artist1", 1999));
console.log(addToCollection("torrent we live in", "artist3", 1999));
console.log(addToCollection("alabama summer", "artist1", 1947));
console.log(addToCollection("sanctioned", "artist2", 1988));
console.log(collection);
//End function that makes an album_object and adds it to the collection array
//and returns the album_object and tests
 

