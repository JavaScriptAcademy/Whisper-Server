'use strict';

// rooms-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomsSchema = new Schema({
  name: { type: String },
  roomImage: { type: String, trim: true },
  discription:{ type: String },
  topic: { type: String, required: 'topic is required'},
  owner: { type: String, required: 'room owner should be assigned'},
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'users',
  }],
  audios: [{
    creatorName : { type: String },
    createdTime: { type: Date, 'default': Date.now },
    length: { type: Number},
    voiceType:{ type: String}
  }],
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const roomsModel = mongoose.model('rooms', roomsSchema);

module.exports = roomsModel;