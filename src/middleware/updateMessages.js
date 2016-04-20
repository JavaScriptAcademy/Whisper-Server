'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    const body = req.body;
    const newMessage = {
      text:body.text,
      userId:body.userId,
      userNickname:body.userNickname,
      userProfileImage:body.userProfileImage
    }
    app.service('rooms').update(body.roomId, {$push:{messages: newMessage}}).then(data=>{
      console.log(data);
      return res.send(data);
    })
  .catch(next);

  };
};
