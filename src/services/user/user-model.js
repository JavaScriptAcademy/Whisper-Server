'use strict';

// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
    type: String,
    required: true,
    unique: true
  },
	password: {
    type: String,
    required: 'Password should not be blank',
  },
	nickname: {
    type: String,
    trim: true
  },
	profileImage: {
    type: String,
    trim: true
  },
	visitedRooms: [
  { _id: String, lastVisitTime: Date }
  ],
	createdAt: {
    type: Date,
    'default': Date.now
  },
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;