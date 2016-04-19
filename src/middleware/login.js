'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    console.log(req.body);
    app.service('users').find().then((data)=>{
      console.log(data);
      return res.send(data);
    })

    next();
  };

};
