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

  it('becomes available again when someone leaves', function(){
    room.enter();
    room.leave();
    expect(room.isAvailable()).toBe(true);
  });

  it('blocks someone from entering the room when it is already occupied', function(){
    room.enter();
    expect(function(){
      room.enter();
    }).toThrowError('This room is already occupied');
  });

  it('can take a name', function(){
    var result = room.getRoomName('Elm');
    expect(result).toEqual('Elm');
  });

});

  // it('can accept a name for the room', function(){
  //   expect(room.getRoomName('Blue')).toEqual('Blue');
  // });
