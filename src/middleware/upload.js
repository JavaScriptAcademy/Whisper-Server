'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    console.log('req:',req.files);
    console.log('video:',req.video);

  };
};
