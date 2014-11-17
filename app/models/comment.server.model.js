'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Comment Schema
 */
var CommentSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Comment name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	post: {
		type: Schema.ObjectId,
		ref: 'Post'
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Comment', CommentSchema);