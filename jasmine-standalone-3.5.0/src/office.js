'use strict';

class Office {
  constructor(room){
    this.rooms = [];
  };
  listAll(){
    return this.rooms;
  };
  addRoom(room){
    this.rooms.push(room);
  };
};
