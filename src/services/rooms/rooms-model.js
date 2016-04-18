'use strict';

// rooms-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomsSchema = new Schema({
  name: {
    type: String,
    default: 'New Room',
    trim: true,
    required: 'Name cannot be blank'
  },
  roomImage: {
    type: String,
    default: ''
  },
  discription: {
    type: String,
    default: '',
    trim: true,
  },
  topic: {
    type: String,
    default: '',
    trim: true,
  },
  ownerId: {
    type: Schema.ObjectId,
    ref: 'user',
    trim: true,
    // required: 'Owner cannot be blank'
  },
  messages: {
    type: Array,
    default: [],
  },
  members: {
    type: Array,
    default: [],
  }

});

const roomsModel = mongoose.model('rooms', roomsSchema);

module.exports = roomsModel;