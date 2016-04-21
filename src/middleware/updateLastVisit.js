'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    const userId = req.body.userId;
    const room = req.body.room;
    console.log('room',room);
    app.service('users').get(userId).then(user=>{
      let visitedRooms = user.visitedRooms;
      let rooms;
      if(visitedRooms){
        let tempId = room.roomId;
        if(tempId){
          console.log('recent visit');
          rooms = visitedRooms.filter((item)=>{
            return item.roomId !== room.roomId;
          });
        }else{
          console.log('new room');
          tempId = room._id;
          rooms = visitedRooms.filter((item)=>{
            return item.roomId !== room._id;
          });
        }
        console.log('rooms before push',rooms);
        rooms.push({
          roomId: tempId,
          name: room.name,
          roomImage: room.roomImage,
          lastVisitTime : new Date()
        });
        console.log('rooms after push',rooms);

        app.service('users').update(userId, {$set:{visitedRooms: rooms}},
          (response)=>{
            console.log('get response',response);
          });
      }
    })
    .catch(next);
  };
};
