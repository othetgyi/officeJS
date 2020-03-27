'use strict';

class Room {
  constructor() {
    this.available = true;
  }

  isRoomAvailable() {
    return this.available;
  }

  enter(){
    if (this.isRoomAavailable == true) {
      this.isRoomAvailable = false;
    } else {
      throw new Error ('This room is already occupied');
    }
  }

  leave(){
    this.isRoomAvailable = true;
  }
}



// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
