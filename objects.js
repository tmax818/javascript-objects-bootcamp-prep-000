var playlist = {artist: "song"};

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}
function removeFromPlaylist(playlist, artist) {
  return delete playlist.artist;
}  