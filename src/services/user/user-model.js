'use strict';

// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {type: String, required: true, unique: true},
	password: { type: String, required: true },
	nickname: {type: String,  trim: true, required: false },
	profileImage: {type: String,  trim: true, required: false },
	visitedRooms: [{ _id: String, lastVisitTime: Date }],
	createdAt: { type: Date, 'default': Date },
	updatedAt: { type: Date, 'default': Date }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;