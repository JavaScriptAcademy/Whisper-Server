'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    const userId = req.body.userId;
    const roomId = req.body.roomId;
    app.service('users').get(userId).then(user=>{
      let visitedRooms = user.visitedRooms;
      if(visitedRooms){
        let rooms = visitedRooms.filter((item)=>{
          return item._id !== roomId;
        });
        rooms.push({
          _id: roomId,
          lastVisitTime : new Date()
        });
        app.service('users').update(userId, {$set:{visitedRooms: rooms}},
          (response)=>{
            console.log('response',response);
          });
      }
    })
    .catch(next);
  };
};
