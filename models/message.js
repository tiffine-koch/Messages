'use strict';

var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  content: String,
  senderId: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  receiverId: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  createdAt: { type: Date, default: Date.now },
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
