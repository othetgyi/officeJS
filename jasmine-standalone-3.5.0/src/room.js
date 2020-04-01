'use strict';

class Room {
  constructor(name) {
    this.available = true;
    this.name = name;
  };
  isAvailable(name){
    return this.available;
  };
  enter(name){
    if (this.isAvailable() === false){
      throw new Error ('This room is already occupied');
    } else {
      this.available = false;
    };
  };
  leave(name){
    this.available = true;
  };
  getRoomName(name){
    return name;
  };
};
