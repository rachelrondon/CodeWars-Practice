let decodeSong = (song) => {

  let newSong = song.split("WUB");

  let newString = ''

  for (let i = 0; i < newSong.length; i++) {
    newString += `${newSong[i]} `;
  }
  console.log(newString);
}

decodeSong("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// => WE ARE  THE CHAMPIONS MY FRIEND
