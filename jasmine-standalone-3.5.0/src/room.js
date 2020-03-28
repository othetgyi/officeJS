'use strict';

class Room {
  constructor() {
    this.available = true;
  };
  isAvailable(){
    return this.available;
  };
  enter(){
    if (this.isAvailable() === false){
      throw new Error ('This room is already occupied');
    } else {
      this.available = false;
    }
  };
  leave(){
    this.available = true;
  };

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
