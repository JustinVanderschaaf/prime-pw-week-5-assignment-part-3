//function that makes an album_object and adds it to the collection array
//and returns the album_object
console.log("***** Music Collection *****");
let collection = [];
function addToCollection(title, artist, year, tracks) {
  let album = {
    title: title,
    artist: artist,
    year: year,
    tracks: tracks,
  };
  collection.push(album);
  return album;
}
console.log(
  addToCollection("born again", "artist1", 1999, [
    { name: "aaa", duration: "1:11" },
    { name: "bbb", duration: "2:22" },
    { name: "ccc", duration: "3:33" },
  ])
);
console.log(
  addToCollection("forever", "artist2", 1987, [
    { name: "aaa", duration: "1:11" },
    { name: "bbb", duration: "2:22" },
    { name: "ccc", duration: "3:33" },
  ])
);
console.log(
  addToCollection("space jump", "artist1", 1999, [
    { name: "aaa", duration: "1:11" },
    { name: "bbb", duration: "2:22" },
    { name: "ccc", duration: "3:33" },
  ])
);
console.log(
  addToCollection("torrent we live in", "artist3", 1999, [
    { name: "aaa", duration: "1:11" },
    { name: "bbb", duration: "2:22" },
    { name: "ccc", duration: "3:33" },
  ])
);
console.log(
  addToCollection("alabama summer", "artist1", 1947, [
    { name: "aaa", duration: "1:11" },
    { name: "bbb", duration: "2:22" },
    { name: "ccc", duration: "3:33" },
  ])
);
console.log(
  addToCollection("sanctioned", "artist2", 1988, [
    { name: "aaa", duration: "1:11" },
    { name: "bbb", duration: "2:22" },
    { name: "ccc", duration: "3:33" },
  ])
);
console.log(collection);
//End function that makes an album_object and adds it to the collection array
//and returns the album_object and tests
//start function to show collection title by artist published in year
function showCollection(array) {
  console.log(array.length);
  //loop through albums
  for (let i = 0; i < array.length; i++) {
    //get the current album in the loop
    let currentAlbum = array[i];
    console.log(
      `${array[i].title} by ${array[i].artist}, published in ${array[i].year}`
    );

    //loop through the album's tracks
    for (let j = 0; j < currentAlbum.tracks.length; j++) {
      let currentTrack = currentAlbum.tracks[j];
      if (currentTrack !== null) {
        console.log(currentTrack.name + ": " + currentTrack.duration);
      }
    }
  }
}
showCollection(collection);
//end function to show collection title by artist published in year
//start function to find album by artist and return them in array
function findArtist(artist) {
  let results = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      results.push(collection[i]);
    }
  }
  return { results };
}
console.log(findArtist("artist1"));
//end function to find album by artist and return them in array
//start function to search by artist and year
function search(artist, year) {
  let results = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist && collection[i].year === year) {
      results.push(collection[i]);
    }
    if (artist === undefined && year == undefined) {
      return { collection };
    }
  }
  return { results };
}
console.log(search("artist1", 1999));
console.log(search("Ray Charles", 1957));
console.log(search());
//end function to search by artist and year
