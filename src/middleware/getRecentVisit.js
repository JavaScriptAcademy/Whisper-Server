'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    console.log('get request in getRecentVisit');
    console.log(req.params);
    const userId = req.params.userId;
    app.service('users').get(userId)
    .then(user=>{
      let rooms = user.visitedRooms;
      console.log('rooms',rooms);
      let roomList = [];
      rooms.forEach((room) => {
        app.service('rooms').get(room._id).then(roomObj => roomList.push(roomObj));
      })

      console.log('roomList',roomList);
      return roomList;
    });
  };
};
