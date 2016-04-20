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
    type: String
  },
	profileImage: {
    type: String,
    trim: true
  },
	visitedRooms: [
  { roomId: String,
    name: String,
    roomImage: String,
    lastVisitTime: Date}
  ],
	createdAt: {
    type: Date,
    'default': Date.now
  },
  avatar:{
    type: String
  }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;