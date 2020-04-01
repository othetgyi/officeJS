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
  availableRooms(){
    var emptyRooms = [];
    function isRoomAvailable() {
      if (room.isAvailable() === true) {

        return room;
      };
    var filteredRooms = this.rooms.filter(isRoomAvailable)
    };
  };

  // if room is available, push it into array emptryRooms
    
};
