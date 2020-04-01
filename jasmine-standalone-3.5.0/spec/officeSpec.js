'use strict';

describe ('Office', function(){
  var room;
  var office;

  beforeEach(function(){
    room = new Room();
    office = new Office();
  });

  it('can add a meeting room', function(){
    var elm = new Room('Elm');
    console.log('*******');
    console.log(elm);
    console.log('*******');
    console.log('Elm');
    office.addRoom(elm);
    expect(office.listAll()).toEqual([elm]);
  });

  it('lists all the meeting rooms in the office', function(){
    office.addRoom('Elm');
    office.addRoom('Oak');
    office.addRoom('Poplar');
    expect(office.listAll()).toEqual(['Elm', 'Oak', 'Poplar']);
  });

  it('lists only available rooms', function(){
    var elm = new Room('Elm');
    var oak = new Room('Oak');
    var poplar = new Room('Poplar');
    office.addRoom(elm);
    office.addRoom(oak);
    office.addRoom(poplar);
    room.enter(poplar);
    console.log('*******');
    console.log(office);
    console.log('*******');
    console.log('*******');
    console.log(office.availableRooms());
    console.log('*******');
    expect(office.availableRooms()).toEqual([elm, oak]);
  });
});
