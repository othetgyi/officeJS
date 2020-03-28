'use strict';

describe('Room', function(){

  var room;

  beforeEach(function(){
    room = new Room();
  });

  it('is available', function(){
    expect(room.isAvailable()).toBe(true);
  });

  it('becomes unavailable when someone enters', function(){
    room.enter();
    expect(room.isAvailable()).toBe(false);
  });
});







  // it('can accept a name for the room', function(){
  //   expect(room.getRoomName('Blue')).toEqual('Blue');
  // });

  // it('becomes unavailable when a person enters the room', function(){
  //   room.enter();
  //   expect(room.isRoomAvailable).toEqual(false);
  // });
  //
  // it('becomes available when a person leaves the room', function(){
  //   room.enter();
  //   room.leave();
  //   expect(room.isRoomAvailable).toEqual(true);
  // });

  // it('blocks someone from entering the room when it is already occupied', function(){
  //   expect(function(){
  //   room.enter();
  //   }).toThrowError('This room is already occupied');
  // });
// });
