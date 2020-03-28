'use strict';

class Room {
  constructor() {
    this.available = true;
  };
  isAvailable(){
    return this.available;
  };
  enter(){
    this.available = false;
  }

};


  // enter(){
  //   if (this.isRoomAavailable == true) {
  //     this.isRoomAvailable = false;
  //   } else {
  //     throw new Error ('This room is already occupied');
  //   }
  // }
  //
  // leave(){
  //   this.isRoomAvailable = true;
  // }
