'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    const body = req.body;
    const member = {
      nickname: body.nickname
    }
    app.service('users').find(body.userId).then(data=>{
      console.log(data);
    })
    .catch(next);
  };
};
