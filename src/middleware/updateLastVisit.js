'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    const userId = req.body.userId;
    const room = req.body.room;
    console.log('room',room);
    app.service('users').get(userId).then(user=>{
      let visitedRooms = user.visitedRooms;
      if(visitedRooms){
        let rooms = visitedRooms.filter((item)=>{
          return item.roomId !== room._id;
        });
        rooms.push({
          roomId: room._id,
          name: room.name,
          roomImage: room.roomImage,
          lastVisitTime : new Date()
        });
        app.service('users').update(userId, {$set:{visitedRooms: rooms}},
          (response)=>{
            console.log('get response',response);
          });
      }
    })
    .catch(next);
  };
};
