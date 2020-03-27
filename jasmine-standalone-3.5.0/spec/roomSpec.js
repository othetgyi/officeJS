'use strict';

describe('Room', function(){

  var room;

  beforeEach(function(){
    room = new Room();
  });

  it('starts out by being available', function(){
    expect(room.IsRoomAvailable).toEqual(true);
  });

  it('becomes unavailable when a person enters the room', function(){
    room.enter();
    expect(room.IsRoomAvailable).toEqual(false);
  });

  it('becomes available when a person leaves the room', function(){
    room.enter();
    room.leave();
    expect(room.isRoomAvailable).toEqual(true);
  });

  describe('#enter', function(){
    it('blocks someone entering the room when it is already occupied', function(){
      expect(function(){
        room.enter();
      }).toThrowError('This room is already occupied');
    });
  });
});


// describe("Player", function() {
//   var player;
//   var song;
//
//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });
//
//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);
//
//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });
//
//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });
//
//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();
//
//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });
//
//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });
//
//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');
//
//     player.play(song);
//     player.makeFavorite();
//
//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });
//
//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);
//
//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
