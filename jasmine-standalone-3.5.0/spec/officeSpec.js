'use strict';

describe ('Office', function(){
  var room;
  var office;

  beforeEach(function(){
    room = new Room();
    office = new Office();
  });

  it('can add a meeting room', function(){
    office.addRoom('Elm');
    expect(office.listAll()).toEqual(['Elm']);
  });
});
