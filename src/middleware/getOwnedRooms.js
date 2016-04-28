'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    const userId = req.params.userId;
    app.service('rooms').find()
    .then((rooms)=>{

      let own = rooms.data.filter((room)=>{
        if(room.ownerId){
          return room.ownerId == userId;
        }
        return false;
      });

      return res.send(own);
    });
  };
};
