var playlist = {artist: "song"};

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}
function removeFromPlaylist(playlist, artist) {
  var newPl = delete playlist.artist;
  return newPl;
}  