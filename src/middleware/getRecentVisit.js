'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    console.log('get request in getRecentVisit',req.params);
    // console.log('hahahahahahahahaah',req);
    const userId = req.params.userId;
    app.service('users').get(userId)
    .then(user=>{
      let rooms = user.visitedRooms;
      rooms.reverse();
      return res.send(rooms);
    });
  };
};
